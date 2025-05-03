"use client";
import React, { useState } from "react";
import TestimonialCard from "../Card/TestimonialCard";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
}

const CustomerTestimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Amit Singh",
      role: "Fleet Owner",
      location: "Dhampur",
      content:
        "Sky Power baitaree ka 6 maheene tak istemaal karane ke baad, mainne renj aur pradarshan mein mahatvapoom sudhaar dekha hai. turant charging suvidha ek game changer hai.",
      rating: 5,
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "E-Rickshaw Operator",
      location: "Bijnor",
      content:
        "इस बैटरी ने मेरे ई-रिक्शा व्यवसाय को पूरी तरह से बदल दिया है। मैं चार्जिंग पर पैसे बचा रहा हूँ और प्रॉफिट ज़्यादा हुए से रहा हूँ।",
      rating: 4,
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Solar Home Owner",
      location: "Delhi",
      content:
        "The CGS0200 has transformed our home solar system. Even during monsoon season, we have reliable backup power thanks to these batteries.",
      rating: 5,
    },
    {
      id: 4,
      name: "Mohammed Farooq",
      role: "Auto Garage Owner",
      location: "Mumbai",
      content:
        "I've tried many battery brands but SkyPower's quality and after-sales service is exceptional. My customers are much happier now.",
      rating: 5,
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 2;
  const pageCount = Math.ceil(testimonials.length / testimonialsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <div id="testimonials" className="text-white py-16 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our customers across
            India have to say about Sky Power batteries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {pageCount > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={handlePrevPage}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-gray-400 hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {[...Array(pageCount)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentPage === i
                    ? "bg-green-600 text-white"
                    : "border border-gray-700 text-gray-400 hover:bg-gray-800"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-gray-400 hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerTestimonials;
