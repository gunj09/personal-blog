"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Get in Touch
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Have a question or want to collaborate? Feel free to reach out using the contact form or through any of
              the channels below.
            </p>

            <div className="space-y-6">
              <SpotlightCard className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="bg-pink-100 dark:bg-pink-900/20 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">San Francisco, California</p>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="bg-violet-100 dark:bg-violet-900/20 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-violet-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="bg-pink-100 dark:bg-pink-900/20 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">alex@creativeblog.com</p>
                  </div>
                </div>
              </SpotlightCard>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                  <h4 className="font-bold mb-2">Do you accept guest posts?</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Yes, I welcome high-quality guest contributions that align with the blog's topics and values.
                  </p>
                </div>
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                  <h4 className="font-bold mb-2">Are you available for speaking engagements?</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    I'm open to speaking opportunities related to content creation, blogging, and digital storytelling.
                  </p>
                </div>
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                  <h4 className="font-bold mb-2">How can I collaborate with you?</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    I'm always interested in meaningful collaborations. Please use the contact form to share your ideas.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-center"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <p className="text-green-800 dark:text-green-200">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Guest Post">Guest Post</option>
                      <option value="Speaking Engagement">Speaking Engagement</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-pink-500 to-violet-500 text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                    ) : (
                      <Send className="h-5 w-5 mr-2" />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
