export default function GridLines() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="grid h-full grid-cols-4 gap-0">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="border-l border-white/[0.03] last:border-r" />
          ))}
        </div>
      </div>
    </div>
  );
}
