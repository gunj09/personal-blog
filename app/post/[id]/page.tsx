"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { cn } from "@/lib/utils"
import {
  Github,
  Twitter,
  Instagram,
  Linkedin,
  Moon,
  Sun,
  Menu,
  X,
  Heart,
  MessageCircle,
  Share2,
  ArrowLeft,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

// Sample blog post data
const posts = [
  {
    id: 1,
    title: "Building Modern UIs with Aceternity and Framer Motion",
    content: `
      <p>Creating engaging and interactive user interfaces is essential for modern web applications. With libraries like Aceternity UI and Framer Motion, developers can easily add stunning animations and effects to their React applications.</p>
      
      <h2>Getting Started with Aceternity UI</h2>
      
      <p>Aceternity UI provides a collection of beautiful, ready-to-use components that can be easily integrated into your Next.js projects. These components are designed to be customizable and responsive, making them perfect for creating modern web applications.</p>
      
      <p>One of the standout features of Aceternity UI is its focus on animations and micro-interactions. From subtle hover effects to complex page transitions, Aceternity UI makes it easy to add that extra layer of polish to your applications.</p>
      
      <h2>Enhancing Animations with Framer Motion</h2>
      
      <p>Framer Motion is a powerful animation library for React that makes it easy to create complex animations with minimal code. It provides a simple API for creating animations, transitions, and gestures.</p>
      
      <p>When combined with Aceternity UI, Framer Motion can take your animations to the next level. You can create custom animations for your components, add gesture support, and even create complex page transitions.</p>
      
      <h2>Building a Responsive UI</h2>
      
      <p>Responsiveness is a key aspect of modern web design. With Tailwind CSS, you can easily create responsive layouts that look great on all devices. Aceternity UI components are built with responsiveness in mind, making it easy to create a consistent experience across all screen sizes.</p>
      
      <p>By combining Tailwind CSS, Aceternity UI, and Framer Motion, you can create stunning, responsive, and interactive user interfaces that will delight your users.</p>
    `,
    excerpt: "Learn how to create stunning user interfaces using the latest animation libraries and techniques.",
    category: "Tech",
    image: "/placeholder.svg?height=600&width=1200",
    date: "April 10, 2025",
    tags: ["React", "Animation", "UI/UX"],
    author: {
      name: "Alex Johnson",
      bio: "Frontend developer and UI/UX enthusiast",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: 2,
    title: "My Journey Through the Mountains of Switzerland",
    content: `
      <p>Switzerland is known for its breathtaking mountain landscapes, and I had the opportunity to experience them firsthand during my recent hiking trip. From the majestic Alps to the serene lakes, Switzerland offers some of the most stunning natural scenery in the world.</p>
      
      <h2>Planning the Trip</h2>
      
      <p>Planning a hiking trip in Switzerland requires careful consideration of the routes, accommodation, and weather conditions. I spent several weeks researching the best trails and planning my itinerary to make the most of my time in the country.</p>
      
      <p>I decided to focus on the Bernese Oberland region, which is home to some of Switzerland's most iconic mountains, including the Eiger, Mönch, and Jungfrau. This region offers a variety of hiking trails suitable for different skill levels, making it perfect for my adventure.</p>
      
      <h2>The Hiking Experience</h2>
      
      <p>The hiking experience in Switzerland is unlike any other. The well-maintained trails, stunning vistas, and clean mountain air make for an unforgettable adventure. Each day brought new challenges and rewards, from steep ascents to panoramic views that took my breath away.</p>
      
      <p>One of the highlights of my trip was hiking the Eiger Trail, which offers close-up views of the infamous Eiger North Face. The trail winds along the base of the mountain, providing a unique perspective on this legendary climbing route.</p>
      
      <h2>Tips for Future Hikers</h2>
      
      <p>If you're planning a hiking trip to Switzerland, here are a few tips based on my experience:</p>
      
      <ul>
        <li>Invest in good hiking boots and break them in before your trip</li>
        <li>Pack layers, as mountain weather can change quickly</li>
        <li>Consider purchasing a Swiss Travel Pass for convenient transportation</li>
        <li>Book accommodation in advance, especially during the peak summer season</li>
        <li>Bring a camera to capture the stunning landscapes</li>
      </ul>
      
      <p>Switzerland's mountains offer an incredible hiking experience that I would recommend to any outdoor enthusiast. The combination of natural beauty, excellent infrastructure, and Swiss hospitality makes it a perfect destination for adventure seekers.</p>
    `,
    excerpt: "Exploring the breathtaking landscapes and sharing my experiences hiking through the Swiss Alps.",
    category: "Travel",
    image: "/placeholder.svg?height=600&width=1200",
    date: "April 5, 2025",
    tags: ["Hiking", "Nature", "Adventure"],
    author: {
      name: "Alex Johnson",
      bio: "Travel enthusiast and outdoor adventurer",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: 3,
    title: "The Perfect Homemade Pizza Recipe",
    content: `
      <p>There's nothing quite like the satisfaction of making your own pizza from scratch. With the right techniques and ingredients, you can create restaurant-quality pizza in your home kitchen. In this post, I'll share my tried-and-tested recipe for the perfect homemade pizza.</p>
      
      <h2>The Dough</h2>
      
      <p>The foundation of any good pizza is the dough. Here's my recipe for a perfect pizza dough:</p>
      
      <ul>
        <li>500g bread flour</li>
        <li>325ml warm water</li>
        <li>7g active dry yeast</li>
        <li>10g salt</li>
        <li>15ml olive oil</li>
      </ul>
      
      <p>Mix the yeast with warm water and let it sit for 5 minutes. In a large bowl, combine the flour and salt. Add the yeast mixture and olive oil, then mix until a dough forms. Knead the dough for about 10 minutes until smooth and elastic. Place in an oiled bowl, cover, and let rise for 1-2 hours until doubled in size.</p>
      
      <h2>The Sauce</h2>
      
      <p>A simple tomato sauce is all you need for a delicious pizza. Here's my recipe:</p>
      
      <ul>
        <li>1 can (400g) San Marzano tomatoes</li>
        <li>2 cloves garlic, minced</li>
        <li>1 tbsp olive oil</li>
        <li>1 tsp dried oregano</li>
        <li>Salt and pepper to taste</li>
      </ul>
      
      <p>Heat the olive oil in a saucepan over medium heat. Add the garlic and cook for 30 seconds until fragrant. Add the tomatoes, oregano, salt, and pepper. Simmer for 15-20 minutes until slightly thickened. Use an immersion blender to puree the sauce if desired.</p>
      
      <h2>Baking the Pizza</h2>
      
      <p>For the best results, use a pizza stone or steel preheated in a very hot oven (250°C/480°F) for at least 30 minutes. Stretch your dough on a floured surface, add your sauce and toppings, then transfer to the hot stone. Bake for 8-10 minutes until the crust is golden and the cheese is bubbly.</p>
      
      <p>Experiment with different toppings to find your favorite combination. Some classic options include Margherita (tomato sauce, mozzarella, and basil), Pepperoni, or Quattro Formaggi (four cheese).
      
      <h2>Enjoying Your Creation</h2>
      
      <p>There's something truly special about enjoying a pizza you've made from scratch. The flavors are fresher, and you have complete control over the ingredients. Plus, it's a fun activity to share with family and friends.</p>
      
      <p>With practice, you'll develop your own style and preferences. Don't be afraid to experiment and make the recipe your own!</p>
    `,
    excerpt: "A step-by-step guide to making restaurant-quality pizza in your own kitchen with simple ingredients.",
    category: "Food",
    image: "/placeholder.svg?height=600&width=1200",
    date: "March 28, 2025",
    tags: ["Recipes", "Cooking", "Italian"],
    author: {
      name: "Alex Johnson",
      bio: "Home cook and food enthusiast",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: 4,
    title: "Finding Balance in a Digital World",
    content: `
      <p>In our increasingly connected world, finding balance between our digital and physical lives has become more important than ever. The constant notifications, endless scrolling, and 24/7 availability can take a toll on our mental health and overall wellbeing.</p>
      
      <h2>The Digital Dilemma</h2>
      
      <p>Technology has brought incredible benefits to our lives, from instant communication to access to vast amounts of information. However, these benefits come with costs. Studies have shown that excessive screen time can lead to increased anxiety, decreased attention spans, and disrupted sleep patterns.</p>
      
      <p>The challenge we face is how to harness the benefits of technology while minimizing its negative impacts. This requires a conscious effort to establish healthy boundaries and habits around our digital consumption.</p>
      
      <h2>Strategies for Digital Wellbeing</h2>
      
      <p>Here are some strategies I've found helpful in maintaining a healthy relationship with technology:</p>
      
      <ul>
        <li>Set designated tech-free times, such as during meals or before bedtime</li>
        <li>Use app timers to limit time spent on social media</li>
        <li>Turn off non-essential notifications</li>
        <li>Practice mindful technology use by asking yourself why you're reaching for your device</li>
        <li>Create tech-free zones in your home, such as the bedroom</li>
      </ul>
      
      <p>Implementing these strategies has helped me become more intentional about my technology use and reclaim time for activities that bring me joy and fulfillment.</p>
      
      <h2>The Role of Digital Detox</h2>
      
      <p>Periodically disconnecting from technology through a digital detox can be a powerful way to reset your relationship with your devices. This could be as short as a day or as long as a week, depending on what works for you.</p>
      
      <p>During my recent weekend digital detox, I was surprised by how quickly my attention span improved and how much more present I felt in my interactions with others. It also gave me the space to reflect on my technology habits and identify areas for improvement.</p>
      
      <h2>Finding Your Balance</h2>
      
      <p>The right balance between digital and physical life will look different for everyone. The key is to be intentional about your technology use and ensure it's enhancing rather than detracting from your life.</p>
      
      <p>By taking small steps to establish healthier digital habits, we can enjoy the benefits of technology while maintaining our wellbeing and connections to the physical world around us.</p>
    `,
    excerpt: "Strategies for maintaining mental health and wellness while navigating our increasingly connected lives.",
    category: "Lifestyle",
    image: "/placeholder.svg?height=600&width=1200",
    date: "March 20, 2025",
    tags: ["Wellness", "Mental Health", "Digital Detox"],
    author: {
      name: "Alex Johnson",
      bio: "Wellness advocate and mindfulness practitioner",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: 5,
    title: "The Future of Web Development: What's Coming in 2026",
    content: `
      <p>The web development landscape is constantly evolving, with new technologies, frameworks, and best practices emerging each year. As we look ahead to 2026, several trends are poised to shape the future of web development.</p>
      
      <h2>AI-Powered Development</h2>
      
      <p>Artificial intelligence is already making inroads into web development, from code completion tools to automated testing. By 2026, we can expect AI to play an even more significant role in the development process.</p>
      
      <p>AI-powered tools will help developers write more efficient code, identify potential bugs before they occur, and even generate entire components based on simple descriptions. This will not replace developers but rather augment their capabilities, allowing them to focus on more creative and complex aspects of development.</p>
      
      <h2>WebAssembly Everywhere</h2>
      
      <p>WebAssembly (Wasm) has been gaining traction as a way to run high-performance code in the browser. By 2026, we can expect Wasm to be used much more widely, enabling web applications to achieve near-native performance.</p>
      
      <p>This will open up new possibilities for web applications, from complex data visualizations to browser-based gaming and video editing. As more languages add support for compiling to WebAssembly, developers will have greater flexibility in choosing the right tools for their projects.</p>
      
      <h2>The Rise of Edge Computing</h2>
      
      <p>Edge computing, which involves processing data closer to where it's needed rather than in a centralized location, is set to transform web development. By 2026, we can expect more web applications to leverage edge computing for improved performance and reduced latency.</p>
      
      <p>Frameworks like Next.js are already embracing edge computing with features like Edge Functions. This trend will continue, with more tools and platforms offering edge computing capabilities out of the box.</p>
      
      <h2>Sustainability in Web Development</h2>
      
      <p>As awareness of the environmental impact of technology grows, sustainability will become a more important consideration in web development. By 2026, we can expect to see more emphasis on creating energy-efficient websites and applications.</p>
      
      <p>This will involve optimizing code, reducing unnecessary data transfer, and choosing hosting providers that use renewable energy. Tools for measuring and improving the carbon footprint of web applications will become more sophisticated and widely used.</p>
      
      <h2>Preparing for the Future</h2>
      
      <p>To stay ahead of these trends, developers should focus on continuous learning and experimentation. Familiarize yourself with emerging technologies, participate in open-source projects, and don't be afraid to try new approaches in your work.</p>
      
      <p>The future of web development is exciting, with new possibilities emerging all the time. By embracing these trends and remaining adaptable, developers can create more powerful, efficient, and sustainable web applications in the years to come.</p>
    `,
    excerpt:
      "Predictions and insights about upcoming trends and technologies that will shape the web development landscape.",
    category: "Tech",
    image: "/placeholder.svg?height=600&width=1200",
    date: "March 15, 2025",
    tags: ["Web Dev", "Trends", "Future Tech"],
    author: {
      name: "Alex Johnson",
      bio: "Web developer and technology futurist",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    id: 6,
    title: "Hidden Gems of Southeast Asia",
    content: `
      <p>Southeast Asia is a popular destination for travelers, but beyond the well-known attractions lie countless hidden gems waiting to be discovered. In this post, I'll share some of my favorite off-the-beaten-path destinations in the region.</p>
      
      <h2>Phong Nha, Vietnam</h2>
      
      <p>While Ha Long Bay and Sapa attract crowds of tourists, Phong Nha-Ke Bang National Park remains relatively undiscovered. Home to some of the world's largest caves, including Son Doong, this UNESCO World Heritage site offers breathtaking landscapes and unforgettable adventures.</p>
      
      <p>The small town of Phong Nha serves as a perfect base for exploring the park. From here, you can join cave tours, trek through the jungle, or simply relax by the river and enjoy the stunning karst scenery.</p>
      
      <h2>Koh Rong Samloem, Cambodia</h2>
      
      <p>While its neighbor Koh Rong has become increasingly developed, Koh Rong Samloem remains a peaceful paradise with pristine beaches and crystal-clear waters. The island has limited electricity and no ATMs, creating a truly disconnected experience.</p>
      
      <p>Saracen Bay offers comfortable accommodations and restaurants, while Lazy Beach and Sunset Beach provide more secluded options. Snorkeling, diving, and kayaking are popular activities, or you can simply relax in a hammock and enjoy the island's natural beauty.</p>
      
      <h2>Hsipaw, Myanmar</h2>
      
      <p>Located in Myanmar's northern Shan State, Hsipaw offers a glimpse into rural life and stunning landscapes without the crowds of Inle Lake or Bagan. The town is known for its excellent trekking opportunities, allowing visitors to explore tea plantations, traditional villages, and lush forests.</p>
      
      <p>The journey to Hsipaw is an adventure in itself, with the train ride from Mandalay crossing the famous Gokteik Viaduct, a colonial-era engineering marvel that spans a deep gorge.</p>
      
      <h2>Nong Khiaw, Laos</h2>
      
      <p>Nestled along the Nam Ou River and surrounded by limestone mountains, Nong Khiaw offers some of Laos' most spectacular scenery without the crowds of Luang Prabang or Vang Vieng.</p>
      
      <p>The viewpoint hike is a must-do activity, rewarding you with panoramic views of the river and mountains. Other activities include kayaking, visiting nearby villages, or simply relaxing in a riverside bungalow and watching life unfold on the water.</p>
      
      <h2>Tips for Exploring Hidden Gems</h2>
      
      <p>When visiting these lesser-known destinations, keep these tips in mind:</p>
      
      <ul>
        <li>Be prepared for basic accommodations and limited amenities</li>
        <li>Learn a few phrases in the local language</li>
        <li>Respect local customs and dress modestly</li>
        <li>Bring cash, as ATMs may be limited or nonexistent</li>
        <li>Allow extra time for transportation, as schedules may be unreliable</li>
      </ul>
      
      <p>Exploring these hidden gems offers a more authentic travel experience and the opportunity to connect with local communities. While they may require more effort to reach, the rewards of discovering these special places make it well worth the journey.</p>
    `,
    excerpt:
      "Discover lesser-known destinations that offer authentic experiences away from the typical tourist routes.",
    category: "Travel",
    image: "/placeholder.svg?height=600&width=1200",
    date: "March 8, 2025",
    tags: ["Travel Tips", "Asia", "Off the Beaten Path"],
    author: {
      name: "Alex Johnson",
      bio: "Travel writer and photographer",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  },
]

// Sample comments data
const sampleComments = [
  {
    id: 1,
    author: "Sarah Miller",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "This is such a helpful article! I've been trying to improve my UI design skills and these tips are exactly what I needed.",
    date: "April 11, 2025",
    likes: 12,
    replies: [
      {
        id: 101,
        author: "Alex Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        content: "Thanks Sarah! I'm glad you found it helpful. Let me know if you have any specific questions.",
        date: "April 11, 2025",
        likes: 3,
      },
    ],
  },
  {
    id: 2,
    author: "David Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Great insights! I've been using Framer Motion for a while now, but I hadn't tried combining it with Aceternity UI. Will definitely give it a shot.",
    date: "April 10, 2025",
    likes: 8,
    replies: [],
  },
  {
    id: 3,
    author: "Emily Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Do you have any recommendations for learning resources for someone just getting started with animation libraries?",
    date: "April 10, 2025",
    likes: 5,
    replies: [
      {
        id: 102,
        author: "Alex Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        content:
          "Hi Emily! The Framer Motion documentation is excellent for beginners. I'd also recommend checking out the Aceternity UI examples and Josh Comeau's CSS animations course.",
        date: "April 10, 2025",
        likes: 7,
      },
      {
        id: 103,
        author: "Emily Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        content: "Thanks for the recommendations! I'll check those out.",
        date: "April 10, 2025",
        likes: 2,
      },
    ],
  },
]

const socialProfiles = [
  {
    id: "github",
    name: "GitHub",
    href: "https://github.com/example",
    icon: <Github className="h-5 w-5" />,
  },
  {
    id: "twitter",
    name: "Twitter",
    href: "https://twitter.com/example",
    icon: <Twitter className="h-5 w-5" />,
  },
  {
    id: "instagram",
    name: "Instagram",
    href: "https://instagram.com/example",
    icon: <Instagram className="h-5 w-5" />,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://linkedin.com/in/example",
    icon: <Linkedin className="h-5 w-5" />,
  },
]

const categories = ["All", "Tech", "Travel", "Food", "Lifestyle"]

export default function PostPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [comments, setComments] = useState(sampleComments)
  const [newComment, setNewComment] = useState("")
  const [likedComments, setLikedComments] = useState<number[]>([])
  const [liked, setLiked] = useState(false)
  const params = useParams()
  const postId = Number(params.id)

  const post = posts.find((p) => p.id === postId)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const handleLike = () => {
    setLiked(!liked)
  }

  const handleCommentLike = (commentId: number) => {
    if (likedComments.includes(commentId)) {
      setLikedComments(likedComments.filter((id) => id !== commentId))
    } else {
      setLikedComments([...likedComments, commentId])
    }
  }

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const newCommentObj = {
      id: comments.length + 4,
      author: "You",
      avatar: "/placeholder.svg?height=40&width=40",
      content: newComment,
      date: "Just now",
      likes: 0,
      replies: [],
    }

    setComments([newCommentObj, ...comments])
    setNewComment("")
  }

  if (!post) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Post not found</p>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "min-h-screen transition-colors duration-300",
        darkMode ? "dark bg-gray-950 text-white" : "bg-white text-gray-900",
      )}
    >
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
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
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
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
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

      <main className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-pink-500 hover:text-pink-600 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <article className="max-w-4xl mx-auto">
          {/* Post Header */}
          <header className="mb-8">
            <div className="flex items-center mb-4">
              <span className="text-sm font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{post.date}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex items-center">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium">{post.author.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{post.author.bio}</p>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative w-full h-[40vh] md:h-[50vh] mb-8 rounded-xl overflow-hidden">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          {/* Post Content */}
          <div
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span key={tag} className="text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Post Actions */}
          <div className="flex items-center justify-between border-t border-b border-gray-200 dark:border-gray-800 py-4 mb-8">
            <button
              onClick={handleLike}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full transition-colors",
                liked ? "text-pink-500 bg-pink-50 dark:bg-pink-900/20" : "hover:bg-gray-100 dark:hover:bg-gray-800",
              )}
            >
              <Heart className={cn("h-5 w-5", liked && "fill-current")} />
              <span>{liked ? "Liked" : "Like"}</span>
            </button>

            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <MessageCircle className="h-5 w-5" />
                <span>Comment</span>
              </button>

              <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Author Card */}
          <SpotlightCard className="border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90 p-6 rounded-xl mb-12">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-pink-500">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">{post.author.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.author.bio}</p>
                <div className="flex justify-center md:justify-start space-x-4">
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
            </div>
          </SpotlightCard>

          {/* Comments Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Comments ({comments.length})</h2>

            {/* Comment Form */}
            <form onSubmit={handleSubmitComment} className="mb-8">
              <div className="flex gap-4 mb-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Your Avatar" fill className="object-cover" />
                </div>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write a comment..."
                  className="flex-1 p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  rows={3}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
                >
                  Post Comment
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-gray-200 dark:border-gray-800 rounded-lg p-4"
                >
                  <div className="flex gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={comment.avatar || "/placeholder.svg"}
                        alt={comment.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{comment.author}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{comment.date}</p>
                        </div>
                      </div>
                      <p className="mt-2 mb-3">{comment.content}</p>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => handleCommentLike(comment.id)}
                          className={cn(
                            "flex items-center gap-1 text-sm",
                            likedComments.includes(comment.id) ? "text-pink-500" : "text-gray-500 dark:text-gray-400",
                          )}
                        >
                          <Heart className={cn("h-4 w-4", likedComments.includes(comment.id) && "fill-current")} />
                          <span>{likedComments.includes(comment.id) ? comment.likes + 1 : comment.likes}</span>
                        </button>
                        <button className="text-sm text-gray-500 dark:text-gray-400">Reply</button>
                      </div>

                      {/* Replies */}
                      {comment.replies.length > 0 && (
                        <div className="mt-4 space-y-4 pl-6 border-l-2 border-gray-200 dark:border-gray-700">
                          {comment.replies.map((reply) => (
                            <div key={reply.id} className="flex gap-3">
                              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                <Image
                                  src={reply.avatar || "/placeholder.svg"}
                                  alt={reply.author}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h4 className="font-medium">{reply.author}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{reply.date}</p>
                                  </div>
                                </div>
                                <p className="mt-2 mb-3">{reply.content}</p>
                                <div className="flex items-center gap-4">
                                  <button className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                    <Heart className="h-4 w-4" />
                                    <span>{reply.likes}</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </article>
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

      {/* Floating "Back to Top" Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Back to top"
        >
          <ArrowLeft className="h-5 w-5 rotate-90" />
        </button>
      </motion.div>
    </div>
  )
}
