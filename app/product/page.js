"use client";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Product = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = Cookies.get("auth-token");
    if (!token) {
      alert("You must be logged in to access this page.");
      router.push("/login");
    }

    fetch("/api/product")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, [router]);

  const handleAddToCart = (product) => {
    Cookies.set("selected-product", JSON.stringify(product));
    router.push("/order");
  };

  return (
    <main className="mt-10 px-4 sm:px-6 lg:px-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            {/* Gambar */}
            <div className="h-48 w-full relative">
              <Image
                src={product.imgSrc}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Detail produk */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-base sm:text-lg font-semibold line-clamp-1">
                {product.name}
              </h2>

              <div className="flex items-center justify-between mt-3">
                <span className="text-green-500 font-bold">
                  Rp {product.price.toLocaleString("id-ID")}
                </span>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="p-2 rounded-full bg-gray-100 hover:bg-yellow-200 transition-colors"
                >
                  <FaCartShopping size={18} className="text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Product;
