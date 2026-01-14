import { useState, useEffect, useRef } from 'react';
import { Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function PlayAudioButton({ id, text, variant = "ghost", size = "icon", label, className }: { id: string, text: string, variant?: "ghost" | "default" | "outline" | "secondary", size?: "icon" | "sm" | "lg", label?: string, className?: string }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (playing && audioRef.current) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }

    const audioPath = `./audio/${id}.mp3`;
    const audio = new Audio(audioPath);
    audioRef.current = audio;

    audio.onended = () => setPlaying(false);
    audio.onerror = () => {
      console.error("Audio missing or error:", audioPath);
      setPlaying(false);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      utterance.onstart = () => setPlaying(true);
      utterance.onend = () => setPlaying(false);
      window.speechSynthesis.speak(utterance);
    };

    audio.play()
      .then(() => setPlaying(true))
      .catch(e => {
        console.error("Playback failed", e);
        setPlaying(false);
      });
  };

  return (
    <Button variant={variant} size={size} onClick={handlePlay} className={cn("transition-all flex-shrink-0", playing && "text-primary animate-pulse", className)}>
      <Volume2 className={cn("w-4 h-4", label && "mr-2")} />
      {label && (playing ? "Playing" : label)}
    </Button>
  );
}
