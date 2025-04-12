"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Github, Twitter, Instagram, Linkedin, Moon, Sun, Menu, X } from "lucide-react"
import Link from "next/link"

// Social media profiles
const socialProfiles = [
  {
    id: 1,
    name: "GitHub",
    href: "https://github.com",
    icon: <Github className="h-4 w-4" />,
  },
  {
    id: 2,
    name: "Twitter",
    href: "https://twitter.com",
    icon: <Twitter className="h-4 w-4" />,
  },
  {
    id: 3,
    name: "Instagram",
    href: "https://instagram.com",
    icon: <Instagram className="h-4 w-4" />,
  },
  {
    id: 4,
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: <Linkedin className="h-4 w-4" />,
  },
]

export function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // After mounting, we can access the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Avoid rendering with wrong theme
  if (!mounted) return null

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            CreativeBlog
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="font-medium hover:text-pink-500 transition-colors">
            Home
          </Link>
          <Link href="/about" className="font-medium hover:text-pink-500 transition-colors">
            About
          </Link>
          <Link href="/contact" className="font-medium hover:text-pink-500 transition-colors">
            Contact
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <Link
            href="/write"
            className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Write a Post
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-gray-200 dark:border-gray-800"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="font-medium hover:text-pink-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-medium hover:text-pink-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-medium hover:text-pink-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/write"
              className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition-opacity text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Write a Post
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  )
}
