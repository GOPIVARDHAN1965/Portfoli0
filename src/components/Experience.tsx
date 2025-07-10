
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Zap, TrendingUp, Calendar } from "lucide-react";

export const Experience = () => {
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

  const experiences = [
  {
    title: "Data Analyst",
    company: "Executive Office of the Governor, Florida",
    period: "May 2025 – Present",
    description: "Automating multi-source pipelines, interactive dashboards, and time series forecasting models for billion-dollar budget operations.",
    achievements: [
      { icon: DollarSign, text: "Managed billion-dollar forecasts", color: "text-green-600" },
      { icon: Zap, text: "Automated data pipelines & ETL flows", color: "text-blue-600" },
      { icon: TrendingUp, text: "Deployed ARIMA & Prophet models", color: "text-teal-600" }
    ],
    technologies: ["Python", "Pandas", "SQL", "Power BI", "Excel VBA", "Power Automate", "Prophet", "ARIMA"]
  },
  {
    title: "Data & Finance Analyst",
    company: "Aramark",
    period: "Nov 2023 – May 2025",
    description: "Oversaw $500K+ in invoices weekly and analyzed $35M+ annual transactions. Built real-time dashboards and automated financial workflows.",
    achievements: [
      { icon: DollarSign, text: "Analyzed $35M+ transactions", color: "text-green-600" },
      { icon: Zap, text: "Automated invoicing & reports", color: "text-blue-600" },
      { icon: TrendingUp, text: "Boosted forecasting accuracy by 20%", color: "text-teal-600" }
    ],
    technologies: ["Python", "SQL", "Power BI", "Excel VBA", "Power Automate"]
  },
  {
    title: "Finance Analyst",
    company: "Sravanthi Engineers",
    period: "July 2021 – June 2023",
    description: "Handled project invoicing, payments, cost estimates, and statutory compliance for engineering projects.",
    achievements: [
      { icon: DollarSign, text: "Managed AP/AR for multiple projects", color: "text-green-600" },
      { icon: Zap, text: "Filed GST returns & compliance docs", color: "text-blue-600" },
      { icon: TrendingUp, text: "Prepared detailed cost estimates", color: "text-teal-600" }
    ],
    technologies: ["Excel", "Project Costing", "GST Compliance"]
  },
  {
    title: "Software Engineering Intern",
    company: "ZAWN",
    period: "Feb 2021 – Apr 2021",
    description: "Enhanced backend queries, improved UI elements, and automated testing workflows to boost performance.",
    achievements: [
      { icon: Zap, text: "Optimized MongoDB queries by 40%", color: "text-blue-600" },
      { icon: TrendingUp, text: "Improved UI with avatars & dropdowns", color: "text-green-600" },
      { icon: DollarSign, text: "Built Selenium & PyTest automation", color: "text-teal-600" }
    ],
    technologies: ["MongoDB", "Python", "Selenium", "PyTest", "Flask"]
  }
];

  // const experiences = [
    
  //   {
  //     title: "Senior Data Analyst",
  //     company: "TechCorp Solutions",
  //     period: "2023 - Present",
  //     description: "Leading data-driven initiatives to optimize business operations and drive strategic decision-making.",
  //     achievements: [
  //       { icon: DollarSign, text: "Saved $2.5M annually", color: "text-green-600" },
  //       { icon: Zap, text: "Automated 15+ processes", color: "text-blue-600" },
  //       { icon: TrendingUp, text: "Improved efficiency by 40%", color: "text-teal-600" }
  //     ],
  //     technologies: ["Python", "SQL", "Power BI", "Azure"]
  //   },
  //   {
  //     title: "Financial Data Analyst",
  //     company: "FinanceHub Inc",
  //     period: "2022 - 2023",
  //     description: "Analyzed financial data to support investment decisions and risk management strategies.",
  //     achievements: [
  //       { icon: TrendingUp, text: "Increased ROI by 25%", color: "text-green-600" },
  //       { icon: Zap, text: "Reduced reporting time by 60%", color: "text-blue-600" },
  //       { icon: DollarSign, text: "Identified $1.8M in cost savings", color: "text-teal-600" }
  //     ],
  //     technologies: ["R", "Tableau", "Excel", "SQL"]
  //   },
  //   {
  //     title: "Junior Data Analyst",
  //     company: "DataStart LLC",
  //     period: "2021 - 2022",
  //     description: "Built foundational skills in data analysis and visualization while supporting various business units.",
  //     achievements: [
  //       { icon: Zap, text: "Created 20+ dashboards", color: "text-blue-600" },
  //       { icon: TrendingUp, text: "Improved data accuracy by 30%", color: "text-green-600" },
  //       { icon: Calendar, text: "Delivered 50+ reports", color: "text-teal-600" }
  //     ],
  //     technologies: ["Python", "Excel", "Power BI", "MySQL"]
  //   }
  // ];

  return (
    <section id="experience" className="py-20 bg-slate-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className={`mb-8 transition-all duration-1000 delay-${index * 200} ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}>
                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-600">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-600">{exp.title}</h3>
                      <p className="text-lg font-semibold text-foreground/80">{exp.company}</p>
                      <p className="text-foreground/60 flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  <p className="text-foreground/70 mb-6">{exp.description}</p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center space-x-2 p-3 bg-white rounded-lg">
                        <achievement.icon size={20} className={achievement.color} />
                        <span className="font-medium text-sm text-slate-800">{achievement.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-blue-100 text-blue-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
