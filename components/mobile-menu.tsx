"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Globe, Sun, Moon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface MobileMenuProps {
  navigation: Array<{ name: string; href: string }>
  isScrolled: boolean
  language: string
  setLanguage: (lang: string) => void
  isDarkMode: boolean
  setIsDarkMode: (mode: boolean) => void
}

export function MobileMenu({
  navigation,
  isScrolled,
  language,
  setLanguage,
  isDarkMode,
  setIsDarkMode,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
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
        className="w-full sm:w-80 bg-white/95 backdrop-blur-md border-l border-gray-200/50 p-0"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <Image src="/images/afls-logo.png" alt="AFLS Logo" width={32} height={32} className="object-contain" />
              <div>
                <div className="font-bold text-gray-900 text-sm">AFLS</div>
                <div className="text-xs text-gray-600">Al Ain Forestry</div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            <nav className="space-y-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-base font-medium text-gray-700 hover:text-[#336666] transition-all duration-300 hover:translate-x-2 transform p-3 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Footer Controls */}
          <div className="p-4 sm:p-6 border-t border-gray-200 space-y-3">
            <div className="flex gap-3">
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
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="flex items-center gap-2 px-4 hover:bg-[#336666] hover:text-white hover:border-[#336666] text-sm"
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                <span className="hidden sm:inline">Theme</span>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
