import { useRoute } from 'wouter';
import { units } from '@/data/index';
import SlideViewer from '@/components/SlideViewer';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import { ChevronLeft } from 'lucide-react';

export default function UnitPage() {
  const [match, params] = useRoute('/unit/:id');
  const [, setLocation] = useLocation();

  if (!match || !params) {
    return <div>Unit not found</div>;
  }

  const unit = units.find(u => u.id === params.id);

  if (!unit) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-2xl font-bold">Unit Not Found</h1>
        <Button onClick={() => setLocation('/')} variant="outline">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Home
        </Button>
      </div>
    );
  }

  return <SlideViewer data={unit.data} title={unit.title} />;
}
