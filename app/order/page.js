"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Order = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const selectedProduct = Cookies.get("selected-product");
    if (selectedProduct) {
      setProduct(JSON.parse(selectedProduct));
    } else {
      alert("No product selected!");
      router.push("/product");
    }
  }, []);

  const handleSubmitOrder = () => {
    alert("Your order has been successfully placed!");
    Cookies.remove("selected-product");
    router.push("/product");
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-medium text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Detail Pemesanan
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Gambar Produk */}
        <div className="w-full md:w-1/2">
          <img
            src={product.imgSrc}
            alt={product.name}
            className="rounded-lg shadow-md w-full object-cover h-64"
          />
        </div>

        {/* Detail Produk */}
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {product.name}
            </h2>
            <p className="text-green-500 text-lg font-medium mt-2">
              {product.price}
            </p>
          </div>

          {/* Input Jumlah */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Jumlah:
            </label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Total Harga */}
          <div className="mb-6">
            <p className="text-lg font-medium text-gray-800">
              Total Harga:
              <span className="text-green-500 font-bold ml-2">
                Rp {parseInt(product.price.replace(/[^0-9]/g, "")) * quantity}
              </span>
            </p>
          </div>

          {/* Tombol Pesan */}
          <button
            onClick={handleSubmitOrder}
            className="w-full bg-blue-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Pesan Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
