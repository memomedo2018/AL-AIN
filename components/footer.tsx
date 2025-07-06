"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send, ArrowUp } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#336666] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#7dd3c0] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-[#336666] to-[#2a5555] rounded-3xl p-12 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with AFLS</h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Get the latest updates on our environmental projects and sustainability initiatives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20"
              />
              <Button className="bg-white text-[#336666] hover:bg-gray-100 px-8 whitespace-nowrap">
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-12">
          {/* Enhanced Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-[#336666] to-[#7dd3c0] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#7dd3c0] rounded-full animate-pulse" />
              </div>
              <div>
                <div className="font-bold text-2xl">AFLS</div>
                <div className="text-sm text-gray-400">Al Ain Forestry & Landscaping</div>
              </div>
            </Link>

            <p className="text-gray-400 mb-8 leading-relaxed">
              Leading the UAE's environmental transformation through innovative forestry management and sustainable
              landscaping solutions for a greener future.
            </p>

            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#", color: "hover:bg-blue-600" },
                { icon: Twitter, href: "#", color: "hover:bg-sky-500" },
                { icon: Instagram, href: "#", color: "hover:bg-pink-600" },
                { icon: Linkedin, href: "#", color: "hover:bg-blue-700" },
              ].map(({ icon: Icon, href, color }, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className={`border-gray-700 hover:border-transparent bg-transparent ${color} transition-all duration-300 hover:scale-110`}
                  asChild
                >
                  <Link href={href}>
                    <Icon className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-8 text-white">Quick Links</h3>
            <div className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Projects", href: "/projects" },
                { name: "Careers", href: "/careers" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 transform"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-xl mb-8 text-white">Our Services</h3>
            <div className="space-y-4">
              {[
                "Landscape Design & Execution",
                "Environmental Monitoring",
                "Smart Irrigation Systems",
                "Reforestation Programs",
                "Biodiversity Conservation",
              ].map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 transform"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Enhanced Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-8 text-white">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="bg-[#336666]/20 p-3 rounded-lg group-hover:bg-[#336666]/30 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-[#7dd3c0]" />
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  <p className="font-semibold text-white mb-1">Head Office</p>
                  <p>Al Ain Forestry & Landscaping Services</p>
                  <p>P.O. Box 1234, Al Ain</p>
                  <p>Abu Dhabi, UAE</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-[#336666]/20 p-3 rounded-lg group-hover:bg-[#336666]/30 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-[#7dd3c0]" />
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  <p className="font-semibold text-white">+971 3 123 4567</p>
                  <p className="text-sm">24/7 Support Available</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-[#336666]/20 p-3 rounded-lg group-hover:bg-[#336666]/30 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-[#7dd3c0]" />
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  <p className="font-semibold text-white">info@afls.ae</p>
                  <p className="text-sm">Quick Response Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm mb-2">
                © {new Date().getFullYear()} Al Ain Forestry & Landscaping Services. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Contributing to UAE's Net Zero 2050 Vision | Environmental Excellence Since 2008
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex gap-6 text-sm">
                {["Privacy Policy", "Terms of Service", "Accessibility"].map((link) => (
                  <Link key={link} href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link}
                  </Link>
                ))}
              </div>

              <Button
                onClick={scrollToTop}
                size="icon"
                className="bg-[#336666] hover:bg-[#2a5555] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
