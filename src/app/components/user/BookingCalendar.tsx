"use client";

import { useState, useMemo } from "react";

interface Turf {
  price: number;
}

interface Slot {
  id: string;
  time: string;
  available: boolean;
}

interface BookingCalendarProps {
  turf: Turf;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ turf }) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);

  // Memoize time slots to prevent unnecessary recalculations
  const timeSlots = useMemo(() => {
    const slots: Slot[] = [];
    const openingTime = 6; // 6 AM
    const closingTime = 23; // 11 PM

    for (let hour = openingTime; hour < closingTime; hour++) {
      const isAvailable = Math.random() > 0.3; // Random availability
      slots.push({
        id: `slot-${hour}`,
        time: `${hour % 12 || 12}:00 ${hour >= 12 ? "PM" : "AM"} - ${(hour + 1) % 12 || 12}:00 ${(hour + 1) >= 12 ? "PM" : "AM"}`,
        available: isAvailable,
      });
    }

    return slots;
  }, []);

  // Generate dates for the next 7 days
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
      display: date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
      value: date.toISOString().split("T")[0],
    };
  });

  const handleBookNow = () => {
    if (!selectedSlot) {
      alert("Please select a time slot");
      return;
    }
    alert(`Booking confirmed for ${selectedSlot.time}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Book a Slot</h2>

      {/* Date Selector */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Select Date</h3>
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {dates.map((date) => (
            <button
              key={date.value}
              onClick={() => setSelectedDate(date.value)}
              className={`flex-shrink-0 flex flex-col items-center justify-center p-3 rounded-lg transition-all ${
                date.value === selectedDate
                  ? "bg-green-600 text-white shadow-md transform scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {date.display}
            </button>
          ))}
        </div>
      </div>

      {/* Time Slots */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Select Time Slot</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {timeSlots.map((slot) => (
            <button
              key={slot.id}
              onClick={() => slot.available && setSelectedSlot(slot)}
              aria-disabled={!slot.available}
              className={`py-2 px-3 rounded-md text-sm transition-all ${
                selectedSlot?.id === slot.id
                  ? "bg-green-600 text-white shadow-md transform scale-105"
                  : slot.available
                  ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed opacity-60"
              }`}
            >
              {slot.time}
            </button>
          ))}
        </div>
      </div>

      {/* Booking Summary */}
      {selectedSlot && (
        <div className="bg-green-50 rounded-lg p-4 mb-6 border border-green-200 animate-fade-in">
          <h3 className="font-medium text-green-800 mb-2">Booking Summary</h3>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Date:</span>
            <span className="font-medium">
              {new Date(selectedDate).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
            </span>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Time:</span>
            <span className="font-medium">{selectedSlot.time}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Price:</span>
            <span className="font-medium">₹{turf.price}</span>
          </div>
        </div>
      )}

      {/* Book Now Button */}
      <button
        onClick={handleBookNow}
        className={`w-full py-3 rounded-lg font-medium transition-all ${
          selectedSlot
            ? "bg-green-600 text-white hover:bg-green-700 transform hover:scale-[1.02] shadow-md"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Book Now
      </button>
    </div>
  );
};

export default BookingCalendar;
