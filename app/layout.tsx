import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Portfolio | Chitralekha Yaduvanshi',
  description: 'Professional portfolio of Chitralekha Yaduvanshi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-gray-50 to-gray-100`}>
        <header className="bg-black text-white p-4 md:p-6 sticky top-0 z-10">
          <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0" aria-label="Main navigation">
            <h1 className="text-xl md:text-2xl font-bold font-playfair">Chitralekha Yaduvanshi</h1>
            <ul className="flex flex-wrap justify-center gap-4 md:space-x-6">
              <li><a href="#about" className="hover:text-gray-300 transition-colors font-montserrat text-sm md:text-base" aria-label="About section">About</a></li>
              <li><a href="#experience" className="hover:text-gray-300 transition-colors font-montserrat text-sm md:text-base" aria-label="Experience section">Experience</a></li>
              <li><a href="#skills" className="hover:text-gray-300 transition-colors font-montserrat text-sm md:text-base" aria-label="Skills section">Skills</a></li>
              <li><a href="#projects" className="hover:text-gray-300 transition-colors font-montserrat text-sm md:text-base" aria-label="Projects section">Projects</a></li>
              <li><a href="#contact" className="hover:text-gray-300 transition-colors font-montserrat text-sm md:text-base" aria-label="Contact section">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-900 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 Chitralekha Yaduvanshi. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

