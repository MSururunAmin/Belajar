"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const router = useRouter();

  // 🔒 Proteksi login
  useEffect(() => {
    const token = Cookies.get("auth-token");
    if (!token) {
      alert("You must be logged in to access this page.");
      router.push("/login");
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesan Anda telah dikirim!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className=" py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Hubungi Kami
        </h2>
        <p className="text-center text-gray-600 mt-4">
          Jika Anda memiliki pertanyaan atau membutuhkan bantuan, silakan
          hubungi kami melalui form di bawah ini.
        </p>
        <div className="mt-10 bg-gray-50 shadow-md rounded-lg p-6 lg:p-10">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Masukkan email Anda"
                />
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tulis pesan Anda di sini..."
              ></textarea>
            </div>
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
        <div className="mt-10 text-center text-white bg-gray-600 p-6 rounded-xl">
          <p>Anda juga dapat menghubungi kami melalui:</p>
          <div className="flex flex-col md:flex-row justify-center mt-4 gap-y-4 md:gap-x-8">
            <Link
              href="/"
              className="flex items-center justify-center break-words"
            >
              <MdOutlineMailOutline size={20} className="mr-2" />
              support@webschool.com
            </Link>
            <Link
              href="/"
              className="flex items-center justify-center break-words"
            >
              <BsTelephone size={20} className="mr-2" />
              +62 812-3456-7890
            </Link>
            <Link
              href="https://www.google.com/maps"
              className="flex items-stars md: justify-center break-words"
            >
              <SiGooglemaps size={20} className="mr-2" />
              Jl. Merdeka No. 123, Semarang, Indonesia
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
