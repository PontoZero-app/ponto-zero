import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    // A única alteração está aqui: mudámos de bottom-6 para bottom-24
    <div className="fixed bottom-24 right-6 z-50">
      <audio ref={audioRef} loop src="/audio_site/the_measured_path.mp3" />
      
      <button
        onClick={togglePlay}
        className="flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full shadow-[0_12px_30px_-10px_rgba(0,0,0,0.45)] transition-all duration-300 hover:bg-primary-700 hover:-translate-y-0.5"
        title={isPlaying ? "Pausar música" : "Tocar música de fundo"}
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </div>
  );
}