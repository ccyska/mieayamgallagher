"use client";

import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[#3B2A22] text-white">
      <Container>
        <div className="border-t border-white/10 py-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Mie Ayam Gallagher. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}