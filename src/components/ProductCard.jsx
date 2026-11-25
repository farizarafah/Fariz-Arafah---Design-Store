import { ArrowUpRight } from 'lucide-react'
import { CATEGORIES } from '../data/products'
import { discountPercent, finalPrice, formatRupiah, hasDiscount } from '../utils/format'
import CoverArt from './CoverArt'
import { Reveal } from './ui'

export function Badge({ children }) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-white sm:px-3 sm:text-[10px] ${
        children === 'BEST SELLER' ? 'bg-brand' : 'bg-ink'
      }`}
    >
      {children}
    </span>
  )
}

export function Price({ product, size = 'md', light = false }) {
  const sizes = { md: 'text-base sm:text-xl', lg: 'text-3xl sm:text-4xl' }
  return (
    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
      <span className={`font-display font-extrabold tracking-tight ${sizes[size]} ${light ? 'text-white' : ''}`}>
        {formatRupiah(finalPrice(product))}
      </span>
      {hasDiscount(product) && (
        <>
          <span className={`text-xs line-through sm:text-sm ${light ? 'text-white/40' : 'text-ink/40'}`}>
            {formatRupiah(product.price)}
          </span>
          <span className="rounded bg-brand/10 px-1.5 py-0.5 font-mono text-[10px] font-medium text-brand">
            -{discountPercent(product)}%
          </span>
        </>
      )}
    </div>
  )
}

export function TagList({ tags = [], onTag, limitMobile = 1, className = '' }) {
  return (
    <ul className={`flex flex-wrap gap-1 ${className}`}>
      {tags.map((tag, i) => (
        <li key={tag} className={i >= limitMobile ? 'hidden sm:block' : ''}>
          <button
            onClick={() => onTag?.(tag)}
            disabled={!onTag}
            className="rounded-full border border-ink/12 px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-wider text-ink/60 transition-colors enabled:hover:border-brand enabled:hover:text-brand sm:text-[10px]"
          >
            {tag}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default function ProductCard({ product, index = 0, onDetail, onTag }) {
  const category = CATEGORIES.find((c) => c.id === product.category)

  return (
    <Reveal as="article" delay={(index % 4) * 70} className="group flex min-w-0 flex-col">
      <button
        onClick={() => onDetail(product)}
        aria-label={`Lihat detail ${product.name}`}
        className="relative block aspect-square w-full overflow-hidden rounded-2xl border border-ink/10 bg-line text-left sm:rounded-3xl"
      >
        <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.05]">
          <CoverArt product={product} />
        </div>
        {product.badge && (
          <span className="absolute left-2.5 top-2.5 sm:left-4 sm:top-4">
            <Badge>{product.badge}</Badge>
          </span>
        )}
        <span className="absolute bottom-4 right-4 hidden h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white text-ink opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:flex">
          <ArrowUpRight size={18} />
        </span>
      </button>

      <div className="flex flex-1 flex-col px-0.5 pt-3 sm:pt-5">
        <span className="hidden font-mono text-[10.5px] uppercase tracking-[0.16em] text-brand sm:block">
          {category?.label}
        </span>
        <h3 className="font-display text-[0.95rem] font-bold leading-tight tracking-tight sm:mt-2 sm:text-[1.2rem]">
          {product.name.replace(/^Company Profile /, '')}
        </h3>
        <p className="mt-2 hidden text-sm leading-relaxed text-ink/60 sm:line-clamp-2">{product.description}</p>

        <TagList tags={product.tags} onTag={onTag} className="mt-2 sm:mt-3" />

        <div className="mt-auto pt-3 sm:pt-4">
          <Price product={product} />

          <div className="mt-3 grid gap-1.5 sm:mt-5 sm:grid-cols-2 sm:gap-2">
            <button onClick={() => onDetail(product)} className="btn btn-outline !px-3 !py-2.5 !text-xs sm:!py-3 sm:!text-sm">
              Lihat Detail
            </button>
            <a
              href={product.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary !px-3 !py-2.5 !text-xs sm:!py-3 sm:!text-sm"
            >
              Beli Sekarang
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
