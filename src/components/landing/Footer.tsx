import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/config";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-[#1a1a1a] text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          <div>
            <img src="/logo.jpg" alt="Homtel Logo" className="h-16 w-auto mb-6" />
            <p className="text-gray-400 mb-6 leading-relaxed">
              Experience luxury and comfort at the Pearl of Adamawa. Your satisfaction is our priority.
            </p>
            <div className="space-y-3">
              {siteConfig.contact.phone && (
                <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-3 text-gray-400 hover:text-[#D2691E] transition-colors">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  {siteConfig.contact.phone}
                </a>
              )}
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-gray-400 hover:text-[#D2691E] transition-colors">
                <Mail className="h-5 w-5 flex-shrink-0" />
                {siteConfig.contact.email}
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
                <span>{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Our Links</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection("home")} className="text-gray-400 hover:text-[#D2691E] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="text-gray-400 hover:text-[#D2691E] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("rooms")} className="text-gray-400 hover:text-[#D2691E] transition-colors">
                  Our Rooms
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-gray-400 hover:text-[#D2691E] transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-gray-400 hover:text-[#D2691E] transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Restaurant & Bar</li>
              <li className="text-gray-400">Swimming Pool</li>
              <li className="text-gray-400">Fitness & Spa</li>
              <li className="text-gray-400">Room Service</li>
              <li className="text-gray-400">Laundry Service</li>
              <li className="text-gray-400">Airport Transfer</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to receive our latest offers and news</p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
              />
              <Button className="w-full bg-[#D2691E] hover:bg-[#8B4513] text-white">
                SUBSCRIBE
              </Button>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3">Follow Us</p>
              {siteConfig.social?.facebook && (
                <a
                  href={`https://facebook.com/${siteConfig.social.facebook.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-[#D2691E] rounded-full transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-white/10 pt-8"
        >
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Homtel Derivative and Suites. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
