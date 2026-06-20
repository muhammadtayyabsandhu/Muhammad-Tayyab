"use client";

import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdSend } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function GetInTouchSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you can add your form submission logic
      console.log("Form submitted:", formData);
      setSubmitMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => {
        setSubmitMessage("");
      }, 3000);
    } catch (error) {
      setSubmitMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-black via-slate-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                Let's work together
              </h3>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                I'm open to projects, freelance work, and collaborations.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <MdEmail className="w-6 h-6 text-[#902CB8]" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a
                    href="mailto:tayyabcode01@gmail.com"
                    className="text-white hover:text-[#902CB8] transition-colors"
                  >
                   tayyabcode01@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <MdLocationOn className="w-6 h-6 text-[#902CB8]" />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-white">Lahore, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-4">Follow me on</p>
              <div className="flex gap-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#902CB8] transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#902CB8] transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gradient-to-br from-gray-900/50 to-slate-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#902CB8] focus:ring-1 focus:ring-[#902CB8]/50 transition-all"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#902CB8] focus:ring-1 focus:ring-[#902CB8]/50 transition-all"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#902CB8] focus:ring-1 focus:ring-[#902CB8]/50 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#902CB8] to-[#a83ec4] hover:from-[#7d1fa8] hover:to-[#9231b8] text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span>✈️</span>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* Success/Error Message */}
              {submitMessage && (
                <p className="text-center text-sm text-[#902CB8]">
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
