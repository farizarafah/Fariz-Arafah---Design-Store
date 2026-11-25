import { Instagram, Mail, MessageCircle } from 'lucide-react'
import { SITE } from '../data/site'
import { useReveal } from '../hooks/useReveal'

/* ---------- Reveal: animasi muncul saat scroll ---------- */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ '--delay': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}

/* ---------- Logo — nama & peran diambil dari SITE ---------- */
export function Logo({ dark = false, className = '' }) {
  return (
    <a
      href="#"
      aria-label={`${SITE.name} — ${SITE.role}`}
      className={`group inline-flex min-w-0 flex-col leading-none ${className}`}
    >
      <span
        className={`font-display text-[1.65rem] font-extrabold uppercase tracking-[-0.05em] ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {SITE.name}
        <span className="text-brand">.</span>
      </span>
      <span
        className={`mt-1.5 flex items-center gap-1.5 whitespace-nowrap font-mono text-[7.5px] font-medium uppercase tracking-[0.24em] ${
          dark ? 'text-white/60' : 'text-ink/55'
        }`}
      >
        <i className="block h-px w-3 shrink-0 bg-brand transition-all duration-300 group-hover:w-5" />
        {SITE.role}
      </span>
    </a>
  )
}

/* ---------- Ikon TikTok (tidak ada di Lucide) ---------- */
export function TikTokIcon({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

const ICONS = { whatsapp: MessageCircle, instagram: Instagram, tiktok: TikTokIcon, email: Mail }

export function Icon({ name, size = 20, ...props }) {
  const Cmp = ICONS[name]
  return Cmp ? <Cmp size={size} {...props} /> : null
}
