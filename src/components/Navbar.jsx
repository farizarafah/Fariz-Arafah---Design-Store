import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { CONTACT_LINKS, NAV_LINKS } from '../data/site'
import { Logo } from './ui'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const whatsapp = CONTACT_LINKS.find((l) => l.id === 'whatsapp')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'border-b border-ink/10 bg-paper/85 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-page flex h-[72px] items-center justify-between gap-4" aria-label="Navigasi utama">
        <Logo />

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="group relative rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:text-ink">
                  {link.label}
                  <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          {whatsapp && (
            <a
              href={whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hubungi via WhatsApp"
              className="btn btn-primary !gap-2 !px-3.5 !py-2.5 sm:!px-5"
            >
              <MessageCircle size={17} />
              <span className="hidden sm:inline">Hubungi Saya</span>
            </a>
          )}
        </div>
      </nav>
    </header>
  )
}
