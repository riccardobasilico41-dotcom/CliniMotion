import { supabase } from '@/lib/supabaseClient'
import type { CervicalAnalysisResult } from '@/types/database'

export async function getAiInterpretation(
  distretto: string,
  results: CervicalAnalysisResult[]
): Promise<{ testo: string; fonteNormativa: string }> {
  const payload = results.map((r) => ({
    movimento: r.movimento,
    romGradi: r.romGradi,
    asimmetriaPercent: r.asimmetriaPercent,
    confidence: r.confidence,
    status: r.status,
  }))

  const { data, error } = await supabase.functions.invoke('interpret-test', {
    body: { distretto, results: payload },
  })

  if (error) throw error
  if (data?.error) throw new Error(data.error)

  return { testo: data.testo, fonteNormativa: data.fonteNormativa }
}
