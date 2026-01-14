import { Badge } from "@/components/ui/badge";
import { PlayAudioButton } from "@/components/PlayAudioButton";
import type { Extension } from "@/types";

export function ExtensionDetail({ ext }: { ext: Extension }) {
  const { data } = ext;
  return (
    <div className="space-y-6 py-2">
      {/* Header with Image */}
      <div className="flex flex-col md:flex-row gap-4 bg-muted/30 p-4 rounded-lg">
        {data.imageUrl && (
           <div className="w-full md:w-32 h-32 flex-shrink-0 rounded-md overflow-hidden border border-border/50">
             <img src={data.imageUrl} alt={data.english} className="w-full h-full object-cover" />
           </div>
        )}
        <div className="flex-1">
           <div className="flex items-center justify-between mb-2">
             <Badge variant="outline" className="bg-background">{ext.label}</Badge>
             <PlayAudioButton id={data.id} text={data.english} variant="default" size="sm" label="Read" />
           </div>
           <h3 className="text-3xl font-bold text-primary tracking-tight">{data.english}</h3>
           <p className="text-xl text-muted-foreground mt-1">{data.translation}</p>
        </div>
      </div>

      {data.explanation && (
        <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
           <h4 className="text-xs font-bold text-blue-600 uppercase mb-2">Explanation</h4>
           <p className="text-sm text-foreground/80 leading-relaxed">{data.explanation}</p>
        </div>
      )}

      {data.examples && data.examples.length > 0 && (
        <div className="space-y-3">
           <h4 className="text-xs font-bold text-muted-foreground uppercase flex items-center gap-2">
             <span className="w-8 h-[1px] bg-border"></span> Examples <span className="w-8 h-[1px] bg-border"></span>
           </h4>
           <div className="space-y-3">
             {data.examples.map((ex) => (
               <div key={ex.id} className="bg-card p-3 rounded-lg border shadow-sm flex items-start gap-3 hover:border-primary/20 transition-colors">
                  <PlayAudioButton id={ex.id} text={ex.en} variant="ghost" size="icon" className="mt-0.5" />
                  <div className="text-sm flex-1">
                    <p className="text-foreground/90 font-medium leading-relaxed">"{ex.en}"</p>
                    <p className="text-muted-foreground text-xs mt-1">{ex.zh}</p>
                  </div>
               </div>
             ))}
           </div>
        </div>
      )}
    </div>
  );
}