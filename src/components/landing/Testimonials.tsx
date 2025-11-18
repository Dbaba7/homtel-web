import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const testimonials = [
    {
      name: "Aisha Mohammed",
      role: "Business Executive",
      rating: 5,
      text: "Exceptional service and beautiful accommodations. The staff went above and beyond to make our stay memorable. Highly recommend!"
    },
    {
      name: "David Okonkwo",
      role: "Travel Blogger",
      rating: 5,
      text: "The best hotel in Yola! Amazing facilities, delicious food, and the location is perfect. Will definitely be back."
    },
    {
      name: "Sarah Williams",
      role: "Leisure Traveler",
      rating: 5,
      text: "A truly luxurious experience. From check-in to check-out, everything was perfect. The pool area is stunning!"
    }
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
          <span className="text-[#D2691E] font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            What Our Guests Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Read about the experiences of our valued guests
          </p>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-[#D2691E]/20">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#D2691E] text-[#D2691E]" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
