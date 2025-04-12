"use client"

import { motion } from "framer-motion"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { Github, Twitter, Instagram, Linkedin } from "lucide-react"

// Social media profiles
const socialProfiles = [
  {
    id: 1,
    name: "GitHub",
    href: "https://github.com",
    icon: <Github className="h-5 w-5" />,
  },
  {
    id: 2,
    name: "Twitter",
    href: "https://twitter.com",
    icon: <Twitter className="h-5 w-5" />,
  },
  {
    id: 3,
    name: "Instagram",
    href: "https://instagram.com",
    icon: <Instagram className="h-5 w-5" />,
  },
  {
    id: 4,
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: <Linkedin className="h-5 w-5" />,
  },
]

// Skills data
const skills = [
  { name: "Web Development", level: 90 },
  { name: "Photography", level: 85 },
  { name: "Content Writing", level: 80 },
  { name: "UI/UX Design", level: 75 },
  { name: "Video Editing", level: 70 },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          About Me
        </h1>

        {/* About Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold mb-6">Hi, I'm Alex Johnson</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I'm a passionate blogger, photographer, and digital storyteller based in San Francisco. With over 8
                years of experience in content creation, I've developed a unique perspective on technology, travel,
                food, and lifestyle topics.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                My journey began in 2017 when I started documenting my travels across Southeast Asia. What started as a
                personal journal quickly evolved into a platform where I could share my experiences and insights with a
                wider audience.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Today, CreativeBlog serves as a hub for my diverse interests, from cutting-edge web development
                techniques to hidden travel gems and culinary adventures. My mission is to inspire, inform, and connect
                with readers who share my curiosity about the world.
              </p>

              <div className="flex space-x-4">
                {socialProfiles.map((profile) => (
                  <a
                    key={profile.id}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label={profile.name}
                  >
                    {profile.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image src="/placeholder-user.jpg" alt="Alex Johnson" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-xl">
                <p className="font-bold">8+ Years</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Content Creation</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <SpotlightCard className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 rounded-xl">
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-pink-500 to-violet-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </SpotlightCard>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">Bachelor of Arts in Communications</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">University of California, 2015</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-2">Experience</h3>
                <div className="mb-4">
                  <p className="text-gray-600 dark:text-gray-400 mb-1">Content Creator & Blogger</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">CreativeBlog, 2017 - Present</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">Digital Marketing Specialist</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Tech Innovations Inc., 2015 - 2017</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">English (Native)</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Spanish (Fluent)</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">French (Basic)</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What People Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-6 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={`/placeholder.svg?height=48&width=48&text=User${i}`}
                      alt={`Testimonial ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Reader {i}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Loyal follower</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic">
                  "Alex's blog has been an incredible source of inspiration for me. The content is always thoughtful,
                  well-researched, and presented in an engaging way."
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-gradient-to-r from-pink-500/10 to-violet-500/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Connect!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Have a question, suggestion, or just want to say hello? I'd love to hear from you. Reach out through the
              contact form or connect with me on social media.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-pink-500 to-violet-500 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </motion.a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
