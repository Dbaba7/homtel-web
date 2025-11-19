import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

interface HeroProps {
  onBookNowClick: () => void;
}

export function Hero({ onBookNowClick }: HeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} id="home" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <img
          src="/images/hero-lobby.png"
          alt="Hotel Lobby"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Enjoy A Luxury Experience<br />in Yola
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200">
            Experience the perfect blend of elegance, comfort, and exceptional service at Homtel Derivative and Suites
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("about")}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#8B4513] px-8 py-6 text-lg"
            >
              DISCOVER MORE
            </Button>
            <Button
              onClick={onBookNowClick}
              className="bg-[#D2691E] hover:bg-[#8B4513] text-white px-8 py-6 text-lg"
            >
              BOOK NOW
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
