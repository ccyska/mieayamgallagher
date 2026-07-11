"use client";

import Container from "../ui/Container";

export default function ContactView() {
return (
  <section
    id="contact"
    className="bg-[#F6E3C8] py-16 md:py-24"
  >
    <Container>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] md:tracking-[4px] text-orange-500">
          Contact
        </p>

        <h2 className="mt-3 text-3xl md:text-5xl font-bold text-[#3B2A22] leading-tight">
          Hubungi Kami
        </h2>

        <p className="mt-5 md:mt-6 px-2 md:px-0 text-base md:text-lg leading-7 md:leading-8 text-gray-600">
          Kami siap melayani Anda setiap hari. Jangan ragu untuk menghubungi
          kami apabila ingin memesan atau bertanya mengenai menu yang tersedia.
        </p>

        <div className="mt-10 md:mt-12 space-y-5 text-left md:text-center text-base md:text-lg text-gray-700">

          <p className="leading-7">
            <span className="font-semibold text-[#3B2A22]">
              📍 Alamat :
            </span>{" "}
            Jl. Raya Sumberringin, Ds. Wringinsongo,
            Kec. Tumpang, Kab. Malang
          </p>

          <p>
            <span className="font-semibold text-[#3B2A22]">
              📞 Telepon :
            </span>{" "}
            0831-2578-1538
          </p>

          <p>
            <span className="font-semibold text-[#3B2A22]">
              🕘 Jam Operasional :
            </span>{" "}
            Setiap Hari, 16.00 WIB - SAK KESELE
          </p>

        </div>

        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="https://maps.app.goo.gl/fuBLBZfTVoHz8e8s6"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-full bg-orange-500 px-6 md:px-8 py-3 text-center text-sm md:text-base font-semibold text-white transition hover:bg-orange-600"
          >
            📍 Lihat di Google Maps
          </a>

          <a
            href="https://wa.me/6283125781538"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-full border-2 border-orange-500 px-6 md:px-8 py-3 text-center text-sm md:text-base font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
          >
            💬 Chat WhatsApp
          </a>

        </div>
      </div>
    </Container>
  </section>
);
}