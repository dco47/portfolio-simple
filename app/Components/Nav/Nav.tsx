"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const NavLinks: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "#about" },
  { label: "Expérience", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();

  return (
    <>
      {/* Navbar */}
      <div
        className={`px-4 sm:px-8 xl:px-[12%] fixed top-0 left-0 w-full z-50 navbar transition-all duration-300 ${scrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
      >
        <div className="flex justify-between items-center gap-3 py-3">
          <div className="flex shrink-0 items-center gap-8">
            <Link href="/">
              <div className="flex items-center gap-2 overflow-hidden">
                <h1 className="MetalMania text-3xl sm:text-4xl tracking-widest">
                  DCO<span className="text-(--prim)">PRO</span>
                </h1>
              </div>
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <div className="hidden lg:flex space-x-3 xl:space-x-5 menu-link relative z-40">
              {NavLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`flex gap-2 text-lg font-medium ${pathname === link.href ? "text-white font-semibold" : "text-(--white)"} hover:text-(--prim)`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {/* Social Icon */}
          <div className="nav-icon hidden 2xl:flex items-center gap-3">
            <i className="bi bi-instagram bg-gray-800 w-10 h-10 flex justify-center items-center rounded-full"></i>
            <i className="ri-linkedin-fill bg-gray-800 w-10 h-10 flex justify-center items-center rounded-full"></i>
            <i className="bi bi-twitter bg-gray-800 w-10 h-10 flex justify-center items-center rounded-full"></i>
            <i className="ri-facebook-fill bg-gray-800 w-10 h-10 flex justify-center items-center rounded-full"></i>
          </div>
          <div className="lg:hidden flex items-center gap-4 nav-right">
            <button
              type="button"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              className="lg:hidden flex flex-col gap-1.25"
              onClick={() => setOpen(!open)}
            >
              <span
                className={`block w-6 h-0.75 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.75 bg-white transition-all ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.75 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
          {/* Mobile Menu */}
          <div
            className={`lg:hidden fixed top-16 left-0 w-full z-50 transition-all duration-300 ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-6"}`}
          >
            <div className="mx-[5%] rounded-2xl bg-(--body) shadow-2xl border border-white/20">
              <nav className="flex flex-col px-6 py-6 gap-5">
                {NavLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between text-white border-b border-white/30 text-lg tracking-wide hover:text-(--prim) transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
