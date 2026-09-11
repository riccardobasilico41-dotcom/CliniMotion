/** Inserisce uno o più blocchi di dati strutturati schema.org nella pagina. */
export function JsonLd({ data }: { data: object | object[] }) {
  const blocchi = Array.isArray(data) ? data : [data]
  return (
    <>
      {blocchi.map((blocco, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blocco) }}
        />
      ))}
    </>
  )
}
