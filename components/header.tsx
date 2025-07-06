"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Globe, Sun, Moon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState("EN")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Responsive */}
          <Link href="/" className="flex items-center gap-2 sm:gap-4 group">
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 relative">
                <Image
                  src="/images/afls-logo.png"
                  alt="AFLS Logo"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 40px, (max-width: 1024px) 48px, 56px"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-[#7dd3c0] rounded-full animate-pulse shadow-lg" />
            </div>
            <div className="hidden sm:block">
              <div
                className={`font-bold text-lg sm:text-xl transition-colors duration-300 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                AFLS
              </div>
              <div
                className={`text-xs transition-colors duration-300 leading-tight ${
                  isScrolled ? "text-gray-600" : "text-gray-300"
                }`}
              >
                Al Ain Forestry & Landscaping
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled ? "text-gray-700 hover:text-[#336666]" : "text-white/90 hover:text-white"
                } group`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#336666] to-[#7dd3c0] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Controls - Responsive */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Theme Toggle - Hidden on small screens */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`hidden md:flex transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? "border-gray-300 hover:border-[#336666] hover:bg-[#336666] hover:text-white"
                  : "border-white/30 hover:border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#336666]"
              }`}
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Language Toggle - Responsive */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "EN" ? "AR" : "EN")}
              className={`hidden sm:flex items-center gap-1 sm:gap-2 transition-all duration-300 hover:scale-105 font-medium text-xs sm:text-sm ${
                isScrolled
                  ? "border-gray-300 hover:border-[#336666] hover:bg-[#336666] hover:text-white"
                  : "border-white/30 hover:border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#336666]"
              }`}
            >
              <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
              {language}
              <span className="hidden lg:inline text-xs opacity-70">{language === "EN" ? "عربي" : "English"}</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className={`lg:hidden transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? "border-gray-300 hover:border-[#336666] hover:bg-[#336666] hover:text-white"
                      : "border-white/30 hover:border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#336666]"
                  }`}
                >
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:w-80 bg-white/95 backdrop-blur-md border-l border-gray-200/50"
              >
                <div className="flex flex-col gap-6 sm:gap-8 mt-6 sm:mt-8">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                    <Image
                      src="/images/afls-logo.png"
                      alt="AFLS Logo"
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                    />
                    <div>
                      <div className="font-bold text-gray-900 text-sm sm:text-base">AFLS</div>
                      <div className="text-xs text-gray-600">Al Ain Forestry & Landscaping</div>
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <div className="space-y-2">
                    {navigation.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-base sm:text-lg font-medium text-gray-700 hover:text-[#336666] transition-all duration-300 hover:translate-x-2 transform p-3 rounded-lg hover:bg-gray-50"
                        onClick={() => setIsOpen(false)}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Controls */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 border-t border-gray-200">
                    <Button
                      variant="outline"
                      onClick={() => setLanguage(language === "EN" ? "AR" : "EN")}
                      className="flex items-center gap-2 flex-1 hover:bg-[#336666] hover:text-white hover:border-[#336666] text-sm"
                    >
                      <Globe className="h-4 w-4" />
                      {language}
                      <span className="text-xs opacity-70">{language === "EN" ? "عربي" : "English"}</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setIsDarkMode(!isDarkMode)}
                      className="hover:bg-[#336666] hover:text-white hover:border-[#336666] sm:w-auto sm:px-4"
                    >
                      {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                      <span className="ml-2 sm:hidden">Theme</span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
