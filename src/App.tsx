import { useState } from "react";
import heroImg from "@/assets/hero-condominio.jpg";
import familiaImg from "@/assets/familia-condominio.jpg";
import gourmetImg from "@/assets/area-gourmet.jpg";
import aereoImg from "@/assets/condominio-aereo.jpg";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "5519987102796";
const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent(
    "Olá, gostaria de um atendimento personalizado para Casas em Condomínio"
  );

const LOGO = "https://i.ibb.co/9Hyz5vjG/roque-imoveis.png";

export default function App() {
  return (
    <>
      <a
        href="#contato"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded"
      >
        Pular para o formulário
      </a>
      <Header />
      <main role="main">
        <Hero />
        <Trust />
        <Problema />
        <Beneficios />
        <Diferenciais />
        <Galeria />
        <Como />
        <Objecoes />
        <Formulario />
        <FaixaVinho />
        <FAQ />
        <Faq2 />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsFloat />
    </>
  );
}

/* ---------- HEADER ---------- */
function Header() {
  return (
    <header
      role="banner"
      className="sticky top-0 z-40 backdrop-blur bg-background/85 border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-[16px] md:px-[24px] lg:px-[32px] h-[64px] flex items-center justify-between">
        
        {/* LOGO */}
        <a
          href="#topo"
          className="flex items-center gap-[8px]"
          aria-label="Roque Imóveis - Início"
        >
          <img
            src={LOGO}
            alt="Roque Imóveis"
            width={140}
            height={40}
            className="
              h-[28px]           /* MOBILE */
              md:h-[36px]        /* TABLET */
              lg:h-[40px]        /* DESKTOP */
              w-auto
            "
          />
        </a>

        {/* MENU DESKTOP */}
        <nav
          role="navigation"
          aria-label="Principal"
          className="
            hidden              /* MOBILE (escondido) */
            md:flex             /* DESKTOP (aparece) */
            items-center
            gap-[28px]
            text-[14px]         /* DESKTOP */
            font-medium
          "
        >
          <a href="#beneficios" className="hover:text-primary transition-colors">
            Benefícios
          </a>
          <a href="#galeria" className="hover:text-primary transition-colors">
            Imóveis
          </a>
          <a href="#como" className="hover:text-primary transition-colors">
            Como funciona
          </a>
          <a href="#faq" className="hover:text-primary transition-colors">
            FAQ
          </a>
        </nav>

        {/* BOTÃO WHATSAPP */}
        <a
  href={WHATSAPP_URL}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Falar agora pelo WhatsApp"
  className="
    relative overflow-hidden group
    bg-gradient-gold text-gold-foreground font-bold rounded-md shadow-gold transition-all duration-300

    /* MOBILE */
    px-[16px] py-[8px]
    text-[13px]

    /* DESKTOP */
    md:px-[20px] md:py-[10px]
    md:text-[14px]

    /* HOVER BASE */
    hover:-translate-y-[2px]
    hover:shadow-[0_8px_25px_rgba(212,114,65,0.35)]
  "
>
  {/* SHINE EFFECT */}
  <span
    className="
      absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
      bg-gradient-to-r from-transparent via-white/30 to-transparent
      translate-x-[-100%] group-hover:translate-x-[100%]
    "
  />

  {/* TEXTO */}
  <span className="relative z-10">
    Falar no WhatsApp
  </span>
</a>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="topo" className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="Casa moderna em condomínio fechado em Limeira ao entardecer"
        width={1600}
        height={1100}
        // @ts-expect-error fetchpriority
        fetchpriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />

      {/* CONTAINER */}
      <div
        className="
          mx-auto max-w-7xl
          
          /* PADDING LATERAL */
          px-[16px]            /* MOBILE */
          md:px-[24px]         /* TABLET */
          lg:px-[32px]         /* DESKTOP */

          /* PADDING VERTICAL */
          py-[96px]            /* MOBILE */
          md:py-[140px]        /* TABLET */
          lg:py-[180px]        /* DESKTOP */
        "
      >
        <div className="max-w-[640px] text-primary-foreground">
          
          {/* TAG */}
          <span
            className="
              inline-block bg-gold/95 text-gold-foreground font-bold uppercase rounded

              text-[11px]       /* MOBILE */
              md:text-[12px]    /* TABLET */
              lg:text-[13px]    /* DESKTOP */

              px-[10px] py-[6px]   /* MOBILE */
              md:px-[12px] md:py-[6px]
            "
          >
            Condomínios Fechados • Limeira
          </span>

          {/* HEADLINE */}
          <h1
            className="
              mt-[20px] font-black leading-[1.05]

              text-[32px]       /* MOBILE */
              md:text-[48px]    /* TABLET */
              lg:text-[60px]    /* DESKTOP */
            "
          >
            Segurança não é luxo.<br />
            É decisão da sua família.
          </h1>

          {/* SUBTEXTO */}
          <p
            className="
              mt-[20px] max-w-[520px] text-primary-foreground/90

              text-[15px]       /* MOBILE */
              md:text-[18px]    /* TABLET */
              lg:text-[20px]    /* DESKTOP */
            "
          >
            Casas em condomínio fechado em Limeira com curadoria da imobiliária mais tradicional da região. Atendimento personalizado, do tour à escritura.
          </p>

          {/* BOTÕES */}
          <div
  className="
    mt-[32px]
    flex flex-col sm:flex-row
    gap-[12px]
  "
>
  {/* BOTÃO PRINCIPAL */}
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="
      relative overflow-hidden group
      inline-flex items-center justify-center
      font-bold rounded-md transition-all duration-300

      bg-gradient-gold text-gold-foreground shadow-gold

      /* MOBILE */
      px-[24px] py-[16px]
      text-[15px]

      /* DESKTOP */
      md:px-[30px] md:py-[18px]
      md:text-[17px]

      /* HOVER */
      hover:-translate-y-[3px]
      hover:shadow-[0_10px_30px_rgba(212,114,65,0.45)]
    "
  >
    {/* SHINE */}
    <span
      className="
        absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
        bg-gradient-to-r from-transparent via-white/30 to-transparent
        translate-x-[-100%] group-hover:translate-x-[100%]
      "
    />

    <span className="relative z-10 flex items-center gap-[8px]">
      Quero ver casas disponíveis
      <span className="transition-transform group-hover:translate-x-[4px]">
        →
      </span>
    </span>
  </a>

  {/* BOTÃO SECUNDÁRIO */}
  <a
    href="#contato"
    className="
      relative overflow-hidden group
      inline-flex items-center justify-center
      font-semibold rounded-md transition-all duration-300

      border border-white/30 text-primary-foreground
      bg-white/5 backdrop-blur-sm

      /* MOBILE */
      px-[24px] py-[16px]
      text-[15px]

      /* DESKTOP */
      md:px-[30px] md:py-[18px]
      md:text-[17px]

      /* HOVER */
      hover:-translate-y-[2px]
      hover:bg-white hover:text-primary
      hover:border-white
      hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)]
    "
  >
    <span className="flex items-center gap-[8px]">
      Agendar visita personalizada
    </span>
  </a>
