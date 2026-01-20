"use client";

import { FadeIn, FadeInStagger, StaggerItem } from "@/components/animations/FadeIn";

export default function ThreeSystemsSection() {
  return (
    <section className="py-20 px-4 bg-white relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl  mb-4">
            <span className="text-gradient">Two Powerful Solutions.One Platform.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with accounting essentials or go straight to full ERP. 
            Both solutions share the same cloud platform, real-time data, and South African compliance.
          </p>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch" staggerDelay={0.2}>
          {/* RC Books Accounting - Minimal Card */}
          <StaggerItem>
          <div className="relative group h-full">
            {/* Subtle border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Card content */}
            <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 h-full flex flex-col">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gradient whitespace-nowrap">
                      RC Books Accounting
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  Complete double-entry accounting system with South African compliance. 
                  Perfect for businesses focused on core financial management.
                </p>
              </div>

              {/* Features list */}
              <div className="space-y-2.5">
                <div className="flex items-start gap-3 group/item">
                  <svg className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-sm">General Ledger & Journal Entries</span>
                </div>
                
                <div className="flex items-start gap-3 group/item">
                  <svg className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-sm">Debtors & Creditors Management</span>
                </div>
                
                <div className="flex items-start gap-3 group/item">
                  <svg className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-sm">VAT Calculation & Reporting</span>
                </div>
                
                <div className="flex items-start gap-3 group/item">
                  <svg className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-sm">Bank Reconciliation & Cash Flow</span>
                </div>
                
                <div className="flex items-start gap-3 group/item">
                  <svg className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-sm">Financial Statements & Audit Trails</span>
                </div>
              </div>

              {/* Bottom line */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-500">Small to medium businesses, service companies, retail</p>
              </div>
            </div>
          </div>
          </StaggerItem>

          {/* RC Books Pro - Minimal Card */}
          <StaggerItem>
          <div className="relative group h-full">
            {/* Subtle border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Card content */}
            <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 h-full flex flex-col">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gradient whitespace-nowrap">
                      RC Books Pro
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  Full ERP with project accounting, manufacturing, and inventory management. 
                  Everything integrated into your financial core.
                </p>
              </div>

              {/* Features list */}
              <div className="space-y-2.5 flex-1">
                <div className="flex items-start gap-3 group/item">
                  <svg className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-sm"><span className="font-semibold text-gray-800">Everything in RC Books</span> + Advanced features</span>
                </div>
                
                <div className="flex items-start gap-3 group/item">
                  <svg className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-sm">Project Accounting & Job Costing</span>
                </div>
                
                <div className="flex items-start gap-3 group/item">
                  <svg className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-sm">Manufacturing (BOM, WIP, Finished Goods)</span>
                </div>
                
                <div className="flex items-start gap-3 group/item">
                  <svg className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-sm">Multi-Warehouse Inventory Control</span>
                </div>
                
                <div className="flex items-start gap-3 group/item">
                  <svg className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-sm">Barcoding & Bin-Level Stock Control</span>
                </div>
              </div>

              {/* Bottom line */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-500">Manufacturing, construction, project-based businesses</p>
              </div>
            </div>
          </div>
          </StaggerItem>
        </FadeInStagger>
   
      </div>
    </section>
  );
}


