import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import DatePicker from "react-datepicker";
import { Button } from "@/components/ui/button";
import { X, Calendar, User, BedDouble } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";
import "@/styles/datepicker.css";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [roomType, setRoomType] = useState("Standard Room");

  const roomTypes = [
    "Standard Room",
    "Deluxe Room",
    "Executive Suite",
    "Diplomatic Suite",
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the booking logic here
    console.log({
      startDate,
      endDate,
      adults,
      children,
      roomType,
    });
    onClose();
    alert("Thank you for your booking inquiry!");
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-lg bg-background p-8 rounded-lg shadow-lg data-[state=open]:animate-contentShow">
          <Dialog.Title className="text-2xl font-bold text-foreground mb-4">
            Book Your Stay
          </Dialog.Title>
          <Dialog.Description className="text-muted-foreground mb-6">
            Fill in the details below to check availability.
          </Dialog.Description>

          <form onSubmit={handleBooking} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label htmlFor="checkin" className="block text-sm font-medium text-muted-foreground mb-2">Check-in</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  minDate={new Date()}
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:ring-[#D2691E] focus:border-[#D2691E]"
                  placeholderText="Select date"
                />
                <Calendar className="absolute left-3 top-10 h-5 w-5 text-muted-foreground" />
              </div>
              <div className="relative">
                <label htmlFor="checkout" className="block text-sm font-medium text-muted-foreground mb-2">Check-out</label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate || new Date()}
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:ring-[#D2691E] focus:border-[#D2691E]"
                  placeholderText="Select date"
                />
                <Calendar className="absolute left-3 top-10 h-5 w-5 text-muted-foreground" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="adults" className="block text-sm font-medium text-muted-foreground mb-2">Adults</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="number"
                    id="adults"
                    value={adults}
                    onChange={(e) => setAdults(Math.max(1, parseInt(e.target.value)))}
                    min="1"
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-md"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="children" className="block text-sm font-medium text-muted-foreground mb-2">Children</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="number"
                    id="children"
                    value={children}
                    onChange={(e) => setChildren(Math.max(0, parseInt(e.target.value)))}
                    min="0"
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-md"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="roomType" className="block text-sm font-medium text-muted-foreground mb-2">Room Type</label>
              <div className="relative">
                <BedDouble className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <select
                  id="roomType"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-md appearance-none"
                >
                  {roomTypes.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>
            </div>

            <Button type="submit" className="w-full bg-[#D2691E] hover:bg-[#8B4513] text-white">
              Check Availability
            </Button>
          </form>

          <Dialog.Close asChild>
            <button
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
