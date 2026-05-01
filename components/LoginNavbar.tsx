"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

// Navigation order: Home, About Us, AI Employee (dropdown), Contact Us
const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "AI Employee", dropdown: true },
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
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const [aiOpen, setAiOpen] = useState(false);
  const isAiActive = aiEmployeeDropdown.some(
    (item) => pathname === item.href || pathname.startsWith(`${item.href}/`)
  );

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
        <div className="flex h-20 items-center justify-between px-6 border-b border-white/10 ">
          <Image
            src="/logo.png"
            alt="DNAi - Duha Nashrah"
            width={136}
            height={56}
            className="h-auto w-[110px] "
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
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label}>
                <button
                  type="button"
                  onClick={() => setAiOpen((p) => !p)}
                  className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 transition-colors hover:bg-white/10 hover:text-white focus:outline-none ${
                    isAiActive ? "font-bold text-white" : "font-normal"
                  }`}
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
                    {aiEmployeeDropdown.map((ai) => (
                      <Link
                        key={ai.label}
                        href={ai.href}
                        onClick={onClose}
                        className={`rounded-md px-3 py-2 text-sm transition-colors hover:bg-white/10 hover:text-white ${
                          pathname === ai.href || pathname.startsWith(`${ai.href}/`)
                            ? "font-bold text-white"
                            : "text-white/70"
                        }`}
                      >
                        {ai.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={`rounded-md px-3 py-2.5 transition-colors hover:bg-white/10 hover:text-white ${
                  pathname === item.href || pathname.startsWith(`${item.href}/`)
                    ? "font-bold text-white"
                    : "font-normal"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
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
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isAiActive = aiEmployeeDropdown.some(
    (item) => pathname === item.href || pathname.startsWith(`${item.href}/`)
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    let ticking = false;
    
    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const scrollThreshold = 100; // 100px scroll threshold
          
          setIsSticky(scrollTop >= scrollThreshold);
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isSticky) {
      // Add padding to prevent content jump
      const navbarHeight = 72; // Height of navbar
      document.body.style.paddingTop = `${navbarHeight}px`;
    } else {
      document.body.style.paddingTop = "0";
    }

    return () => {
      document.body.style.paddingTop = "0";
    };
  }, [isSticky]);

  return (
    <div className={`sticky top-0 z-50 w-full backdrop-blur-md border-y border-white/10 bg-black transition-all duration-300 ${
        isSticky 
          ? "fixed top-0 left-0 right-0 z-[100] shadow-2xl backdrop-blur-lg bg-black/95 border-b-2 border-[#00C19C]/50" 
          : "relative"
      }`}>
      <header className="">
        <div className="flex h-[85px] w-full items-center justify-between px-4 sm:px-6 lg:px-25">
          <Link href="/" className="  drag-none items-center">
          
                      <Image
                        src="/images/logoHeader.png"
                        alt="DNAi Duha Nashrah"
                        width={180}
                        height={100}
                        className="pt-10 pb-10 drag-none"
                      />
                  
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-11 text-[17px] text-white/85 md:flex">
            {/* Home */}
            <Link
              href="/"
              className={`transition-colors hover:text-white ${
                pathname === "/" ? "font-bold text-white" : "font-normal"
              }`}
            >
              Home
            </Link>
            {/* About Us */}
            <Link
              href="/about-us"
              className={`transition-colors hover:text-white ${
                pathname === "/about-us" || pathname.startsWith("/about-us/")
                  ? "font-bold text-white"
                  : "font-normal"
              }`}
            >
              About Us
            </Link>
            {/* AI Employee dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen((prev) => !prev)}
                className={`inline-flex items-center gap-1 transition-colors hover:text-white focus:outline-none ${
                  isAiActive ? "font-bold text-white" : "font-normal"
                }`}
              >
                AI Employee
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className={`mt-0.5 h-3.5 w-3.5 fill-current transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                >
                  <path d="M5.7 7.6a1 1 0 0 1 1.4.1L10 11l2.9-3.3a1 1 0 0 1 1.5 1.3l-3.7 4.2a1 1 0 0 1-1.5 0L5.6 8.9a1 1 0 0 1 .1-1.3Z" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute cursor-pointer left-0 top-full z-50 mt-1 min-w-[140px] border border-white/10 bg-black py-1 shadow-lg">
                  {aiEmployeeDropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setDropdownOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors hover:bg-white/10 hover:text-white ${
                        pathname === item.href || pathname.startsWith(`${item.href}/`)
                          ? "font-bold text-white"
                          : "text-white/80"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* Contact Us */}
            <Link
              href="/contact-us"
              className={`transition-colors hover:text-white ${
                pathname === "/contact-us" || pathname.startsWith("/contact-us/")
                  ? "font-bold text-white"
                  : "font-normal"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center gap-3 lg:pr-5">
            {/* Desktop login */}
            <button
              type="button"
              className="hidden md:block rounded-full bg-[#00C19C] cursor-pointer px-9 py-3 text-base font-semibold text-white shadow-[0_5px_16px_rgba(2,186,173,0.30)] transition-transform hover:scale-[1.02]"
            >
              Login
            </button>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              className="flex md:hidden items-center justify-center rounded-md p-3 text-white/70 hover:text-white focus:outline-none"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg> 
            </button>
          </div>
        </div>

         <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[85px] bg-[radial-gradient(circle_at_center,_rgba(6,188,170,0.30),_transparent_64%)]"
        /> 
      </header>

      {/* Mobile drawer — child component */}
      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        pathname={pathname}
      />
    </div>
  );
}
