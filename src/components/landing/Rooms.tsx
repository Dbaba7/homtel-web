import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wifi,
  Wind,
  Tv,
  Coffee,
  ShowerHead,
  ParkingCircle,
  CheckCircle2
} from "lucide-react";
import { ImageGallery } from "./ImageGallery";

const rooms = [
  {
    id: 1,
    name: "Standard Room",
    price: "12,300",
    description: "Comfortable and elegant room perfect for business or leisure travelers.",
    amenities: [Wifi, Wind, Tv, Coffee, ShowerHead],
    detailedAmenities: [
      "Queen-sized bed", "High-speed Wi-Fi", "Flat-screen TV with cable",
      "Work desk", "In-room coffee maker", "En-suite bathroom with shower"
    ],
    images: [
      { src: "/images/standard_room.jpg", thumb: "/images/standard_room.jpg", subHtml: "Standard Room" },
      { src: "/images/deluxe_room.jpg", thumb: "/images/deluxe_room.jpg", subHtml: "Deluxe Room" },
      { src: "/images/executive_suite.jpg", thumb: "/images/executive_suite.jpg", subHtml: "Executive Suite" },
    ]
  },
  {
    id: 2,
    name: "Deluxe Room",
    price: "14,950",
    description: "Spacious room with premium amenities and stunning city views.",
    amenities: [Wifi, Wind, Tv, Coffee, ShowerHead],
    detailedAmenities: [
      "King-sized bed", "Enhanced Wi-Fi", "Smart TV with streaming services",
      "Seating area", "Mini-fridge", "Premium bath amenities"
    ],
    images: [
      { src: "/images/deluxe_room.jpg", thumb: "/images/deluxe_room.jpg", subHtml: "Deluxe Room" },
      { src: "/images/standard_room.jpg", thumb: "/images/standard_room.jpg", subHtml: "Standard Room" },
      { src: "/images/executive_suite.jpg", thumb: "/images/executive_suite.jpg", subHtml: "Executive Suite" },
    ]
  },
  {
    id: 3,
    name: "Executive Suite",
    price: "17,600",
    description: "Luxurious suite with separate living area and enhanced features.",
    amenities: [Wifi, Wind, Tv, Coffee, ShowerHead],
    detailedAmenities: [
      "Separate living room", "King-sized bed", "55-inch Smart TV",
      "Nespresso machine", "Walk-in closet", "Jacuzzi bathtub"
    ],
    images: [
      { src: "/images/executive_suite.jpg", thumb: "/images/executive_suite.jpg", subHtml: "Executive Suite" },
      { src: "/images/standard_room.jpg", thumb: "/images/standard_room.jpg", subHtml: "Standard Room" },
      { src: "/images/deluxe_room.jpg", thumb: "/images/deluxe_room.jpg", subHtml: "Deluxe Room" },
    ]
  },
  {
    id: 4,
    name: "Diplomatic Suite",
    price: "25,500",
    description: "Our most prestigious accommodation with exclusive VIP services.",
    amenities: [Wifi, Wind, Tv, Coffee, ShowerHead, ParkingCircle],
    detailedAmenities: [
      "Panoramic city views", "Private balcony", "Kitchenette",
      "Complimentary breakfast", "Personal butler service", "Airport transfer"
    ],
    images: [
      { src: "/images/diplomat_suite.jpg", thumb: "/images/diplomat_suite.jpg", subHtml: "Diplomatic Suite" },
      { src: "/images/standard_room.jpg", thumb: "/images/standard_room.jpg", subHtml: "Standard Room" },
      { src: "/images/deluxe_room.jpg", thumb: "/images/deluxe_room.jpg", subHtml: "Deluxe Room" },
    ]
  }
];

interface RoomsProps {
  onBookNowClick: () => void;
}

export function Rooms({ onBookNowClick }: RoomsProps) {
  const [expandedRoom, setExpandedRoom] = useState<number | null>(null);

  return (
    <section id="rooms" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D2691E] font-semibold text-sm uppercase tracking-wider">Accommodation</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            The Pleasure Of Luxury<br />Rooms & Suites
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our selection of elegantly designed rooms and suites, each crafted to provide ultimate comfort
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-[#D2691E]/20">
                <ImageGallery images={room.images}>
                  <div className="relative h-80 overflow-hidden cursor-pointer">
                    <img
                      src={room.images[0].src}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-[#D2691E] text-white px-4 py-2 rounded-full font-bold">
                      ₦{room.price}/night
                    </div>
                  </div>
                </ImageGallery>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{room.name}</h3>
                  <div className="flex gap-4 mb-4">
                    {room.amenities.map((AmenityIcon, i) => (
                      <div key={i} className="flex items-center justify-center w-10 h-10 bg-muted rounded-full">
                        <AmenityIcon className="h-5 w-5 text-[#D2691E]" />
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{room.description}</p>

                  <AnimatePresence>
                    {expandedRoom === room.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border mt-6 pt-6">
                          <h4 className="font-bold text-lg mb-4 text-foreground">What's Included:</h4>
                          <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                            {room.detailedAmenities.map((amenity, i) => (
                              <li key={i} className="flex items-center gap-3 text-muted-foreground">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                <span>{amenity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex gap-4 mt-6">
                    <Button
                      onClick={() => setExpandedRoom(expandedRoom === room.id ? null : room.id)}
                      variant="outline"
                      className="w-full"
                    >
                      {expandedRoom === room.id ? "Hide Details" : "View Details"}
                    </Button>
                    <Button
                      onClick={onBookNowClick}
                      className="w-full bg-[#D2691E] hover:bg-[#8B4513] text-white"
                    >
                      BOOK NOW
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
