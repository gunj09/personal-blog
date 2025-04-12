"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { ImageIcon, FileText, Tag, Calendar, Save, X, Plus, Upload } from "lucide-react"

export default function WritePage() {
  const [formState, setFormState] = useState({
    title: "",
    category: "",
    content: "",
    excerpt: "",
    tags: [] as string[],
    currentTag: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddTag = () => {
    if (formState.currentTag.trim() && !formState.tags.includes(formState.currentTag.trim())) {
      setFormState((prev) => ({
        ...prev,
        tags: [...prev.tags, prev.currentTag.trim()],
        currentTag: "",
      }))
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setFormState((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddTag()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          title: "",
          category: "",
          content: "",
          excerpt: "",
          tags: [],
          currentTag: "",
        })
      }, 3000)
    }, 1500)
  }

  const categories = ["Tech", "Travel", "Food", "Lifestyle"]

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Write a New Post
        </h1>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Save className="h-8 w-8 text-green-600 dark:text-green-300" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Post Saved Successfully!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Your post has been saved and is now pending review. It will be published soon.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Write Another Post
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                {/* Title */}
                <div>
                  <label htmlFor="title" className="block text-sm font-medium mb-2">
                    Post Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formState.title}
                    onChange={handleChange}
                    placeholder="Enter a captivating title"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg"
                    required
                  />
                </div>

                {/* Content */}
                <div>
                  <label htmlFor="content" className="block text-sm font-medium mb-2">
                    Post Content
                  </label>
                  <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
                    <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-300 dark:border-gray-700">
                      <button type="button" className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                        <span className="font-bold">B</span>
                      </button>
                      <button type="button" className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                        <span className="italic">I</span>
                      </button>
                      <button type="button" className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                        <span className="underline">U</span>
                      </button>
                      <button type="button" className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                        <ImageIcon className="h-4 w-4" />
                      </button>
                      <button type="button" className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                        <FileText className="h-4 w-4" />
                      </button>
                    </div>
                    <textarea
                      id="content"
                      name="content"
                      value={formState.content}
                      onChange={handleChange}
                      rows={12}
                      placeholder="Write your post content here..."
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 focus:outline-none"
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Excerpt */}
                <div>
                  <label htmlFor="excerpt" className="block text-sm font-medium mb-2">
                    Post Excerpt
                  </label>
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    value={formState.excerpt}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Write a short excerpt to display in post previews"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="space-y-6">
                {/* Featured Image */}
                <SpotlightCard className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 rounded-xl">
                  <h3 className="font-bold mb-4 flex items-center">
                    <ImageIcon className="h-5 w-5 mr-2 text-pink-500" />
                    Featured Image
                  </h3>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      Drag and drop an image, or click to browse
                    </p>
                    <button
                      type="button"
                      className="text-sm bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      Upload Image
                    </button>
                  </div>
                </SpotlightCard>

                {/* Category */}
                <SpotlightCard className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 rounded-xl">
                  <h3 className="font-bold mb-4 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-pink-500" />
                    Category
                  </h3>
                  <select
                    id="category"
                    name="category"
                    value={formState.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </SpotlightCard>

                {/* Tags */}
                <SpotlightCard className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 rounded-xl">
                  <h3 className="font-bold mb-4 flex items-center">
                    <Tag className="h-5 w-5 mr-2 text-pink-500" />
                    Tags
                  </h3>
                  <div className="flex mb-2">
                    <input
                      type="text"
                      value={formState.currentTag}
                      onChange={(e) => setFormState((prev) => ({ ...prev, currentTag: e.target.value }))}
                      onKeyDown={handleKeyDown}
                      placeholder="Add a tag"
                      className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <button
                      type="button"
                      onClick={handleAddTag}
                      className="bg-pink-500 text-white px-3 py-2 rounded-r-lg hover:bg-pink-600 transition-colors"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formState.tags.map((tag) => (
                      <div
                        key={tag}
                        className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm flex items-center"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          className="ml-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                    {formState.tags.length === 0 && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">No tags added yet</p>
                    )}
                  </div>
                </SpotlightCard>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                className="px-6 py-2 mr-4 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Save as Draft
              </button>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center"
              >
                {isSubmitting ? (
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                ) : (
                  <Save className="h-5 w-5 mr-2" />
                )}
                {isSubmitting ? "Publishing..." : "Publish Post"}
              </motion.button>
            </div>
          </form>
        )}
      </main>

      <Footer />
    </div>
  )
}
