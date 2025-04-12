"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { SparklesCore } from "@/components/ui/sparkles"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { cn } from "@/lib/utils"
import { Github, Twitter, Instagram, Linkedin, Moon, Sun, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"

// Sample blog post data
const posts = [
  {
    id: 1,
    title: "Building Modern UIs with Aceternity and Framer Motion",
    excerpt: "Learn how to create stunning user interfaces using the latest animation libraries and techniques.",
    category: "Tech",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 10, 2025",
    tags: ["React", "Animation", "UI/UX"],
  },
  {
    id: 2,
    title: "My Journey Through the Mountains of Switzerland",
    excerpt: "Exploring the breathtaking landscapes and sharing my experiences hiking through the Swiss Alps.",
    category: "Travel",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 5, 2025",
    tags: ["Hiking", "Nature", "Adventure"],
  },
  {
    id: 3,
    title: "The Perfect Homemade Pizza Recipe",
    excerpt: "A step-by-step guide to making restaurant-quality pizza in your own kitchen with simple ingredients.",
    category: "Food",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 28, 2025",
    tags: ["Recipes", "Cooking", "Italian"],
  },
  {
    id: 4,
    title: "Finding Balance in a Digital World",
    excerpt: "Strategies for maintaining mental health and wellness while navigating our increasingly connected lives.",
    category: "Lifestyle",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 20, 2025",
    tags: ["Wellness", "Mental Health", "Digital Detox"],
  },
  {
    id: 5,
    title: "The Future of Web Development: What's Coming in 2026",
    excerpt:
      "Predictions and insights about upcoming trends and technologies that will shape the web development landscape.",
    category: "Tech",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 15, 2025",
    tags: ["Web Dev", "Trends", "Future Tech"],
  },
  {
    id: 6,
    title: "Hidden Gems of Southeast Asia",
    excerpt:
      "Discover lesser-known destinations that offer authentic experiences away from the typical tourist routes.",
    category: "Travel",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 8, 2025",
    tags: ["Travel Tips", "Asia", "Off the Beaten Path"],
  },
]

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

// Categories
const categories = ["All", "Tech", "Travel", "Food", "Lifestyle"]

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")

  // After mounting, we can access the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const filteredPosts = selectedCategory === "All" ? posts : posts.filter((post) => post.category === selectedCategory)

  // Avoid rendering with wrong theme
  if (!mounted) return null

  return (
    <div className="min-h-screen">
      {/* Navbar */}
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

      <main>
        {/* Hero Section with Spotlight */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor={theme === "dark" ? "#fff" : "#000"}
            />
          </div>
          <BackgroundBeams className="opacity-20" />

          <div className="container mx-auto px-4 z-10">
            <SpotlightCard className="border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90 p-8 rounded-3xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    alt="Blogger Avatar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
                  >
                    Alex Johnson
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl mb-6 max-w-2xl"
                  >
                    Exploring technology, travel, food, and lifestyle. Sharing my experiences and insights to inspire
                    your next adventure.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center md:justify-start space-x-4"
                  >
                    {socialProfiles.map((profile) => (
                      <AnimatedTooltip
                        key={profile.id}
                        items={[
                          {
                            id: profile.id,
                            name: profile.name,
                            designation: "",
                            image: "",
                          },
                        ]}
                      >
                        <a
                          href={profile.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                          aria-label={profile.name}
                        >
                          {profile.icon}
                        </a>
                      </AnimatedTooltip>
                    ))}
                  </motion.div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-12">
              <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                      selectedCategory === category
                        ? "bg-white dark:bg-gray-700 shadow-sm"
                        : "hover:bg-white/50 dark:hover:bg-gray-700/50",
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/post/${post.id}`}>
                    <HoverEffect
                      items={[
                        {
                          title: post.title,
                          description: post.excerpt,
                          link: `/post/${post.id}`,
                        },
                      ]}
                    >
                      <div className="group relative h-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 transition-all duration-200 hover:shadow-lg">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-2 right-2 bg-white dark:bg-gray-900 text-xs font-medium px-2 py-1 rounded-full">
                            {post.category}
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) => (
                              <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                            <span>{post.date}</span>
                            <span className="text-pink-500 font-medium">Read more</span>
                          </div>
                        </div>
                      </div>
                    </HoverEffect>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to my newsletter</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Get the latest posts delivered right to your inbox
              </p>
              <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="text-2xl font-bold mb-4 inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                  CreativeBlog
                </span>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
                A personal blog sharing insights and experiences about technology, travel, food, and lifestyle.
              </p>
              <div className="flex space-x-4">
                {socialProfiles.map((profile) => (
                  <a
                    key={profile.id}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label={profile.name}
                  >
                    {profile.icon}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-500 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-500 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-500 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories
                  .filter((cat) => cat !== "All")
                  .map((category) => (
                    <li key={category}>
                      <Link
                        href={`/?category=${category}`}
                        className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-500 transition-colors"
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} CreativeBlog. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating "Write a Post" Button (Mobile) */}
      <motion.div
        className="fixed bottom-6 right-6 md:hidden z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Link
          href="/write"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Write a post"
        >
          <span className="text-xl font-bold">+</span>
        </Link>
      </motion.div>
    </div>
  )
}
