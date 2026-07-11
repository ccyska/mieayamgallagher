"use client";

import Container from "../ui/Container";
import Image from "next/image";
import { useState } from "react";

type MenuItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  desc: string;
};

export default function MenuView() {
  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Mie Pangsit",
      price: 6000,
      image: "/mie-pangsit.png",
      desc: "Mie kenyal dengan pangsit gurih dan kuah kaldu spesial.",
    },
    {
      id: 2,
      name: "Mie Ayam",
      price: 8000,
      image: "/mie-ayam-kecil.png",
      desc: "Mie ayam dengan topping ayam manis gurih yang khas.",
    },
  ];

  const [selectedMenu, setSelectedMenu] = useState<MenuItem | null>(null);
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState("");

  const phone = "6283125781538";

  const formatRupiah = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const totalHarga = selectedMenu ? selectedMenu.price * qty : 0;

  const openOrder = (item: MenuItem) => {
    setSelectedMenu(item);
    setQty(1);
    setNote("");
  };

  const closeOrder = () => {
    setSelectedMenu(null);
    setQty(1);
    setNote("");
  };

  const handleOrder = () => {
    if (!selectedMenu) return;

    const text = `Halo Sam

Aku pesan

Menu : ${selectedMenu.name}
Harga : ${formatRupiah(selectedMenu.price)}
Jumlah : ${qty} Porsi
Total : ${formatRupiah(totalHarga)}

Catatan :
${note.trim() === "" ? "-" : note}

Terima kasih.`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
      "_blank",
    );

    closeOrder();
  };

  return (
    <section id="menu" className="py-24 bg-[#F6E3C8] relative overflow-hidden">
      <Container>
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-[#3B2A22]">Our Menu</h2>

         
        </div>

<div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
  {menuItems.map((item) => (
    <div
      key={item.id}
className="
group
w-full
max-w-[170px]
sm:max-w-[220px]
md:max-w-[260px]
lg:max-w-[280px]
overflow-hidden
rounded-[22px]
bg-white
shadow-lg
mx-auto
transition-all
duration-300
hover:-translate-y-2
hover:shadow-2xl
active:scale-95
"
    >
{/* IMAGE */}
<div
  className="
  h-[120px]
  sm:h-[160px]
  md:h-[190px]
  lg:h-[220px]
  overflow-hidden
  rounded-t-[22px]
  bg-[#F7F0E6]
  flex
  items-center
  justify-center
"
>
  <Image
    src={item.image}
    alt={item.name}
    width={340}
    height={340}
    className="
      w-full
      h-full
      object-cover
      object-[center_65%]
      transition-all
      duration-300
    "
  />
</div>

      {/* CONTENT */}
      <div className="px-5 py-4 text-center">
      

      <h3 className="mt-1 text-base sm:text-lg lg:text-xl font-bold text-[#3B2A22]">
          {item.name}
        </h3>

          <p className="text-sm sm:text-base lg:text-lg font-bold text-orange-500">
          {formatRupiah(item.price)}
        </p>

<p className="mt-2 text-[11px] sm:text-sm leading-5 text-gray-500 line-clamp-2">
          {item.desc}
        </p>

        <button
          onClick={() => openOrder(item)}
        
  className="
  mt-4
  w-full
  rounded-full
  bg-[#F07A28]
  py-2
  text-xs
  sm:text-sm
  font-semibold
  text-white
  transition-all
  duration-300
  hover:bg-[#DD6D20]
  group-hover:scale-110
"
>
        
          Pesan Sekarang
        </button>
      </div>
    </div>
  ))}
</div>


      {/* ================= MODAL ================= */}
{selectedMenu && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
    onClick={closeOrder}
  >
   <div
  onClick={(e) => e.stopPropagation()}
className="relative w-[75%] max-w-[320px] rounded-[28px] bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,.18)]" >
      {/* Tombol Close */}
      <button
        onClick={closeOrder}
        className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-red-500 hover:text-white"
      >
        ✕
      </button>

      {/* Judul */}
      <h2 className="text-xl font-bold text-[#3B2A22]">
        Pesan Menu
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        {selectedMenu.name}
      </p>

      {/* Jumlah */}
      <div className="mt-4 md:mt-5">
        <label className="font-medium text-[#3B2A22]">
          Jumlah Porsi
        </label>

        <div className="mt-3 flex items-center gap-4">
          <button
            onClick={() => setQty((prev) => Math.max(1, prev - 1))}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-lg hover:bg-gray-300"
          >
            −
          </button>

          <span className="w-8 text-center text-lg font-bold">
            {qty}
          </span>

          <button
            onClick={() => setQty((prev) => prev + 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F07A28] text-lg text-white hover:bg-orange-600"
          >
            +
          </button>
        </div>
      </div>

      {/* Catatan */}
      <div className="mt-5">
        <label className="font-medium text-[#3B2A22]">
          Catatan (Opsional)
        </label>

        <textarea
          rows={2}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Contoh: tanpa bawang goreng, kuah banyak..."
          className="mt-2 w-full resize-none rounded-xl border border-gray-300 p-3 text-sm outline-none focus:border-orange-500"
        />
      </div>

      {/* Ringkasan */}
      <div className="mt-4 rounded-x1 border border-orange-100 bg-orange-50 p-4">
        <div className="flex justify-between text-sm">
          <span>Harga</span>
          <span>{formatRupiah(selectedMenu.price)}</span>
        </div>

        <div className="mt-2 flex justify-between text-sm">
          <span>Jumlah</span>
          <span>{qty} Porsi</span>
        </div>

        <div className="mt-3 flex justify-between border-t pt-3 text-lg font-bold text-[#F07A28]">
          <span>Total</span>
          <span>{formatRupiah(totalHarga)}</span>
        </div>
      </div>

      {/* Tombol */}
      <div className="mt-4 flex gap-2">
        <button
          onClick={closeOrder}
          className="flex-1 rounded-full border border-gray-300 py-2.5 text-sm font-semibold hover:bg-gray-100"
        >
          Batal
        </button>

        <button
          onClick={handleOrder}
          className="flex-1 rounded-full bg-[#F07A28] py-2.5 text-sm font-semibold text-white hover:bg-orange-600"
        >
          Pesan
        </button>
      </div>
    </div>
  </div>
)}
      </Container>
    </section>
  );
}
