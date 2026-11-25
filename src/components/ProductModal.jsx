import { useEffect } from 'react'
import { ArrowUpRight, Check, X } from 'lucide-react'
import { CATEGORIES } from '../data/products'
import CoverArt, { coverBg } from './CoverArt'
import { Badge, Price, TagList } from './ProductCard'

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    if (!product) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [product, onClose])

  if (!product) return null

  const category = CATEGORIES.find((c) => c.id === product.category)

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-label={product.name}>
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative grid max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-t-[2rem] bg-paper shadow-2xl sm:rounded-[2rem] md:grid-cols-2">
        <button
          onClick={onClose}
          aria-label="Tutup"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-ink hover:text-white"
        >
          <X size={18} />
        </button>

        <div className="relative flex items-center" style={{ backgroundColor: product.cover ? '#111' : coverBg(product) }}>
          <div className="aspect-square w-full">
            <CoverArt product={product} fit="meet" />
          </div>
          {product.badge && (
            <span className="absolute left-5 top-5">
              <Badge>{product.badge}</Badge>
            </span>
          )}
        </div>

        <div className="flex flex-col p-6 sm:p-8 md:p-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
            {product.isBundle ? 'Paket Bundling' : category?.label}
          </span>
          <h3 className="mt-3 pr-10 font-display text-2xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-3xl md:text-4xl md:pr-0">
            {product.name}
          </h3>
          <TagList tags={product.tags} limitMobile={99} className="mt-4" />
          <p className="mt-4 text-[15px] leading-relaxed text-ink/65">{product.details ?? product.description}</p>

          {product.features?.length > 0 && (
            <ul className="mt-6 space-y-2.5 border-t border-ink/10 pt-6">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          )}

          {product.isBundle && (
            <div className="mt-6 border-t border-ink/10 pt-6">
              <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">
                Isi Bundling ({product.items.length} template)
              </h4>
              <ul className="mt-3 grid max-h-44 gap-1.5 overflow-y-auto pr-2 text-sm sm:grid-cols-1">
                {product.items.map((it) => (
                  <li key={it.id} className="flex items-center gap-2 text-ink/75">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-brand" />
                    {it.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-auto pt-8">
            <Price product={product} size="lg" />
            <a href={product.checkoutUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent mt-5 w-full">
              Beli Sekarang
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