</div>

          {/* PROVAS SOCIAIS */}
          <ul
            className="
              mt-[40px]
              grid grid-cols-3
              gap-[16px]
              max-w-[420px]

              text-[12px]       /* MOBILE */
              md:text-[14px]    /* DESKTOP */
            "
          >
            {[
              ["+30", "anos de tradição"],
              ["+500", "famílias atendidas"],
              ["100%", "imóveis verificados"],
            ].map(([n, l]) => (
              <li key={l}>
                
                <div
                  className="
                    font-black text-gold

                    text-[22px]     /* MOBILE */
                    md:text-[28px]  /* TABLET */
                    lg:text-[32px]  /* DESKTOP */
                  "
                >
                  {n}
                </div>

                <div
                  className="
                    text-primary-foreground/80 leading-tight

                    text-[11px]     /* MOBILE */
                    md:text-[13px]  /* DESKTOP */
                  "
                >
                  {l}
                </div>

              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}

/* ---------- TRUST BAR ---------- */
function Trust() {
  return (
    <section
      aria-label="Condomínios atendidos"
      className="
        relative isolate overflow-hidden
        border-b border-border
      "
    >
      {/* FUNDO GRADIENTE */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 via-background to-primary/5" />

      {/* GLOW */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-gold/20 blur-[120px] opacity-40 -z-10" />

      <div
        className="
          mx-auto max-w-7xl

          px-[16px]
          md:px-[24px]
          lg:px-[32px]

          py-[24px]
          md:py-[28px]
          lg:py-[32px]

          flex flex-col items-center

          gap-[12px] md:gap-[16px]
        "
      >
        {/* TÍTULO */}
        <span
          className="
            font-semibold text-foreground text-center

            text-[13px]
            md:text-[14px]
          "
        >
          Atuamos nos principais condomínios de alto padrão:
        </span>

        {/* CHIPS */}
        <div className="flex flex-wrap justify-center gap-[8px] md:gap-[12px]">
  {[
    { nome: "Damha", destaque: true },
    { nome: "Colina de São João", destaque: true },
    { nome: "Estância das Flores", destaque: true },
    { nome: "Terras de Santa Cruz", destaque: true },
    { nome: "Portal dos Nobres", destaque: true },
  ].map((c) => (
    <span
      key={c.nome}
      className={`
        relative rounded-full font-medium transition-all duration-300

        /* MOBILE */
        px-[12px] py-[6px]
        text-[12px]

        /* DESKTOP */
        md:px-[16px] md:py-[8px]
        md:text-[14px]

        ${
          c.destaque
            ? `
              /* BASE (imagem 1) */
              bg-background
              text-[#7A1E3A]                 /* vinho */
              border border-[#7A1E3A]/40

              /* HOVER (imagem 2) */
              hover:bg-gradient-gold
              hover:text-gold-foreground
              hover:border-transparent
              hover:-translate-y-[2px]
              hover:shadow-[0_8px_24px_rgba(212,114,65,0.35)]
            `
            : `
              /* NORMAL */
              bg-white/5 backdrop-blur-md
              border border-white/10

              /* HOVER */
              hover:border-gold/60
              hover:text-primary
              hover:-translate-y-[2px]
              hover:shadow-[0_0_12px_rgba(212,114,65,0.25)]
            `
        }
      `}
    >
      {c.nome}
    </span>
  ))}
</div>
      </div>
    </section>
  );
}

/* ---------- PROBLEMA ---------- */
function Problema() {
  const dores = [
    {
      t: "Insegurança na rua",
      d: "O medo constante de sair de casa, deixar os filhos brincarem ou simplesmente respirar com tranquilidade.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"/>
        </svg>
      ),
    },
    {
      t: "Falta de espaço",
      d: "Apartamento apertado, filhos crescendo sem quintal.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M3 10l9-7 9 7"/>
          <path d="M5 10v10h14V10"/>
        </svg>
      ),
    },
    {
      t: "Imóveis sem curadoria",
      d: "Visitas furadas e anúncios desatualizados.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="11" cy="11" r="7"/>
          <path d="M21 21l-4.3-4.3"/>
          <path d="M8 8l6 6"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-b from-background to-muted/40 py-[80px] md:py-[110px] lg:py-[130px]">
      <div className="mx-auto max-w-7xl px-[16px] md:px-[24px] lg:px-[32px]">

        <div className="max-w-[640px]">
          <p className="text-gold font-bold uppercase tracking-widest text-[11px]">
            O problema
          </p>

          <h2 className="mt-[12px] font-black text-primary text-[28px] md:text-[40px] lg:text-[52px]">
            Você não está procurando casa. Está procurando paz.
          </h2>

          {/* SUBTEXTO */}
          <p
            className="
              mt-[16px] text-muted-foreground

              text-[16px]       /* MOBILE */
              md:text-[18px]    /* TABLET */
              lg:text-[20px]    /* DESKTOP */
            "
          >
            E paz não cabe em qualquer endereço. Veja o que pesa hoje na rotina de quem ainda não mudou para um condomínio fechado:
          </p>
        </div> 

        {/* CARDS */}
<div className="mt-[40px] grid md:grid-cols-3 gap-[16px] md:gap-[24px]">
  {dores.map((d) => ( 
    <article
      key={d.t}
      className="
        group relative overflow-hidden rounded-xl p-[24px]
        bg-white/60 backdrop-blur-md border-[#4A1F2B]/35 hover:border-[#4A1F2B]/80
        shadow-[0_8px_30px_rgba(0,0,0,0.06)]
        hover:-translate-y-[6px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
        transition
      "
    >
      {/* BRILHO AO PASSAR O MOUSE */}
      <div
        className="
          absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
          bg-gradient-to-r from-transparent via-white/30 to-transparent
          translate-x-[-100%] group-hover:translate-x-[100%]
        "
      />

      <div className="relative z-10">
        <div className="w-[48px] h-[48px] flex items-center justify-center rounded-xl border border-primary/20 text-primary bg-white/70">
          {d.icon}
        </div>

        <h3 className="mt-[16px] font-bold text-primary">
          {d.t}
        </h3>

        <p className="mt-[8px] text-muted-foreground text-[14px]">
          {d.d}
        </p>
      </div>
    </article>
  ))}
</div>
      </div>
    </section>
  );
}

/* ---------- BENEFÍCIOS ---------- */
function Beneficios() {
  const bens = [
    {
      t: "Segurança 24h",
      d: "Portaria e monitoramento constante para sua família viver com tranquilidade total.",
    },
    {
      t: "Lazer completo dentro de casa",
      d: "Piscina, churrasqueira e espaços para receber sem precisar sair.",
    },
    {
      t: "Liberdade para seus filhos",
      d: "Ruas seguras para brincar, andar de bicicleta e crescer com qualidade de vida.",
    },
    {
      t: "Localização estratégica",
      d: "Próximo às melhores escolas e com fácil acesso ao centro e Anhanguera.",
    },
    {
      t: "Alta valorização",
      d: "Imóveis em condomínio são os mais procurados e valorizados da região.",
    },
    {
      t: "Estilo de vida premium",
      d: "Vizinhança selecionada e infraestrutura que elevam seu padrão de vida.",
    },
  ];

  return (
    <section
  id="beneficios"
  className="
    relative isolate overflow-hidden
    bg-gradient-primary text-primary-foreground

    py-[80px]
    md:py-[110px]
    lg:py-[130px]
  "
>
  {/* LUZ SUAVE (igual CTA final) */}
  <div
    className="
      pointer-events-none absolute inset-0
      bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_50%)]
    "
  />

  {/* OVERLAY PARA PROFUNDIDADE */}
  <div
    className="
      pointer-events-none absolute inset-0
      bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.35))]
    "
  />

  <div
    className="
      relative z-10
      mx-auto max-w-7xl

      px-[16px]
      md:px-[24px]
      lg:px-[32px]

      grid
      grid-cols-1
      lg:grid-cols-2

      gap-[40px]
      md:gap-[56px]
      lg:gap-[80px]

      items-center
    "
  >

        {/* TEXTO */}
        <div>
          <p className="text-gold font-bold uppercase tracking-widest text-[11px] md:text-[12px]">
            A solução
          </p>

          <h2 className="mt-[12px] font-black text-white leading-tight text-[28px] md:text-[40px] lg:text-[52px]">
            Um lar onde sua família vive — não apenas mora.
          </h2>

          <ul className="mt-[28px] space-y-[16px]">
            {bens.map((b) => (
              <li key={b.t} className="flex gap-[12px] group">
                
                {/* ÍCONE */}
                <span
                  className="
                    flex-none flex items-center justify-center
                    rounded-full font-black transition-all duration-300

                    bg-gradient-gold text-gold-foreground

                    w-[24px] h-[24px]
                    md:w-[28px] md:h-[28px]

                    text-[13px]
                    md:text-[15px]

                    group-hover:scale-[1.1]
                  "
                >
                  ✓
                </span>

                {/* TEXTO */}
                <div>
                  <p className="font-semibold text-white text-[14px] md:text-[15px] lg:text-[16px]">
                    {b.t}
                  </p>

                  <p className="text-white/70 text-[13px] md:text-[14px] lg:text-[15px]">
                    {b.d}
                  </p>
                </div>

              </li>
            ))}
          </ul>

          {/* BOTÃO */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
  relative overflow-hidden group
  mt-[32px] inline-flex items-center justify-center
  font-bold rounded-md transition-all duration-300

  bg-gradient-gold text-gold-foreground shadow-gold

  px-[18px] py-[12px]
  text-[15px]

  md:px-[30px] md:py-[18px]
  md:text-[15px]

  hover:-translate-y-[3px]
  hover:shadow-[0_10px_30px_rgba(212,114,65,0.45)]
"
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%]" />

            <span className="relative z-10 flex items-center gap-[8px]">
              Quero conversar com um especialista
              <span className="transition-transform group-hover:translate-x-[4px]">→</span>
            </span>
          </a>
        </div>

        {/* IMAGEM PREMIUM */}
<div className="relative">

  {/* FUNDO DECORATIVO */}
<div
  className="
    absolute -inset-[10px] md:-inset-[20px]
    rounded-[18px] md:rounded-[24px]
    bg-gradient-gold
  "
/>

  {/* GLOW */}
  <div className="absolute -inset-[40px] 
    bg-gradient-to-br from-gold/20 via-transparent to-primary/20 
    blur-[80px] opacity-50 rounded-[30px]"
  />

  {/* CONTAINER DA IMAGEM */}
  <div className="relative rounded-[20px] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">

    <img
      src={familiaImg}
      alt="Família em condomínio"
      className="w-full object-cover"
    />

    {/* OVERLAY PROFUNDIDADE */}
    <div className="absolute inset-0 
      bg-gradient-to-t from-black/50 via-transparent to-transparent"
    />

    {/* LUZ SUPERIOR SUTIL */}
    <div className="absolute inset-0 
      bg-gradient-to-b from-white/10 via-transparent to-transparent"
    />

  </div>

  {/* CARD MELHORADO */}
  <div className="hidden md:block absolute bottom-[-20px] left-[-20px]
    bg-white/90 backdrop-blur-md border border-white/40 
    rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.25)]
    p-[20px] max-w-[240px]"
  >
    <div className="font-black text-primary text-[28px]">
      +30 anos
    </div>

    <p className="text-muted-foreground text-[14px] leading-[1.4]">
      ajudando famílias a encontrarem o lar ideal com segurança.
    </p>
  </div>

</div>
      </div>
    </section>
  );
}

