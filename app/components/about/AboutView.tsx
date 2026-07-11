"use client";

import Container from "../ui/Container";

const features = [
  {
    title: "Mie Pilihan",
    description:
      "Menggunakan mie pilihan yang menghasilkan tekstur kenyal dan cocok dipadukan dengan bumbu khas.",
  },
  {
    title: "Bahan Berkualitas",
    description:
      "Menggunakan ayam, sayuran, dan bumbu pilihan untuk memberikan cita rasa yang lezat.",
  },
  {
    title: "Cita Rasa Konsisten",
    description:
      "Setiap mangkuk disajikan dengan resep yang terjaga agar rasa tetap lezat di setiap kunjungan.",
  },
];

export default function AboutView() {
 return (
  <section
    id="about"
    className="bg-[#FFF8EE] py-16 md:py-24"
  >
    <Container>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] md:tracking-[0.3em] text-orange-500">
          About Us
        </p>

        <h2 className="mt-3 md:mt-4 text-3xl md:text-5xl font-bold leading-tight text-[#3B2A22]">
          Tentang Mie Ayam Kami
        </h2>

        <p className="mt-5 md:mt-8 text-base md:text-lg leading-7 md:leading-8 text-gray-600 px-2 md:px-0">
         Mie Ayam Gallagher menyajikan hidangan mie ayam dengan cita rasa gurih yang khas. Dipadukan dengan ayam berbumbu, kuah hangat, dan pelengkap pilihan, setiap porsi disiapkan dengan penuh perhatian agar memberikan pengalaman makan yang lezat dan memuaskan.
        </p>
      </div>

      <div className="mt-12 md:mt-20 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
        {features.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-[#E9DED2] bg-white p-6 md:p-8 transition-all duration-300 hover:border-orange-400 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-4 md:mb-6 h-1 w-12 md:w-14 rounded-full bg-orange-500" />

            <h3 className="text-xl md:text-2xl font-semibold text-[#3B2A22]">
              {item.title}
            </h3>

            <p className="mt-3 md:mt-4 text-sm md:text-base leading-6 md:leading-7 text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);
}