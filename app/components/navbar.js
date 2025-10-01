"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("auth-token");
    if (token) setIsLoggedIn(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    Cookies.remove("auth-token");
    setIsLoggedIn(false);
    alert("You have been logged out.");
    router.push("/");
  };

  const isAuthPage = pathname === "/login" || pathname === "/signup";

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-300 ${
        isScrolled ? "bg-slate-600 shadow-md" : "bg-slate-500"
      } text-white`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/images/school.png" alt="logo" width={40} height={40} />
        <span className="font-semibold text-lg">Webschool</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        <Link href="/product" className="hover:text-blue-300 transition-colors">
          Produk
        </Link>
        <Link href="/ulasan" className="hover:text-blue-300 transition-colors">
          Ulasan
        </Link>
        <Link href="/about" className="hover:text-blue-300 transition-colors">
          Tentang Kami
        </Link>
        <Link href="/contact" className="hover:text-blue-300 transition-colors">
          Kontak
        </Link>
      </div>

      {/* Right Side (desktop only) */}
      <div className="hidden md:flex items-center space-x-4">
        {!isAuthPage &&
          (!isLoggedIn ? (
            <Link
              href="/login"
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
            >
              <FaUserAlt size={18} />
              <span>Logout</span>
            </button>
          ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden p-2 text-white hover:bg-slate-700 rounded-md"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-slate-600 shadow-md md:hidden flex flex-col items-center space-y-4 py-4">
          <Link
            href="/product"
            className="w-full text-center py-2 hover:bg-blue-500 transition-colors"
          >
            Produk
          </Link>
          <Link
            href="/ulasan"
            className="w-full text-center py-2 hover:bg-blue-500 transition-colors"
          >
            Ulasan
          </Link>
          <Link
            href="/about"
            className="w-full text-center py-2 hover:bg-blue-500 transition-colors"
          >
            Tentang Kami
          </Link>
          <Link
            href="/contact"
            className="w-full text-center py-2 hover:bg-blue-500 transition-colors"
          >
            Kontak
          </Link>

          {/* Login/Logout masuk dropdown (mobile) */}
          {!isAuthPage &&
            (!isLoggedIn ? (
              <Link
                href="/login"
                className="w-full text-center py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="w-full flex justify-center items-center gap-2 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
              >
                <FaUserAlt size={18} />
                <span>Logout</span>
              </button>
            ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
