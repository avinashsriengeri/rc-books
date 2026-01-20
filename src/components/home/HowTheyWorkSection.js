"use client";

import { FadeIn, FadeInStagger, StaggerItem } from "@/components/animations/FadeIn";

export default function HowTheyWorkSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="text-gradient">How It Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-time integration across all modules. Every transaction automatically flows through your financial system.
          </p>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {/* Step 1 */}
          <StaggerItem>
          <div className="relative group">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-500 h-full">
              {/* Number badge */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 mb-6 text-gray-700 font-bold text-lg group-hover:bg-gray-200 transition-colors duration-300">
                01
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Real-Time Posting
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                Every transaction automatically posts to the General Ledger. No manual entries, no delays, no batch processing.
              </p>
            </div>
          </div>
          </StaggerItem>

          {/* Step 2 */}
          <StaggerItem>
          <div className="relative group">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-500 h-full">
              {/* Number badge */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 mb-6 text-gray-700 font-bold text-lg group-hover:bg-gray-200 transition-colors duration-300">
                02
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Unified Reporting
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                View project profitability, inventory valuations, and expenses alongside financial statements — always current, always accurate.
              </p>
            </div>
          </div>
          </StaggerItem>

          {/* Step 3 */}
          <StaggerItem>
          <div className="relative group">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-500 h-full">
              {/* Number badge */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 mb-6 text-gray-700 font-bold text-lg group-hover:bg-gray-200 transition-colors duration-300">
                03
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Built-In Compliance
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                VAT reporting, PAYE calculations, and statutory submissions — all configured for South African tax law and ready to file.
              </p>
            </div>
          </div>
          </StaggerItem>
        </FadeInStagger>
      </div>
    </section>
  );
}


