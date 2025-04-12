"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface BackgroundBeamsProps {
  className?: string
}

export const BackgroundBeams = ({ className }: BackgroundBeamsProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
  const animationRef = useRef<number>(0)

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      setContext(ctx)

      const handleResize = () => {
        if (canvas) {
          canvas.width = window.innerWidth
          canvas.height = window.innerHeight
        }
      }

      handleResize()
      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [canvasRef])

  useEffect(() => {
    if (!context || !canvasRef.current) return

    const beams: Beam[] = []
    const numBeams = 10
    const canvas = canvasRef.current

    class Beam {
      x: number
      y: number
      width: number
      height: number
      speed: number
      opacity: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.width = Math.random() * 10 + 2
        this.height = Math.random() * canvas.height
        this.speed = Math.random() * 0.5 + 0.1
        this.opacity = Math.random() * 0.5 + 0.1
        this.color = `rgba(255, 255, 255, ${this.opacity})`
      }

      update() {
        this.y += this.speed
        if (this.y > canvas.height) {
          this.y = -this.height
          this.x = Math.random() * canvas.width
        }
      }

      draw() {
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, this.width, this.height)
      }
    }

    for (let i = 0; i < numBeams; i++) {
      beams.push(new Beam())
    }

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)

      beams.forEach((beam) => {
        beam.update()
        beam.draw()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [context])

  return <canvas ref={canvasRef} className={cn("absolute inset-0 z-0", className)} />
}
