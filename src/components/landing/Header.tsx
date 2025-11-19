import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config";
import { Phone, Mail, Facebook } from "lucide-react";

interface HeaderProps {
  onBookNowClick: () => void;
}

export function Header({ onBookNowClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-background border-b border-border'}`}>
      <div className={`transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'} bg-[#8B4513] text-white`}>
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            {siteConfig.contact.phone && (
              <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 hover:text-orange-200 transition-colors">
                <Phone className="h-4 w-4" />
                {siteConfig.contact.phone}
              </a>
            )}
            <a href={`mailto:${siteConfig.contact.email}`} className="hidden md:flex items-center gap-2 hover:text-orange-200 transition-colors">
              <Mail className="h-4 w-4" />
              {siteConfig.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            {siteConfig.social?.facebook && (
              <a href={`https://facebook.com/${siteConfig.social.facebook.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-orange-200 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
          <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="Homtel Logo" className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-14'} w-auto`} />
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-[#D2691E] transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection("rooms")} className="text-foreground hover:text-[#D2691E] transition-colors font-medium">
              Our Rooms
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-[#D2691E] transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-[#D2691E] transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-[#D2691E] transition-colors font-medium">
              Contact
            </button>
          </nav>

          <Button
            onClick={onBookNowClick}
            className="hidden lg:flex bg-[#D2691E] hover:bg-[#8B4513] text-white px-8"
          >
            BOOK NOW
          </Button>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-background border-t border-border"
        >
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <button onClick={() => scrollToSection("home")} className="text-left text-foreground hover:text-[#D2691E] transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection("rooms")} className="text-left text-foreground hover:text-[#D2691E] transition-colors font-medium">
              Our Rooms
            </button>
            <button onClick={() => scrollToSection("about")} className="text-left text-foreground hover:text-[#D2691E] transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-left text-foreground hover:text-[#D2691E] transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-left text-foreground hover:text-[#D2691E] transition-colors font-medium">
              Contact
            </button>
            <Button onClick={onBookNowClick} className="bg-[#D2691E] hover:bg-[#8B4513] text-white">
              BOOK NOW
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
