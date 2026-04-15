const collection = [
  {
    name: "Ramo Nube",
    note: "Rosas mantequilla, lisianthus y follaje aireado en una envoltura limpia y elegante.",
    price: "Desde S/ 89",
    label: "Favorito",
    tone: "bg-rose/14",
    accent: "bg-rose",
  },
  {
    name: "Tulipanes de Bolsillo",
    note: "Un detalle fresco y fino para escritorios, citas y regalos de ultima hora.",
    price: "Desde S/ 96",
    label: "Entrega hoy",
    tone: "bg-peach/18",
    accent: "bg-peach",
  },
  {
    name: "Caja Bloom",
    note: "Flores cortas con lazo de cinta y una presencia suave, ordenada y muy regalable.",
    price: "Desde S/ 125",
    label: "Edicion cute",
    tone: "bg-sage/24",
    accent: "bg-sage",
  },
];

const promises = [
  "Entrega el mismo dia en zonas seleccionadas.",
  "Tarjeta escrita a mano en cada pedido.",
  "Presentacion cuidada desde el primer vistazo.",
];

const occasions = ["Cumpleanos", "Aniversarios", "Love Days", "Sorpresas", "Gracias"];

const details = [
  "Tonos crema, rosa y durazno.",
  "Diseno limpio con lazos y papel mate.",
  "Arreglos pequenos, medianos y de mesa.",
];

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 620 190"
      className={className}
      role="img"
      aria-label="Logo STREAMPLAY"
    >
      <g transform="translate(310 28)">
        <circle cx="0" cy="0" r="14" fill="#ff8eb0" />
        <circle cx="-22" cy="0" r="11" fill="#ffc78f" />
        <circle cx="22" cy="0" r="11" fill="#c8e4ca" />
        <circle cx="0" cy="-22" r="11" fill="#f9bfd2" />
        <circle cx="0" cy="22" r="11" fill="#ffd9b0" />
        <circle cx="0" cy="0" r="5" fill="#fff7f4" />
      </g>
      <text
        x="310"
        y="102"
        textAnchor="middle"
        fill="#2f2633"
        fontSize="48"
        letterSpacing="0.22em"
        style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}
      >
        STREAMPLAY
      </text>
      <text
        x="310"
        y="138"
        textAnchor="middle"
        fill="#8d7681"
        fontSize="15"
        letterSpacing="0.34em"
        style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontWeight: 500 }}
      >
        FLORISTERIA PERU
      </text>
      <path
        d="M162 156C208 172 412 172 458 156"
        fill="none"
        stroke="#e7bac9"
        strokeLinecap="round"
        strokeWidth="4"
      />
    </svg>
  );
}

