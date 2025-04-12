"use client"

import type React from "react"

import { useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface HoverEffectItem {
  title: string
  description: string
  link?: string
}

interface HoverEffectProps {
  items: HoverEffectItem[]
  className?: string
  children: React.ReactNode
}

export const HoverEffect = ({ items, className, children }: HoverEffectProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className={cn("relative h-full", className)}
      onMouseEnter={() => setHoveredIndex(0)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {children}
    </div>
  )
}
