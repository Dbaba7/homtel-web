import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function Services() {
  const services = [
    { name: "Room Cleaning", price: "5,000", description: "Daily housekeeping and room maintenance service" },
    { name: "Laundry Service", price: "8,000", description: "Professional laundry and dry cleaning services" },
    { name: "Airport Transfer", price: "15,000", description: "Comfortable transportation to and from the airport" }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D2691E] font-semibold text-sm uppercase tracking-wider">Additional Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Extra Services For Your Comfort
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enhance your stay with our premium additional services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-[#D2691E]/20 hover:border-[#D2691E] h-full">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground">{service.name}</h3>
                    <span className="text-2xl font-bold text-[#D2691E]">₦{service.price}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
