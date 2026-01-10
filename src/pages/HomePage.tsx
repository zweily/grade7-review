import { units } from '@/data/index';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import { BookOpen } from 'lucide-react';
import backgroundImage from '@/assets/images/background.jpg';

export default function HomePage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen relative overflow-y-auto bg-background">
       {/* Background Image Layer */}
       <div 
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ 
            backgroundImage: `url(${backgroundImage})`,
            opacity: 0.2 
        }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-background/90 via-background/60 to-background/90 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        <header className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary tracking-tight">
            七年级上学期英语复习
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interactive Review Materials for Grade 7 Semester 1
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {units.map((unit) => (
            <Card key={unit.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 bg-white/80 backdrop-blur-sm flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                  {unit.title}
                </CardTitle>
                <CardDescription className="text-base mt-2 line-clamp-2">
                  {unit.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto pt-4">
                <Button 
                  className="w-full gap-2 group-hover:translate-x-1 transition-transform" 
                  onClick={() => setLocation(`/unit/${unit.id}`)}
                >
                  <BookOpen className="w-4 h-4" />
                  Start Review
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <footer className="mt-16 text-center text-sm text-muted-foreground/60">
          © 2026 English Review Helper. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
