"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface SparklesProps {
  id?: string
  className?: string
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  particleColor?: string
  particleOpacity?: number
  speed?: number
}

export const SparklesCore = ({
  id,
  className,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 100,
  particleColor = "#FFF",
  particleOpacity = 0.8,
  speed = 1,
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const animationRef = useRef<number>(0)

  class Particle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number

    constructor(x: number, y: number, size: number, speedX: number, speedY: number) {
      this.x = x
      this.y = y
      this.size = size
      this.speedX = speedX
      this.speedY = speedY
    }

    update() {
      this.x += this.speedX * speed
      this.y += this.speedY * speed

      if (context && canvasRef.current) {
        if (this.x < 0 || this.x > canvasRef.current.width || this.y < 0 || this.y > canvasRef.current.height) {
          this.x = Math.random() * canvasRef.current.width
          this.y = Math.random() * canvasRef.current.height
          this.speedX = (Math.random() - 0.5) * 0.3
          this.speedY = (Math.random() - 0.5) * 0.3
        }
      }
    }

    draw() {
      if (context) {
        context.fillStyle = particleColor
        context.globalAlpha = particleOpacity
        context.beginPath()
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        context.closePath()
        context.fill()
      }
    }
  }

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      setContext(ctx)

      const handleResize = () => {
        if (canvas) {
          canvas.width = canvas.offsetWidth
          canvas.height = canvas.offsetHeight
        }
      }

      handleResize()
      window.addEventListener("resize", handleResize)

      if (ctx && canvas) {
        const particlesList: Particle[] = []
        const particleCount = Math.min(
          Math.max(Math.floor((canvas.width * canvas.height) / 10000) * particleDensity, 50),
          500,
        )

        for (let i = 0; i < particleCount; i++) {
          const x = Math.random() * canvas.width
          const y = Math.random() * canvas.height
          const size = Math.random() * (maxSize - minSize) + minSize
          const speedX = (Math.random() - 0.5) * 0.3
          const speedY = (Math.random() - 0.5) * 0.3
          particlesList.push(new Particle(x, y, size, speedX, speedY))
        }

        setParticles(particlesList)
      }

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [canvasRef, maxSize, minSize, particleDensity])

  useEffect(() => {
    const animate = () => {
      if (context && canvasRef.current) {
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
        context.fillStyle = background
        context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height)

        particles.forEach((particle) => {
          particle.update()
          particle.draw()
        })
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [context, particles, background])

  return <canvas ref={canvasRef} id={id} className={cn("h-full w-full", className)} />
}
