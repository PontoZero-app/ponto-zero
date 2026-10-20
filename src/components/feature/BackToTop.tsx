import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

const REPLAY_HERO_EVENT = "pontozero:replay-hero";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const watcher = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (watcher.current !== null) window.clearInterval(watcher.current);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (watcher.current !== null) window.clearInterval(watcher.current);

    let elapsed = 0;
    watcher.current = window.setInterval(() => {
      elapsed += 80;
      const atTop = window.scrollY <= 2;
      if (atTop || elapsed >= 1600) {
        if (watcher.current !== null) window.clearInterval(watcher.current);
        watcher.current = null;
        window.dispatchEvent(new Event(REPLAY_HERO_EVENT));
      }
    }, 80);
  };

  return (
    <button
      type="button"
      aria-label="Voltar ao topo e repetir a animação de entrada"
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center cursor-pointer shadow-[0_12px_30px_-10px_rgba(0,0,0,0.45)] transition-all duration-300 hover:bg-primary-700 hover:-translate-y-0.5 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}