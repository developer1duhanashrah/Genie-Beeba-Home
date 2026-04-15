"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

const aiEmployeeDropdown = [
  { label: "Genie", href: "/genie" },
  { label: "Beeba", href: "/beeba" },
];

// ─── Mobile Drawer ────────────────────────────────────────────────────────────
function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [aiOpen, setAiOpen] = useState(false);

  // lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-black border-l border-white/10 shadow-2xl">
        {/* Drawer header */}
        <div className="flex h-20 items-center justify-between px-6 border-b border-white/10">
          <Image
            src="/logo.png"
            alt="DNAi - Duha Nashrah"
            width={136}
            height={56}
            className="h-auto w-[110px]"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-md p-2 text-white/70 hover:text-white focus:outline-none"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-4 py-6 text-sm text-white/80">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="rounded-md px-3 py-2.5 font-normal transition-colors hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          {/* AI Employee accordion */}
          <div>
            <button
              type="button"
              onClick={() => setAiOpen((p) => !p)}
              className="flex w-full items-center justify-between rounded-md px-3 py-2.5 font-normal transition-colors hover:bg-white/10 hover:text-white focus:outline-none"
            >
              AI Employee
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className={`h-3.5 w-3.5 fill-current transition-transform duration-200 ${aiOpen ? "rotate-180" : ""}`}
              >
                <path d="M5.7 7.6a1 1 0 0 1 1.4.1L10 11l2.9-3.3a1 1 0 0 1 1.5 1.3l-3.7 4.2a1 1 0 0 1-1.5 0L5.6 8.9a1 1 0 0 1 .1-1.3Z" />
              </svg>
            </button>

            {aiOpen && (
              <div className="ml-4 flex flex-col gap-1 border-l border-white/10 pl-3">
                {aiEmployeeDropdown.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="rounded-md px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Login button */}
        <div className="mt-auto px-6 pb-8">
          <button
            type="button"
            className="w-full rounded-full bg-[#00C19C] py-2.5 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(2,186,173,0.35)] transition-transform hover:scale-[1.02]"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function LoginNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="w-full border-y border-white/10 bg-black">
        <div className="flex h-20 w-full items-center justify-between px-4 sm:px-6 lg:px-25 pr-5">
          <Link href="#" className="shrink-0">
            <Image
              src="/logo.png"
              alt="DNAi - Duha Nashrah"
              width={170}
              height={70}
              priority
              className="h-auto w-[136px] sm:w-[156px]"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-10 text-sm text-white/85 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-normal transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            {/* AI Employee dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="inline-flex items-center gap-1 font-normal transition-colors hover:text-white focus:outline-none"
              >
                AI Employee
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className={`mt-0.5 h-3.5 w-3.5 fill-current transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="M5.7 7.6a1 1 0 0 1 1.4.1L10 11l2.9-3.3a1 1 0 0 1 1.5 1.3l-3.7 4.2a1 1 0 0 1-1.5 0L5.6 8.9a1 1 0 0 1 .1-1.3Z" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 top-full z-50 mt-1 min-w-[140px] border border-white/10 bg-black py-1 shadow-lg">
                  {aiEmployeeDropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-3">
            {/* Desktop login */}
            <button
              type="button"
              className="hidden md:block rounded-full bg-[#00C19C] px-7 py-2.5 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(2,186,173,0.35)] transition-transform hover:scale-[1.02]"
            >
              Login
            </button>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              className="flex md:hidden items-center justify-center rounded-md p-2 text-white/70 hover:text-white focus:outline-none"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_center,_rgba(6,188,170,0.38),_transparent_62%)]"
        />
      </header>

      {/* Mobile drawer — child component */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
