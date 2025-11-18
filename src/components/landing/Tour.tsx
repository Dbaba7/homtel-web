import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ChevronRight } from "lucide-react";
import { useRef } from "react";

export function Tour() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <img
          src="/images/hero-lobby.png"
          alt="Hotel Tour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="h-12 w-12 text-[#D2691E] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Take A Tour Of Luxury
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Experience the elegance and sophistication of Homtel Derivative and Suites
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-[#D2691E] hover:bg-[#8B4513] text-white px-8 py-6 text-lg"
          >
            CONTACT US
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
