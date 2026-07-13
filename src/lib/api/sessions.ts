import { supabase } from '@/lib/supabaseClient'
import type { CervicalAnalysisResult } from '@/types/database'

export async function getOrCreatePatient(nome: string): Promise<string> {
  const { data: existing, error: findErr } = await supabase
    .from('patients')
    .select('id')
    .eq('nome', nome)
    .limit(1)
    .maybeSingle()

  if (findErr) throw findErr
  if (existing) return existing.id

  const { data, error } = await supabase
    .from('patients')
    .insert({ nome })
    .select('id')
    .single()

  if (error) throw error
  return data.id
}

export async function createSession(patientId: string): Promise<string> {
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data, error } = await supabase
    .from('assessment_sessions')
    .insert({ patient_id: patientId, terapista_id: user?.id ?? null })
    .select('id')
    .single()

  if (error) throw error
  return data.id
}

export async function saveTestResults(
  sessionId: string,
  distretto: string,
  results: CervicalAnalysisResult[]
): Promise<string[]> {
  const rows = results.map((r) => ({
    session_id: sessionId,
    distretto,
    movimento: r.movimento,
    rom_gradi: r.romGradi,
    asimmetria_percent: r.asimmetriaPercent,
    confidence_score: r.confidenceScore,
    formula_version: r.formulaVersion,
    status: r.status,
  }))

  const { data, error } = await supabase.from('district_tests').insert(rows).select('id')
  if (error) throw error
  return data.map((d) => d.id)
}

export async function saveInterpretation(
  testId: string,
  testoAi: string,
  fonteNormativa: string
): Promise<void> {
  const { error } = await supabase.from('interpretations').insert({
    test_id: testId,
    testo_ai: testoAi,
    fonte_normativa: fonteNormativa,
  })
  if (error) throw error
}
