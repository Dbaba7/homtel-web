import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wifi,
  Wind,
  Shield,
  UtensilsCrossed,
  Dumbbell,
  Waves
} from "lucide-react";

export function Features() {
  const features = [
    { icon: Wifi, title: "Free High-Speed WiFi", description: "Stay connected with complimentary high-speed internet throughout the hotel" },
    { icon: Wind, title: "Air Conditioner", description: "Climate-controlled rooms ensuring your comfort in any season" },
    { icon: Shield, title: "Smart Security", description: "24/7 security surveillance and smart lock systems for your safety" },
    { icon: UtensilsCrossed, title: "Restaurant & Bar", description: "Exquisite dining experience with local and international cuisine" },
    { icon: Dumbbell, title: "Fitness & Spa", description: "Modern gym equipment and relaxing spa treatments" },
    { icon: Waves, title: "Swimming Pool", description: "Luxurious outdoor pool with breathtaking views" }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D2691E] font-semibold text-sm uppercase tracking-wider">Our Facilities</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Explore The Hotel
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our extensive range of world-class facilities designed for your comfort and convenience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-300 border-[#D2691E]/20 hover:border-[#D2691E] h-full">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-[#D2691E]/10 rounded-full mb-6 group-hover:bg-[#D2691E] transition-colors">
                      <Icon className="h-10 w-10 text-[#D2691E] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
