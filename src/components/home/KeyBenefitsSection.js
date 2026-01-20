"use client";

import { FadeIn, FadeInStagger, StaggerItem } from "@/components/animations/FadeIn";

export default function KeyBenefitsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
          <span className="text-gradient">Why RC Books?</span>
          </h2>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          <StaggerItem>
          <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 h-full">
            <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">Financial Accuracy</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Real-time integration eliminates manual data entry and reconciliation errors
            </p>
          </div>
          </StaggerItem>

          <StaggerItem>
          <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 h-full">
            <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">Cost Visibility</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Track project costs, inventory values, and expenses down to the transaction level
            </p>
          </div>
          </StaggerItem>

          <StaggerItem>
          <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 h-full">
            <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">Compliance Ready</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              South African VAT, PAYE, and statutory reporting built into the platform
            </p>
          </div>
          </StaggerItem>

          <StaggerItem>
          <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 h-full">
            <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">Scalable Growth</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Start with accounting, add ERP modules as you grow — modular and flexible
            </p>
          </div>
          </StaggerItem>
        </FadeInStagger>
      </div>
    </section>
  );
}


