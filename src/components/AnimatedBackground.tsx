
import { useEffect, useState } from "react";

interface DataPoint {
  id: number;
  x: number;
  y: number;
  value: number;
  delay: number;
}

export const AnimatedBackground = () => {
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);

  useEffect(() => {
    // Generate random data points for animated background
    const points = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      value: Math.random() * 100,
      delay: i * 0.5,
    }));
    setDataPoints(points);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
      {/* Animated grid overlay */}
      <div className="absolute inset-0 dashboard-grid opacity-30" />
      
      {/* Floating data points */}
      {dataPoints.map((point) => (
        <div
          key={point.id}
          className="absolute w-2 h-2 bg-dashboard-primary rounded-full pulse-dot"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            animationDelay: `${point.delay}s`,
          }}
        />
      ))}

      {/* Animated bars in background */}
      <div className="absolute top-20 left-10 opacity-10">
        <div className="space-y-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-dashboard-secondary rounded"
              style={{
                width: `${20 + Math.random() * 60}px`,
                height: "8px",
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating chart elements */}
      <div className="absolute top-1/3 right-20 opacity-10 floating-chart">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <path
            d="M 10 90 Q 30 70 50 80 T 90 60"
            stroke="hsl(var(--dashboard-primary))"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <circle cx="50" cy="80" r="3" fill="hsl(var(--dashboard-accent))" />
          <circle cx="90" cy="60" r="3" fill="hsl(var(--dashboard-secondary))" />
        </svg>
      </div>

      {/* Bottom corner metrics visualization */}
      <div className="absolute bottom-20 left-20 opacity-10">
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-dashboard-accent rounded-sm pulse-dot"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
