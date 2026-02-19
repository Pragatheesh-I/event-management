// this is for  Frontend Login Page                     
"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
 
export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  })
 
  const router = useRouter()
 
  const handleSubmit = async (e: any) => {
    e.preventDefault()
 
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(form)
    })
 
    if (res.ok) {
      router.push("/dashboard/user")
    }
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
 
      <button type="submit">Login</button>
    </form>
  )
}