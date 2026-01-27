import React from "react"
import { Link } from "react-router-dom"
import { Container } from "../components"
import { useSelector } from "react-redux"
import PostCard from "../components/PostCard"

export default function Landing() {
  return (
    <div className="w-full bg-gray-50">
      {/* HERO */}
      <section className="w-full pt-24 pb-14">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <p className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                Simple • Clean • Fast
              </p>

              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Publish your thoughts. <br />
                Build your voice.
              </h1>

              <p className="mt-4 text-base md:text-lg text-gray-600 max-w-xl">
                Create posts, share ideas, and grow your personal blog — simple,
                fast, and distraction-free.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/signup"
                  className="px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Start Writing
                </Link>

                <Link
                  to="/all-posts"
                  className="px-5 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 font-semibold hover:bg-gray-100 transition"
                >
                  Explore Posts
                </Link>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Free to start • No complicated setup
              </p>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900">
                  Why people love this blog app
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-4">
                  <FeatureItem
                    title="Write beautifully"
                    desc="A clean editor to write blogs without distractions."
                  />
                  <FeatureItem
                    title="Share instantly"
                    desc="Publish in one click and share your post with the world."
                  />
                  <FeatureItem
                    title="Manage your posts"
                    desc="Edit, delete, and organize your content easily."
                  />
                </div>
              </div>

              <div className="absolute -z-10 -top-6 -right-6 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-70" />
              <div className="absolute -z-10 -bottom-8 -left-6 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-60" />
            </div>
          </div>
        </Container>
      </section>

      {/* HOW IT WORKS */}
      <section className="w-full py-14 bg-white border-t border-gray-100">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">How it works</h2>
            <p className="mt-2 text-gray-600">
              Start your blog in just a few simple steps.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <StepCard
              step="01"
              title="Create your account"
              desc="Sign up in seconds and get started."
            />
            <StepCard
              step="02"
              title="Write your first post"
              desc="Use the editor to create clean, readable posts."
            />
            <StepCard
              step="03"
              title="Publish and share"
              desc="Post it online and share with everyone."
            />
          </div>
        </Container>
      </section>

      {/* LATEST POSTS PREVIEW */}
      <section className="w-full py-14">
        <Container>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Latest Posts
              </h2>
              <p className="mt-1 text-gray-600">
                Fresh stories from the community.
              </p>
            </div>

            <Link
              to="/all-posts"
              className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-800 font-semibold hover:bg-gray-100 transition"
            >
              View all
            </Link>
          </div>

          {/* Demo preview cards (static sample) */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* If you want real posts here, I’ll connect your Appwrite GetPosts */}
            <DemoPostCard title="Why Goku is a mindset" />
            <DemoPostCard title="Building habits like a Saiyan" />
            <DemoPostCard title="How to stay consistent daily" />
            <DemoPostCard title="Writing better blogs: simple tips" />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="w-full py-16 bg-white border-t border-gray-100">
        <Container>
          <div className="rounded-2xl bg-gray-900 text-white p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold">Start your blog today.</h2>
              <p className="mt-2 text-white/70 max-w-xl">
                Write freely. Publish confidently. Improve every day.
              </p>
            </div>

            <Link
              to="/signup"
              className="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
            >
              Create Account
            </Link>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 text-sm">
        <Container>
          <p>© {new Date().getFullYear()} Blog. Built with React + Appwrite.</p>
        </Container>
      </footer>
    </div>
  )
}

function FeatureItem({ title, desc }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
      <p className="font-semibold text-gray-900">{title}</p>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </div>
  )
}

function StepCard({ step, title, desc }) {
  return (
    <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 hover:shadow-md transition">
      <p className="text-blue-600 font-bold">{step}</p>
      <h3 className="mt-2 text-lg font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{desc}</p>
    </div>
  )
}

function DemoPostCard({ title }) {
  return (
    <div className="rounded-2xl bg-white border border-gray-200 p-5 hover:shadow-md transition">
      <div className="h-28 w-full rounded-xl bg-gray-100 mb-4" />
      <h3 className="font-bold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">
        A clean blog post preview layout for your landing page.
      </p>
    </div>
  )
}
