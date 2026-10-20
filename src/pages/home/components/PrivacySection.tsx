import { UserX, Database, CloudOff, Megaphone, Radar, Lock } from "lucide-react";
import Reveal from "@/components/base/Reveal";

const privacyPoints = [
  { icon: UserX, label: "Não cria contas" },
  { icon: Database, label: "Não recolhe dados pessoais" },
  { icon: CloudOff, label: "Não envia dados para servidores" },
  { icon: Megaphone, label: "Não utiliza publicidade" },
  { icon: Radar, label: "Não utiliza rastreamento" },
];

export default function PrivacySection() {
  return (
    <section id="privacidade" className="relative py-20 md:py-28 bg-secondary-950 text-background-50 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-[26rem] h-[26rem] rounded-full bg-primary-500/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] rounded-full bg-accent-500/10 blur-3xl" />

      <div className="relative w-full px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-accent-400">
                Privacidade
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                Privacidade primeiro
              </h2>
              <p className="mt-5 text-base md:text-lg text-background-200/85 leading-relaxed max-w-lg">
                Toda a informação financeira permanece apenas no teu dispositivo. Sem contas, sem
                servidores e sem rastreamento — <strong className="text-background-50 font-semibold">tu és o único dono dos teus dados</strong>.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {privacyPoints.map(({ icon: Icon, label }, i) => (
                <Reveal key={label} delay={70 * i}>
                  <div className="flex items-center gap-3 rounded-lg bg-background-50/5 border border-background-50/10 px-4 py-4">
                    <span className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-primary-500/20">
                      <Icon className="w-5 h-5 text-accent-400" />
                    </span>
                    <span className="text-sm font-medium text-background-50">{label}</span>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={380}>
                <div className="flex items-center gap-3 rounded-lg bg-accent-500 px-4 py-4">
                  <span className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-foreground-950/15">
                    <Lock className="w-5 h-5 text-foreground-950" />
                  </span>
                  <span className="text-sm font-semibold text-foreground-950">
                    Proteção com PIN e biometria
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}