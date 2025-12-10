import React from 'react'

// Move Icon component outside render function
const Icon = ({ children, href, label }) => (
  <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="group">
    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 flex items-center justify-center shadow-sm transform transition-transform hover:scale-105">
      <div className="w-5 h-5 text-white opacity-90 group-hover:opacity-100">{children}</div>
    </div>
  </a>
)

export default function Footer({ links = {} }) {
  const { whatsapp = 'https://call.whatsapp.com/voice/GKwpshgmOr1pLutEO2DF7g ', instagram = 'https://www.instagram.com/prakash_das05?igsh=MXY1ZmhpcWV0OG1hdA==', linkedin = 'https://www.linkedin.com/in/kaku-coder-8374b5296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', github = 'https://github.com/kaku-coder', facebook = 'https://www.facebook.com/share/1BazC6nhpV/' } = links

  return (
    <footer id="footer" className="w-full border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="text-white font-semibold">Prakash</div>
          <div className="text-xs text-gray-400">•</div>
          <div className="text-sm text-gray-400">Designer & Frontend Developer</div>
        </div>

        <div className="flex items-center gap-4">
          <Icon href={whatsapp} label="WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M20.52 3.48A11.9 11.9 0 0012 .08C5.73.08.92 4.9.92 11.17c0 1.97.52 3.9 1.51 5.6L.1 23.9l7.5-1.96A11.96 11.96 0 0012 23.1c6.27 0 11.08-4.82 11.08-11.08 0-2.96-1.15-5.73-3.56-7.54zM12 21.2c-1.2 0-2.4-.32-3.44-.92l-.25-.14-4.47 1.17 1.21-4.12-.15-.27A8.4 8.4 0 013 11.17c0-4.66 3.78-8.44 8.44-8.44 2.25 0 4.37.88 5.96 2.48 1.6 1.6 2.48 3.71 2.48 5.96 0 4.66-3.78 8.44-8.44 8.44z" /><path d="M17.2 14.04c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.79.95-.97 1.15-.18.2-.36.22-.66.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.12.29-.32.43-.48.15-.17.2-.29.3-.48.1-.2.05-.37-.02-.52-.07-.15-.66-1.58-.9-2.17-.24-.57-.48-.5-.66-.51-.17-.02-.37-.02-.57-.02-.2 0-.52.07-.79.37-.27.29-1.03 1.01-1.03 2.46s1.06 2.86 1.21 3.06c.15.2 2.09 3.2 5.06 4.48 3 .29 3.1-2.01 3.1-2.36.01-.36.01-.66-.3-.81z" /></svg>
          </Icon>

          <Icon href={instagram} label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M7.75 2h8.5A5.76 5.76 0 0122 7.75v8.5A5.76 5.76 0 0116.25 22h-8.5A5.76 5.76 0 012 16.25v-8.5A5.76 5.76 0 017.75 2zm0 1.6A4.16 4.16 0 003.6 7.75v8.5A4.16 4.16 0 007.75 20.6h8.5a4.16 4.16 0 004.15-4.15v-8.5A4.16 4.16 0 0016.25 3.6h-8.5zM12 7.1a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8zm0 1.6a3.3 3.3 0 100 6.6 3.3 3.3 0 000-6.6zM18.4 6.2a1.04 1.04 0 110 2.08 1.04 1.04 0 010-2.08z" /></svg>
          </Icon>

          <Icon href={linkedin} label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M20.45 20.45h-3.555v-5.555c0-1.324-.025-3.025-1.844-3.025-1.847 0-2.13 1.444-2.13 2.935v5.645H9.347V9h3.414v1.56h.049c.476-.9 1.637-1.844 3.371-1.844 3.605 0 4.271 2.373 4.271 5.455v6.831zM5.337 7.433a2.067 2.067 0 11.003-4.134 2.067 2.067 0 01-.003 4.134zM6.997 20.45H3.672V9h3.325v11.45zM22 0H2C.895 0 0 .895 0 2v20c0 1.105.895 2 2 2h20c1.106 0 2-.895 2-2V2c0-1.105-.894-2-2-2z" /></svg>
          </Icon>

          <Icon href={github} label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.94 3.2 9.12 7.63 10.59.56.1.77-.24.77-.53 0-.26-.01-.95-.01-1.86-3.1.67-3.75-1.49-3.75-1.49-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.69-1.45-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.17-3-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.17a10.96 10.96 0 012.87-.39c.97.01 1.95.13 2.87.39 2.19-1.48 3.15-1.17 3.15-1.17.62 1.57.23 2.73.11 3.02.73.78 1.17 1.78 1.17 3 0 4.29-2.62 5.24-5.11 5.52.39.34.73 1.02.73 2.06 0 1.49-.01 2.69-.01 3.05 0 .29.2.64.78.53C19.05 20.87 22.25 16.69 22.25 11.75 22.25 5.48 17.27.5 12 .5z" /></svg>
          </Icon>

          <Icon href={facebook} label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.1V12h2.1V9.8c0-2.07 1.23-3.2 3.1-3.2.9 0 1.84.16 1.84.16v2.03h-1.04c-1.03 0-1.35.64-1.35 1.3V12h2.3l-.37 2.9h-1.93v7A10 10 0 0022 12z" /></svg>
          </Icon>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-6 text-center text-xs text-gray-500">Built with ❤️ — <a className="text-indigo-300" href="mailto:devilprakashdas@gmail.com">devilprakashdas@gmail.com</a></div>
    </footer>
  )
}
