"use client"
interface Turf {
    id: string;
    name: string;
    price: number;
  }
  
  interface TimeSlot {
    id: number;
    time: string;
    available: boolean;
  }
  
  interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    turf: Turf;
  }
  
  import React, { useState } from 'react';
  import { Calendar, Clock, X, ChevronLeft, ChevronRight } from 'lucide-react';
  import { useRouter } from 'next/navigation'; 
  
  const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, turf }) => {
    const router = useRouter();
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
    const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  
    // Generate calendar days
    const getDaysInMonth = (year: number, month: number): Date[] => {
      const date = new Date(year, month, 1);
      const days: Date[] = [];
      while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
      return days;
    };
  
    const daysInMonth = getDaysInMonth(
      currentMonth.getFullYear(),
      currentMonth.getMonth()
    );
  
    // Generate time slots
    const timeSlots: TimeSlot[] = [
      { id: 1, time: "06:00 AM", available: true },
      { id: 2, time: "07:00 AM", available: true },
      { id: 3, time: "08:00 AM", available: false },
      { id: 4, time: "09:00 AM", available: true },
      { id: 5, time: "10:00 AM", available: true },
      { id: 6, time: "11:00 AM", available: false },
      { id: 7, time: "12:00 PM", available: true },
      { id: 8, time: "01:00 PM", available: true },
      { id: 9, time: "02:00 PM", available: true },
      { id: 10, time: "03:00 PM", available: false },
      { id: 11, time: "04:00 PM", available: true },
      { id: 12, time: "05:00 PM", available: true },
      { id: 13, time: "06:00 PM", available: true },
      { id: 14, time: "07:00 PM", available: false },
      { id: 15, time: "08:00 PM", available: true },
      { id: 16, time: "09:00 PM", available: true },
      { id: 17, time: "10:00 PM", available: true },
    ];
  
    const nextMonth = (): void => {
      setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
    };
  
    const prevMonth = (): void => {
      setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
    };
  
    const isDateDisabled = (date: Date): boolean => {
        return date.getTime() < new Date().setHours(0, 0, 0, 0);
      };
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 m-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Book Your Slot</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Calendar Section */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-green-600" />
                  Select Date
                </h3>
                <div className="flex space-x-2">
                  <button 
                    onClick={prevMonth}
                    className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextMonth}
                    className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
  
              <div className="text-center mb-4">
                <h4 className="text-lg font-medium text-gray-900">
                  {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h4>
              </div>
  
              <div className="grid grid-cols-7 gap-2 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500">
                    {day}
                  </div>
                ))}
              </div>
  
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: daysInMonth[0].getDay() }).map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {daysInMonth.map((date, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedDate(date)}
                    className={`
                      p-2 rounded-lg text-sm transition-all
                      ${date.toDateString() === selectedDate.toDateString() 
                        ? 'bg-green-600 text-white font-medium' 
                        : 'hover:bg-gray-200'
                      }
                      ${isDateDisabled(date)
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'text-gray-700'
                      }
                    `}
                    disabled={isDateDisabled(date)}
                  >
                    {date.getDate()}
                  </button>
                ))}
              </div>
            </div>
  
            {/* Time Slots Section */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-green-600" />
                Select Time
              </h3>
  
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map(slot => (
                  <button
                    key={slot.id}
                    onClick={() => slot.available && setSelectedSlot(slot)}
                    disabled={!slot.available}
                    className={`
                      p-3 rounded-lg text-sm font-medium transition-all
                      ${selectedSlot?.id === slot.id 
                        ? 'bg-green-600 text-white' 
                        : slot.available 
                          ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }
                    `}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
  
              {/* Booking Summary */}
              {selectedSlot && (
                <div className="mt-8 bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Booking Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date</span>
                      <span className="font-medium">
                        {selectedDate.toLocaleDateString('en-US', { 
                          weekday: 'short', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time</span>
                      <span className="font-medium">{selectedSlot.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price</span>
                      <span className="font-medium">₹{turf.price}</span>
                    </div>
                  </div>
                </div>
              )}
  
              {/* Confirm Button */}
              <button
                onClick={() => {
                  if (selectedSlot) {
                    onClose();
                    router.push('/payment-success');
                  }
                }}
                disabled={!selectedSlot}
                className={`
                  w-full mt-6 py-3 rounded-lg font-medium transition-all
                  ${selectedSlot 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }
                `}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BookingModal;