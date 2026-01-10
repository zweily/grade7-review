import { useState, useEffect, useRef } from 'react';
import { Volume2, Eye, BookOpen, ChevronUp, MoreHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CardContent, CardFooter, CardHeader } from '@/components/ui/card'; // Card is not used directly as root div style
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import type { KnowledgePoint, Extension, Example } from '@/types';
import { cn } from '@/lib/utils';
import { Separator } from "@/components/ui/separator";

interface SlideCardProps {
  item: KnowledgePoint;
  isActive: boolean;
}

// Reusable Audio Button Component
function PlayAudioButton({ id, text, variant = "ghost", size = "icon", label }: { id: string, text: string, variant?: "ghost" | "default" | "outline" | "secondary", size?: "icon" | "sm" | "lg", label?: string }) {
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
      // Fallback
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
    <Button variant={variant} size={size} onClick={handlePlay} className={cn("transition-all", playing && "text-primary animate-pulse")}>
      <Volume2 className={cn("w-4 h-4", label && "mr-2")} />
      {label && (playing ? "Playing" : label)}
    </Button>
  );
}

// Extension Detail Card Component
function ExtensionDetail({ ext }: { ext: Extension }) {
  const { data } = ext;
  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <div>
           <div className="flex items-center gap-2 mb-1">
             <Badge>{ext.label}</Badge>
           </div>
           <h3 className="text-2xl font-bold text-primary">{data.english}</h3>
           <p className="text-lg text-muted-foreground">{data.translation}</p>
        </div>
        <PlayAudioButton id={data.id} text={data.english} variant="secondary" size="sm" label="Read" />
      </div>

      {data.explanation && (
        <div className="bg-muted/30 p-3 rounded-md">
           <p className="text-sm text-foreground/80">{data.explanation}</p>
        </div>
      )}

      {data.examples && data.examples.length > 0 && (
        <div className="space-y-2">
           <h4 className="text-xs font-bold text-muted-foreground uppercase">Examples</h4>
           <div className="space-y-2">
             {data.examples.map((ex) => (
               <div key={ex.id} className="bg-secondary/20 p-2 rounded border flex items-start justify-between gap-2">
                  <div className="text-sm">
                    <p className="italic text-foreground/90">"{ex.en}"</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{ex.zh}</p>
                  </div>
                  <PlayAudioButton id={ex.id} text={ex.en} variant="ghost" size="icon" />
               </div>
             ))}
           </div>
        </div>
      )}
    </div>
  );
}

