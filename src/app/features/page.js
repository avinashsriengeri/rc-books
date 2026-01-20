"use client";

import Link from "next/link";
import { FadeIn, FadeInStagger, StaggerItem } from "@/components/animations/FadeIn";

export default function Features() {
  const accountingFeatures = [
    {
      emoji: "📊",
      title: "General Ledger",
      features: [
        "Flexible chart of accounts with unlimited levels",
        "Standard and recurring journal entries",
        "Multi-currency support with exchange rates",
        "Period-end close with lock-down"
      ]
    },
    {
      emoji: "💰",
      title: "Debtors & Creditors",
      features: [
        "Custom invoice templates and branding",
        "Credit notes & payment allocation",
        "Age analysis reporting (30/60/90/120 days)",
        "Automated statement generation"
      ]
    },
    {
      emoji: "🏦",
      title: "Bank Reconciliation",
      features: [
        "Import bank statements electronically",
        "Automated matching with GL transactions",
        "Manage multiple bank accounts",
        "Outstanding items tracking"
      ]
    },
    {
      emoji: "📋",
      title: "VAT & Compliance",
      features: [
        "South African VAT compliance",
        "VAT201 return generation",
        "Input & output VAT tracking",
        "Audit-ready VAT reports"
      ]
    }
  ];

  const erpFeatures = [
    {
      emoji: "📁",
      title: "Project Setup",
      features: [
        "Unlimited projects and sub-projects",
        "Project phases and milestones",
        "Team assignments and tracking",
        "Project status management"
      ]
    },
    {
      emoji: "💵",
      title: "Cost Tracking",
      features: [
        "Labor cost tracking",
        "Material costs to projects",
        "Budget vs actual variance",
        "Project profitability analysis"
      ]
    },
    {
      emoji: "⚙️",
      title: "Manufacturing & WIP",
      features: [
        "Bill of Materials (BOM)",
        "Work-in-progress tracking",
        "Production orders",
        "Finished goods management"
      ]
    },
    {
      emoji: "📦",
      title: "Inventory & Warehousing",
      features: [
        "Multi-warehouse management",
        "Barcoding & bin control",
        "Stock transfers between warehouses",
        "Inventory valuation & COGS"
      ]
    }
  ];

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-gradient-to-b from-gray-50 via-white to-purple-50/30">
      {/* Hero Section */}
      

      {/* Accounting & Financial Management */}
      <section className="py-1 px-4">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="mb-12">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full text-black font-semibold text-sm inline-block mb-4">
                  RC Books Accounting
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl  mb-4">
                <span className="text-gradient">Accounting & Financial Management</span>
              </h2>
              <p className="text-lg text-gray-600 font-light max-w-3xl">
                Complete double-entry accounting system with South African VAT compliance, 
                bank reconciliation, and real-time financial reporting.
              </p>
            </FadeIn>

            <FadeInStagger className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
              {accountingFeatures.map((feature, index) => (
                <StaggerItem key={index}>
                  <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative">
                      {/* Emoji Icon */}
                      <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {feature.emoji}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-light text-gradient mb-6 whitespace-nowrap">
                        {feature.title}
                      </h3>
                      
                      {/* Features List */}
                      <ul className="space-y-3">
                        {feature.features.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <span className="text-purple-500 font-bold mt-1 flex-shrink-0">•</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>

      {/* ERP Features - Project Accounting */}
      <section className="py-16 px-4">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="mb-12">
              <div className="inline-block">
                <span className="px-2 py-2 rounded-full text-black font-bold  text-sm inline-block mb-4" >
                  RC Books PRO (ERP)
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl  mb-4">
                <span className="text-gradient">Project Accounting & Job Costing</span>
              </h2>
              <p className="text-lg text-gray-600 font-light max-w-3xl">
                Track costs, revenue, and profitability at the project level with real-time integration to your financial core.
              </p>
            </FadeIn>

            <FadeInStagger className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
              {erpFeatures.map((feature, index) => (
                <StaggerItem key={index}>
                  <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative">
                      {/* Emoji Icon */}
                      <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {feature.emoji}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-light text-gradient mb-6 whitespace-nowrap">
                        {feature.title}
                      </h3>
                      
                      {/* Features List */}
                      <ul className="space-y-3">
                        {feature.features.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <span className="text-purple-500 font-bold mt-1 flex-shrink-0">•</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="relative rounded-3xl p-12 md:p-16 bg-white shadow-2xl border border-gray-200 overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center">
                  <h2 className="text-3xl md:text-4xl font-light mb-6">
                    <span className="text-gradient">See RC Books in Action</span>
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Request a personalized demo and discover how our integrated platform 
                    can transform your accounting and operations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="btn-primary text-lg px-8 py-4 transform transition-transform hover:scale-105 inline-flex items-center justify-center">
                      Book a Demo
                    </Link>
                    <Link href="/pricing" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all border-2 border-gray-200 transform hover:scale-105 inline-flex items-center justify-center">
                      View Pricing
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
