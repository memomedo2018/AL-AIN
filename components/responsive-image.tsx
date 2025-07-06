"use client"

import Image from "next/image"
import { useState } from "react"

interface ResponsiveImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  sizes?: string
}

export function ResponsiveImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes = "100vw",
}: ResponsiveImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={`transition-all duration-500 ${
          isLoading ? "scale-110 blur-sm" : "scale-100 blur-0"
        } object-cover w-full h-full`}
        onLoad={() => setIsLoading(false)}
        priority={priority}
        sizes={sizes}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-[#336666] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}
