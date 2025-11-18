import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ChevronRight } from "lucide-react";

export function Experience() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px] rounded-2xl overflow-hidden"
          >
            <img
              src="/images/executive_suite.jpg"
              alt="Luxury Suite"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <Sparkles className="h-8 w-8 text-[#D2691E] mb-4" />
              <span className="text-[#D2691E] font-semibold text-sm uppercase tracking-wider">Experience Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Pearl of Adamawa<br />
              <span className="text-[#D2691E]">Homtel Derivative and Suites</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Nestled in the heart of Yola, our hotel offers an unparalleled experience that combines
              traditional Nigerian hospitality with modern luxury amenities.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Every detail has been carefully curated to ensure your stay is nothing short of extraordinary.
              From our elegantly appointed rooms to our world-class dining experiences, we set the standard
              for luxury accommodation in Adamawa State.
            </p>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#D2691E] hover:bg-[#8B4513] text-white px-8"
            >
              DISCOVER MORE
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
