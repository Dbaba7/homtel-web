import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight } from "lucide-react";

export function About() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <span className="text-[#D2691E] font-semibold text-sm uppercase tracking-wider">Welcome to HDS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Most Safe & Rated Hotel<br />in Yola, Adamawa
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Homtel Derivative and Suites stands as a beacon of luxury and comfort in the heart of Yola.
              Our commitment to excellence has made us the premier choice for discerning travelers seeking
              an unforgettable experience.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With world-class amenities, impeccable service, and a dedication to your comfort and safety,
              we ensure every moment of your stay is exceptional.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="h-6 w-6 text-[#D2691E] flex-shrink-0" />
                <span className="text-foreground">24/7 Premium Security & Smart Lock Systems</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-6 w-6 text-[#D2691E] flex-shrink-0" />
                <span className="text-foreground">Award-Winning Restaurant & Bar</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-6 w-6 text-[#D2691E] flex-shrink-0" />
                <span className="text-foreground">Luxurious Swimming Pool & Spa Facilities</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-6 w-6 text-[#D2691E] flex-shrink-0" />
                <span className="text-foreground">Complimentary High-Speed WiFi Throughout</span>
              </li>
            </ul>
            <Button
              onClick={() => scrollToSection("rooms")}
              className="bg-[#D2691E] hover:bg-[#8B4513] text-white px-8"
            >
              DISCOVER MORE
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img
                src="/images/standard_room.jpg"
                alt="Hotel Room"
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <img
                src="/images/pool.png"
                alt="Pool"
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="/images/restaurant.png"
                alt="Restaurant"
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <img
                src="/images/deluxe_room.jpg"
                alt="Deluxe Room"
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
