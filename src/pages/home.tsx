import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  Users, 
  Bed, 
  Check, 
  Star, 
  Wifi, 
  Wind, 
  Shield, 
  UtensilsCrossed, 
  Dumbbell, 
  Waves,
  Phone,
  Mail,
  MapPin,
  Facebook,
  ChevronRight,
  Sparkles,
  Coffee,
  Tv,
  ShowerHead,
  ParkingCircle
} from "lucide-react";
import { siteConfig } from "@/config";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const features = [
    { icon: Wifi, title: "Free High-Speed WiFi", description: "Stay connected with complimentary high-speed internet throughout the hotel" },
    { icon: Wind, title: "Air Conditioner", description: "Climate-controlled rooms ensuring your comfort in any season" },
    { icon: Shield, title: "Smart Security", description: "24/7 security surveillance and smart lock systems for your safety" },
    { icon: UtensilsCrossed, title: "Restaurant & Bar", description: "Exquisite dining experience with local and international cuisine" },
    { icon: Dumbbell, title: "Fitness & Spa", description: "Modern gym equipment and relaxing spa treatments" },
    { icon: Waves, title: "Swimming Pool", description: "Luxurious outdoor pool with breathtaking views" }
  ];

  const rooms = [
    {
      id: 1,
      name: "Standard Room",
      price: "12,300",
      image: "/images/standard_room.jpg",
      description: "Comfortable and elegant room perfect for business or leisure travelers",
      amenities: [Wifi, Wind, Tv, Coffee, ShowerHead]
    },
    {
      id: 2,
      name: "Deluxe Room",
      price: "14,950",
      image: "/images/deluxe_room.jpg",
      description: "Spacious room with premium amenities and stunning city views",
      amenities: [Wifi, Wind, Tv, Coffee, ShowerHead]
    },
    {
      id: 3,
      name: "Executive Suite",
      price: "17,600",
      image: "/images/executive_suite.jpg",
      description: "Luxurious suite with separate living area and enhanced features",
      amenities: [Wifi, Wind, Tv, Coffee, ShowerHead]
    },
    {
      id: 4,
      name: "Diplomatic Suite",
      price: "25,500",
      image: "/images/diplomat_suite.jpg",
      description: "Our most prestigious accommodation with exclusive VIP services",
      amenities: [Wifi, Wind, Tv, Coffee, ShowerHead, ParkingCircle]
    }
  ];

  const services = [
    { name: "Room Cleaning", price: "5,000", description: "Daily housekeeping and room maintenance service" },
    { name: "Laundry Service", price: "8,000", description: "Professional laundry and dry cleaning services" },
    { name: "Airport Transfer", price: "15,000", description: "Comfortable transportation to and from the airport" }
  ];

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
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 bg-background border-b border-border">
        <div className="bg-[#8B4513] text-white py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              {siteConfig.contact.phone && (
                <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 hover:text-orange-200 transition-colors">
                  <Phone className="h-4 w-4" />
                  {siteConfig.contact.phone}
                </a>
              )}
              <a href={`mailto:${siteConfig.contact.email}`} className="hidden md:flex items-center gap-2 hover:text-orange-200 transition-colors">
                <Mail className="h-4 w-4" />
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-4">
              {siteConfig.social?.facebook && (
                <a href={`https://facebook.com/${siteConfig.social.facebook.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-orange-200 transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <img src="/logo.jpg" alt="Homtel Logo" className="h-14 w-auto" />
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-[#D2691E] transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection("rooms")} className="text-foreground hover:text-[#D2691E] transition-colors font-medium">
                Our Rooms
              </button>
              <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-[#D2691E] transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-[#D2691E] transition-colors font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-[#D2691E] transition-colors font-medium">
                Contact
              </button>
            </nav>

            <Button 
              onClick={() => scrollToSection("booking")} 
              className="hidden lg:flex bg-[#D2691E] hover:bg-[#8B4513] text-white px-8"
            >
              BOOK NOW
            </Button>

            <button
              className="lg:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <button onClick={() => scrollToSection("home")} className="text-left text-foreground hover:text-[#D2691E] transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection("rooms")} className="text-left text-foreground hover:text-[#D2691E] transition-colors font-medium">
                Our Rooms
              </button>
              <button onClick={() => scrollToSection("about")} className="text-left text-foreground hover:text-[#D2691E] transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection("services")} className="text-left text-foreground hover:text-[#D2691E] transition-colors font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-left text-foreground hover:text-[#D2691E] transition-colors font-medium">
                Contact
              </button>
              <Button onClick={() => scrollToSection("booking")} className="bg-[#D2691E] hover:bg-[#8B4513] text-white">
                BOOK NOW
              </Button>
            </nav>
          </motion.div>
        )}
      </header>

      <main className="pt-32">
        <section id="home" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero-lobby.png" 
              alt="Hotel Lobby" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
          </div>

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
                  className="bg-[#D2691E] hover:bg-[#8B4513] text-white px-8 py-6 text-lg"
                >
                  DISCOVER MORE
                </Button>
                <Button 
                  onClick={() => scrollToSection("rooms")} 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-[#8B4513] px-8 py-6 text-lg"
                >
                  VIEW ROOMS
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-8 bg-background border-y border-border">
          <div className="container mx-auto px-4">
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
          </div>
        </section>

        <section id="about" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-4">
                  <span className="text-[#D2691E] font-semibold text-sm uppercase tracking-wider">Welcome to HDS</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Most Safe & Rated Hotel<br />in Yola, Adamawa
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Homtel Derivative and Suites stands as a beacon of luxury and comfort in the heart of Yola. 
                  Our commitment to excellence has made us the premier choice for discerning travelers seeking 
                  an unforgettable experience.
                </p>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  With world-class amenities, impeccable service, and a dedication to your comfort and safety, 
                  we ensure every moment of your stay is exceptional.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-[#D2691E] flex-shrink-0" />
                    <span className="text-foreground">24/7 Premium Security & Smart Lock Systems</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-[#D2691E] flex-shrink-0" />
                    <span className="text-foreground">Award-Winning Restaurant & Bar</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-[#D2691E] flex-shrink-0" />
                    <span className="text-foreground">Luxurious Swimming Pool & Spa Facilities</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-[#D2691E] flex-shrink-0" />
                    <span className="text-foreground">Complimentary High-Speed WiFi Throughout</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => scrollToSection("rooms")} 
                  className="bg-[#D2691E] hover:bg-[#8B4513] text-white px-8"
                >
                  DISCOVER MORE
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <img 
                    src="/images/standard_room.jpg" 
                    alt="Hotel Room" 
                    className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src="/images/pool.png" 
                    alt="Pool" 
                    className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img 
                    src="/images/restaurant.png" 
                    alt="Restaurant" 
                    className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src="/images/deluxe_room.jpg" 
                    alt="Deluxe Room" 
                    className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-[#D2691E] font-semibold text-sm uppercase tracking-wider">Our Facilities</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
                Explore The Hotel
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover our extensive range of world-class facilities designed for your comfort and convenience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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

        <section id="rooms" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-[#D2691E] font-semibold text-sm uppercase tracking-wider">Accommodation</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
                The Pleasure Of Luxury<br />Rooms & Suites
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Choose from our selection of elegantly designed rooms and suites, each crafted to provide ultimate comfort
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rooms.map((room, index) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-[#D2691E]/20">
                    <div className="relative h-80 overflow-hidden">
                      <img 
                        src={room.image} 
                        alt={room.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-[#D2691E] text-white px-4 py-2 rounded-full font-bold">
                        ₦{room.price}/night
                      </div>
                    </div>
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
                      <Button 
                        onClick={() => scrollToSection("booking")} 
                        className="w-full bg-[#D2691E] hover:bg-[#8B4513] text-white"
                      >
                        BOOK NOW
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
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
                viewport={{ once: true }}
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

        <section id="services" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-[#D2691E] font-semibold text-sm uppercase tracking-wider">Additional Services</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
                Extra Services For Your Comfort
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Enhance your stay with our premium additional services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-[#D2691E] font-semibold text-sm uppercase tracking-wider">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
                What Our Guests Say
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Read about the experiences of our valued guests
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
        </section>

        <section id="booking" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
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
            </div>
          </div>
        </section>

        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero-lobby.png" 
              alt="Hotel Tour" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

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
      </main>

      <footer id="contact" className="bg-[#1a1a1a] text-white pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <img src="/logo.jpg" alt="Homtel Logo" className="h-16 w-auto mb-6" />
              <p className="text-gray-400 mb-6 leading-relaxed">
                Experience luxury and comfort at the Pearl of Adamawa. Your satisfaction is our priority.
              </p>
              <div className="space-y-3">
                {siteConfig.contact.phone && (
                  <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-3 text-gray-400 hover:text-[#D2691E] transition-colors">
                    <Phone className="h-5 w-5 flex-shrink-0" />
                    {siteConfig.contact.phone}
                  </a>
                )}
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-gray-400 hover:text-[#D2691E] transition-colors">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  {siteConfig.contact.email}
                </a>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
                  <span>{siteConfig.contact.address}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Our Links</h3>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => scrollToSection("home")} className="text-gray-400 hover:text-[#D2691E] transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("about")} className="text-gray-400 hover:text-[#D2691E] transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("rooms")} className="text-gray-400 hover:text-[#D2691E] transition-colors">
                    Our Rooms
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("services")} className="text-gray-400 hover:text-[#D2691E] transition-colors">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")} className="text-gray-400 hover:text-[#D2691E] transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Our Services</h3>
              <ul className="space-y-3">
                <li className="text-gray-400">Restaurant & Bar</li>
                <li className="text-gray-400">Swimming Pool</li>
                <li className="text-gray-400">Fitness & Spa</li>
                <li className="text-gray-400">Room Service</li>
                <li className="text-gray-400">Laundry Service</li>
                <li className="text-gray-400">Airport Transfer</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to receive our latest offers and news</p>
              <div className="space-y-3">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                />
                <Button className="w-full bg-[#D2691E] hover:bg-[#8B4513] text-white">
                  SUBSCRIBE
                </Button>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-400 mb-3">Follow Us</p>
                {siteConfig.social?.facebook && (
                  <a 
                    href={`https://facebook.com/${siteConfig.social.facebook.replace('@', '')}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-[#D2691E] rounded-full transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} Homtel Derivative and Suites. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
