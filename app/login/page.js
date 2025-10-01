"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Cookies from "js-cookie"; // npm install js-cookie

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
    setMounted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, email, password }),
      });

      const data = await res.json();

      if (data.success) {
        Cookies.set("auth-token", data.token, { expires: 1 });
        if (typeof window !== "undefined") {
          localStorage.setItem(
            "user",
            JSON.stringify({ email, role: data.role })
          );
        }
        alert("Login successful!");
        router.push(data.redirect);
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Error login:", err);
      alert("Something went wrong");
    }
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md p-6 sm:p-8 bg-white rounded-xl shadow-lg">
        <h2 className="mb-6 text-xl sm:text-2xl font-semibold text-center text-gray-800">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 sm:px-4 py-2 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 sm:px-4 py-2 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 sm:py-3 text-sm sm:text-base text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-xs sm:text-sm text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <a href="/SignUp" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
