
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Calendar } from "lucide-react";

export const Certifications = () => {
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

  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Feb 2025",
      status: "Active",
      description: "Foundational understanding of AWS Cloud concepts, services, and terminology.",
      credentialId: "b84a6b62136143cca23c1a034f3797c",
      color: "from-orange-500 to-yellow-500",
      link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/b84a6b62136143cca23c1a034f3797cf"

    }
    // {
    //   title: "Microsoft Power BI Data Analyst",
    //   issuer: "Microsoft",
    //   date: "2023",
    //   status: "Active", 
    //   description: "Expert-level skills in data modeling, visualization, and DAX calculations.",
    //   credentialId: "PBI-DA-2023-002",
    //   color: "from-blue-500 to-purple-500"
    // },
    // {
    //   title: "Google Data Analytics Certificate",
    //   issuer: "Google Career Certificates",
    //   date: "2023",
    //   status: "Active",
    //   description: "Comprehensive data analytics skills including R, SQL, and Tableau.",
    //   credentialId: "GDA-2023-003",
    //   color: "from-green-500 to-blue-500"
    // },
    // {
    //   title: "Tableau Desktop Specialist",
    //   issuer: "Tableau",
    //   date: "2022",
    //   status: "Active",
    //   description: "Proficiency in creating interactive visualizations and dashboards.",
    //   credentialId: "TDS-2022-004",
    //   color: "from-teal-500 to-cyan-500"
    // }
  ];

  return (
    <section className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className={`group relative overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`} style={{ transitionDelay: `${index * 200}ms` }}>
                
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center`}>
                      <Award className="text-white" size={24} />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {cert.status}
                      </Badge>
                      {/* <ExternalLink 
                        size={16} 
                        className="text-foreground/60 hover:text-blue-600 cursor-pointer transition-colors"
                      /> */}
                      <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink 
                              size={16} 
                              className="text-foreground/60 hover:text-blue-600 cursor-pointer transition-colors"
                            />
                          </a>

                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <p className="text-blue-600 font-medium mb-3">{cert.issuer}</p>
                  
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-foreground/60">
                      <Calendar size={16} className="mr-2" />
                      <span>Issued: {cert.date}</span>
                    </div>
                    <div className="text-xs text-foreground/50">
                      Credential ID: {cert.credentialId}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
