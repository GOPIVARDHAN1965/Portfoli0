
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: "up" | "down" | "neutral";
  icon?: React.ReactNode;
  className?: string;
}

export const MetricCard = ({ 
  title, 
  value, 
  subtitle, 
  trend = "neutral", 
  icon,
  className = "" 
}: MetricCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && typeof value === 'number') {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          current = value;
          clearInterval(timer);
        }
        setDisplayValue(Math.floor(current));
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  const trendColors = {
    up: "text-dashboard-secondary",
    down: "text-dashboard-accent",
    neutral: "text-dashboard-neutral"
  };

  return (
    <Card 
      ref={cardRef}
      className={`metric-card group hover:scale-105 ${className} ${
        isVisible ? "animate-fade-scale" : "opacity-0"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="text-2xl font-bold text-dashboard-primary">
            {typeof value === 'number' ? displayValue.toLocaleString() : value}
          </div>
          {subtitle && (
            <p className={`text-xs ${trendColors[trend]}`}>
              {subtitle}
            </p>
          )}
        </div>
        {icon && (
          <div className="text-dashboard-primary opacity-60 group-hover:opacity-100 transition-opacity">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
};
