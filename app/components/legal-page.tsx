import Link from "next/link";

type LegalSection = {
  title: string;
  paragraphs: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

const businessDetails = [
  "Nombre legal: Streamplay Peru",
  "RUC: 20612101650",
  "Direccion: Jose Pardo De Zela 236, LINCE, LIMA 15046, Peru",
  "Telefono: +51961845278",
  "Sitio web: https://streamplay.pe/",
  "Correo de contacto: hola@streamplay.flor",
];

export function LegalPage({ eyebrow, title, intro, sections }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-background px-6 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-soft"
          >
            Volver al inicio
          </Link>
          <div className="flex flex-wrap gap-2 text-sm text-ink-soft">
            <Link
              href="/politica-de-privacidad"
              className="rounded-full border border-line bg-white px-4 py-2 transition-colors hover:bg-surface-soft"
            >
              Privacidad
            </Link>
            <Link
              href="/terminos-y-condiciones"
              className="rounded-full border border-line bg-white px-4 py-2 transition-colors hover:bg-surface-soft"
            >
              Terminos
            </Link>
            <Link
              href="/condiciones-del-servicio"
              className="rounded-full border border-line bg-white px-4 py-2 transition-colors hover:bg-surface-soft"
            >
              Servicio
            </Link>
          </div>
        </div>

        <section className="rounded-[2rem] border border-[#f1dde4] bg-white px-6 py-8 shadow-[0_20px_48px_rgba(219,184,196,0.08)] sm:px-8">
          <p className="text-sm uppercase tracking-[0.28em] text-ink-soft">
            {eyebrow}
          </p>
          <h1
            className="mt-4 text-4xl tracking-[-0.04em] text-foreground sm:text-5xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-ink-soft sm:text-lg">
            {intro}
          </p>
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-[2rem] border border-[#f1dde4] bg-white px-6 py-8 shadow-[0_20px_48px_rgba(219,184,196,0.08)] sm:px-8">
            <div className="space-y-8">
              {sections.map((section) => (
                <article key={section.title}>
                  <h2
                    className="text-3xl tracking-[-0.04em] text-foreground"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-base leading-8 text-ink-soft"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="rounded-[2rem] border border-[#f1dde4] bg-white px-6 py-8 shadow-[0_20px_48px_rgba(219,184,196,0.08)] sm:px-8">
            <p className="text-sm uppercase tracking-[0.28em] text-ink-soft">
              Datos del negocio
            </p>
            <h2
              className="mt-4 text-3xl tracking-[-0.04em] text-foreground"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Streamplay Peru
            </h2>
            <div className="mt-5 space-y-3">
              {businessDetails.map((item) => (
                <p key={item} className="text-sm leading-7 text-ink-soft">
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-8 rounded-[1.5rem] border border-line/70 bg-surface px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-soft">
                Vigencia
              </p>
              <p className="mt-2 text-sm leading-7 text-foreground">
                Estas condiciones y politicas rigen desde el 15 de abril de 2026
                y podran actualizarse para reflejar cambios operativos,
                comerciales o legales.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
