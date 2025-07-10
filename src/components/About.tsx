
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { User, Target, Lightbulb } from "lucide-react";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Background</h3>
                <p className="text-foreground/70">
                  Graduate student in Data Science with a passion for transforming complex datasets into meaningful business insights.
                </p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-teal-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expertise</h3>
                <p className="text-foreground/70">
                  Specializing in financial and operational analytics, with experience in process automation and data visualization.
                </p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Philosophy</h3>
                <p className="text-foreground/70">
                  I believe data should tell a story. Every analysis should lead to actionable insights that drive real business value.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
