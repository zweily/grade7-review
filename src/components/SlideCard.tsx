import { useState, useEffect, useRef } from 'react';
import { Volume2, Eye, BookOpen, ChevronUp, MoreHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import type { KnowledgePoint, Extension, Example } from '@/types';
import { cn } from '@/lib/utils';
import { Separator } from "@/components/ui/separator";
import { PlayAudioButton } from "@/components/PlayAudioButton";
import { ExtensionDetail } from "@/components/ExtensionDetail";

interface SlideCardProps {
  item: KnowledgePoint;
  isActive: boolean;
}





export function SlideCard({ item, isActive }: SlideCardProps) {
  const [showTranslation, setShowTranslation] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    setShowTranslation(false);
    setShowExplanation(false);
    window.speechSynthesis.cancel();
  }, [item.id]);

  return (
    <Card className={cn(
      "w-full max-w-5xl mx-auto h-[680px] flex flex-col md:flex-row overflow-hidden transition-all duration-300 shadow-2xl border-0 bg-white/95 backdrop-blur-sm",
      isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute top-0"
    )}>
      {/* Left side: Image */}
      <div className={cn(
        "w-full md:w-5/12 bg-muted relative overflow-hidden transition-all duration-500 group",
        showExplanation ? "h-32 md:h-full md:w-1/3" : "h-48 md:h-full"
      )}>
        {item.imageUrl ? (
            <img 
              src={item.imageUrl} 
              alt={item.english} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/20">
             <span className="text-6xl opacity-20 font-bold">{item.english.charAt(0).toUpperCase()}</span>
          </div>
        )}
        
        <div className="absolute top-4 left-4">
           <Badge variant="secondary" className="backdrop-blur-md bg-white/90 shadow-sm border-0 text-xs px-2 py-1 uppercase tracking-wider text-primary font-bold">
            {item.category.replace('-', ' ')}
          </Badge>
        </div>
      </div>

      {/* Right side: Content */}
      <div className="flex-1 flex flex-col h-full relative">
        <CardHeader className="text-center pt-8 pb-4 space-y-4 flex-shrink-0">
          <div className="flex justify-center items-center gap-3">
             {item.partOfSpeech && (
              <Badge variant="outline" className="text-sm border-primary/20 text-muted-foreground">
                {item.partOfSpeech}
              </Badge>
            )}
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">{item.english}</h1>
            {item.phonetic && (
              <p className="text-lg text-muted-foreground font-mono opacity-70">{item.phonetic}</p>
            )}
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col items-center justify-start py-2 gap-6 overflow-y-auto px-6 scrollbar-thin scrollbar-thumb-primary/10 hover:scrollbar-thumb-primary/20">
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-3 sticky top-0 bg-white/95 py-2 z-10 w-full backdrop-blur-sm">
            <PlayAudioButton id={item.id} text={item.english} variant="default" size="sm" label="Read" className="shadow-sm" />
            
            <Button 
              variant={showTranslation ? "secondary" : "outline"} 
              size="sm"
              onClick={() => setShowTranslation(!showTranslation)}
              className="rounded-full px-5 shadow-sm transition-all"
            >
              <Eye className="w-4 h-4 mr-2" />
              {showTranslation ? "Hide CN" : "Translation"}
            </Button>

            <Button 
              variant={showExplanation ? "secondary" : "outline"} 
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
            "transition-all duration-300 overflow-hidden text-center w-full flex-shrink-0",
            showTranslation ? "max-h-24 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
          )}>
            <p className="text-2xl font-medium text-foreground/80 py-2 border-b border-border/50 mx-10">
              {item.translation}
            </p>
          </div>

          {/* Extended Content Area */}
          <div className={cn(
            "w-full transition-all duration-500 ease-in-out space-y-6 text-left pb-6",
            showExplanation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 hidden"
          )}>
             
            {/* Explanation */}
            <div className="bg-muted/30 p-4 rounded-lg">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Definition</h3>
              <p className="text-base leading-relaxed text-foreground/90">{item.explanation}</p>
            </div>

            {/* Examples */}
            {item.examples && item.examples.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                   Examples
                </h3>
                <div className="grid gap-3">
                  {item.examples.map((ex) => (
                    <div key={ex.id} className="bg-background p-3 rounded-lg border shadow-sm hover:border-primary/20 transition-all flex gap-3 group">
                      <PlayAudioButton id={ex.id} text={ex.en} variant="ghost" size="icon" className="mt-0.5 text-muted-foreground group-hover:text-primary" />
                      <div>
                        <p className="text-base text-foreground/90 font-medium leading-snug">"{ex.en}"</p>
                        <p className="text-sm text-muted-foreground mt-1">{ex.zh}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Extensions */}
            {item.extensions && item.extensions.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Related</h3>
                <div className="grid grid-cols-2 gap-3">
                  {item.extensions.map((ext, idx) => (
                    <Dialog key={idx}>
                      <DialogTrigger asChild>
                        <button className="bg-background border p-3 rounded-lg text-left shadow-sm hover:shadow-md hover:border-primary/30 transition-all group flex items-center justify-between">
                          <div className="min-w-0">
                            <span className="text-[10px] font-bold text-primary uppercase block mb-0.5">{ext.label}</span>
                            <span className="text-sm font-medium truncate block">{ext.data.english}</span>
                          </div>
                          <MoreHorizontal className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0 ml-2" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-lg max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Knowledge Extension</DialogTitle>
                          <DialogDescription>Expand your vocabulary</DialogDescription>
                        </DialogHeader>
                        <ExtensionDetail ext={ext} />
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="justify-center py-3 text-[10px] text-muted-foreground/40 uppercase tracking-widest border-t border-border/30 bg-muted/5">
           Unit Review • Grade 7
        </CardFooter>
      </div>
    </Card>
  );
}
