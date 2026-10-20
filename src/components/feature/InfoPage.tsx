import type { ReactNode } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import BackToTop from "@/components/feature/BackToTop";
import Reveal from "@/components/base/Reveal";
import RichText from "@/components/base/RichText";

interface InfoPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
}

export default function InfoPage({ eyebrow, title, intro, children }: InfoPageProps) {
  return (
    <div className="min-h-screen bg-background-50 flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 md:pt-[72px]">
        <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-background-50 py-16 md:py-24">
          <div className="absolute -top-20 right-0 w-80 h-80 rounded-full bg-primary-100/70 blur-3xl" />
          <div className="relative w-full px-4 md:px-8">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-accent-600">
                {eyebrow}
              </span>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold text-foreground-950 text-balance max-w-3xl">
                {title}
              </h1>
              <p className="mt-5 text-base md:text-lg text-foreground-600 leading-relaxed max-w-2xl">
                <RichText text={intro} />
              </p>
            </Reveal>
          </div>
        </section>

        <section className="w-full px-4 md:px-8 py-14 md:py-20">
          <div className="max-w-3xl">
            {children ?? (
              <div className="rounded-2xl border border-dashed border-background-300 bg-background-100/60 p-8 md:p-10 text-center">
                <p className="text-sm text-foreground-600">
                  O conteúdo desta página será introduzido brevemente.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}