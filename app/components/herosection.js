import Image from "next/image";
import Link from "next/link";
import { PiArrowCircleRightLight } from "react-icons/pi";

const Herosection = () => {
  return (
    <header className="text-center mt-6 px-4 md:px-0 pb-16">
      <h1 className="text-4xl sm:text-5xl font-bold">
        Transformasikan Ruangan Anda
      </h1>
      <p className="mt-5 text-base sm:text-lg max-w-3xl mx-auto">
        Temukan furnitur berkualitas dengan desain modern dan elegan yang akan
        menghidupkan setiap sudut ruangan Anda. Dengan pilihan material terbaik
        dan detail desain yang menawan, kami berkomitmen untuk menghadirkan
        furnitur yang tidak hanya fungsional tetapi juga memperindah suasana
        rumah Anda.
      </p>
      <Link
        href="/product"
        className="flex justify-center items-center mt-8 px-4 py-2 bg-black text-white rounded-xl hover:bg-blue-600 hover:text-black w-fit mx-auto"
      >
        Jelajahi Produk
        <PiArrowCircleRightLight size={20} className="ml-2" />
      </Link>
      <Image
        src="/images/ft.png"
        alt="hero"
        width={750}
        height={750}
        className="object-cover mx-auto"
      />
    </header>
  );
};

export default Herosection;