/* ---------- DIFERENCIAIS ---------- */
function Diferenciais() {
  const items = [
    {
      n: "01",
      t: "Curadoria real",
      d: "Cada imóvel é vistoriado e validado antes de chegar até você. Nada de visitas frustradas.",
    },
    {
      n: "02",
      t: "Atendimento consultivo",
      d: "Você fala com especialistas que conhecem cada condomínio de Limeira por dentro.",
    },
    {
      n: "03",
      t: "Suporte do tour à escritura",
      d: "Documentação, financiamento, vistoria. Acompanhamos cada etapa para você não se perder.",
    },
    {
      n: "04",
      t: "Tradição que protege",
      d: "Mais de três décadas de mercado significam contratos seguros e negociações justas.",
    },
  ];

  return (
    <section
      className="
        py-[80px]           /* MOBILE */
        md:py-[110px]       /* TABLET */
        lg:py-[130px]       /* DESKTOP */
      "
    >
      <div
        className="
          mx-auto max-w-7xl

          /* PADDING */
          px-[16px]          /* MOBILE */
          md:px-[24px]       /* TABLET */
          lg:px-[32px]       /* DESKTOP */
        "
      >
        {/* HEADER */}
        <div className="max-w-[640px]">
          
          {/* LABEL */}
          <p
            className="
              text-gold font-bold uppercase tracking-widest

              text-[11px]      /* MOBILE */
              md:text-[12px]
            "
          >
            Por que Roque Imóveis
          </p>

          {/* HEADLINE */}
          <h2
            className="
              mt-[12px] font-black text-primary leading-tight

              text-[28px]       /* MOBILE */
              md:text-[40px]    /* TABLET */
              lg:text-[52px]    /* DESKTOP */
            "
          >
            A imobiliária que famílias de Limeira escolhem há 30 anos.
          </h2>
        </div>

        {/* CARDS */}
        <div
          className="
            mt-[40px]

            grid
            grid-cols-1        /* MOBILE */
            sm:grid-cols-2     /* TABLET */
            lg:grid-cols-4     /* DESKTOP */

            gap-[16px]         /* MOBILE */
            md:gap-[24px]
          "
        >
          {items.map((i) => (
            <article
              key={i.n}
              className="
                relative bg-card border border-border rounded-xl transition

                /* PADDING */
                p-[20px]        /* MOBILE */
                md:p-[28px]     /* DESKTOP */

                hover:border-primary
              "
            >
              {/* NÚMERO */}
              <div
                className="
                  font-black text-gold/80

                  text-[40px]      /* MOBILE */
                  md:text-[52px]   /* TABLET */
                  lg:text-[60px]   /* DESKTOP */
                "
              >
                {i.n}
              </div>

              {/* TÍTULO */}
              <h3
                className="
                  mt-[12px] font-bold text-primary

                  text-[16px]      /* MOBILE */
                  md:text-[18px]   /* DESKTOP */
                "
              >
                {i.t}
              </h3>

              {/* DESCRIÇÃO */}
              <p
                className="
                  mt-[8px] text-muted-foreground

                  text-[13px]      /* MOBILE */
                  md:text-[14px]   /* TABLET */
                  lg:text-[15px]   /* DESKTOP */
                "
              >
                {i.d}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- GALERIA ---------- */
function Galeria() {
  const cards = [
  {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    t: "Casa em Condomínio 2 Quartos 120m²",
    bairro: "Jardim Ouro Verde",
    cidade: "Limeira/SP",
    codigo: "66434",
    preco: "R$ 640.000",
    detalhes: ["2 Quartos", "1 Suíte", "2 Vagas", "120m²"],
    extras: ["Estuda Permuta", "Aceita Financiamento"],
  },
  {
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    t: "Casa moderna em condomínio",
    bairro: "Residencial Roland",
    cidade: "Limeira/SP",
    codigo: "66420",
    preco: "R$ 780.000",
    detalhes: ["3 Quartos", "1 Suíte", "2 Vagas", "140m²"],
    extras: ["Aceita Financiamento"],
  },
  {
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    t: "Casa com área gourmet",
    bairro: "Terras de São Bento",
    cidade: "Limeira/SP",
    codigo: "66398",
    preco: "R$ 920.000",
    detalhes: ["3 Quartos", "1 Suíte", "3 Vagas", "180m²"],
    extras: ["Estuda Permuta"],
  },
  {
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    t: "Casa térrea em condomínio",
    bairro: "Granja Machado",
    cidade: "Limeira/SP",
    codigo: "66380",
    preco: "R$ 590.000",
    detalhes: ["2 Quartos", "1 Suíte", "2 Vagas", "110m²"],
    extras: ["Aceita Financiamento"],
  },
  {
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    t: "Casa com piscina e lazer",
    bairro: "Parque Egisto Ragazzo",
    cidade: "Limeira/SP",
    codigo: "66355",
    preco: "R$ 1.150.000",
    detalhes: ["4 Quartos", "2 Suítes", "3 Vagas", "220m²"],
    extras: ["Estuda Permuta"],
  },
  {
    img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
    t: "Casa alto padrão",
    bairro: "Residencial Ilha de Bali",
    cidade: "Limeira/SP",
    codigo: "66310",
    preco: "R$ 1.300.000",
    detalhes: ["4 Quartos", "2 Suítes", "4 Vagas", "250m²"],
    extras: ["Aceita Financiamento"],
  },
];

  return (
    <section
      id="galeria"
      className="
        relative overflow-hidden

        bg-gradient-to-br
        from-[#2a0c12]
        via-[#3a1218]
        to-[#1a0508]

        text-white

        py-[80px]
        md:py-[110px]
        lg:py-[130px]
      "
    >
      <div className="mx-auto max-w-7xl px-[16px] md:px-[24px] lg:px-[32px]">

        {/* HEADER PADRÃO */}
        <div className="max-w-[640px]">
          <p className="text-gold font-bold uppercase tracking-widest text-[11px] md:text-[12px]">
            Imóveis em destaque
          </p>

          <h2 className="mt-[12px] font-black leading-tight text-[28px] md:text-[40px] lg:text-[52px]">
            Casas selecionadas para sua família viver melhor
          </h2>

          <p className="mt-[16px] text-white/80 text-[16px] md:text-[18px] lg:text-[20px]">
            Veja algumas oportunidades disponíveis agora em condomínios fechados em Limeira.
          </p>
        </div>

        {/* GRID 3x2 */}
        <div className="mt-[40px] grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[24px]">
          {cards.map((c) => {
            const mensagem = `Olá! Quero mais informações sobre o imóvel ${c.t} no ${c.bairro} (código ${c.codigo}).`;

            return (
              <article
                key={c.codigo}
                className="
                  bg-white text-black rounded-xl overflow-hidden
                  shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                  transition hover:-translate-y-[4px]
                "
              >
                {/* IMAGEM */}
                <img
                  src={c.img}
                  alt={c.t}
                  className="w-full h-[200px] object-cover"
                />

                {/* CONTEÚDO */}
                <div className="p-[16px]">
                  
                  <h3 className="font-bold text-[16px] leading-tight">
                    {c.t}
                  </h3>

                  <p className="text-[13px] text-gray-600 mt-[4px]">
                    {c.bairro} - {c.cidade}
                  </p>

                  <p className="text-[12px] text-gray-500 mt-[4px]">
                    Cód: {c.codigo}
                  </p>

                  {/* BADGES */}
                  <div className="flex flex-wrap gap-[6px] mt-[10px]">
                    {c.extras.map((e) => (
                      <span
                        key={e}
                        className="text-[11px] bg-[#f4e7d3] text-[#8a6a2f] px-[6px] py-[2px] rounded"
                      >
                        {e}
                      </span>
                    ))}
                  </div>

                  {/* DETALHES */}
                  <div className="grid grid-cols-2 gap-[6px] text-[12px] text-gray-700 mt-[12px]">
                    {c.detalhes.map((d) => (
                      <span key={d}>{d}</span>
                    ))}
                  </div>

                  {/* PREÇO + CTA */}
                  <div className="mt-[14px]">
  
  {/* PREÇO */}
  <span className="block font-bold text-[18px] text-primary">
    {c.preco}
  </span>

  {/* BOTÃO */}
  <a
    href={`${WHATSAPP_URL}?text=${encodeURIComponent(mensagem)}`}
    target="_blank"
    className="
      mt-[10px] inline-flex items-center justify-center w-full
      text-[13px] font-bold

      bg-gradient-gold text-gold-foreground
      px-[12px] py-[10px] rounded-md

      transition-all duration-300
      hover:-translate-y-[2px]
      hover:shadow-[0_8px_20px_rgba(212,114,65,0.35)]
    "
  >
    Tenho interesse →
  </a>

</div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA FINAL */}
        <div className="mt-[50px] flex justify-center">
          <a
            href={`${WHATSAPP_URL}?text=${encodeURIComponent("Olá! Quero ver o portfólio completo de casas em condomínio.")}`}
            target="_blank"
            className="
              relative overflow-hidden group
              inline-flex items-center gap-[8px]

              font-bold rounded-md transition-all duration-300

              bg-gradient-gold text-gold-foreground shadow-gold

              px-[26px] py-[16px]
              text-[15px]

              hover:-translate-y-[3px]
            "
          >
            Quero ver o portfólio correto
            <span className="transition-transform group-hover:translate-x-[4px]">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

/* ---------- COMO FUNCIONA (JORNADA PREMIUM) ---------- */
function Como() {
  const steps = [
    {
      n: "1",
      t: "Conte o que você procura",
      d: "Em uma conversa rápida pelo WhatsApp, entendemos perfil, orçamento e o estilo de vida da sua família.",
    },
    {
      n: "2",
      t: "Selecionamos as melhores opções",
      d: "Filtramos apenas imóveis que realmente fazem sentido para você — sem perda de tempo com visitas desnecessárias.",
    },
    {
      n: "3",
      t: "Você visita com um especialista",
      d: "Te acompanhamos em cada visita, explicando condomínio, segurança, estrutura e tudo que importa na decisão.",
    },
    {
      n: "4",
      t: "Compra com total segurança",
      d: "Cuidamos de toda documentação, análise e financiamento até a entrega da chave com tranquilidade total.",
    },
  ];

  return (
    <section id="como" className="py-[80px] md:py-[120px] lg:py-[140px] relative">
      
      {/* FUNDO DE IMPACTO */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-[16px] md:px-[24px] lg:px-[32px]">

        {/* HEADER */}
        <div className="max-w-[680px]">
          <p className="text-gold font-bold uppercase tracking-[0.2em] text-[11px] md:text-[12px]">
            Jornada do cliente
          </p>

          <h2 className="mt-[12px] font-black text-primary leading-tight text-[30px] md:text-[44px] lg:text-[56px]">
            Do primeiro contato até a chave na mão
          </h2>

          <p className="mt-[14px] text-muted-foreground text-[15px] md:text-[16px]">
            Um processo guiado, sem burocracia e pensado para você tomar a melhor decisão com segurança.
          </p>
        </div>

        {/* JORNADA */}
        <div className="relative mt-[70px]">

          {/* LINHA PRINCIPAL */}
          <div className="hidden lg:block absolute top-[38px] left-0 right-0 h-[3px] bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 rounded-full" />

          {/* PROGRESSO VISUAL (GLOW) */}
          <div className="hidden lg:block absolute top-[38px] left-0 w-1/2 h-[3px] bg-gradient-to-r from-primary via-gold to-primary rounded-full blur-[1px]" />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[26px] relative">

            {steps.map((s, i) => (
              <li key={s.n} className="relative">

                {/* CONECTOR VERTICAL MOBILE */}
                {i !== steps.length - 1 && (
                  <div className="lg:hidden absolute left-[20px] top-[60px] w-[2px] h-[90px] bg-primary/10" />
                )}

                <div className="group relative">

                  {/* CARD */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/30 bg-white/70 backdrop-blur-xl p-[22px] md:p-[26px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]">

                    {/* GLOW HOVER */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary/5 via-transparent to-gold/10" />

                    {/* NUMBER (MARCO DA JORNADA) */}
                    <div className="relative z-10 flex items-center gap-[14px]">

                      <div className="w-[44px] h-[44px] md:w-[52px] md:h-[52px] rounded-full bg-gradient-to-br from-primary to-primary/70 text-white font-black flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                        {s.n}
                      </div>

                      {/* PONTO VISUAL DA LINHA */}
                      <div className="hidden lg:block w-[10px] h-[10px] rounded-full bg-primary/40" />
                    </div>

                    {/* TEXTO */}
                    <h3 className="relative z-10 mt-[18px] font-bold text-primary text-[17px] md:text-[19px]">
                      {s.t}
                    </h3>

                    <p className="relative z-10 mt-[10px] text-muted-foreground text-[14px] md:text-[15px] leading-relaxed">
                      {s.d}
                    </p>

                    {/* MICRO INDICADOR DE PROGRESSO */}
                    <div className="relative z-10 mt-[16px] h-[3px] w-full bg-primary/5 rounded-full overflow-hidden">
                      <div className="h-full w-1/2 bg-gradient-to-r from-primary to-gold rounded-full" />
                    </div>

                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Objecoes() {
  const items = [
    {
      q: "“É muito longe da escola e do trabalho.”",
      a: "Os principais condomínios de Limeira ficam a poucos minutos do centro, das melhores escolas e da Anhanguera. Mostramos no mapa antes da sua visita.",
    },
    {
      q: "“Custo de condomínio e manutenção é alto.”",
      a: "Apresentamos o custo total real de cada imóvel — IPTU, condomínio e manutenção — para você comparar com transparência. Sem letras miúdas.",
    },
    {
      q: "“Vou conseguir vender depois?”",
      a: "Imóveis em condomínio fechado em Limeira têm alta liquidez e valorização consistente. Mostramos o histórico do bairro antes de você decidir.",
    },
  ];

  return (
    <section
  className="
    relative overflow-hidden

    py-[80px]
    md:py-[110px]
    lg:py-[130px]

    bg-gradient-gold
  "
>
      {/* leve profundidade (sem mudar cor base) */}
      <div className="pointer-events-none" />

      <div
        className="
          relative z-10
          mx-auto max-w-7xl
          px-[16px] md:px-[24px] lg:px-[32px]
        "
      >

        {/* HEADER */}
        <div className="max-w-[640px]">
          <p className="text-[#fff] font-bold uppercase tracking-widest text-[11px] md:text-[12px]">
            Sem rodeios
          </p>

          <h2 className="mt-[12px] font-black text-[#4A1F2B] leading-tight text-[28px] md:text-[40px] lg:text-[52px]">
            As dúvidas que travam a sua decisão — respondidas.
          </h2>
        </div>

        <div
  className="
    mt-[40px]

    grid
    grid-cols-1
    md:grid-cols-3

    gap-[18px]
    md:gap-[26px]
  "
>
  {items.map((i) => (
    <article
      key={i.q}
      className="
        group relative overflow-hidden
        rounded-2xl

        bg-white
        border border-black/5

        p-[22px]
        md:p-[28px]

        shadow-[0_6px_18px_rgba(0,0,0,0.06)]

        transition-all duration-500 ease-out

        hover:-translate-y-[4px]
        hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]
      "
    >
      {/* brilho sutil no hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white via-transparent to-[#C8A24A]/10" />

      {/* linha superior elegante 
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#4A1F2B]/80" />*/}

      {/* conteúdo */}
      <div className="relative z-10">
        {/* título */}
        <p className="font-semibold text-[#4A1F2B] text-[16px] md:text-[18px] leading-snug">
          {i.q}
        </p>

        {/* divisor sutil */}
        <div className="mt-[10px] w-[40px] h-[1px] bg-[#C8A24A]/60" />

        {/* texto */}
        <p className="mt-[12px] text-[#4A1F2B]/75 text-[14px] md:text-[15px] leading-[1.7]">
          {i.a}
        </p>
      </div>
    </article>
  ))}
</div>
      </div>
    </section>
  );
}

/* ---------- FORMULÁRIO ---------- */
function Formulario() {
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;

  const data = {
    nome: (form.nome as HTMLInputElement).value,
    email: (form.email as HTMLInputElement).value,
    whatsapp: (form.whatsapp as HTMLInputElement).value,
    mensagem: (form.mensagem as HTMLTextAreaElement)?.value || "",
  };

  try {
    await fetch("https://script.google.com/macros/s/AKfycbzm0-1b2cHZHAsX-UN5En4ISJvxB4f8-7EBBG5q2P5Q941VnOJmTyDpBa0GiQ0_7lxl_A/exec", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setSent(true);
    form.reset();

    // 🔥 OPCIONAL (RECOMENDADO)
    window.open(WHATSAPP_URL, "_blank");

  } catch (error) {
    console.error("Erro ao enviar:", error);
  }
};

  return (
    <section
      id="contato"
      className="
        py-[80px]           /* MOBILE */
        md:py-[110px]       /* TABLET */
        lg:py-[130px]       /* DESKTOP */
      "
    >
      <div
        className="
          mx-auto max-w-7xl

          /* PADDING */
          px-[16px]          /* MOBILE */
          md:px-[24px]       /* TABLET */
          lg:px-[32px]       /* DESKTOP */

          /* GRID */
          grid
          grid-cols-1        /* MOBILE */
          lg:grid-cols-2     /* DESKTOP */

          gap-[40px]         /* MOBILE */
          md:gap-[56px]
          lg:gap-[80px]

          items-start
        "
      >
        {/* TEXTO */}
        <div>
          <p
            className="
              text-gold font-bold uppercase tracking-widest

              text-[11px]      /* MOBILE */
              md:text-[12px]
            "
          >
            Atendimento personalizado
          </p>

          <h2
            className="
              mt-[12px] font-black text-primary leading-tight

              text-[28px]       /* MOBILE */
              md:text-[40px]    /* TABLET */
              lg:text-[52px]    /* DESKTOP */
            "
          >
            Receba uma seleção exclusiva de casas em condomínio.
          </h2>

          <p
            className="
              mt-[16px] text-muted-foreground

              text-[16px]       /* MOBILE */
              md:text-[18px]
              lg:text-[20px]
            "
          >
            Preencha seus dados e um especialista da Roque Imóveis entra em contato em até 1 dia útil com opções alinhadas ao seu perfil.
          </p>

          {/* LISTA */}
          <ul
            className="
              mt-[24px]
              space-y-[10px]

              text-[14px]      /* MOBILE */
              md:text-[15px]
              lg:text-[16px]

              text-foreground/90
            "
          >
            <li className="flex gap-[10px]">
              <span className="text-gold font-black">✓</span>
              Curadoria gratuita por especialistas
            </li>
            <li className="flex gap-[10px]">
              <span className="text-gold font-black">✓</span>
              Sem compromisso e sem cobrança
            </li>
            <li className="flex gap-[10px]">
              <span className="text-gold font-black">✓</span>
              Resposta rápida pelo WhatsApp
            </li>
          </ul>
        </div>

        {/* FORM CARD */}
        <div
          className="
            bg-card border border-border rounded-[16px] shadow-elegant

            p-[20px]        /* MOBILE */
            md:p-[28px]
            lg:p-[36px]
          "
        >
          {sent ? (
            <div
              className="
                text-center

                py-[24px]      /* MOBILE */
                md:py-[32px]
              "
            >
              <div
                className="
                  mx-auto flex items-center justify-center font-black
                  rounded-full bg-gradient-gold text-gold-foreground

                  w-[56px] h-[56px]     /* MOBILE */
                  md:w-[64px] md:h-[64px]

                  text-[24px]           /* MOBILE */
                  md:text-[28px]
                "
              >
                ✓
              </div>

              <h3
                className="
                  mt-[16px] font-bold text-primary

                  text-[20px]      /* MOBILE */
                  md:text-[24px]
                "
              >
                Recebemos seu contato!
              </h3>

              <p
                className="
                  mt-[8px] text-muted-foreground

                  text-[14px]      /* MOBILE */
                  md:text-[15px]
                "
              >
                Em breve um especialista da Roque Imóveis falará com você.
              </p>

              <a
  href={WHATSAPP_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="
    relative overflow-hidden group
    mt-[20px] inline-flex items-center justify-center
    font-bold rounded-md transition-all duration-300

    bg-gradient-gold text-gold-foreground shadow-gold

    px-[20px] py-[12px]
    text-[14px]

    md:px-[24px] md:py-[14px]
    md:text-[15px]

    hover:-translate-y-[3px]
    hover:shadow-[0_10px_30px_rgba(212,114,65,0.45)]
  "
>
  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%]" />

  <span className="relative z-10 flex items-center gap-[6px]">
    Falar agora no WhatsApp
    <span className="transition-transform group-hover:translate-x-[4px]">→</span>
  </span>
</a>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="space-y-[14px]"
              aria-label="Formulário de contato"
            >
              <Field label="Nome completo" id="nome" type="text" autoComplete="name" required />
              <Field label="E-mail" id="email" type="email" autoComplete="email" required />
              <Field label="WhatsApp" id="whatsapp" type="tel" autoComplete="tel" required pattern="[0-9\s\(\)\-\+]{10,}" />

              <div>
                <label
                  htmlFor="msg"
                  className="
                    block font-semibold text-foreground

                    text-[13px] mb-[6px]
                    md:text-[14px]
                  "
                >
                  Mensagem (opcional)
                </label>

                <textarea
                  id="msg"
                  name="mensagem"
                  rows={4}
                  className="
                    w-full rounded-md border border-input bg-background
                    focus:outline-none focus:ring-2 focus:ring-primary

                    px-[12px] py-[10px]

                    text-[14px]
                    md:text-[15px]
                  "
                  placeholder="Conte sobre o imóvel que você procura..."
                />
              </div>

              <button
  type="submit"
  className="
    relative overflow-hidden group
    w-full font-bold rounded-md transition-all duration-300

    bg-gradient-primary text-primary-foreground shadow-elegant

    py-[14px]
    text-[15px]

    md:py-[16px]
    md:text-[16px]

    /* HOVER */
    hover:-translate-y-[3px]
    hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
  "
>
  {/* SHINE */}
  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%]" />

  <span className="relative z-10 flex items-center justify-center gap-[6px]">
    Quero meu atendimento personalizado
    <span className="transition-transform group-hover:translate-x-[4px]">→</span>
  </span>
</button>

              <p
                className="
                  text-center text-muted-foreground

                  text-[11px]      /* MOBILE */
                  md:text-[12px]
                "
              >
                Seus dados estão seguros. Não compartilhamos com terceiros.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* INPUT */
function Field({
  label,
  id,
  ...rest
}: { label: string; id: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label
        htmlFor={id}
        className="
          block font-semibold text-foreground

          text-[13px] mb-[6px]
          md:text-[14px]
        "
      >
        {label}
      </label>

      <input
        id={id}
        name={id}
        {...rest}
        className="
          w-full rounded-md border border-input bg-background
          focus:outline-none focus:ring-2 focus:ring-primary

          px-[12px] py-[10px]

          text-[14px]
          md:text-[15px]
        "
      />
    </div>
  );
}

/* FAIXA ENTRE BLOCOS */
function FaixaVinho() {
  return (
    <div className="w-full h-[20px] md:h-[40px] lg:h-[60px]
    relative isolate overflow-hidden
    bg-gradient-primary text-primary-foreground
    shadow-[0_10px_40px_rgba(0,0,0,0.06)]"/>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    {
      q: "Em quais condomínios de Limeira vocês atuam?",
      a: "Atuamos nos principais condomínios fechados da cidade, como Damha, Colina de São João, Estância das Flores, Terras de Santa Cruz e outros. Conte seu perfil e indicamos o melhor para sua família.",
    },
    {
      q: "Vocês ajudam com financiamento?",
      a: "Sim. Nossa equipe acompanha o processo de financiamento do início ao fim, incluindo análise de crédito e indicação dos melhores bancos para o seu caso.",
    },
    {
      q: "Quanto tempo leva para encontrar uma casa?",
      a: "Depende do seu perfil, mas a maioria das famílias atendidas encontra o imóvel ideal em 30 a 60 dias após o primeiro contato.",
    },
    {
      q: "Posso visitar mais de um imóvel no mesmo dia?",
      a: "Sim. Organizamos roteiros de visita otimizados para você conhecer várias opções com conforto e tempo para avaliar.",
    },
    {
      q: "Vocês cobram alguma taxa do comprador?",
      a: "Não. O atendimento, a curadoria e o acompanhamento são totalmente gratuitos para o comprador.",
    },
  ];

  return (
    <section
      id="faq"
      className="
        relative overflow-hidden

        pt-[80px] pb-[55px]
        md:pt-[110px] md:pb-[70px]
        lg:pt-[130px] lg:pb-[80px]

        bg-gradient-gold
      "
    >

      <div
        className="
          relative z-10
          mx-auto max-w-[720px]
          px-[16px] md:px-[24px] lg:px-[32px]
        "
      >

        {/* HEADER */}
        <p className="text-[#fff] font-bold uppercase tracking-widest text-[11px] md:text-[12px]">
          FAQ
        </p>

        <h2 className="mt-[12px] font-black text-[#4A1F2B] leading-tight text-[28px] md:text-[40px] lg:text-[52px]">
          Perguntas frequentes.
        </h2>

        {/* ACCORDION */}
        <div className="mt-[28px] space-y-[12px]">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="
                group
                bg-white

                border border-[#4A1F2B]/50
                rounded-2xl

                p-[16px]
                md:p-[20px]

                shadow-[0_8px_25px_rgba(0,0,0,0.06)]

                transition-all duration-300

                [&[open]]:shadow-[0_18px_45px_rgba(0,0,0,0.12)]
              "
            >
              <summary
                className="
                  flex justify-between items-center
                  cursor-pointer list-none

                  font-semibold text-[#4A1F2B]

                  text-[14px]
                  md:text-[16px]
                "
              >
                <span>{f.q}</span>

                <span
                  className="
                    ml-[12px]
                    text-[#4A1F2B]
                    font-black text-[22px]

                    transition-transform duration-300
                    group-open:rotate-45
                  "
                >
                  +
                </span>
              </summary>

              <p
                className="
                  mt-[10px]
                  text-[#4A1F2B]/80

                  text-[13px]
                  md:text-[14px]
                  lg:text-[15px]

                  leading-[1.6]
                "
              >
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

{/* CTA BLOCO PÓS-FAQ */}
function Faq2() {
  return (
    <div className="mt-0">
      <div
  className="
    relative isolate overflow-hidden
    bg-[#fff] text-[#4A1F2B]

    p-[24px]
    md:p-[32px]

    text-center
    shadow-[0_20px_60px_rgba(0,0,0,0.08)]
  "
>
  {/* brilho sutil no fundo */}
<div className="absolute inset-0 pointer-events-none">
  <div className="absolute inset-0 bg-gradient-to-br from-[#4A1F2B]/5 via-white to-[#C8A24A]/10" />

  <div className="absolute -top-[60px] left-[20%] w-[220px] h-[220px] rounded-full bg-[#C8A24A]/20 blur-[70px]" />

  <div className="absolute -bottom-[80px] right-[18%] w-[260px] h-[260px] rounded-full bg-[#4A1F2B]/10 blur-[80px]" />
</div>

  {/* TEXTO */}
  <h3 className="relative z-10 text-[#4A1F2B] font-black text-[18px] md:text-[22px]">
    Ainda tem dúvidas sobre o imóvel ideal?
  </h3>

  <p className="relative z-10 mt-[8px] text-[#4A1F2B]/80 text-[14px] md:text-[15px]">
    Fale agora com um especialista e receba orientação personalizada sem compromisso.
  </p>

    {/* BOTÃO */}
    <a
      href={`${WHATSAPP_URL}?text=${encodeURIComponent("Ainda estou com dúvida")}`}
      target="_blank"
      className="
        relative z-10 mt-[16px]
        inline-flex items-center justify-center

        w-full md:w-auto

        text-[14px] md:text-[15px]
        font-bold

        bg-gradient-gold text-[#4A1F2B]
        px-[20px] py-[12px]
        rounded-md

        transition-all duration-300

        hover:-translate-y-[3px]
        hover:shadow-[0_10px_30px_rgba(212,114,65,0.45)]
      "
    >
      Ainda estou com dúvida →
    </a>

  </div>
</div>
  );
}

/* ---------- CTA FINAL ---------- */
function CTAFinal() {
  return (
    <section
      className="
        relative isolate overflow-hidden
        bg-gradient-primary text-primary-foreground
      "
    >
      <div
        className="
          mx-auto max-w-[800px]

          /* PADDING */
          px-[16px]          /* MOBILE */
          md:px-[24px]
          lg:px-[32px]

          py-[80px]          /* MOBILE */
          md:py-[110px]
          lg:py-[130px]

          text-center
        "
      >
        {/* LABEL */}
        <p
          className="
            text-gold font-bold uppercase tracking-widest

            text-[11px]      /* MOBILE */
            md:text-[12px]
          "
        >
          Última chamada
        </p>

        {/* HEADLINE */}
        <h2
          className="
            mt-[12px] font-black leading-tight

            text-[30px]       /* MOBILE */
            md:text-[44px]    /* TABLET */
            lg:text-[56px]    /* DESKTOP */
          "
        >
          O endereço certo da sua família está esperando.
        </h2>

        {/* TEXTO */}
        <p
          className="
            mt-[16px] text-primary-foreground/90 mx-auto

            max-w-[560px]

            text-[16px]       /* MOBILE */
            md:text-[18px]
            lg:text-[20px]
          "
        >
          As melhores casas em condomínio de Limeira saem rápido. Fale agora com um especialista da Roque Imóveis e receba opções selecionadas para você.
        </p>

        {/* BOTÃO */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-[24px] inline-flex items-center justify-center
            bg-gradient-gold text-gold-foreground font-bold rounded-md shadow-gold transition

            /* MOBILE */
            px-[24px] py-[16px]
            text-[15px]

            /* DESKTOP */
            md:px-[32px] md:py-[18px]
            md:text-[17px]

            hover:-translate-y-0.5
          "
        >
          Quero falar com um especialista no WhatsApp →
        </a>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-background border-t border-border"
    >
      <div
        className="
          mx-auto max-w-7xl

          px-[16px]
          md:px-[24px]
          lg:px-[32px]

          py-[40px]
          md:py-[48px]

          grid
          grid-cols-1
          md:grid-cols-3

          gap-[24px]
          md:gap-[32px]

          text-[13px]
          md:text-[14px]
        "
      >
        {/* LOGO + TEXTO + ATENDIMENTO + CONTATO */}
        <div>
          <img
            src={LOGO}
            alt="Roque Imóveis"
            width={140}
            height={40}
            className="
              w-auto
              h-[32px]
              md:h-[40px]
            "
          />

          <p
            className="
              mt-[12px] text-muted-foreground

              text-[13px]
              md:text-[14px]

              leading-[1.6]
            "
          >
            Tradição em imóveis premium em Limeira há mais de 30 anos.
          </p>

          {/* ATENDIMENTO */}
          <div className="mt-[22px]">
            <h3
              className="
                font-bold text-primary

                text-[14px]
                md:text-[15px]
              "
            >
              Atendimento
            </h3>

            <p
              className="
                mt-[8px] text-muted-foreground

                text-[13px]
                md:text-[14px]

                leading-[1.5]
              "
            >
              Limeira – SP<br />
              Seg–Sex 9h às 18h • Sáb 9h às 13h
            </p>
          </div>

          {/* CONTATO */}
<div className="mt-[20px]">
  <h3
    className="
      font-bold text-primary

      text-[14px]
      md:text-[15px]
    "
  >
    Contato
  </h3>

  {/* WHATSAPP */}
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="
      mt-[8px] flex items-center gap-[7px]
      font-semibold text-primary hover:underline

      text-[14px]
      md:text-[15px]
    "
  >
    <svg
      viewBox="0 0 32 32"
      width="18"
      height="18"
      aria-hidden="true"
      className="shrink-0 text-[#25D366]"
      fill="currentColor"
    >
      <path d="M16.04 3C8.86 3 3.03 8.83 3.03 16.01c0 2.29.6 4.53 1.74 6.5L3 29l6.67-1.75a12.95 12.95 0 0 0 6.37 1.62h.01c7.18 0 13.01-5.83 13.01-13.01C29.06 8.83 23.22 3 16.04 3Zm0 23.67h-.01a10.78 10.78 0 0 1-5.5-1.51l-.39-.23-3.95 1.04 1.05-3.85-.25-.4a10.76 10.76 0 0 1-1.65-5.71c0-5.9 4.8-10.7 10.7-10.7 2.86 0 5.55 1.11 7.57 3.14a10.64 10.64 0 0 1 3.13 7.56c0 5.9-4.8 10.66-10.7 10.66Zm5.87-8c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.59-.96-.85-1.61-1.91-1.8-2.23-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.7-.97-2.33-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.48 4.84.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
    </svg>

    <span>WhatsApp</span>
  </a>

  {/* WEBSITE */}
  <a
    href="https://roqueimoveis.com.br"
    target="_blank"
    rel="noopener noreferrer"
    className="
      mt-[6px] flex items-center gap-[7px]
      text-muted-foreground hover:text-primary

      text-[13px]
      md:text-[14px]
    "
  >
    <svg
      viewBox="0 0 24 24"
      width="17"
      height="17"
      aria-hidden="true"
      className="shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>

    <span>www.roqueimoveis.com.br</span>
  </a>
</div>
        </div>

        {/* MAPA 1 */}
        <div>
          <h3
            className="
              font-bold text-primary mb-[12px]

              text-[14px]
              md:text-[15px]
            "
          >
            Venda e Lançamentos
</h3>

<div
  className="
    overflow-hidden rounded-[16px]
    border border-border
    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
  "
>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.3547517411453!2d-47.40586749999999!3d-22.565831499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c880f46135d1b1%3A0x5faeba6410136ff3!2sR.%20Santa%20Cruz%2C%201031%20-%20Centro%2C%20Limeira%20-%20SP%2C%2013482-320!5e0!3m2!1spt-BR!2sbr!4v1778788333054!5m2!1spt-BR!2sbr"
    width="100%"
    height="280"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Mapa de Venda e Lançamentos"
    className="block w-full"
  />
</div>
        </div>

        {/* MAPA 2 */}
<div>
  <h3
    className="
      font-bold text-primary mb-[12px]

      text-[14px]
      md:text-[15px]
    "
  >
    Locação
  </h3>

  <div
    className="
      overflow-hidden rounded-[16px]
      border border-border
      shadow-[0_10px_30px_rgba(0,0,0,0.08)]
    "
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.3609646317923!2d-47.405669700000004!3d-22.565599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c880f4636caabb%3A0xf25ea3ad1a52cd2f!2sR.%20Santa%20Cruz%2C%20999%20-%20Centro%2C%20Limeira%20-%20SP%2C%2013480-040!5e0!3m2!1spt-BR!2sbr!4v1778788396289!5m2!1spt-BR!2sbr"
      width="100%"
      height="280"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Mapa de Locação"
      className="block w-full"
    />
  </div>
</div>
      </div>

      {/* COPYRIGHT */}
      <div
        className="
          border-t border-border text-center text-[#4A1F2B]

          py-[16px]
          md:py-[20px]

          text-[11px]
          md:text-[12px]
        "
      >
        © {new Date().getFullYear()} Roque Imóveis. Todos os direitos reservados. Desenvolvido por{' '}
        <a
          href="https://bastelliconsultoria.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4A1F2B] hover:font-bold" 
        >
          Bastelli Consultoria
        </a>
      </div>
    </footer>
  );
}

/* ---------- WHATSAPP FLOAT ---------- */
function WhatsFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="
        fixed
        right-[18px]
        bottom-[18px]
        z-[9999]

        flex items-center justify-center

        w-[56px] h-[56px]
        md:w-[64px] md:h-[64px]

        rounded-full
        bg-[#25D366]
        text-white

        shadow-[0_12px_35px_rgba(37,211,102,0.45)]

        transition-all duration-300

        hover:-translate-y-[4px]
        hover:scale-105
        hover:shadow-[0_16px_45px_rgba(37,211,102,0.55)]
      "
    >
      <svg
        viewBox="0 0 32 32"
        width="30"
        height="30"
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M16.04 3C8.86 3 3.03 8.83 3.03 16.01c0 2.29.6 4.53 1.74 6.5L3 29l6.67-1.75a12.95 12.95 0 0 0 6.37 1.62h.01c7.18 0 13.01-5.83 13.01-13.01C29.06 8.83 23.22 3 16.04 3Zm0 23.67h-.01a10.78 10.78 0 0 1-5.5-1.51l-.39-.23-3.95 1.04 1.05-3.85-.25-.4a10.76 10.76 0 0 1-1.65-5.71c0-5.9 4.8-10.7 10.7-10.7 2.86 0 5.55 1.11 7.57 3.14a10.64 10.64 0 0 1 3.13 7.56c0 5.9-4.8 10.66-10.7 10.66Zm5.87-8c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.59-.96-.85-1.61-1.91-1.8-2.23-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.7-.97-2.33-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.48 4.84.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
