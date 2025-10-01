// app/api/login/route.js
import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();

  // Dummy users
  const dummyUsers = [
    {
      email: "123@gmail.com",
      password: "12345",
      token: "dummy-token-123",
      user: "user",
      redirect: "/product  ",
    },
    {
      email: "admin@gmail.com",
      password: "11111",
      token: "dummy-token-2",
      user: "admin",
      redirect: "/admin/admindashboard",
    },
  ];

  // Cari user yang cocok
  const user = dummyUsers.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    return NextResponse.json(
      {
        success: true,
        token: user.token,
        role: user.role,
        redirect: user.redirect,
      },
      { status: 200 }
    );
  }

  return NextResponse.json(
    { success: false, message: "Invalid email or password" },
    { status: 401 }
  );
}
