"use client";

import Link from "next/link";
import { useState } from "react";
import { FadeIn, FadeInStagger, StaggerItem } from "@/components/animations/FadeIn";
import { motion } from "framer-motion";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState("RC Books PRO");

  const plans = [
    {
      id: "rc-books",
      name: "RC Books",
      tag: "Essential",
      tagColor: "green",
      description: "Complete accounting solution for small to medium businesses. Manage invoices, expenses, and financial reports with ease.",
      monthlyPrice: 599,
      yearlyPrice: Math.round(599 * 12 * 0.8),
    },
    {
      id: "rc-books-pro",
      name: "RC Books PRO",
      tag: "Most Popular",
      tagColor: "purple",
      description: "Advanced accounting with payroll, project costing, and advanced reporting for growing businesses with complex financial needs.",
      monthlyPrice: 999,
      yearlyPrice: Math.round(999 * 12 * 0.8),
    }
  ];

  const planFeatures = {
    "RC Books": [
      "Invoicing & billing",
      "Expense tracking",
      "Financial reports",
      "Bank reconciliation",
      "Tax calculations",
      "Multi-currency support"
    ],
    "RC Books PRO": [
      "Everything in RC Books",
      "Payroll management",
      "Project costing",
      "Advanced reports",
      "Multi-company support",
      "API access"
    ]
  };

  const customSolutionAddons = [
    "Custom integrations",
    "Dedicated account manager",
    "Priority support 24/7",
    "On-premise deployment option",
    "Custom branding",
    "Advanced reporting"
  ];

  const currentPlan = plans.find(p => p.name === selectedPlan);

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-gradient-to-b from-gray-50 via-white to-purple-50/30">
      {/* Hero Section */}
      <section className="py-8 md:py-10">
        <div className="container-custom">
          <FadeIn className="text-center max-w-3xl mx-auto mb-8">
            <h1 className="text-5xl md:text-6xl font-light mb-4">
              <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-lg text-gray-600 font-light">
              Choose the perfect plan for your business. Start with what you need today, scale as you grow.
            </p>
          </FadeIn>

          {/* Billing Toggle */}
          <FadeIn delay={0.2} className="flex justify-center mb-10">
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  billingCycle === "monthly"
                    ? "bg-white text-gray-900 shadow-md"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  billingCycle === "yearly"
                    ? "bg-white text-gray-900 shadow-md"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Yearly
              </button>
            </div>
          </FadeIn>

          {/* Pricing Cards - 2 in a row */}
          <div className="max-w-4xl mx-auto">
            <FadeInStagger className="grid md:grid-cols-2 gap-6 mb-8" staggerDelay={0.15}>
              {plans.map((plan, index) => (
                <StaggerItem key={plan.id}>
                <motion.div
                  onClick={() => setSelectedPlan(plan.name)}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className={`relative cursor-pointer transition-all duration-300 rounded-2xl ${
                    selectedPlan === plan.name
                      ? "p-[2px] bg-gradient-full shadow-xl"
                      : ""
                  }`}
                >
                  <div className={`bg-white rounded-2xl p-6 h-full ${
                    selectedPlan !== plan.name
                      ? "border border-gray-200 hover:border-gray-300 hover:shadow-md"
                      : ""
                  }`}>
                    {/* Radio/Check Button */}
                    <div className="absolute top-5 right-5">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        selectedPlan === plan.name
                          ? "bg-purple-500"
                          : "border-2 border-gray-300"
                      }`}>
                        {selectedPlan === plan.name && (
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                    
                    {/* Tag */}
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${
                      plan.tagColor === "green" 
                        ? "bg-green-100 text-green-700" 
                        : plan.tagColor === "purple"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-gray-100 text-gray-600"
                    }`}>
                      {plan.tag}
                    </span>

                    {/* Description */}
                    <p className="text-sm text-gray-600 font-light mb-6 leading-relaxed min-h-[80px]">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-baseline gap-1">
                      <span className={`text-3xl font-bold ${
                        selectedPlan === plan.name ? "text-gradient" : "text-gray-900"
                      }`}>
                        R {billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-500 text-sm">/{billingCycle === "monthly" ? "month" : "year"}</span>
                    </div>

                    <p className="text-xs text-gray-400 mt-1">
                      {billingCycle === "yearly" 
                        ? `Billed yearly (Save R ${Math.round(plan.monthlyPrice * 12 * 0.2)}/year)` 
                        : "Billed monthly"}
                    </p>
                  </div>
                </motion.div>
                </StaggerItem>
              ))}
            </FadeInStagger>

            {/* Choose Plan Button */}
            <FadeIn delay={0.4} className="text-center mb-12">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center px-8 py-3 text-base transform transition-transform hover:scale-105"
              >
                Choose Plan: {currentPlan.name}
              </Link>
            </FadeIn>

            {/* Features Section - Two Columns */}
            <FadeIn delay={0.5}>
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-sm max-w-4xl mx-auto hover:shadow-xl transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* Left Column - Plan Features */}
                <div className="flex flex-col items-center md:items-start md:pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">
                    {currentPlan.name} - Features Included
                  </h4>
                  <div className="space-y-4">
                    {planFeatures[selectedPlan].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Custom Solution Add-ons */}
                <div className="md:border-l md:border-gray-100 md:pl-8">
                  <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-6">
                    Custom Solution
                  </p>
                  <div className="space-y-4">
                    {customSolutionAddons.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Custom Solution CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center relative">
            {/* Glossy Card with Gradient Border */}
            <FadeIn>
            <div className="relative rounded-3xl p-12 md:p-16 bg-white shadow-2xl border border-gray-200 overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:-translate-y-1">
              {/* Outer Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  <span className="text-gradient">Need a Custom Solution?</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Get tailored features, dedicated support, and enterprise-grade solutions designed specifically for your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Link href="/contact" className="btn-primary text-lg px-8 py-4 transform transition-transform hover:scale-105">
                    Contact Sales
                  </Link>
                  <Link href="/features" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all border-2 border-gray-200 transform hover:scale-105">
                    View All Features
                  </Link>
                </div>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-2xl">✓</span>
                    <span>Flexible deployment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-2xl">✓</span>
                    <span>Priority support</span>
                  </div>
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
