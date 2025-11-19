import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ReservationProps {
  onBookNowClick: () => void;
}

export function Reservation({ onBookNowClick }: ReservationProps) {
  return (
    <section id="booking" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="bg-background rounded-lg shadow-xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Experience Luxury?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Don't wait to secure your spot at the finest hotel in Yola. Click the button below to start your booking process and prepare for an unforgettable stay.
          </p>
          <Button
            size="lg"
            onClick={onBookNowClick}
            className="bg-[#D2691E] hover:bg-[#8B4513] text-white px-10 py-6 text-lg font-semibold transition-transform transform hover:scale-105"
          >
            RESERVE YOUR ROOM NOW
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