function BouquetIllustration() {
  return (
    <svg
      viewBox="0 0 520 520"
      className="w-full drop-shadow-[0_30px_60px_rgba(180,96,128,0.14)]"
      role="img"
      aria-label="Ilustracion floral de STREAMPLAY"
    >
      <rect x="42" y="42" width="436" height="436" rx="36" fill="#fffdfb" />
      <rect x="42" y="42" width="436" height="436" rx="36" fill="none" stroke="#f1dde4" />
      <circle cx="148" cy="118" r="20" fill="#ffd9b0" />
      <circle cx="390" cy="128" r="16" fill="#ffc3d5" />
      <circle cx="108" cy="364" r="14" fill="#c8e4ca" />
      <path
        d="M256 144C216 199 180 252 167 322C199 349 230 365 258 374C286 365 318 349 350 322C336 252 300 199 256 144Z"
        fill="#fff1f5"
        stroke="#efcfda"
        strokeWidth="4"
      />
      <path d="M252 144C235 207 233 280 258 374" stroke="#b8cdb7" strokeLinecap="round" strokeWidth="5" />
      <path d="M228 178C221 222 210 272 194 324" stroke="#93bc98" strokeLinecap="round" strokeWidth="5" />
      <path d="M286 180C292 228 305 275 324 324" stroke="#93bc98" strokeLinecap="round" strokeWidth="5" />
      <path d="M170 230C198 221 211 204 222 178" fill="none" stroke="#93bc98" strokeLinecap="round" strokeWidth="5" />
      <path d="M342 227C317 218 302 201 290 177" fill="none" stroke="#93bc98" strokeLinecap="round" strokeWidth="5" />
      <path d="M240 244C225 230 214 227 197 228" fill="none" stroke="#93bc98" strokeLinecap="round" strokeWidth="5" />
      <path d="M276 249C291 234 304 229 321 229" fill="none" stroke="#93bc98" strokeLinecap="round" strokeWidth="5" />
      <Flower x={258} y={128} petal="#ff8eb0" center="#fffaf6" size={28} />
      <Flower x={206} y={170} petal="#ffd39d" center="#fffaf6" size={24} />
      <Flower x={314} y={170} petal="#c8e4ca" center="#fffaf6" size={24} />
      <Flower x={178} y={228} petal="#ffc3d5" center="#fffaf6" size={20} />
      <Flower x={342} y={228} petal="#ffd39d" center="#fffaf6" size={20} />
      <Flower x={224} y={240} petal="#c8e4ca" center="#fffaf6" size={18} />
      <Flower x={294} y={248} petal="#ff8eb0" center="#fffaf6" size={18} />
      <path d="M165 321C194 345 223 360 256 372C290 361 320 345 350 321" fill="none" stroke="#d9aabb" strokeLinecap="round" strokeWidth="4" />
      <path d="M182 394C214 420 304 420 336 394" fill="none" stroke="#ff8eb0" strokeLinecap="round" strokeWidth="10" />
      <path d="M210 388L257 444L304 388" fill="#f4d6e0" stroke="#efcfda" strokeLinejoin="round" strokeWidth="4" />
      <path d="M230 370C240 392 272 392 282 370" fill="none" stroke="#fff7f4" strokeLinecap="round" strokeWidth="6" />
    </svg>
  );
}

function Flower({
  x,
  y,
  petal,
  center,
  size,
}: {
  x: number;
  y: number;
  petal: string;
  center: string;
  size: number;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle cx="0" cy={-size} r={size * 0.55} fill={petal} />
      <circle cx={size} cy="0" r={size * 0.55} fill={petal} />
      <circle cx="0" cy={size} r={size * 0.55} fill={petal} />
      <circle cx={-size} cy="0" r={size * 0.55} fill={petal} />
      <circle cx={size * 0.72} cy={-size * 0.72} r={size * 0.48} fill={petal} />
      <circle cx={-size * 0.72} cy={-size * 0.72} r={size * 0.48} fill={petal} />
      <circle cx={size * 0.72} cy={size * 0.72} r={size * 0.48} fill={petal} />
      <circle cx={-size * 0.72} cy={size * 0.72} r={size * 0.48} fill={petal} />
      <circle cx="0" cy="0" r={size * 0.5} fill={center} />
    </g>
  );
}

function TinyFlowerIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden="true">
      <circle cx="20" cy="9" r="6" fill="#ff8eb0" />
      <circle cx="31" cy="20" r="6" fill="#ffd39d" />
      <circle cx="20" cy="31" r="6" fill="#c8e4ca" />
      <circle cx="9" cy="20" r="6" fill="#ffc3d5" />
      <circle cx="20" cy="20" r="5" fill="#fff7f4" />
    </svg>
  );
}

