"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[80%] max-w-7xl">
      <nav className="bg-white/50 backdrop-blur-md border border-gray-200/50 rounded-full px-5">
        <div className="flex items-center justify-between h-12 md:h-14">
          {/* Logo Section - Left */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="Books Logo" 
                width={44} 
                height={44}
                className="flex-shrink-0"
              />
              <span className="text-2xl font-bold tracking-tight text-gradient">
                Books
              </span>
            </Link>
          </div>

          {/* Navigation Links - Center (Desktop) */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/pricing" className="text-gray-800 font-medium text-base transition-all duration-300 hover:scale-105 hover:text-purple-600 active:scale-95">
              Pricing
            </Link>
            <Link href="/features" className="text-gray-800 font-medium text-base transition-all duration-300 hover:scale-105 hover:text-purple-600 active:scale-95">
              Features
            </Link>
            <Link href="/contact" className="text-gray-800 font-medium text-base transition-all duration-300 hover:scale-105 hover:text-purple-600 active:scale-95">
              Contact
            </Link>
          </div>

          {/* Right Section - Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Log In Button */}
            <Link href="/login" className="px-6 py-2 text-sm font-medium text-[#0652c5] border-2 border-[#0652c5] rounded-lg hover:opacity-80 transition-all duration-300 transform hover:scale-105">
              Log in
            </Link>
            {/* Sign Up Button */}
            <Link href="/signup" className="btn-primary text-sm transform transition-transform duration-300 hover:scale-105">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col gap-2">
              <Link href="/pricing" className="text-gray-800 font-medium text-base py-2 transition-all active:scale-95" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="/features" className="text-gray-800 font-medium text-base py-2 transition-all active:scale-95" onClick={() => setMobileMenuOpen(false)}>
                Features
              </Link>
              <Link href="/contact" className="text-gray-800 font-medium text-base py-2 transition-all active:scale-95" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <Link href="/login" className="px-6 py-2 text-sm font-medium text-center text-[#0652c5] border-2 border-[#0652c5] rounded-lg hover:opacity-80 transition-all" onClick={() => setMobileMenuOpen(false)}>
                  Log in
                </Link>
                <Link href="/signup" className="btn-primary w-full text-center" onClick={() => setMobileMenuOpen(false)}>
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}








