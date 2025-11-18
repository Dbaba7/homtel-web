import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Bed } from "lucide-react";
import { motion } from "framer-motion";

export function BookingForm() {
  return (
    <section className="py-8 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="shadow-xl border-[#D2691E]/20">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 items-end">
                <div>
                  <Label htmlFor="checkin" className="text-sm font-semibold mb-2 block">Check-in</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="checkin"
                      type="date"
                      className="pl-10 border-[#D2691E]/30 focus:border-[#D2691E]"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="checkout" className="text-sm font-semibold mb-2 block">Check-out</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="checkout"
                      type="date"
                      className="pl-10 border-[#D2691E]/30 focus:border-[#D2691E]"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="guests" className="text-sm font-semibold mb-2 block">Guests</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <select
                      id="guests"
                      className="w-full h-10 pl-10 pr-4 rounded-md border border-[#D2691E]/30 focus:border-[#D2691E] focus:outline-none focus:ring-2 focus:ring-[#D2691E]/20 bg-background"
                    >
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                    </select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="rooms-select" className="text-sm font-semibold mb-2 block">Rooms</Label>
                  <div className="relative">
                    <Bed className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <select
                      id="rooms-select"
                      className="w-full h-10 pl-10 pr-4 rounded-md border border-[#D2691E]/30 focus:border-[#D2691E] focus:outline-none focus:ring-2 focus:ring-[#D2691E]/20 bg-background"
                    >
                      <option>1 Room</option>
                      <option>2 Rooms</option>
                      <option>3 Rooms</option>
                    </select>
                  </div>
                </div>
                <Button className="bg-[#D2691E] hover:bg-[#8B4513] text-white h-10">
                  CHECK AVAILABILITY
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
