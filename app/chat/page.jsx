"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [usesRemaining, setUsesRemaining] = useState(15);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const router = useRouter();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const userCookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("curcuitly_user="));
      if (!userCookie) {
        router.push("/login");
        return;
      }
      setIsLoggedIn(true);

      const usesCookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("curcuitly_uses="));
      if (usesCookie) {
        const uses = parseInt(usesCookie.split("=")[1]);
        setUsesRemaining(uses);
      }

      setMessages([
        {
          id: 1,
          text: "Hello! I'm Curcuitly, your AI assistant. How can I help you today?",
          isUser: false,
        },
      ]);
    }
  }, [router]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (usesRemaining <= 0) {
      setShowLimitModal(true);
      return;
    }

    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setLoading(true);

    const newUsesRemaining = usesRemaining - 1;
    setUsesRemaining(newUsesRemaining);
    document.cookie = `curcuitly_uses=${newUsesRemaining}; path=/; max-age=${60 * 60 * 24 * 30}`;

    setTimeout(() => {
      const aiMessage = {
        id: messages.length + 2,
        text: `I received your message: "${userMessage.text}". This is a demo response. To connect real AI, integrate your ai.py backend here. You have ${newUsesRemaining} uses remaining.`,
        isUser: false,
      };
      setMessages((prev) => [...prev, aiMessage]);
      setLoading(false);
    }, 800);
  };

  if (!isLoggedIn) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.isUser ? "user" : "ai"}`}>
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="message ai">
              <span style={{ opacity: 0.7 }}>Thinking...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {usesRemaining <= 0 ? (
          <div
            style={{
              padding: "1rem",
              background: "rgba(239, 68, 68, 0.1)",
              border: "1px solid #ef4444",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <p style={{ marginBottom: "1rem" }}>
              You've used all 15 free uses! Upgrade to Premium for unlimited access.
            </p>
            <button
              className="btn-primary"
              onClick={() => router.push("/premium")}
            >
              Upgrade to Premium
            </button>
          </div>
        ) : (
          <form className="chat-input-area" onSubmit={handleSendMessage}>
            <input
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={loading}
            />
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "..." : "Send"}
            </button>
          </form>
        )}
      </div>

      {showLimitModal && (
        <div className="modal-overlay" onClick={() => setShowLimitModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Free Uses Limit Reached</h3>
            <p>You've reached your 15 free uses. Upgrade to Premium for unlimited access!</p>
            <div className="modal-buttons">
              <button className="btn-secondary" onClick={() => setShowLimitModal(false)}>
                Close
              </button>
              <button className="btn-primary" onClick={() => router.push("/premium")}>
                Go to Premium
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
