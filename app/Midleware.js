import { NextResponse } from "next/server";

export default function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("auth-token")?.value;

  // Halaman yang membutuhkan autentikasi
  const protectedPaths = [
    "/Produk",
    "/Ulasan",
    "/TentangKami",
    "/FAQ",
    "/Kontak",
  ];

  if (protectedPaths.some((path) => pathname.startsWith(path))) {
    if (!token) {
      // Redirect ke halaman login jika belum login
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}
