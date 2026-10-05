"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out border-b border-gray-100 ${
        isScrolled ? "glass py-2" : "bg-white/90 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-baseline space-x-2">
          <span className="text-3xl font-serif text-[#1e2733] font-medium tracking-widest">美share</span>
          <span className="text-[10px] text-gray-500 tracking-widest">株式会社</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {["会社について", "事業内容", "テクノロジー", "ニュース", "採用・パートナー"].map((name) => (
            <Link
              key={name}
              href="/"
              className="text-[11px] font-sans font-medium text-gray-500 hover:text-gray-900 tracking-wider transition-colors"
            >
              {name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#1e2733] text-white px-6 py-2.5 rounded-full text-[11px] font-sans tracking-wider flex items-center space-x-2 hover:bg-opacity-90 transition-all ml-4"
          >
            <span>お問い合わせ</span>
            <ArrowRight size={12} />
          </Link>
          <button className="ml-4 text-gray-600 hover:text-black">
             <Menu size={24} strokeWidth={1} />
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button className="lg:hidden text-gray-800">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
