
// import { useState, useEffect, useRef } from "react";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

// export const Contact = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
//   });
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const { toast } = useToast();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Simulate form submission
//     toast({
//       title: "Message Sent!",
//       description: "Thank you for reaching out. I'll get back to you soon!",
//     });

//     // Reset form
//     setFormData({
//       name: "",
//       email: "",
//       subject: "",
//       message: ""
//     });
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: "Email",
//       value: "guntagopivardhan@gmail.com",
//       color: "from-blue-500 to-cyan-500"
//     },
//     {
//       icon: Phone,
//       label: "Phone",
//       value: "+1 (234) 546-0891",
//       color: "from-teal-500 to-green-500"
//     },
//     {
//       icon: MapPin,
//       label: "Location",
//       value: "Tallahassee, FL",
//       color: "from-purple-500 to-pink-500"
//     }
//   ];

//   return (
//     <section id="contact" className="py-20 bg-slate-50" ref={sectionRef}>
//       <div className="container mx-auto px-4">
//         <div className={`transition-all duration-1000 ${
//           isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//         }`}>
//           <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
//             Let's Talk Data
//           </h2>
//           <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
//             Have a data challenge or want to discuss analytics opportunities? 
//             I'd love to hear from you and explore how we can turn your data into actionable insights.
//           </p>

//           <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {/* Contact Info */}
//             <div className="space-y-6">
//               {contactInfo.map((info, index) => (
//                 <Card key={index} className={`p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 ${
//                   isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
//                 }`} style={{ transitionDelay: `${index * 200}ms` }}>
//                   <div className="flex items-center space-x-4">
//                     <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center`}>
//                       <info.icon className="text-white" size={24} />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold">{info.label}</h3>
//                       <p className="text-foreground/70">{info.value}</p>
//                     </div>
//                   </div>
//                 </Card>
//               ))}

//               {/* Social Links */}
//               <Card className="p-6 hover:shadow-lg transition-all duration-300">
//                 <h3 className="font-semibold mb-4">Connect With Me</h3>
//                 <div className="flex space-x-4">
//                   <Button size="icon" variant="outline" className="hover:bg-blue-600 hover:text-white">
//                     <Linkedin size={20} />
//                   </Button>
//                   <Button size="icon" variant="outline" className="hover:bg-gray-800 hover:text-white">
//                     <Github size={20} />
//                   </Button>
//                   <Button size="icon" variant="outline" className="hover:bg-blue-500 hover:text-white">
//                     <Mail size={20} />
//                   </Button>
//                 </div>
//               </Card>
//             </div>

//             {/* Contact Form */}
//             <div className="lg:col-span-2">
//               <Card className={`p-8 hover:shadow-xl transition-all duration-500 ${
//                 isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
//               }`} style={{ transitionDelay: "400ms" }}>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium mb-2">
//                         Full Name
//                       </label>
//                       <Input
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         placeholder="Your Name"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium mb-2">
//                         Email Address
//                       </label>
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         placeholder="your.email@example.com"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="subject" className="block text-sm font-medium mb-2">
//                       Subject
//                     </label>
//                     <Input
//                       id="subject"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleInputChange}
//                       placeholder="What would you like to discuss?"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium mb-2">
//                       Message
//                     </label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       placeholder="Tell me about your data challenges or project ideas..."
//                       rows={6}
//                       required
//                     />
//                   </div>

//                   <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
//                     <Send size={20} className="mr-2" />
//                     Send Message
//                   </Button>
//                 </form>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const sectionRef = useRef(null);
  const { toast } = useToast();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "guntagopivardhan@gmail.com", color: "from-blue-500 to-cyan-500" },
    { icon: Phone, label: "Phone", value: "+1-234-564-0891", color: "from-teal-500 to-green-500" },
    { icon: MapPin, label: "Location", value: "Tallahassee, FL", color: "from-purple-500 to-pink-500" }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Let's Talk Data</h2>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">Have a data challenge or want to discuss analytics opportunities? I'd love to hear from you and explore how we can turn your data into actionable insights.</p>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className={`p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`} style={{ transitionDelay: `${index * 200}ms` }}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center`}>
                      <info.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{info.label}</h3>
                      <p className="text-foreground/70">{info.value}</p>
                    </div>
                  </div>
                </Card>
              ))}

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="font-semibold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/gopi-vardhan-gunta-6332b418a/" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="outline" className="hover:bg-blue-600 hover:text-white"><Linkedin size={20} /></Button>
                  </a>
                  <a href="https://github.com/GOPIVARDHAN1965" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="outline" className="hover:bg-gray-800 hover:text-white"><Github size={20} /></Button>
                  </a>
                  <a href="https://leetcode.com/gopivardhangunta/" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="outline" className="hover:bg-orange-500 hover:text-white">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card className={`p-8 hover:shadow-xl transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`} style={{ transitionDelay: "400ms" }}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="What would you like to discuss?" required />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell me about your data challenges or project ideas..." rows={6} required />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700"><Send size={20} className="mr-2" />Send Message</Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
