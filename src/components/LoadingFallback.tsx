
export default function LoadingFallback() {
  return (
    <div 
      className="min-h-[60vh] flex flex-col items-center justify-center py-12 p-6"
      id="route-loading-fallback"
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Sleek, pulsing branded spinner ring */}
        <div className="relative h-10 w-10">
          <div className="absolute inset-0 rounded-full border-2 border-primary/10" />
          <div className="absolute inset-0 rounded-full border-2 border-t-accent border-r-accent/30 animate-spin" />
        </div>
        <div className="text-center">
          <p className="text-[10px] font-bold tracking-[0.2em] text-primary/70 uppercase font-sans animate-pulse">
            Loading Interface
          </p>
        </div>
      </div>
    </div>
  );
}
