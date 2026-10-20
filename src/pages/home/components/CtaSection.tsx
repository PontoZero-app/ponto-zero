import { QrCode } from "lucide-react";
import Reveal from "@/components/base/Reveal";
import InstallButton from "@/components/feature/InstallButton";
import { APP_INFO } from "@/config/app";

export default function CtaSection() {
  return (
    <section className="relative py-20 md:py-28 bg-background-100">
      <div className="w-full px-4 md:px-8">
        <Reveal>
          <div className="relative rounded-3xl bg-gradient-to-br from-primary-700 via-primary-600 to-secondary-800 overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute -top-16 -right-10 w-72 h-72 rounded-full bg-accent-500/25 blur-3xl" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 md:p-12 lg:p-16">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center rounded-full bg-white/15 text-white text-xs font-semibold px-3.5 py-1.5">
                  Começa hoje
                </span>
                <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight text-balance">
                  Controlar dinheiro não é difícil.
                </h2>
                <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed max-w-xl">
                  Difícil é viver sem saber para onde ele vai. Dá o primeiro passo e traz clareza à
                  tua vida financeira.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <InstallButton size="lg" variant="light" />
                  <span className="text-sm text-white/75">Grátis para começar · Sem registo</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="mx-auto max-w-xs rounded-2xl bg-background-50 p-6 text-center">
                  <div className="mx-auto w-40 h-40 rounded-xl overflow-hidden bg-background-100 flex items-center justify-center">
                    <img
                      src={APP_INFO.qrCode}
                      alt="QR code para descarregar a app Ponto Zero"
                      title="Descarrega a app Ponto Zero"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 text-foreground-950">
                    <QrCode className="w-4 h-4 text-primary-600" />
                    <span className="text-sm font-semibold">Aponta a câmara e instala</span>
                  </div>
                  <p className="mt-1.5 text-xs text-foreground-600">
                    Disponível na Play Store
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}