import { useState, useEffect, useCallback } from 'react';
import { SlideCard } from './SlideCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Menu, Home } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import backgroundImage from '@/assets/images/background.jpg';
import type { Section } from '@/types';
import { useLocation } from 'wouter';

interface SlideViewerProps {
  data: Section[];
  title: string;
}

export default function SlideViewer({ data, title }: SlideViewerProps) {
  const [, setLocation] = useLocation();
  
  // Flatten all items into a single playlist
  const allItems = data.flatMap(section => section.items);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const currentItem = allItems[currentIndex];
  const progress = allItems.length > 0 ? ((currentIndex + 1) / allItems.length) * 100 : 0;

  // Find which section the current item belongs to
  const currentSection = currentItem 
    ? data.find(section => section.items.some(item => item.id === currentItem.id))
    : undefined;

  const handleNext = useCallback(() => {
    if (currentIndex < allItems.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, allItems.length]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  const jumpTo = (index: number) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Escape') {
        setLocation('/'); // Go back home on Escape? Optional.
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, setLocation]);

  return (
    <div className="w-full h-screen relative overflow-hidden bg-background">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ 
            backgroundImage: `url(${backgroundImage})`,
            opacity: 0.4 
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80 pointer-events-none" />

      {/* Main Content Layer */}
      <div className="relative z-10 w-full max-w-6xl mx-auto h-full flex flex-col items-center justify-center">
      
        {/* Top Bar: Progress & Menu */}
        <div className="w-full flex items-center justify-between px-6 py-6">
            <div className="flex items-center gap-4 flex-1">
            <Button variant="secondary" size="icon" className="shadow-sm bg-white/80 backdrop-blur" onClick={() => setLocation('/')}>
                <Home className="w-5 h-5" />
            </Button>
            
            <Sheet>
                <SheetTrigger asChild>
                <Button variant="secondary" size="icon" className="shadow-sm bg-white/80 backdrop-blur">
                    <Menu className="w-5 h-5" />
                </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                    <SheetTitle>{title}</SheetTitle>
                </SheetHeader>
                <ScrollArea className="h-[calc(100vh-80px)] mt-4 pr-4">
                    <div className="space-y-6">
                    {data.map(section => (
                        <div key={section.id}>
                        <h4 className="font-bold mb-3 text-primary/80 sticky top-0 bg-background py-1 z-10 border-b">{section.title}</h4>
                        <div className="space-y-1 pl-1">
                            {section.items.map(item => {
                            const globalIndex = allItems.findIndex(i => i.id === item.id);
                            return (
                                <Button
                                key={item.id}
                                variant={currentIndex === globalIndex ? "secondary" : "ghost"}
                                className={cn(
                                    "w-full justify-start text-sm h-auto py-2",
                                    currentIndex === globalIndex && "bg-primary/10 text-primary font-medium"
                                )}
                                onClick={() => jumpTo(globalIndex)}
                                >
                                <span className="w-6 text-xs text-muted-foreground mr-2 opacity-50">{globalIndex + 1}.</span>
                                {item.english}
                                </Button>
                            );
                            })}
                        </div>
                        </div>
                    ))}
                    </div>
                </ScrollArea>
                </SheetContent>
            </Sheet>
            
            <div className="flex-1 max-w-md hidden md:block">
                <div className="flex justify-between text-xs font-medium text-foreground/60 mb-2 px-1">
                    <span>{currentSection?.title || ''}</span>
                    <span>{currentIndex + 1} / {allItems.length}</span>
                </div>
                <Progress value={progress} className="h-2 w-full bg-white/50" />
            </div>
            </div>
        </div>

        {/* Main Slide Area */}
        <div className="w-full flex-1 flex items-center justify-center p-4 md:p-8 relative">
            {/* Previous Button */}
            <Button 
            variant="outline" 
            size="icon" 
            className="absolute left-4 md:left-8 z-20 h-12 w-12 rounded-full hidden md:flex bg-white/80 backdrop-blur hover:bg-white border-0 shadow-lg transition-transform hover:scale-110 active:scale-95"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            >
            <ChevronLeft className="w-6 h-6 text-primary" />
            </Button>

            {/* Card Container */}
            <div className="w-full h-full flex items-center justify-center relative perspective-1000">
                {currentItem && (
                    <SlideCard 
                        key={currentItem.id} 
                        item={currentItem} 
                        isActive={true} 
                    />
                )}
            </div>

            {/* Next Button */}
            <Button 
            variant="outline" 
            size="icon" 
            className="absolute right-4 md:right-8 z-20 h-12 w-12 rounded-full hidden md:flex bg-white/80 backdrop-blur hover:bg-white border-0 shadow-lg transition-transform hover:scale-110 active:scale-95"
            onClick={handleNext}
            disabled={currentIndex === allItems.length - 1}
            >
            <ChevronRight className="w-6 h-6 text-primary" />
            </Button>
        </div>

        {/* Mobile Navigation (Bottom) */}
        <div className="md:hidden w-full flex justify-between px-6 pb-8 pt-2 gap-4">
            <Button variant="secondary" className="flex-1 shadow-sm" onClick={handlePrev} disabled={currentIndex === 0}>
                <ChevronLeft className="mr-2 h-4 w-4" /> Prev
            </Button>
            <div className="flex items-center text-xs font-medium text-muted-foreground">
                {currentIndex + 1} / {allItems.length}
            </div>
            <Button variant="default" className="flex-1 shadow-md" onClick={handleNext} disabled={currentIndex === allItems.length - 1}>
                Next <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
        </div>
      </div>
    </div>
  );
}
