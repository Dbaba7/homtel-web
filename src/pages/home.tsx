import { useState } from "react";
import { About } from "@/components/landing/About";
import { Experience } from "@/components/landing/Experience";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Reservation } from "@/components/landing/Reservation";
import { Rooms } from "@/components/landing/Rooms";
import { Services } from "@/components/landing/Services";
import { Testimonials } from "@/components/landing/Testimonials";
import { Tour } from "@/components/landing/Tour";
import { BookingModal } from "@/components/landing/BookingModal";

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onBookNowClick={openBookingModal} />
      <main className="pt-32">
        <Hero onBookNowClick={openBookingModal} />
        <About />
        <Features />
        <Rooms onBookNowClick={openBookingModal} />
        <Experience />
        <Services />
        <Testimonials />
        <Reservation onBookNowClick={openBookingModal} />
        <Tour />
      </main>
      <Footer />
      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
    </div>
  );
}
