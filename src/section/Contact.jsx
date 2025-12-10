import React, { useState } from 'react'
import ContactExperience from '../componets/ContactExperience'

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
    <section id="contact" className="c-space min-h-screen pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="text-center mb-8">
          <h2 className="text-heading text-white mt-4 mb-2">
            <span>Get In</span>
            <span className="text-[#643ed0] pl-2">Touch</span>
          </h2>
          <p className="text-gray-300">Have a project or an idea? Let's chat — I'm available for freelance and collaboration.</p>
        </header>

        {/* Grid: left = form, right = 3D experience */}
        <div className="grid-12-cols grid grid-cols-1 md:grid-cols-12 gap-6 mt-8 items-stretch">
          {/* Form (left) */}
          <div className="md:col-span-6 col-span-1 bg-navy rounded-lg p-6 h-full flex flex-col">
            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-between h-full">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-[#643ed0] text-white px-6 py-3 rounded-md hover:opacity-95 transition disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {status && (
                <div className={`mt-3 text-sm ${status.type === 'success' ? 'text-green-400' : 'text-rose-400'}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>

          {/* Contact Experience (right) */}
          <div className="md:col-span-6 col-span-1 h-full">
            <div className="bg-black/60 rounded-lg p-4 h-full min-h-[320px] flex items-center justify-center">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
