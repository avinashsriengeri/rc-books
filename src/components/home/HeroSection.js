"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SparklesText from "@/components/SparklesText";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white pt-32 pb-20 overflow-hidden flex items-center">
      {/* Hero Background Container */}
      <div className="absolute inset-0 w-screen h-full" style={{ left: '50%', transform: 'translateX(-50%)' }}>
        {/* Animated gradient mesh */}
        <div className="mesh-bg absolute inset-0 w-full h-full opacity-60 pointer-events-none"></div>
        
        {/* Soft dotted grid panning subtly */}
        <div className="animated-grid absolute inset-0 w-full h-full opacity-20 pointer-events-none"></div>
        
        {/* Animated wave patterns */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <svg className="wave-svg wave-1" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="rgba(212, 65, 142, 0.08)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg className="wave-svg wave-2" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="rgba(6, 82, 197, 0.06)" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,149.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg className="wave-svg wave-3" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="rgba(37, 150, 190, 0.05)" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,186.7C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content Card */}
            <div className="text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight"
              >
                <SparklesText>
                  <span className="text-gradient">Books</span>
                </SparklesText>
              </motion.h1>
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 mb-6 leading-relaxed"
              >
                Powerful Accounting & ERP Software Built for South African Businesses
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed"
              >
                Cloud-based accounting, ERP, and payroll with South African compliance built-in. 
                Real-time financial control, project costing, manufacturing, and statutory reporting — 
                all integrated in one platform.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="flex flex-col sm:flex-row gap-4 mb-6"
              >
                <Link href="/contact" className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 inline-block text-center transform transition-transform hover:scale-105">
                  Request Demo
                </Link>
              
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-sm text-gray-500"
              >
                ✓ No credit card required • ✓ Free demo available • ✓ Setup in minutes
              </motion.p>
            </div>

            {/* Right Side - Reserved for future content */}
            <div className="hidden lg:block">
              {/* Future dashboard or visual element */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

