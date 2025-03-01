"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Upload,
  DollarSign,
  Users,
  Clock,
  CheckCircle,
  Info,
} from "lucide-react";
import { useRouter } from "next/navigation";
import MapLocationPicker from "./MapLocationPicker";
import Image from "next/image";

const AddTurfForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    description: "",
    size: "",
    pricePerHour: "",
    openingTime: "",
    closingTime: "",
    amenities: [] as string[],
    images: [] as File[],
  });

  const amenitiesList = [
    "Changing Rooms",
    "Showers",
    "Parking",
    "Floodlights",
    "Equipment Rental",
    "Seating Area",
    "Refreshments",
    "Scoreboard",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAmenityToggle = (amenity: string) => {
    setFormData((prev) => {
      if (prev.amenities.includes(amenity)) {
        return {
          ...prev,
          amenities: prev.amenities.filter((a) => a !== amenity),
        };
      } else {
        return { ...prev, amenities: [...prev.amenities, amenity] };
      }
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        images: [...Array.from(e.target.files as FileList)],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Here you would implement your API call to save the turf data
      // const response = await fetch('/api/turfs', {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      //   headers: { 'Content-Type': 'application/json' }
      // });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success - redirect to turf list or dashboard
      router.push("/partner/turfs");
    } catch (error) {
      console.error("Error adding turf:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.back()}
          className="mr-4 p-3 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-200 shadow-sm"
        >
          <ArrowLeft size={20} />
        </motion.button>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Add New Turf
        </h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
      >
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-6 px-8">
          <h2 className="text-white text-xl font-semibold">
            Turf Registration Form
          </h2>
          <p className="text-blue-100 mt-1">
            Fill in the details below to register your turf
          </p>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-y-8 gap-x-8 sm:grid-cols-2">
              {/* Turf Name */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Turf Name
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-lg border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white"
                    placeholder="Green Valley Football Turf"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Address
                </label>
                <MapLocationPicker
                  address={formData.address}
                  onChange={(address, lat, lng) => {
                    setFormData((prev) => ({
                      ...prev,
                      address,
                      latitude: lat, // Make sure to add these to your formData state
                      longitude: lng,
                    }));
                  }}
                />
              </div>

              {/* Description */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50 hover:bg-white focus:bg-white transition-all duration-200 px-4 py-3"
                    placeholder="Describe your turf, its features, and what makes it special..."
                  />
                </div>
              </div>

              {/* Size */}
              <div>
                <label
                  htmlFor="size"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Turf Size
                </label>
                <div className="mt-1 relative">
                  <select
                    id="size"
                    name="size"
                    required
                    value={formData.size}
                    onChange={handleChange}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50 hover:bg-white focus:bg-white transition-all duration-200 py-3"
                  >
                    <option value="">Select size</option>
                    <option value="5-a-side">5-a-side</option>
                    <option value="7-a-side">7-a-side</option>
                    <option value="11-a-side">11-a-side</option>
                    <option value="custom">Custom</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <Users className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Price Per Hour */}
              <div>
                <label
                  htmlFor="pricePerHour"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Price Per Hour
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    name="pricePerHour"
                    id="pricePerHour"
                    required
                    min="0"
                    value={formData.pricePerHour}
                    onChange={handleChange}
                    className="block w-full rounded-lg border-gray-300 pl-12 pr-4 py-3 focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50 hover:bg-white focus:bg-white transition-all duration-200"
                    placeholder="0.00"
                  />
                </div>
              </div>

              {/* Opening Hours */}
              <div>
                <label
                  htmlFor="openingTime"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Opening Time
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="time"
                    name="openingTime"
                    id="openingTime"
                    required
                    value={formData.openingTime}
                    onChange={handleChange}
                    className="block w-full rounded-lg border-gray-300 pl-12 pr-4 py-3 focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50 hover:bg-white focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              {/* Closing Hours */}
              <div>
                <label
                  htmlFor="closingTime"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Closing Time
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="time"
                    name="closingTime"
                    id="closingTime"
                    required
                    value={formData.closingTime}
                    onChange={handleChange}
                    className="block w-full rounded-lg border-gray-300 pl-12 pr-4 py-3 focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50 hover:bg-white focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              {/* Amenities */}
              <div className="sm:col-span-2">
                <span className="block text-sm font-medium text-gray-700 mb-3">
                  Amenities
                </span>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {amenitiesList.map((amenity) => (
                      <div
                        key={amenity}
                        onClick={() => handleAmenityToggle(amenity)}
                        className={`relative flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                          formData.amenities.includes(amenity)
                            ? "bg-blue-50 border border-blue-200 shadow-sm"
                            : "bg-white border border-gray-200 hover:border-blue-200 hover:bg-blue-50"
                        }`}
                      >
                        <div className="flex h-5 items-center">
                          <input
                            id={`amenity-${amenity}`}
                            type="checkbox"
                            checked={formData.amenities.includes(amenity)}
                            onChange={() => {}}
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                        </div>
                        <div className="ml-1 text-sm">
                          <label
                            htmlFor={`amenity-${amenity}`}
                            className="font-medium text-gray-700"
                          >
                            {amenity}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Upload */}
              <div className="sm:col-span-2">
                <span className="block text-sm font-medium text-gray-700 mb-3">
                  Turf Images
                </span>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <div className="space-y-2 text-center">
                    <motion.div
                      whileHover={{ y: -5, scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Upload className="mx-auto h-12 w-12 text-blue-500" />
                    </motion.div>
                    <div className="flex text-sm text-gray-600 justify-center">
                      <label
                        htmlFor="images"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:text-blue-500 px-3 py-2 shadow-sm border border-gray-200"
                      >
                        <span>Upload files</span>
                        <input
                          id="images"
                          name="images"
                          type="file"
                          multiple
                          accept="image/*"
                          className="sr-only"
                          onChange={handleImageChange}
                        />
                      </label>
                      <p className="pl-1 flex items-center">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                    {formData.images.length > 0 && (
                      <div className="mt-2 flex items-center justify-center space-x-2">
                        <Image src="/your-image-path.png" width={20} height={20} alt="Selected file icon" />
                        <p className="text-sm font-medium text-green-600">
                          {formData.images.length} file(s) selected
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Tips Section */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Info className="h-5 w-5 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    Tips for better visibility
                  </h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Add high-quality images of your turf from different
                        angles
                      </li>
                      <li>
                        Provide a detailed description including unique selling
                        points
                      </li>
                      <li>
                        Include all available amenities to attract more
                        customers
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full inline-flex justify-center items-center px-6 py-4 border border-transparent text-base font-medium rounded-xl shadow-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 transition-all duration-200"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    Register Turf <CheckCircle className="ml-2 h-5 w-5" />
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AddTurfForm;
