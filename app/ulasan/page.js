"use client";
import { useState } from "react";

const Ulasan = () => {
  // Data ulasan
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Andi",
      rating: 5,
      comment: "Sangat puas dengan layanan dan produk yang ditawarkan!",
    },
    {
      id: 2,
      name: "Budi",
      rating: 4,
      comment: "Pelayanan ramah dan cepat. Produk berkualitas.",
    },
  ]);

  // State untuk menampilkan/menghilangkan formulir
  const [showForm, setShowForm] = useState(false);

  // State untuk data formulir
  const [form, setForm] = useState({ name: "", rating: 0, comment: "" });

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Fungsi untuk mengirim ulasan
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi sederhana
    if (!form.name || form.rating <= 0 || !form.comment) {
      alert("Mohon lengkapi semua data ulasan.");
      return;
    }

    // Tambahkan ulasan ke daftar
    const newReview = {
      id: reviews.length + 1,
      name: form.name,
      rating: parseInt(form.rating),
      comment: form.comment,
    };

    setReviews([...reviews, newReview]);
    setForm({ name: "", rating: 0, comment: "" }); // Reset formulir
    setShowForm(false); // Sembunyikan formulir setelah kirim
    alert("Ulasan berhasil dikirim!");
  };

  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Ulasan Pengguna
        </h1>

        {/* Tombol untuk membuka formulir */}
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Tulis Ulasan
          </button>
        )}

        {/* Formulir Ulasan */}
        {showForm && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nama
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Masukkan nama Anda"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Rating (1-5)
                </label>
                <select
                  name="rating"
                  value={form.rating}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                >
                  <option value="0">Pilih Rating</option>
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <option key={rating} value={rating}>
                      {rating}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Komentar
                </label>
                <textarea
                  name="comment"
                  value={form.comment}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Tulis ulasan Anda"
                  rows="3"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Kirim Ulasan
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Daftar Ulasan */}
        {reviews.length > 0 ? (
          <div className="mt-8 space-y-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="p-4 bg-gray-50 rounded-lg shadow-sm border"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-700">
                    {review.name}
                  </h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${
                          index < review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927a1 1 0 011.902 0l1.518 4.67a1 1 0 00.95.69h4.908a1 1 0 01.592 1.806l-3.977 2.89a1 1 0 00-.364 1.118l1.518 4.67a1 1 0 01-1.538 1.118L10 14.347l-3.978 2.89a1 1 0 01-1.538-1.118l1.518-4.67a1 1 0 00-.364-1.118L2.662 10.093a1 1 0 01.592-1.806h4.908a1 1 0 00.95-.69L9.049 2.927z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center mt-8">
            Belum ada ulasan tersedia.
          </p>
        )}
      </div>
    </div>
  );
};

export default Ulasan;
