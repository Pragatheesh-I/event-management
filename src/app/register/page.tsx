// this is for Register frontend page
"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
 
export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER"
  })
 
  const router = useRouter()
 
  const handleSubmit = async (e: any) => {
    e.preventDefault()
 
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(form)
    })
 
    if (res.ok) {
      router.push("/login")
    }
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
 
      <select onChange={e => setForm({ ...form, role: e.target.value })}>
        <option value="USER">User</option>
        <option value="ORGANIZER">Organizer</option>
      </select>
 
      <button type="submit">Register</button>
    </form>
  )
}