export function SlideCard({ item, isActive }: SlideCardProps) {
  const [showTranslation, setShowTranslation] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  // Reset state when slide changes
  useEffect(() => {
    setShowTranslation(false);
    setShowExplanation(false);
    window.speechSynthesis.cancel();
  }, [item.id]);

  return (
    <Card className={cn(
      "w-full max-w-5xl mx-auto h-[650px] flex flex-col md:flex-row overflow-hidden transition-all duration-300 shadow-2xl border-0 bg-white/95 backdrop-blur-sm",
      isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute top-0"
    )}>
      {/* Left side: Image */}
      <div className={cn(
        "w-full md:w-5/12 bg-muted relative overflow-hidden transition-all duration-500",
        showExplanation ? "h-32 md:h-full md:w-1/3" : "h-48 md:h-full"
      )}>
        {item.imageUrl ? (
            <img 
              src={item.imageUrl} 
              alt={item.english} 
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
            />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/20">
             <span className="text-6xl opacity-20 font-bold">{item.english.charAt(0).toUpperCase()}</span>
          </div>
        )}
        
        <div className="absolute top-4 left-4">
           <Badge variant="secondary" className="backdrop-blur-md bg-white/80 shadow-sm border-0 text-xs px-2 py-1 uppercase tracking-wider text-primary">
            {item.category.replace('-', ' ')}
          </Badge>
        </div>
      </div>

      {/* Right side: Content */}
      <div className="flex-1 flex flex-col h-full relative">
        <CardHeader className="text-center pt-8 pb-2 space-y-4">
          <div className="flex justify-center items-center gap-3">
             {item.partOfSpeech && (
              <Badge variant="outline" className="text-sm border-primary/20 text-muted-foreground">
                {item.partOfSpeech}
              </Badge>
            )}
          </div>
          
          <div className="space-y-1">
            <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">{item.english}</h1>
            {item.phonetic && (
              <p className="text-lg text-muted-foreground font-mono opacity-70">{item.phonetic}</p>
            )}
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col items-center justify-start py-4 gap-6 overflow-y-auto px-6 scrollbar-thin">
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <PlayAudioButton id={item.id} text={item.english} variant="default" size="sm" label="Read" />
            
            <Button 
              variant={showTranslation ? "default" : "outline"} 
              size="sm"
              onClick={() => setShowTranslation(!showTranslation)}
              className="rounded-full px-5 shadow-sm transition-all"
            >
              <Eye className="w-4 h-4 mr-2" />
              {showTranslation ? "Hide CN" : "Translation"}
            </Button>

            <Button 
              variant={showExplanation ? "default" : "outline"} 
              size="sm"
              onClick={() => setShowExplanation(!showExplanation)}
              className="rounded-full px-5 shadow-sm transition-all"
            >
              {showExplanation ? <ChevronUp className="w-4 h-4 mr-2" /> : <BookOpen className="w-4 h-4 mr-2" />}
              {showExplanation ? "Collapse" : "Explain"}
            </Button>
          </div>

          {/* Translation Area */}
          <div className={cn(
            "transition-all duration-300 overflow-hidden text-center w-full",
            showTranslation ? "max-h-24 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
          )}>
            <p className="text-2xl font-medium text-foreground/80 py-2">
              {item.translation}
            </p>
          </div>

          {/* Extended Content Area */}
          <div className={cn(
            "w-full transition-all duration-500 ease-in-out space-y-5 text-left pb-4",
            showExplanation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 hidden"
          )}>
             <Separator className="bg-border/50" />
             
            {/* Explanation */}
            <div className="space-y-1">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Definition</h3>
              <p className="text-base leading-relaxed text-foreground/90">{item.explanation}</p>
            </div>

            {/* Examples */}
            {item.examples && item.examples.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Examples</h3>
                <div className="space-y-3">
                  {item.examples.map((ex) => (
                    <div key={ex.id} className="bg-secondary/30 p-3 rounded-lg border border-transparent hover:border-primary/10 transition-colors flex justify-between items-start gap-3 group">
                      <div>
                        <p className="text-base italic text-foreground/90 font-medium">"{ex.en}"</p>
                        <p className="text-sm text-muted-foreground mt-1">{ex.zh}</p>
                      </div>
                      <PlayAudioButton id={ex.id} text={ex.en} variant="ghost" size="icon" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Extensions */}
            {item.extensions && item.extensions.length > 0 && (
              <div className="grid grid-cols-2 gap-3 pt-2">
                {item.extensions.map((ext, idx) => (
                  <Dialog key={idx}>
                    <DialogTrigger asChild>
                      <button className="bg-background border p-3 rounded text-center shadow-sm hover:shadow-md hover:border-primary/30 transition-all group flex flex-col items-center justify-center">
                        <span className="text-[10px] font-bold text-primary uppercase block mb-1">{ext.label}</span>
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-medium">{ext.data.english}</span>
                          <MoreHorizontal className="w-3 h-3 text-muted-foreground group-hover:text-primary" />
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>{ext.label}</DialogTitle>
                        <DialogDescription>Detailed information</DialogDescription>
                      </DialogHeader>
                      <ExtensionDetail ext={ext} />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="justify-center py-3 text-[10px] text-muted-foreground/60 uppercase tracking-widest">
           Interactive Learning Card
        </CardFooter>
      </div>
    </Card>
  );
}
