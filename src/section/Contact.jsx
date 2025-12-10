import React, { useState } from 'react'
import ContactExperience from '../componets/ContactExperience'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // simple placeholder action — swap with real submission logic
    console.log('Contact form submitted', form)
    alert('Thanks — message captured (check console).')
    setForm({ name: '', email: '', message: '' })
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
        <div className="grid-12-cols grid grid-cols-1 md:grid-cols-12 gap-6 mt-8 items-start">
          {/* Form (left) */}
          <div className="md:col-span-7 col-span-1 bg-navy rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="bg-[#643ed0] text-white px-6 py-3 rounded-md hover:opacity-95 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Experience (right) */}
          <div className="md:col-span-5 col-span-1">
            <div className="bg-black/60 rounded-lg p-4 h-full min-h-[320px]">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
