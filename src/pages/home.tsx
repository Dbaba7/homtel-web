import { About } from "@/components/landing/About";
import { BookingForm } from "@/components/landing/BookingForm";
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

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <Hero />
        <BookingForm />
        <About />
        <Features />
        <Rooms />
        <Experience />
        <Services />
        <Testimonials />
        <Reservation />
        <Tour />
      </main>
      <Footer />
    </div>
  );
}
