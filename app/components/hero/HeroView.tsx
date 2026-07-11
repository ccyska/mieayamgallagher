"use client";

import Image from "next/image";
import Container from "../ui/Container";
import Link from "next/link";

export default function HeroView() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F6E3C8]"
    >
      {/* Background */}
      <div className="absolute right-[-180px] md:right-[-260px] lg:right-[-320px] top-[-120px] h-[650px] w-[650px] md:h-[820px] md:w-[820px] lg:h-[980px] lg:w-[980px] rounded-full bg-[#EFD8B5]" />

      <div className="absolute left-[-150px] bottom-[-180px] h-[350px] w-[350px] md:h-[450px] md:w-[450px] lg:h-[520px] lg:w-[520px] rounded-full bg-[#F9EEDC] opacity-70" />

      <Container>
        <div className="relative z-10 flex min-h-screen flex-col-reverse items-center justify-center gap-10 py-24 lg:flex-row lg:gap-10">

          {/* ================= LEFT ================= */}
          <div className="w-full text-center lg:w-[45%] lg:text-left">

            <h1 className="text-[48px] leading-none font-black text-[#3B2A22]
                           sm:text-[60px]
                           md:text-[70px]
                           lg:text-[80px]">
              Mie Ayam
              <br />
              <span className="text-orange-500">
                Gallagher
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#7D6A5D]
                          sm:text-lg
                          lg:mx-0">
              Nikmati semangkuk mie ayam dengan mie kenyal,
              ayam berbumbu khas, dan kuah gurih yang menghadirkan cita rasa
              autentik Indonesia di setiap suapan.
            </p>

            <Link href="#menu">
              <button
                className="
                  mt-8
                  rounded-full
                  bg-[#F07A28]
                  px-8
                  py-3
                  text-white
                  font-semibold
                  shadow-xl
                  transition-all
                  duration-300
                  hover:bg-[#dc6c20]
                  hover:scale-105
                "
              >
                Our Menu
              </button>
            </Link>

          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative flex w-full justify-center lg:w-[55%] lg:justify-end">

            <Image
              src="/mie-ayam.png"
              alt="Mie Ayam Gallagher"
              width={1000}
              height={1000}
              priority
           className="
  w-[120vw]
  max-w-[480px]
  sm:w-[500px]
  md:w-[600px]
  lg:w-[760px]
  h-auto
  select-none
  transition-all
  duration-500
  ease-out
  hover:scale-[1.04]
  hover:-translate-y-2
  drop-shadow-[0_25px_25px_rgba(0,0,0,.18)]
"
/>

          </div>

        </div>
      </Container>
    </section>
  );
}