function BouquetPreview({ accent }: { accent: string }) {
  const fill =
    accent === "bg-peach" ? "#ffc78f" : accent === "bg-sage" ? "#c8e4ca" : "#ff8eb0";

  return (
    <svg viewBox="0 0 180 180" className="w-full" aria-hidden="true">
      <path d="M90 36C67 66 49 93 43 128C60 142 74 149 91 154C108 149 123 142 139 128C133 93 114 66 90 36Z" fill="#fff1f5" stroke="#efcfda" />
      <path d="M86 36C75 77 76 114 91 154" stroke="#95b999" strokeLinecap="round" strokeWidth="3" />
      <path d="M73 57C68 84 61 108 53 129" stroke="#95b999" strokeLinecap="round" strokeWidth="3" />
      <path d="M105 60C110 88 119 110 127 128" stroke="#95b999" strokeLinecap="round" strokeWidth="3" />
      <Flower x={92} y={28} petal={fill} center="#fffaf6" size={12} />
      <Flower x={62} y={59} petal="#ffd39d" center="#fffaf6" size={10} />
      <Flower x={122} y={61} petal="#ffc3d5" center="#fffaf6" size={10} />
      <path d="M54 129C66 141 77 147 91 153C104 147 115 141 127 129" fill="none" stroke="#d9aabb" strokeLinecap="round" strokeWidth="2.5" />
      <path d="M63 163C73 169 109 169 119 163" fill="none" stroke="#ff8eb0" strokeLinecap="round" strokeWidth="6" />
      <path d="M74 158L91 177L108 158" fill="#f4d6e0" stroke="#efcfda" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      <div className="border-b border-white/80 bg-white/72 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-3 text-sm text-ink-soft sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <p>Entrega en Lima, arreglos florales con presentacion cuidada.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="tel:+51961845278">+51961845278</a>
            <a href="https://streamplay.pe/" target="_blank" rel="noreferrer">
              streamplay.pe
            </a>
          </div>
        </div>
      </div>

      <svg
        viewBox="0 0 280 280"
        className="absolute left-[-5rem] top-28 hidden w-52 opacity-50 md:block"
        aria-hidden="true"
      >
        <circle cx="140" cy="140" r="120" fill="#fff1f5" />
        <path d="M140 56C149.941 56 158 47.9411 158 38C158 47.9411 166.059 56 176 56C166.059 56 158 64.0589 158 74C158 64.0589 149.941 56 140 56Z" fill="#ff8eb0" />
        <path d="M201 140C210.941 140 219 131.941 219 122C219 131.941 227.059 140 237 140C227.059 140 219 148.059 219 158C219 148.059 210.941 140 201 140Z" fill="#ffc78f" />
      </svg>

      <svg
        viewBox="0 0 320 320"
        className="absolute bottom-[-6rem] right-[-4rem] w-56 opacity-50 sm:w-72"
        aria-hidden="true"
      >
        <circle cx="160" cy="160" r="138" fill="#fff1f5" />
        <circle cx="160" cy="160" r="96" fill="#fffdfb" />
        <circle cx="160" cy="90" r="22" fill="#ff8eb0" />
        <circle cx="230" cy="160" r="22" fill="#ffd39d" />
        <circle cx="160" cy="230" r="22" fill="#c8e4ca" />
        <circle cx="90" cy="160" r="22" fill="#ffc3d5" />
        <circle cx="160" cy="160" r="20" fill="#fff7f4" />
      </svg>

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-10 pt-6 sm:px-8 lg:px-12">
        <header className="relative z-10 flex flex-col gap-6 border-b border-white/80 pb-6 lg:flex-row lg:items-center lg:justify-between">
          <Wordmark className="w-[240px] sm:w-[330px]" />
          <div className="flex flex-wrap gap-2 text-sm text-foreground">
            {occasions.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line bg-white/85 px-4 py-2 backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </header>

        <section className="relative z-10 grid items-center gap-14 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-line bg-white/88 px-4 py-2 text-sm text-ink-soft shadow-[0_12px_30px_rgba(255,142,176,0.06)] backdrop-blur">
              <TinyFlowerIcon />
              Ramos y detalles con estilo floral premium
            </div>

            <h1
              className="mt-8 text-5xl leading-none tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Flores que se ven delicadas,
              <br />
              elegantes y listas para regalar.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-ink-soft sm:text-xl">
              STREAMPLAY toma la ternura de una floristeria cute y la ordena en
              una experiencia mas fina: tonos suaves, composicion limpia y una
              presentacion pensada para impresionar sin verse recargada.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#coleccion"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                Ver arreglos destacados
              </a>
              <a
                href="#pedido"
                className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3 text-sm font-medium text-foreground transition-transform duration-200 hover:-translate-y-0.5"
              >
                Pedir por mensaje
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {promises.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-[#f1dde4] bg-white px-4 py-5 text-sm leading-6 text-foreground shadow-[0_16px_34px_rgba(221,190,201,0.1)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute inset-x-12 top-5 h-24 rounded-full bg-rose/18 blur-3xl" />
            <BouquetIllustration />
          </div>
        </section>

        <section className="relative z-10 rounded-[2rem] border border-[#f1dde4] bg-white px-6 py-7 shadow-[0_20px_48px_rgba(219,184,196,0.08)] sm:px-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-ink-soft">
                Coleccion destacada
              </p>
              <h2
                className="mt-3 text-4xl tracking-[-0.04em] text-foreground"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Arreglos florales con aire mas editorial.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-ink-soft">
              Inspirado en una presentacion mas premium, con tarjetas limpias,
              precios visibles y una seleccion corta para que el home se sienta
              mas comercial.
            </p>
          </div>
        </section>

        <section
          id="coleccion"
          className="relative z-10 grid gap-5 py-6 md:grid-cols-3"
        >
          {collection.map((item) => (
            <article
              key={item.name}
              className="overflow-hidden rounded-[2rem] border border-[#f1dde4] bg-white shadow-[0_20px_48px_rgba(219,184,196,0.1)]"
            >
              <div className={`h-52 border-b border-[#f5e7ec] ${item.tone}`}>
                <div className="flex h-full items-center justify-center">
                  <div className="w-40">
                    <BouquetPreview accent={item.accent} />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-surface-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                    {item.label}
                  </span>
                  <span className="text-sm font-medium text-ink-soft">
                    {item.price}
                  </span>
                </div>
                <h3
                  className="mt-4 text-3xl tracking-[-0.04em] text-foreground"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {item.name}
                </h3>
                <p className="mt-3 text-base leading-7 text-ink-soft">
                  {item.note}
                </p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <span className={`h-3 w-3 rounded-full ${item.accent}`} />
                    Presentacion premium
                  </div>
                  <a
                    href="#pedido"
                    className="rounded-full border border-line px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-soft"
                  >
                    Solicitar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="relative z-10 grid gap-5 py-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-[#f1dde4] bg-white p-7 shadow-[0_18px_42px_rgba(200,150,168,0.08)]">
            <span className="inline-flex rounded-full bg-surface-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-foreground">
              El lenguaje visual
            </span>
            <h2
              className="mt-4 text-4xl tracking-[-0.04em] text-foreground"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              STREAMPLAY ahora respira mas lujo suave.
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {details.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-line/70 bg-surface px-4 py-4 text-sm leading-6 text-ink-soft"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            id="pedido"
            className="rounded-[2rem] border border-[#f1dde4] bg-[#302730] p-7 text-white shadow-[0_22px_48px_rgba(68,48,61,0.16)]"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">
              Pedido rapido
            </p>
            <h2
              className="mt-4 text-4xl tracking-[-0.04em]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Ramos listos para regalar hoy.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/75">
              Pide por mensaje, elige el tono y nosotros armamos el detalle con
              tarjeta, lazo y presencia bonita desde el primer vistazo.
            </p>
            <a
              href="mailto:hola@streamplay.flor"
              className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              hola@streamplay.flor
            </a>
          </div>
        </section>

        <footer className="relative z-10 mt-8 rounded-[1.25rem] bg-[#241d24] px-6 py-8 text-white sm:px-7">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.28em] text-white/55">
                Informacion del negocio
              </p>
              <h2
                className="mt-3 text-3xl tracking-[-0.04em] text-white"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Streamplay Peru
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/72">
                Datos comerciales visibles en el footer para reforzar confianza y
                evitar observaciones por identificacion del negocio.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:min-w-[520px]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                  Direccion
                </p>
                <p className="mt-2 text-sm leading-6 text-white/82">
                  Jose Pardo De Zela 236
                  <br />
                  LINCE, LIMA 15046
                  <br />
                  Peru
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                  Telefono
                </p>
                <p className="mt-2 text-sm leading-6 text-white/82">
                  <a href="tel:+51961845278" className="hover:text-white">
                    +51961845278
                  </a>
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                  RUC
                </p>
                <p className="mt-2 text-sm leading-6 text-white/82">
                  20612101650
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                  Sitio web
                </p>
                <p className="mt-2 text-sm leading-6 text-white/82">
                  <a
                    href="https://streamplay.pe/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                  >
                    streamplay.pe
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/12 pt-6 text-sm text-white/72">
            <a
              href="/politica-de-privacidad"
              className="transition-colors hover:text-white"
            >
              Politica de Privacidad
            </a>
            <a
              href="/terminos-y-condiciones"
              className="transition-colors hover:text-white"
            >
              Terminos y Condiciones
            </a>
            <a
              href="/condiciones-del-servicio"
              className="transition-colors hover:text-white"
            >
              Condiciones del Servicio
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
