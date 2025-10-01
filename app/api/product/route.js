// app/api/products/route.js
export async function GET() {
  const products = [
    {
      id: 1,
      name: "Kursi Kayu Jati",
      price: 250000,
      imgSrc: "/images/kursi.jpg",
    },
    {
      id: 2,
      name: "Meja Kayu Jati",
      price: 300000,
      imgSrc: "/images/meja.jpg",
    },
    {
      id: 3,
      name: "Meja Kantor",
      price: 350000,
      imgSrc: "/images/MejaKantor.jpg",
    },
    {
      id: 4,
      name: "Kursi Kantor",
      price: 250000,
      imgSrc: "/images/kursi.jpg",
    },
    {
      id: 5,
      name: "Kursi Kayu Jati",
      price: 250000,
      imgSrc: "/images/kursi.jpg",
    },
    {
      id: 6,
      name: "Meja Kayu Jati",
      price: 300000,
      imgSrc: "/images/meja.jpg",
    },
    {
      id: 7,
      name: "Meja Kantor",
      price: 350000,
      imgSrc: "/images/MejaKantor.jpg",
    },
    {
      id: 8,
      name: "Kursi Kantor",
      price: 250000,
      imgSrc: "/images/kursi.jpg",
    },
  ];

  return Response.json(products);
}
