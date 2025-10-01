"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa"; // Import ikon logout

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("auth-token"); // Hapus token dari cookie
    alert("You have been logged out.");
    router.push("/");
  };

  return (
    <button onClick={handleLogout} className="p-2 text-black">
      <FaUserAlt size={20} /> {/* Ikon kepala orang */}
    </button>
  );
}
