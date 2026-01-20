"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";

export default function CTASection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gray-50">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center relative">
          <FadeIn>
          {/* Glossy Card with Gradient Border */}
          <div className="relative rounded-3xl p-12 md:p-16 bg-white shadow-2xl border border-gray-200 overflow-hidden group hover:shadow-3xl transition-all duration-500">
            {/* Outer Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl mb-6">
                <span className="text-gradient">Ready to Take Control of Your Finances?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                See how RC Books can transform your accounting, operations, and payroll into one unified system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4 transform transition-transform hover:scale-105">
                  Book a Demo
                </Link>
                <Link href="/pricing" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all border-2 border-gray-200 transform hover:scale-105">
                  View Pricing
                </Link>
              </div>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-green-500 text-2xl">✓</span>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500 text-2xl">✓</span>
                  <span>Free demo available</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500 text-2xl">✓</span>
                  <span>Setup in minutes</span>
                </div>
              </div>
            </div>
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}


