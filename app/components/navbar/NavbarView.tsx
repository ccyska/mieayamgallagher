"use client";

import Container from "../ui/Container";
import { useState, useEffect } from "react";

export default function NavbarView() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleActiveSection = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleActiveSection);
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, [navItems]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-xl bg-white/15 border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-2xl font-bold transition-colors duration-300 text-left ${
                isScrolled ? "text-[#2D2D2D]" : "text-white"
              }`}
            >
              <span className={isScrolled ? "text-[#2D2D2D]" : "text-white"}>
                Mie Ayam{" "}
              </span>
              <span className="text-orange-500">Gallagher</span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setIsHovered(item.id)}
                onMouseLeave={() => setIsHovered(null)}
                className={`relative text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-orange-500"
                    : isScrolled
                      ? "text-[#2D2D2D] hover:text-orange-500"
                      : "text-white hover:text-orange-400"
                }`}
              >
                {item.label}
                {(activeSection === item.id || isHovered === item.id) && (
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 transition-all duration-300 ${
                      activeSection === item.id ? "opacity-100" : "opacity-0"
                    }`}
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={toggleMobileMenu}
            className={`md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-md transition-colors duration-300 ${
              isScrolled ? "text-[#2D2D2D]" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 my-1 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`py-4 space-y-3 border-t ${
              isScrolled ? "border-orange-200/30" : "border-white/20"
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors duration-300 rounded-lg ${
                  activeSection === item.id
                    ? "text-orange-500 bg-orange-100/40"
                    : isScrolled
                      ? "text-[#2D2D2D] hover:text-orange-500 hover:bg-orange-100/30"
                      : "text-white hover:text-orange-400 hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
}
