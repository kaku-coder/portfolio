import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    
    // Simulate API call with timeout
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate network delay
      
      // Simulate validation
      if (!form.name || !form.email || !form.message) {
        throw new Error('Please fill in all fields')
      }
      
      if (!form.email.includes('@')) {
        throw new Error('Please enter a valid email address')
      }
      
      // Success - in real app, this would be an actual API call
      console.log('Contact form submitted', form)
      setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
      setForm({ name: '', email: '', message: '' })
      
      // Optional: Open email client with pre-filled data
      const mailtoLink = `mailto:your-email@example.com?subject=Portfolio Contact: ${form.name}&body=Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0AMessage:%0D%0A${form.message}`
      console.log('You can also send via email:', mailtoLink)
      
    } catch (err) {
      console.error('Contact submit error', err)
      setStatus({ type: 'error', message: err.message || 'Failed to send message. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="c-space min-h-screen pointer-events-auto flex items-center justify-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-[#071124] to-black">
      <div className="w-full max-w-2xl mx-auto px-6 py-16">
        <header className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
            Get in <span className="text-[#7c3aed]">Touch</span>
          </h2>
          <p className="text-gray-400">Have a project or an idea? Drop me a message — I’m available for freelance work and collaboration.</p>
        </header>

        <div className="bg-gradient-to-br from-[#071124]/60 to-black/50 border border-gray-800 rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-[#6d28d9] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-[#06b6d4] focus:outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project, timeline, and budget (if known)."
                className="w-full px-4 py-4 rounded-2xl bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-[#7c3aed] focus:outline-none transition"
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="text-sm text-gray-400">I'll respond within 2 business days.</div>
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:brightness-105 transition disabled:opacity-60"
                disabled={loading}
              >
                <svg className="w-4 h-4 opacity-90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
              </button>
            </div>

            {status && (
              <div className={`mt-3 rounded-md px-4 py-2 text-sm ${status.type === 'success' ? 'bg-green-900/40 text-green-200' : 'bg-red-900/40 text-rose-200'}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
