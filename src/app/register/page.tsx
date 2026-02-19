// this is for Register frontend page
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const router = useRouter()

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    const data = await res.json()

    if (res.ok) {
      router.push("/login")
    } else {
      setError(data.error || "Something went wrong")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Left Panel */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white flex-col justify-between p-14 relative">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-lg">
            📅
          </div>
          <span className="text-lg font-bold">EventFlow</span>
        </div>

        <div>
          <h1 className="text-4xl font-extrabold leading-tight mb-4">
            Create your <span className="text-blue-200">account</span>
          </h1>
          <p className="text-blue-100 max-w-sm">
            Join EventFlow and manage events, registrations, and attendance effortlessly.
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex flex-1 items-center justify-center px-6 py-12 bg-gray-50">
        <div className="w-full max-w-md">

          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Sign up
          </h2>

          <p className="text-gray-500 mb-6">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 font-medium hover:underline">
              Login
            </a>
          </p>

          {error && (
            <div className="bg-red-100 text-red-600 p-3 rounded-md mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
              />
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Register as
              </label>

              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-gray-700">
                  <input
                    type="radio"
                    value="USER"
                    checked={form.role === "USER"}
                    onChange={(e) =>
                      setForm({ ...form, role: e.target.value })
                    }
                    className="accent-blue-600"
                  />
                  User
                </label>

                <label className="flex items-center gap-2 text-gray-700">
                  <input
                    type="radio"
                    value="ORGANIZER"
                    checked={form.role === "ORGANIZER"}
                    onChange={(e) =>
                      setForm({ ...form, role: e.target.value })
                    }
                    className="accent-blue-600"
                  />
                  Organizer
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}
