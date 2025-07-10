
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, BarChart3, Database, TrendingUp, Zap } from "lucide-react";

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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

  // import { BarChart3, TrendingUp, Database, Zap } from "lucide-react";

const projects = [
  {
    title: "Retrieval-Augmented Generation (RAG) PDF Query System",
    description:
      "Built a RAG pipeline with Ollama, embeddings, and semantic search for real-time answers from large PDFs. Terminal-based system with optimized indexing and preprocessing.",
    icon: Database,
    stats: [
      { label: "Docs", value: "1000+" },
      { label: "Accuracy", value: "95%" },
      { label: "Response", value: "<1s" },
    ],
    technologies: ["Python", "LangChain", "Ollama", "Embeddings"],
    color: "from-dashboard-primary to-dashboard-secondary",
    link: "https://github.com/GOPIVARDHAN1965/rag_ollama_project",
  },
  {
    title: "Interactive COVID-19 Dashboard",
    description:
      "Real-time COVID-19 dashboard with Dash & Plotly. Dynamic charts, API data, advanced filtering, and KPIs for tracking global and regional trends.",
    icon: BarChart3,
    stats: [
      { label: "Regions", value: "50+" },
      { label: "Data Points", value: "1M+" },
      { label: "Users", value: "1K+" },
    ],
    technologies: ["Dash", "Plotly", "Python", "API"],
    color: "from-dashboard-secondary to-dashboard-accent",
    link: "https://github.com/GOPIVARDHAN1965/covid19_dashboard",
  },
  {
    title: "Data Pipeline & ETL Automation",
    description:
      "Automated ETL with Snowflake & Airflow. Scalable AWS S3 data lake, DBT transformations, Power BI/Tableau dashboards for real-time analytics.",
    icon: Database,
    stats: [
      { label: "Sources", value: "5+" },
      { label: "Latency", value: "Low" },
      { label: "Efficiency", value: "+80%" },
    ],
    technologies: ["Snowflake", "Airflow", "AWS S3", "DBT", "Power BI"],
    color: "from-dashboard-accent to-dashboard-primary",
    link: "",
  },
  {
    title: "Tally Code Brewers Hackathon",
    description:
      "Secure quiz platform with Flask & MongoDB. Real-time scoring, dynamic quizzes, optimized backend for high concurrency. Semifinalist among 200+.",
    icon: Zap,
    stats: [
      { label: "Participants", value: "200+" },
      { label: "Status", value: "Semifinalist" },
      { label: "Uptime", value: "99.9%" },
    ],
    technologies: ["Flask", "MongoDB", "Python"],
    color: "from-dashboard-primary to-dashboard-accent",
    link: "https://github.com/Bidisha28/TallyCode-QuizCreationPlatform",
  },
  {
    title: "Shopping Recommendation System",
    description:
      "KNN-based system analyzing purchase history for product suggestions. Dynamic reports for spend analysis and customer segmentation.",
    icon: TrendingUp,
    stats: [
      { label: "Accuracy", value: "88%" },
      { label: "Cross-Sell", value: "+25%" },
      { label: "Reports", value: "Dynamic" },
    ],
    technologies: ["Python", "KNN", "Flask"],
    color: "from-dashboard-secondary to-dashboard-primary",
    link: "https://github.com/GOPIVARDHAN1965/final_sem_project",
  },
  {
    title: "Sentiment Analysis of Restaurant Reviews",
    description:
      "Scikit-learn sentiment model classifying reviews with 88% accuracy. TF-IDF vectorization, logistic regression, real-time Flask deployment.",
    icon: BarChart3,
    stats: [
      { label: "Reviews", value: "10K+" },
      { label: "Accuracy", value: "88%" },
      { label: "Deployment", value: "Flask" },
    ],
    technologies: ["Python", "Scikit-learn", "TF-IDF", "Flask"],
    color: "from-dashboard-accent to-dashboard-primary",
    link: "https://github.com/GOPIVARDHAN1965/sentiment_analysis",
  },
  {
    title: "Movie Recommendation System",
    description:
      "Content-based recommendation using Python & Pandas. Extracts metadata, computes similarity with Cosine Similarity for tailored suggestions.",
    icon: TrendingUp,
    stats: [
      { label: "Movies", value: "1000+" },
      { label: "Similarity", value: "Cosine" },
      { label: "Users", value: "Open" },
    ],
    technologies: ["Python", "Pandas", "Cosine Similarity"],
    color: "from-dashboard-primary to-dashboard-accent",
    link: "https://github.com/GOPIVARDHAN1965/movie_recomend",
  },
  {
    title: "Flask Task Manager App",
    description:
      "Web-based task manager with Flask & SQLite. User auth, task tracking, due dates, and categories for improved productivity.",
    icon: Zap,
    stats: [
      { label: "Users", value: "Open" },
      { label: "Tasks", value: "100+" },
      { label: "Stack", value: "Flask/SQLite" },
    ],
    technologies: ["Flask", "SQLite", "Python"],
    color: "from-dashboard-secondary to-dashboard-primary",
    link: "https://github.com/GOPIVARDHAN1965/flask_task",
  },
];

  // const projects = [
  //   {
  //     title: "Sales Performance Dashboard",
  //     description: "Interactive Power BI dashboard analyzing sales trends, customer behavior, and revenue forecasting.",
  //     icon: BarChart3,
  //     stats: [
  //       { label: "Data Points", value: "2.5M+" },
  //       { label: "Accuracy", value: "94%" },
  //       { label: "Time Saved", value: "80%" }
  //     ],
  //     technologies: ["Power BI", "SQL", "DAX", "Azure"],
  //     color: "from-dashboard-primary to-dashboard-secondary"
  //   },
  //   {
  //     title: "Customer Churn Prediction",
  //     description: "Machine learning model to predict customer churn with 92% accuracy, enabling proactive retention strategies.",
  //     icon: TrendingUp,
  //     stats: [
  //       { label: "Accuracy", value: "92%" },
  //       { label: "Customers", value: "50K+" },
  //       { label: "Retention", value: "+15%" }
  //     ],
  //     technologies: ["Python", "Scikit-learn", "Pandas", "Jupyter"],
  //     color: "from-dashboard-secondary to-dashboard-accent"
  //   },
  //   {
  //     title: "Financial Risk Assessment",
  //     description: "Automated risk scoring system for loan applications using advanced analytics and data modeling.",
  //     icon: Database,
  //     stats: [
  //       { label: "Applications", value: "100K+" },
  //       { label: "Processing Speed", value: "5x faster" },
  //       { label: "Risk Reduction", value: "30%" }
  //     ],
  //     technologies: ["R", "SQL", "Tableau", "Excel"],
  //     color: "from-dashboard-accent to-dashboard-primary"
  //   },
  //   {
  //     title: "Operations Optimization",
  //     description: "Real-time monitoring system for supply chain operations with predictive maintenance alerts.",
  //     icon: Zap,
  //     stats: [
  //       { label: "Efficiency Gain", value: "40%" },
  //       { label: "Cost Savings", value: "$1.2M" },
  //       { label: "Downtime", value: "-60%" }
  //     ],
  //     technologies: ["Python", "Apache Kafka", "PostgreSQL", "Grafana"],
  //     color: "from-dashboard-primary to-dashboard-accent"
  //   }
  // ];

  return (
    <section id="projects" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-dashboard-primary to-dashboard-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer dashboard-card ${
                  isVisible ? "animate-fade-scale" : "opacity-0"
                }`} 
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-15 transition-opacity duration-300`} />
                
                {/* Animated Data Overlay */}
                {hoveredProject === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-4 right-4 w-16 h-16 opacity-20">
                      <svg className="w-full h-full animate-spin" style={{ animationDuration: '8s' }}>
                        <circle cx="32" cy="32" r="30" stroke="hsl(var(--dashboard-primary))" strokeWidth="2" fill="none" strokeDasharray="10 5" />
                      </svg>
                    </div>
                    <div className="absolute bottom-4 left-4 w-20 h-12 opacity-20">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div
                          key={i}
                          className={`absolute bottom-0 w-3 bg-gradient-to-t ${project.color} rounded-t`}
                          style={{
                            left: `${i * 16}px`,
                            height: `${20 + Math.random() * 20}px`,
                            animation: `fillBar 1s ease-out ${i * 0.1}s forwards`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <project.icon className="text-white" size={24} />
                    </div>
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {project.link && (
                          <>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <Button size="icon" variant="ghost" className="h-8 w-8">
                                <Github size={16} />
                              </Button>
                            </a>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <Button size="icon" variant="ghost" className="h-8 w-8">
                                <ExternalLink size={16} />
                              </Button>
                            </a>
                          </>
                        )}
                      </div>

                    {/* <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="icon" variant="ghost" className="h-8 w-8">
                        <Github size={16} />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-8 w-8">
                        <ExternalLink size={16} />
                      </Button>
                    </div> */}
                  </div>




                  <h3 className="text-xl font-bold mb-3 group-hover:text-dashboard-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Animated Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.stats.map((stat, idx) => (
                      <div key={idx} className="text-center p-3 dashboard-card">
                        <div className="font-bold text-lg text-dashboard-primary">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="bg-dashboard-primary/10 text-dashboard-primary border-dashboard-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
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
