// Supabase Edge Function: interpret-test
// Chiama Anthropic API server-side (chiave mai esposta al client).
// Deploy: supabase functions deploy interpret-test
// Secret richiesto: supabase secrets set ANTHROPIC_API_KEY=sk-ant-...

import "jsr:@supabase/functions-js/edge-runtime.d.ts"

const ANTHROPIC_API_KEY = Deno.env.get("ANTHROPIC_API_KEY")
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
}

interface TestResult {
  movimento: string
  romGradi: number
  asimmetriaPercent: number | null
  confidence: string
  status: string
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: CORS_HEADERS })
  }

  try {
    const { distretto, results } = (await req.json()) as {
      distretto: string
      results: TestResult[]
    }

    if (!ANTHROPIC_API_KEY) {
      return new Response(JSON.stringify({ error: "ANTHROPIC_API_KEY non configurata" }), {
        status: 500,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      })
    }

    const datiFormattati = results
      .map(
        (r) =>
          `- ${r.movimento}: ${r.romGradi}° (asimmetria: ${r.asimmetriaPercent ?? "n/d"}%, qualità acquisizione: ${r.confidence}, stato: ${r.status})`
      )
      .join("\n")

    const systemPrompt = `Sei un assistente clinico che supporta un osteopata/fisioterapista nella lettura di dati oggettivi di range of motion (ROM) raccolti con sistema markerless (accuratezza paragonabile ma non equivalente a goniometria manuale).

Regole tassative:
- Non fornire MAI una diagnosi. Usa sempre linguaggio prudente: "limitazione funzionale", "dato da correlare con valutazione clinica diretta".
- Se la qualità di acquisizione è "bassa", segnala esplicitamente che il dato ha affidabilità ridotta e consiglia di ripetere il test.
- Tutte le metriche attuali hanno stato "experimental" (non ancora validate contro goniometro reale): dillo esplicitamente, non presentarle come dato clinico consolidato.
- Non esistono ancora fonti normative approvate nel registro. Se ti viene chiesto un confronto con valori di popolazione, rispondi che "nessun riferimento approvato è disponibile" invece di inventare soglie o percentili.
- Segnala asimmetrie superiori al 15-20% come meritevoli di attenzione clinica, senza attribuirne la causa.
- Massimo 150 parole, tono professionale e diretto, in italiano.`

    const userPrompt = `Distretto: ${distretto}\n\nRisultati test:\n${datiFormattati}\n\nFornisci una breve interpretazione clinica dei dati.`

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 400,
        system: systemPrompt,
        messages: [{ role: "user", content: userPrompt }],
      }),
    })

    const data = await response.json()
    const testo = data.content?.[0]?.text ?? "Interpretazione non disponibile."

    return new Response(
      JSON.stringify({
        testo,
        fonteNormativa: "Riferimenti generali di letteratura per popolazione adulta sana",
      }),
      { headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    )
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    })
  }
})
