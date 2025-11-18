import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function Reservation() {
  return (
    <section id="booking" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-[#D2691E] font-semibold text-sm uppercase tracking-wider">Reservation</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
              Make Your Reservation
            </h2>
            <p className="text-muted-foreground text-lg">
              Complete the form below to book your luxury experience
            </p>
          </div>

          <Card className="shadow-2xl border-[#D2691E]/20">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-semibold mb-2 block">Full Name *</Label>
                    <Input id="name" placeholder="Enter your name" className="border-[#D2691E]/30 focus:border-[#D2691E]" required />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold mb-2 block">Email *</Label>
                    <Input id="email" type="email" placeholder="Enter your email" className="border-[#D2691E]/30 focus:border-[#D2691E]" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-sm font-semibold mb-2 block">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+234" className="border-[#D2691E]/30 focus:border-[#D2691E]" required />
                  </div>
                  <div>
                    <Label htmlFor="room-type" className="text-sm font-semibold mb-2 block">Room Type *</Label>
                    <select
                      id="room-type"
                      className="w-full h-10 px-4 rounded-md border border-[#D2691E]/30 focus:border-[#D2691E] focus:outline-none focus:ring-2 focus:ring-[#D2691E]/20 bg-background"
                      required
                    >
                      <option value="">Select room type</option>
                      <option>Standard Room - ₦12,300/night</option>
                      <option>Deluxe Room - ₦14,950/night</option>
                      <option>Executive Suite - ₦17,600/night</option>
                      <option>Diplomatic Suite - ₦25,500/night</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="booking-checkin" className="text-sm font-semibold mb-2 block">Check-in Date *</Label>
                    <Input id="booking-checkin" type="date" className="border-[#D2691E]/30 focus:border-[#D2691E]" required />
                  </div>
                  <div>
                    <Label htmlFor="booking-checkout" className="text-sm font-semibold mb-2 block">Check-out Date *</Label>
                    <Input id="booking-checkout" type="date" className="border-[#D2691E]/30 focus:border-[#D2691E]" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="booking-guests" className="text-sm font-semibold mb-2 block">Number of Guests *</Label>
                    <select
                      id="booking-guests"
                      className="w-full h-10 px-4 rounded-md border border-[#D2691E]/30 focus:border-[#D2691E] focus:outline-none focus:ring-2 focus:ring-[#D2691E]/20 bg-background"
                      required
                    >
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="booking-rooms" className="text-sm font-semibold mb-2 block">Number of Rooms *</Label>
                    <select
                      id="booking-rooms"
                      className="w-full h-10 px-4 rounded-md border border-[#D2691E]/30 focus:border-[#D2691E] focus:outline-none focus:ring-2 focus:ring-[#D2691E]/20 bg-background"
                      required
                    >
                      <option>1 Room</option>
                      <option>2 Rooms</option>
                      <option>3 Rooms</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-semibold mb-2 block">Special Requests</Label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Any special requests or requirements?"
                    className="w-full px-4 py-2 rounded-md border border-[#D2691E]/30 focus:border-[#D2691E] focus:outline-none focus:ring-2 focus:ring-[#D2691E]/20 bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#D2691E] hover:bg-[#8B4513] text-white py-6 text-lg"
                >
                  BOOK NOW
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
