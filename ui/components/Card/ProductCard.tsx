import Image from "next/image";
import Link from "next/link";
import { Product } from "../Home/FeaturedProducts";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden border border-green-500 shadow-lg shadow-green-500/20">
      <div className="bg-gray-300 flex items-center justify-center">
        <Image
          src={product.imageSrc}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-white font-bold text-lg mb-1">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-3">{product.description}</p>

        <div className="space-y-2 mb-4">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="text-green-400 mr-2">•</div>
              <div className="text-gray-300 text-xs">{feature}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="text-green-400 font-bold">₹ {product.price}</div>
          <Link
            href={`/products`}
            className="bg-green-600 hover:bg-green-700 text-white text-sm py-2.5 px-4 font-semibold rounded border border-green-500"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
