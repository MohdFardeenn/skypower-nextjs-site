import Link from "next/link";
import React from "react";
import { StaticImageData } from "next/image";
import Product1 from "@/assets/product1.jpeg";
import Product2 from "@/assets/product2.jpeg";
import ProductCard from "../Card/ProductCard";

export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  price: string;
  imageSrc: StaticImageData;
}

const FeaturedProducts: React.FC = () => {
  const products: Product[] = [
    {
      id: "cg1200",
      name: "SkyPower Tall Tabular",
      description:
        "COMING SOON Power Your E-Ride with Sky Power Lead Acid E-Rickshaw Battery",
      features: [
        "7 Month Warranty",
        "Peace of mind, guaranteed",
        "25% Mileage Assurance",
        "Keep running longer with reliable power",
        "Eco-friendly & Cost Effective",
        "Upgrade to Sky Power and drive with confidence",
      ],
      price: "XX,500",
      imageSrc: Product1,
    },
    {
      id: "cg1200",
      name: "SkyPower Infinite",
      description:
        "COMING SOON Power Your E-Ride with Sky Power Lead Acid E-Rickshaw Battery",
      features: [
        "7 Month Warranty",
        "Peace of mind, guaranteed",
        "25% Mileage Assurance",
        "Keep running longer with reliable power",
        "Eco-friendly & Cost Effective",
        "Upgrade to Sky Power and drive with confidence",
      ],
      price: "XX,500",
      imageSrc: Product2,
    },
  ];

  return (
    <div id="products" className="text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Featured Products</h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Discover our most popular battery solutions, designed for maximum
            efficiency, durability and performance at competitive prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        {/* <div className="text-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md border border-green-500">
            View All Products
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default FeaturedProducts;
