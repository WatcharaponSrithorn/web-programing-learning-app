"use client";
import { useState } from "react";

export default function MyFooter() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="#" className="text-2xl font-bold text-indigo-600">
          BrandLogo
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 transition hover:text-indigo-600"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#signup"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none md:hidden"
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pt-2 pb-4 md:hidden">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#signup"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-indigo-600 px-3 py-2 text-center text-base font-medium text-white hover:bg-indigo-700"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
