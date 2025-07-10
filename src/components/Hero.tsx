// import { useEffect, useState } from "react";
// import { ChevronDown, BarChart3, TrendingUp, Database, Activity } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { MetricCard } from "./MetricCard";

// export const Hero = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-dashboard-surface/20">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 opacity-20">
//           <BarChart3 size={120} className="text-dashboard-primary floating-chart" />
//         </div>
//         <div className="absolute top-40 right-20 opacity-20">
//           <TrendingUp size={100} className="text-dashboard-secondary floating-chart" style={{ animationDelay: '1s' }} />
//         </div>
//         <div className="absolute bottom-20 left-20 opacity-20">
//           <Database size={140} className="text-dashboard-accent floating-chart" style={{ animationDelay: '2s' }} />
//         </div>
//         <div className="absolute top-1/2 right-10 opacity-20">
//           <Activity size={80} className="text-dashboard-primary floating-chart" style={{ animationDelay: '0.5s' }} />
//         </div>
//       </div>

//       <div className="container mx-auto px-4 text-center z-10">
//         <div className={`transition-all duration-1000 ${
//           isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//         }`}>
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-dashboard-primary via-dashboard-secondary to-dashboard-accent bg-clip-text text-transparent">
//             Hi, I'm Gopi Vardhan
//           </h1>
          
//           <div className={`transition-all duration-1000 delay-300 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}>
//             <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
//               A Data Analyst who turns raw numbers into <span className="text-dashboard-primary font-semibold">clear, actionable insights</span>
//             </p>
//           </div>

//           <div className={`transition-all duration-1000 delay-500 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}>
//             <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
//               Graduate student in Data Science with experience in financial and operational analytics. 
//               I love solving complex problems with data-driven solutions.
//             </p>
//           </div>

//           {/* Hero Metrics */}
//           {/* <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-700 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}>
//             <MetricCard
//               title="Projects"
//               value={15}
//               subtitle="+3 this year"
//               trend="up"
//               icon={<BarChart3 size={20} />}
//               className="delay-100"
//             />
//             <MetricCard
//               title="Data Points"
//               value="2.5M+"
//               subtitle="Analyzed"
//               icon={<Database size={20} />}
//               className="delay-200"
//             />
//             <MetricCard
//               title="Efficiency"
//               value="40%"
//               subtitle="Improved"
//               trend="up"
//               icon={<TrendingUp size={20} />}
//               className="delay-300"
//             />
//             <MetricCard
//               title="Cost Saved"
//               value="$2.5M"
//               subtitle="Annual"
//               trend="up"
//               icon={<Activity size={20} />}
//               className="delay-400"
//             />
//           </div> */}
//           {/* Hero Metrics */}
//           <div
//             className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-700 ${
//               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//           >
//             <MetricCard
//               title="Projects Completed"
//               value={15}
//               subtitle="Academic & Client"
//               trend="up"
//               icon={<BarChart3 size={20} />}
//               className="delay-100"
//             />
//             <MetricCard
//               title="Data Processed"
//               value="35M+"
//               subtitle="USD Analyzed"
//               icon={<Database size={20} />}
//               className="delay-200"
//             />
//             <MetricCard
//               title="Reports Automated"
//               value="20+"
//               subtitle="Dashboards & ETL"
//               trend="up"
//               icon={<TrendingUp size={20} />}
//               className="delay-300"
//             />
//             <MetricCard
//               title="Certifications"
//               value="1"
//               subtitle="AWS Practitioner"
//               trend="up"
//               icon={<Activity size={20} />}
//               className="delay-400"
//             />
//           </div>


//           <div className={`transition-all duration-1000 delay-900 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button size="lg" className="bg-dashboard-primary hover:bg-dashboard-primary/90 text-white">
//                 <a href="#projects">View My Projects</a>
//               </Button>
//               <Button size="lg" variant="outline" className="border-dashboard-primary text-dashboard-primary hover:bg-dashboard-primary hover:text-white">
//                 <a href="#contact">Let's Talk Data</a>
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ChevronDown className="text-dashboard-primary" size={24} />
//         </div>
//       </div>
//     </section>
//   );
// };


// import { useEffect, useState } from "react";
// import { ChevronDown, BarChart3, TrendingUp, Database, Activity, Zap } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export const MetricCard = ({ title, value, subtitle, trend, icon, className = "" }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (typeof value !== "number") {
//       setCount(value);
//       return;
//     }
//     let start = 0;
//     const duration = 2000;
//     const stepTime = 16;
//     const increment = Math.ceil(value / (duration / stepTime));
//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= value) {
//         setCount(value);
//         clearInterval(timer);
//       } else {
//         setCount(start);
//       }
//     }, stepTime);
//     return () => clearInterval(timer);
//   }, [value]);

//   return (
//     <div className={`bg-white/5 rounded-lg p-4 text-center ${className}`}>
//       <div className="flex items-center justify-center mb-2">{icon}</div>
//       <div className="text-3xl font-bold text-dashboard-primary">{typeof value === "number" ? count : value}</div>
//       <div className="text-sm text-muted-foreground">{title}</div>
//       <div className="text-xs text-green-500">{subtitle}</div>
//     </div>
//   );
// };

// export const Hero = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-dashboard-surface/20">
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 opacity-20">
//           <BarChart3 size={120} className="text-dashboard-primary floating-chart" />
//         </div>
//         <div className="absolute top-40 right-20 opacity-20">
//           <TrendingUp size={100} className="text-dashboard-secondary floating-chart" style={{ animationDelay: '1s' }} />
//         </div>
//         <div className="absolute bottom-20 left-20 opacity-20">
//           <Database size={140} className="text-dashboard-accent floating-chart" style={{ animationDelay: '2s' }} />
//         </div>
//         <div className="absolute top-1/2 right-10 opacity-20">
//           <Activity size={80} className="text-dashboard-primary floating-chart" style={{ animationDelay: '0.5s' }} />
//         </div>
//       </div>

