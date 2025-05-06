import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <div className="flex items-center mb-4 gap-2">
              <Image src={logo} alt="CosmoGreen Logo" width={40} height={40} />
              <span className="text-xl font-bold">Sky Power</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Pioneering sustainable solutions for your needs, helping to create
              a cleaner, greener future for housing and transportation.
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/products/cgt1200">Sky Power CGT1200</Link>
              </li>
              <li>
                <Link href="/products/cg1200">Sky Power CG1200</Link>
              </li>
              <li>
                <Link href="/products/cgs0200">Sky Power CGS0200</Link>
              </li>
              <li>
                <Link href="/products">View All Products</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div>
                <p className="text-green-400 text-sm">Address:</p>
                <p className="text-gray-400 text-sm">
                  Chandpur, Bijnor, Uttar Pradesh, India-246725
                </p>
              </div>
              <div>
                <p className="text-green-400 text-sm">Phone:</p>
                <p className="text-gray-400 text-sm">
                  +91 XXXXXXXXXX, +91 XXXXXXXXXX
                </p>
              </div>
              <div>
                <p className="text-green-400 text-sm">Email:</p>
                <p className="text-gray-400 text-sm">theskypower@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            © {currentYear} SkyPower. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-gray-400 text-xs"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-gray-400 text-xs"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
