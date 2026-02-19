"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(form),
    })

    if (res.ok) {
      router.push("/dashboard/user")
    } else {
      setError("Invalid email or password. Please try again.")
      setLoading(false)
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .login-root {
          min-height: 100vh;
          display: flex;
          font-family: 'DM Sans', sans-serif;
          background: #f0f6ff;
        }

        /* Left panel */
        .left-panel {
          width: 45%;
          background: linear-gradient(160deg, #0a3cff 0%, #1a6fff 50%, #0055cc 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 52px 56px;
          position: relative;
          overflow: hidden;
        }

        .left-panel::before {
          content: '';
          position: absolute;
          top: -120px;
          right: -120px;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
        }

        .left-panel::after {
          content: '';
          position: absolute;
          bottom: -80px;
          left: -80px;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 1;
        }

        .brand-icon {
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.2);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(8px);
        }

        .brand-icon svg { width: 22px; height: 22px; }

        .brand-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.2rem;
          color: #fff;
          letter-spacing: 0.02em;
        }

        .left-copy { z-index: 1; }

        .left-copy h1 {
          font-family: 'Syne', sans-serif;
          font-size: 2.8rem;
          font-weight: 800;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 18px;
          letter-spacing: -0.02em;
        }

        .left-copy h1 span {
          color: #a8cfff;
        }

        .left-copy p {
          font-size: 1rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.65;
          max-width: 320px;
          font-weight: 300;
        }

        /* Right panel */
        .right-panel {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 40px;
          background: #f0f6ff;
        }

        .form-card {
          width: 100%;
          max-width: 420px;
        }

        .form-header {
          margin-bottom: 40px;
        }

        .form-header h2 {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: #0a1a3a;
          letter-spacing: -0.02em;
          margin-bottom: 8px;
        }

        .form-header p {
          font-size: 0.95rem;
          color: #6b82a8;
          font-weight: 400;
        }

        .form-header p a {
          color: #0a3cff;
          font-weight: 500;
          text-decoration: none;
        }
        .form-header p a:hover { text-decoration: underline; }

        .field {
          margin-bottom: 22px;
        }

        .field label {
          display: block;
          font-size: 0.82rem;
          font-weight: 500;
          color: #3a4f6e;
          margin-bottom: 8px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .input-wrap {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #90a8c8;
          pointer-events: none;
        }

        .field input {
          width: 100%;
          padding: 14px 16px 14px 46px;
          background: #fff;
          border: 1.5px solid #dae4f5;
          border-radius: 12px;
          font-size: 0.95rem;
          color: #0a1a3a;
          font-family: 'DM Sans', sans-serif;
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
        }

        .field input::placeholder { color: #b0c4de; }

        .field input:focus {
          border-color: #0a3cff;
          box-shadow: 0 0 0 4px rgba(10, 60, 255, 0.08);
        }

        .field-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .forgot-link {
          font-size: 0.82rem;
          color: #0a3cff;
          font-weight: 500;
          text-decoration: none;
        }
        .forgot-link:hover { text-decoration: underline; }

        .error-msg {
          background: #fff0f0;
          border: 1px solid #ffc0c0;
          border-radius: 10px;
          padding: 12px 16px;
          font-size: 0.875rem;
          color: #cc2200;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .submit-btn {
          width: 100%;
          padding: 15px;
          background: linear-gradient(135deg, #0a3cff, #1a6fff);
          color: #fff;
          border: none;
          border-radius: 12px;
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: 0.02em;
          transition: transform 0.15s, box-shadow 0.15s, opacity 0.15s;
          box-shadow: 0 4px 20px rgba(10, 60, 255, 0.3);
          position: relative;
          overflow: hidden;
          margin-top: 8px;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 6px 28px rgba(10, 60, 255, 0.4);
        }

        .submit-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.4);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          vertical-align: middle;
          margin-right: 8px;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        .divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 28px 0;
          color: #b0c4de;
          font-size: 0.82rem;
        }
        .divider::before, .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #dae4f5;
        }

        .register-prompt {
          text-align: center;
          font-size: 0.88rem;
          color: #6b82a8;
        }
        .register-prompt a {
          color: #0a3cff;
          font-weight: 600;
          text-decoration: none;
        }
        .register-prompt a:hover { text-decoration: underline; }

        @media (max-width: 768px) {
          .left-panel { display: none; }
          .right-panel { padding: 32px 24px; background: #fff; }
        }
      `}</style>

      <div className="login-root">
        {/* Left decorative panel */}
        <div className="left-panel">
          <div className="brand">
            <div className="brand-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <span className="brand-name">EventFlow</span>
          </div>

          <div className="left-copy">
            <h1>Manage events<br />with <span>clarity</span></h1>
            <p>Track registrations, manage attendance, and run your events seamlessly — all in one place.</p>
          </div>

        </div>

        {/* Right form panel */}
        <div className="right-panel">
          <div className="form-card">
            <div className="form-header">
              <h2>Welcome back</h2>
              <p>Don't have an account? <a href="/register">Sign up free</a></p>
            </div>

            <form onSubmit={handleSubmit}>
              {error && (
                <div className="error-msg">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  {error}
                </div>
              )}

              <div className="field">
                <label>Email address</label>
                <div className="input-wrap">
                  <span className="input-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </span>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <div className="field-row">
                  <label>Password</label>
                  <a href="/forgot-password" className="forgot-link">Forgot password?</a>
                </div>
                <div className="input-wrap">
                  <span className="input-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </span>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading && <span className="spinner" />}
                {loading ? "Signing in…" : "Sign in"}
              </button>
            </form>

            <div className="divider">or</div>

            <div className="register-prompt">
              New to EventFlow? <a href="/register">Create an account →</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}