//       <div className="container mx-auto px-4 text-center z-10">
//         <div className={`transition-all duration-1000 ${
//           isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//         }`}>
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 text-dashboard-primary">
//             Hey, I'm Gopi Vardhan
//           </h1>

//           <div className={`transition-all duration-1000 delay-300 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}>
//             <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
//               A Data Analyst who turns raw numbers into <span className="text-dashboard-primary font-semibold">clear, actionable insights</span>
//             </p>
//           </div>

//           <div className={`transition-all duration-1000 delay-500 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}>
//             <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
//               Graduate student in Data Science with experience in financial and operational analytics.
//               I love solving complex problems with data-driven solutions.
//             </p>
//           </div>

//           <div
//             className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-700 ${
//               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//           >
//             <MetricCard
//               title="Projects Built"
//               value={8}
//               subtitle="Open Source & Academic"
//               trend="up"
//               icon={<BarChart3 size={20} />}
//               className="delay-100"
//             />
//             <MetricCard
//               title="Workflows Automated"
//               value={12}
//               subtitle="ETL, Pipelines"
//               trend="up"
//               icon={<Zap size={20} />}
//               className="delay-200"
//             />
//             <MetricCard
//               title="Forecasting Models"
//               value={5}
//               subtitle="ARIMA, Prophet"
//               trend="up"
//               icon={<TrendingUp size={20} />}
//               className="delay-300"
//             />
//             <MetricCard
//               title="Certifications"
//               value={1}
//               subtitle="AWS Practitioner"
//               trend="up"
//               icon={<Activity size={20} />}
//               className="delay-400"
//             />
//           </div>

//           <div className={`transition-all duration-1000 delay-900 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button size="lg" className="bg-dashboard-primary hover:bg-dashboard-primary/90 text-white">
//                 <a href="#projects">View My Projects</a>
//               </Button>
//               <Button size="lg" variant="outline" className="border-dashboard-primary text-dashboard-primary hover:bg-dashboard-primary hover:text-white">
//                 <a href="#contact">Let's Talk Data</a>
//               </Button>
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ChevronDown className="text-dashboard-primary" size={24} />
//         </div>
//       </div>
//     </section>
//   );
// };

import { useEffect, useState } from "react";
import { ChevronDown, BarChart3, TrendingUp, Database, Activity, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MetricCard = ({ title, value, subtitle, trend, icon, className = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof value !== "number") {
      setCount(value);
      return;
    }
    let start = 0;
    const duration = 2000;
    const stepTime = 16;
    const increment = Math.ceil(value / (duration / stepTime));
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className={`bg-white/5 rounded-lg p-4 text-center ${className}`}>
      <div className="flex items-center justify-center mb-2">{icon}</div>
      <div className="text-3xl font-bold text-dashboard-primary">{typeof value === "number" ? count : value}</div>
      <div className="text-sm text-muted-foreground">{title}</div>
      <div className="text-xs text-green-500">{subtitle}</div>
    </div>
  );
};

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-dashboard-surface/20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 opacity-20">
          <BarChart3 size={120} className="text-dashboard-primary floating-chart" />
        </div>
        <div className="absolute top-40 right-20 opacity-20">
          <TrendingUp size={100} className="text-dashboard-secondary floating-chart" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute bottom-20 left-20 opacity-20">
          <Database size={140} className="text-dashboard-accent floating-chart" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute top-1/2 right-10 opacity-20">
          <Activity size={80} className="text-dashboard-primary floating-chart" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center mb-6 gap-6">
          
            <h1 className="text-5xl md:text-7xl font-bold text-dashboard-primary">Hey, I'm Gopi Vardhan</h1>
          </div>
          {/* <div className="flex flex-col md:flex-row items-center justify-center mb-6 gap-8">
            <img src="public/profile.jpeg" alt="Gopi Vardhan" className="w-64 h-80 rounded-lg border-4 border-dashboard-primary shadow-lg object-cover" />
            <h1 className="text-5xl md:text-7xl font-bold text-dashboard-primary text-center md:text-left">
              Hey, I'm Gopi Vardhan
            </h1>
          </div> */}

          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              A Data Analyst who turns raw numbers into <span className="text-dashboard-primary font-semibold">clear, actionable insights</span>
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
              Graduate student in Data Science with experience in financial and operational analytics.
              I love solving complex problems with data-driven solutions.
            </p>
          </div>

          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <MetricCard
              title="Projects Built"
              value={8}
              subtitle="Open Source & Academic"
              trend="up"
              icon={<BarChart3 size={20} />}
              className="delay-100"
            />
            <MetricCard
              title="Workflows Automated"
              value={12}
              subtitle="ETL, Pipelines"
              trend="up"
              icon={<Zap size={20} />}
              className="delay-200"
            />
            <MetricCard
              title="Forecasting Models"
              value={5}
              subtitle="ARIMA, Prophet"
              trend="up"
              icon={<TrendingUp size={20} />}
              className="delay-300"
            />
            <MetricCard
              title="Certifications"
              value={1}
              subtitle="AWS Practitioner"
              trend="up"
              icon={<Activity size={20} />}
              className="delay-400"
            />
          </div>

          <div className={`transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-dashboard-primary hover:bg-dashboard-primary/90 text-white">
                <a href="#projects">View My Projects</a>
              </Button>
              <Button size="lg" variant="outline" className="border-dashboard-primary text-dashboard-primary hover:bg-dashboard-primary hover:text-white">
                <a href="#contact">Let's Talk Data</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-dashboard-primary" size={24} />
        </div>
      </div>
    </section>
  );
};

