
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-dashboard-primary to-dashboard-secondary bg-clip-text text-transparent">
            Gopi Vardhan
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-dashboard-primary transition-colors duration-200 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dashboard-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Download Resume link */}
              <a
                href="/Portfoli0/resume.pdf"
                // download
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-dashboard-primary text-background rounded-md font-medium transition-colors duration-200 hover:bg-dashboard-secondary"
              >
                Download Resume
              </a>

            
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border bg-background/95 backdrop-blur-md rounded-lg">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 px-4 text-foreground/80 hover:text-dashboard-primary hover:bg-dashboard-surface/50 transition-colors rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {/* Download Resume for mobile */}
              <a
                href="/Portfoli0/resume.pdf"
                // download
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 px-4 bg-dashboard-primary text-background font-medium rounded-md text-center mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download Resume
              </a>
          </div>
        )}
      </div>
    </nav>
  );
};
