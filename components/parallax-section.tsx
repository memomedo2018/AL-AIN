"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ParallaxSectionProps {
  children: React.ReactNode
  speed?: number
}

export function ParallaxSection({ children, speed = 0.5 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const scrolled = window.pageYOffset
      const parallax = scrolled * speed

      ref.current.style.transform = `translateY(${parallax}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return <div ref={ref}>{children}</div>
}
