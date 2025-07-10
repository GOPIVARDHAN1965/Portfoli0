
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, BarChart, Cloud } from "lucide-react";

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateProgress(true), 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      color: "from-dashboard-primary to-dashboard-secondary",
      skills: [
        { name: "Python", level: 90 },
        { name: "R", level: 85 },
        { name: "SQL", level: 95 },
        { name: "JavaScript", level: 75 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-dashboard-secondary to-dashboard-accent",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 70 },
        { name: "SQLite", level: 80 }
      ]
    },
    {
      title: "Visualization",
      icon: BarChart,
      color: "from-dashboard-accent to-dashboard-primary",
      skills: [
        { name: "Power BI", level: 95 },
        { name: "Tableau", level: 88 },
        { name: "Matplotlib", level: 85 },
        { name: "D3.js", level: 70 }
      ]
    },
    {
      title: "Cloud & Tools",
      icon: Cloud,
      color: "from-dashboard-primary to-dashboard-accent",
      skills: [
        { name: "Azure", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Git", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dashboard-surface/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-dashboard-primary to-dashboard-secondary bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className={`dashboard-card p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 group ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`} style={{ animationDelay: `${categoryIndex * 200}ms` }}>
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-dashboard-primary">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={animateProgress ? skill.level : 0} 
                          className="h-2"
                        />
                        <div 
                          className="absolute top-0 left-0 h-2 bg-gradient-to-r from-dashboard-primary to-dashboard-secondary rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: animateProgress ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 200 + skillIndex * 100)}ms` 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
