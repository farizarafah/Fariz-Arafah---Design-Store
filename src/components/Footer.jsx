import { ArrowUp } from 'lucide-react'
import { CONTACT_LINKS, COPYRIGHT, SITE } from '../data/site'
import { Icon, Logo } from './ui'

export default function Footer() {
  return (
    <footer className="bg-ink pb-8 pt-14 text-white md:pt-16">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <Logo dark />
            <p className="mt-6 max-w-xs font-display text-xl font-semibold leading-snug tracking-tight text-white/85">
              {SITE.footerTagline}
            </p>
          </div>

          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">Hubungi</p>
            <div className="flex flex-wrap gap-2">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.id === 'email' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-white/85 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <Icon name={link.icon} size={16} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] tracking-wide text-white/45">{COPYRIGHT}</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-brand"
          >
            Kembali ke atas <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
