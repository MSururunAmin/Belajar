"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const AboutUs = () => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("auth-token");
    if (!token) {
      alert("You must be logged in to access this page.");
      router.push("/login");
    }
  }, [router]);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Tentang Kami
        </h2>

        {/* Grid untuk card */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {/* Sejarah */}
          <div className="bg-gray-600 text-white rounded-xl shadow-md hover:shadow-lg transition p-6">
            <h3 className="text-2xl font-bold mb-4">Sejarah Kami</h3>
            <p>
              Didirikan pada tahun <b>[Tahun Berdiri]</b>,{" "}
              <b>[Nama Perusahaan]</b> telah menjadi pemimpin dalam industri
              furnitur dengan komitmen menyediakan produk berkualitas tinggi dan
              desain inovatif. Berawal dari sebuah workshop kecil, kini kami
              telah berkembang menjadi salah satu penyedia furnitur terkemuka di{" "}
              <b>[Kota/Negara]</b>, melayani pelanggan di seluruh{" "}
              <b>[Wilayah]</b>.
            </p>
          </div>

          {/* Visi */}
          <div className="bg-gray-600 text-white rounded-xl shadow-md hover:shadow-lg transition p-6">
            <h3 className="text-2xl font-bold mb-4">Visi Kami</h3>
            <p>
              Menjadi pilihan utama bagi pelanggan dalam menyediakan furnitur
              yang tidak hanya fungsional tetapi juga memperindah ruang hidup.
              Kami percaya setiap rumah dapat menjadi tempat nyaman dan estetis
              dengan furnitur yang tepat.
            </p>
          </div>

          {/* Misi */}
          <div className=" bg-gray-600 text-white rounded-xl shadow-md hover:shadow-lg transition p-6">
            <h3 className="text-2xl font-bold mb-4">Misi Kami</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <b>Kualitas Unggul:</b> Produk furnitur dengan bahan dan
                pengerjaan terbaik.
              </li>
              <li>
                <b>Inovasi Desain:</b> Selalu mengikuti tren terbaru desain
                interior agar produk relevan dan menarik.
              </li>
              <li>
                <b>Pelayanan Pelanggan:</b> Memberikan pengalaman belanja
                menyenangkan dengan dukungan ramah.
              </li>
            </ul>
          </div>

          {/* Nilai-nilai */}
          <div className="bg-gray-600 text-white rounded-xl shadow-md hover:shadow-lg transition p-6">
            <h3 className="text-2xl font-bold mb-4">Nilai-Nilai Kami</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <b>Integritas:</b> Berbisnis dengan jujur dan transparan.
              </li>
              <li>
                <b>Keberlanjutan:</b> Bahan ramah lingkungan & praktik
                berkelanjutan.
              </li>
              <li>
                <b>Komunitas:</b> Aktif berkontribusi melalui program tanggung
                jawab sosial.
              </li>
            </ul>
          </div>

          {/* Kenapa memilih kami */}
          <div className="md:col-span-2 bg-gray-600 text-white rounded-xl shadow-md hover:shadow-lg transition p-6">
            <h3 className="text-2xl font-bold mb-4">Kenapa Memilih Kami?</h3>
            <p>
              Dengan ribuan pelanggan puas, kami bangga atas reputasi dalam
              memberikan furnitur berkualitas & pelayanan luar biasa. Apakah
              Anda mencari furnitur untuk rumah baru, renovasi, atau sekadar
              memperbarui gaya interior, <b>[Nama Perusahaan]</b> siap membantu
              mewujudkan visi Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
