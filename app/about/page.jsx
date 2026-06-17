"use client";

import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <main>
      <div style={{ maxWidth: "800px", margin: "3rem auto", padding: "2rem" }}>
        <h1 style={{ marginBottom: "2rem", color: "var(--accent-blue)" }}>
          About Curcuitly
        </h1>

        <div className="card" style={{ marginBottom: "2rem" }}>
          <h3>Our Mission</h3>
          <p>
            Curcuitly is designed to demonstrate a modern, AI-powered platform that provides intelligent recommendations and assistance. Our goal is to showcase how AI can enhance decision-making with a user-friendly interface.
          </p>
        </div>

        <div className="card" style={{ marginBottom: "2rem" }}>
          <h3>Features</h3>
          <ul style={{ lineHeight: "2", paddingLeft: "1.5rem" }}>
            <li>✅ AI-powered conversations</li>
            <li>✅ 15 free uses per user</li>
            <li>✅ User authentication system</li>
            <li>✅ Premium upgrade pathway</li>
            <li>✅ Modern, responsive UI</li>
            <li>✅ Cookie-based state management</li>
          </ul>
        </div>

        <div className="card" style={{ marginBottom: "2rem" }}>
          <h3>Technology Stack</h3>
          <ul style={{ lineHeight: "2", paddingLeft: "1.5rem" }}>
            <li>🔷 Next.js - React framework</li>
            <li>💻 JavaScript/CSS - Frontend</li>
            <li>🚀 Vercel - Deployment</li>
            <li>🐍 Python (ai.py) - Backend AI logic</li>
          </ul>
        </div>

        <div className="card" style={{ marginBottom: "2rem" }}>
          <h3>Getting Started</h3>
          <ol style={{ lineHeight: "2", paddingLeft: "1.5rem" }}>
            <li>Sign up or log in to your account</li>
            <li>Navigate to the chat interface</li>
            <li>Start conversations with AI (15 free uses)</li>
            <li>Upgrade to Premium for unlimited access</li>
            <li>Use admin code (2026) for admin features</li>
          </ol>
        </div>

        <button
          className="btn-primary"
          onClick={() => router.push("/")}
          style={{ width: "100%" }}
        >
          Back to Home
        </button>
      </div>
    </main>
  );
}
