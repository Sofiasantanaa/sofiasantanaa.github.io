"use client";
import { useState } from "react";
import Link from "next/link";

// Contact Component: The contact page featuring a submission form.
export default function Contact() {
  // 1. STATE MANAGEMENT: State to hold the form data (name, email, message).
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  // 2. STATE MANAGEMENT: State for the submission status message (success/error).
  const [status, setStatus] = useState("");


  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
    setStatus("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation check for empty fields.
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Field cannot be empty");
    } else {
      // Success: Updates status and resets the form fields.
      setStatus("Form submitted successfully");
      setFormData({ name: "", email: "", message: "" });
    }
  }

  return (
    <main className="page-container">
      <nav className="navbar">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <h1>Contact</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
      {/* CONDITIONAL RENDERING: Displays the status message only if 'status' is not empty */}
      {/* It also conditionally applies 'success' or 'error' class */}
      {status && <p className={status.includes("successfully") ? "success" : "error"}>{status}</p>}
    </main>
  );
}
