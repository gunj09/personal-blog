"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TooltipItem {
  id: number | string
  name: string
  designation?: string
  image?: string
}

interface AnimatedTooltipProps {
  items: TooltipItem[]
  children: React.ReactNode
  className?: string
}

export const AnimatedTooltip = ({ items, children, className }: AnimatedTooltipProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setTooltipPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top - 10,
      })
    }
  }

  return (
    <div ref={containerRef} className={cn("relative", className)} onMouseMove={handleMouseMove}>
      <div className="relative" onMouseEnter={() => setHoveredIndex(0)} onMouseLeave={() => setHoveredIndex(null)}>
        {children}
      </div>
      {hoveredIndex !== null && items[0] && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.6 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 15,
            },
          }}
          exit={{ opacity: 0, y: 20, scale: 0.6 }}
          style={{
            position: "absolute",
            left: tooltipPosition.x,
            top: tooltipPosition.y,
            translateX: "-50%",
            translateY: "-100%",
            zIndex: 50,
          }}
          className="rounded-md bg-black px-4 py-2 text-xs font-medium text-white shadow-xl"
        >
          <div className="flex flex-col items-center justify-center">
            <span className="whitespace-nowrap text-center font-semibold">{items[0].name}</span>
          </div>
          <div
            className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-black"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
            }}
          />
        </motion.div>
      )}
    </div>
  )
}
