import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, WifiOff, UserX, Check } from "lucide-react";
import { APP_INFO } from "@/config/app";
import InstallButton from "@/components/feature/InstallButton";
import Reveal from "@/components/base/Reveal";
import HeroTrail from "@/pages/home/components/HeroTrail";

const trusts = [
  { icon: WifiOff, label: "Sem ligação a bancos" },
  { icon: UserX, label: "Sem contas nem recolha de dados" },
  { icon: ShieldCheck, label: "Sem anúncios nem rastreamento" },
];

export default function Hero() {
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    const replay = () => setReplayKey((current) => current + 1);
    window.addEventListener("pontozero:replay-hero", replay);
    return () => window.removeEventListener("pontozero:replay-hero", replay);
  }, []);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28 bg-gradient-to-b from-background-50 via-primary-50/70 to-background-50"
    >
      <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-primary-200/40 blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/3 -left-32 w-[26rem] h-[26rem] rounded-full bg-accent-200/30 blur-3xl animate-pulse-slow" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative w-full px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-6 lg:text-center">
          <Reveal>
            <div className="relative mb-8 overflow-hidden rounded-2xl border border-background-200/70 bg-gradient-to-br from-background-100 via-primary-50 to-accent-100/70 p-6 md:p-8">
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-primary-300/30 blur-2xl" />
              <div className="absolute -bottom-12 -right-8 w-44 h-44 rounded-full bg-accent-300/30 blur-2xl" />
              <div className="relative flex flex-col items-center gap-4">
                <div className="relative flex w-full items-center justify-center">
                  <div
                    key={`logo-${replayKey}`}
                    className="relative inline-flex animate-logo-drive items-center justify-center"
                  >
                    <HeroTrail />
                    <button
                      type="button"
                      onClick={() => setReplayKey((current) => current + 1)}
                      aria-label="Repetir a animação de entrada do logótipo Ponto Zero"
                      className="relative z-10 cursor-pointer border-0 bg-transparent p-0"
                    >
                      <img
                        src={APP_INFO.logo}
                        alt="Logótipo oficial Ponto Zero"
                        title="Ponto Zero — aplicação de controlo financeiro"
                        className="relative h-20 md:h-28 w-auto max-w-full object-contain animate-float-delayed"
                      />
                    </button>
                  </div>
                </div>
                <span className="text-center text-xs md:text-sm font-medium text-foreground-600">
                  Ponto Zero · clareza financeira em cada euro, sem contas nem recolha de dados
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 text-primary-800 text-xs font-semibold px-3.5 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              App de controlo financeiro · 100% offline
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground-950 text-balance leading-[1.05]">
              O controlo financeiro <span className="text-primary-600">começa aqui</span>.
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 text-base md:text-lg text-foreground-600 leading-relaxed max-w-xl mx-auto">
              Organiza o teu dinheiro com clareza — sem anúncios, sem contas externas e sem recolha
              de dados pessoais. O Ponto Zero foi criado para quem quer saber exatamente para onde
              vai cada euro, de forma simples e privada.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <InstallButton size="lg" />
              <Link
                to="/#app-por-dentro"
                className="inline-flex items-center justify-center rounded-md px-6 py-3.5 text-base font-semibold whitespace-nowrap cursor-pointer bg-transparent text-foreground-900 border border-foreground-300/70 transition-colors duration-300 hover:border-primary-400 hover:text-primary-700"
              >
                Sobre a App
              </Link>
              <a
                href={`mailto:${APP_INFO.email}`}
                className="inline-flex items-center justify-center rounded-md px-6 py-3.5 text-base font-semibold whitespace-nowrap cursor-pointer bg-transparent text-foreground-900 border border-foreground-300/70 transition-colors duration-300 hover:border-primary-400 hover:text-primary-700"
              >
                Contacto
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
              {trusts.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm text-foreground-600">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-primary-100">
                    <Icon className="w-3.5 h-3.5 text-primary-700" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={200}>
            <div className="relative flex justify-center">
              <div className="absolute inset-x-6 md:inset-x-10 top-16 bottom-16 rounded-[3rem] bg-primary-500/10 blur-2xl" />
              <img
                src={APP_INFO.marketingImage}
                alt="Ponto Zero — apresentação da aplicação de controlo financeiro com receitas, despesas, saldos e poupanças"
                title="Ponto Zero — controlo de receitas, despesas e poupanças numa app offline"
                className="relative w-full max-w-[20rem] sm:max-w-[22rem] lg:max-w-[24rem] h-auto rounded-[2rem] border border-background-200/70 object-contain"
              />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative w-full px-4 md:px-8 mt-16 md:mt-24">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: "100%", label: "Offline e privado", check: true },
              { value: "0", label: "Anúncios ou rastreamento", check: true },
              { value: "4", label: "Níveis de resumo (semana a personalizado)", check: true },
              { value: "€", label: "Multi-moeda configurável", check: true },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg bg-background-50 border border-background-200/80 p-4 md:p-5 hover-lift"
              >
                <p className="text-2xl md:text-3xl font-extrabold text-primary-600 font-heading">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-xs md:text-sm text-foreground-600 flex items-center gap-1.5">
                  {stat.check ? <Check className="w-3.5 h-3.5 text-primary-500" /> : null}
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}