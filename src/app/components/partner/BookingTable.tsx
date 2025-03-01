// components/BookingTable.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, ArrowUpDown } from 'lucide-react';

// Define booking type
interface Booking {
  id: string;
  customerName: string;
  serviceType: string;
  date: Date;
  time: string;
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed';
  price: number;
  location: string;
  image?: string;
}

// Sample data
const sampleBookings: Booking[] = [
  {
    id: 'B001',
    customerName: 'John Smith',
    serviceType: 'Lawn Mowing',
    date: new Date(2025, 2, 5),
    time: '09:00 AM',
    status: 'confirmed',
    price: 50,
    location: '123 Main St',
    image: '/images/lawn.jpg',
  },
  {
    id: 'B002',
    customerName: 'Sarah Johnson',
    serviceType: 'Home Cleaning',
    date: new Date(2025, 2, 7),
    time: '10:30 AM',
    status: 'pending',
    price: 85,
    location: '456 Park Ave',
    image: '/images/cleaning.jpg',
  },
  {
    id: 'B003',
    customerName: 'Mike Williams',
    serviceType: 'Plumbing Repair',
    date: new Date(2025, 2, 3),
    time: '02:00 PM',
    status: 'completed',
    price: 120,
    location: '789 Oak Rd',
    image: '/images/plumbing.jpg',
  },
  {
    id: 'B004',
    customerName: 'Emily Davis',
    serviceType: 'Electrical Work',
    date: new Date(2025, 2, 10),
    time: '11:00 AM',
    status: 'cancelled',
    price: 95,
    location: '321 Elm St',
    image: '/images/electrical.jpg',
  }
];

const BookingTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [bookings, setBookings] = useState<Booking[]>(sampleBookings);

  // Filter bookings based on search term
  const filteredBookings = bookings.filter(booking => 
    booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.serviceType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: Booking['status']) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="w-full px-4 py-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center w-full sm:w-auto">
          <h1 className="text-2xl font-bold">Partner Bookings</h1>
          <Badge className="ml-3 bg-blue-600">{bookings.length} Total</Badge>
        </div>
        
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search bookings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8 w-full"
          />
        </div>
      </div>

      <div className="rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      {booking.image && (
                        <div className="relative h-10 w-10 rounded-md overflow-hidden">
                          <Image
                            src={booking.image}
                            alt={booking.serviceType}
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <span>{booking.serviceType}</span>
                    </div>
                  </TableCell>
                  <TableCell>{booking.customerName}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{format(booking.date, 'MMM dd, yyyy')}</span>
                      <span className="text-sm text-gray-500">{booking.time}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      className={getStatusColor(booking.status)}
                      variant="outline"
                    >
                      {booking.status}
                    </Badge>
                  </TableCell>
                  <TableCell>${booking.price}</TableCell>
                  <TableCell className="text-right">
                    <Link href={`/bookings/${booking.id}`}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-6 text-gray-500">
                  No bookings found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BookingTable;