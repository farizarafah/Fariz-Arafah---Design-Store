import { useMemo, useState } from 'react'
import { PackageSearch, Search, X } from 'lucide-react'
import { CATEGORIES, PRODUCTS } from '../data/products'
import ProductCard from './ProductCard'
import { Reveal } from './ui'

/** Baris chip: 1 baris yang bisa digeser di mobile, membungkus di desktop. */
function ChipRow({ children, label }) {
  return (
    <div
      role="tablist"
      aria-label={label}
      className="no-scrollbar -mx-5 flex snap-x gap-2 overflow-x-auto px-5 sm:-mx-8 sm:px-8 md:mx-0 md:flex-wrap md:overflow-visible md:px-0"
    >
      {children}
    </div>
  )
}

export default function ProductSection({ onDetail }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [tag, setTag] = useState(null)

  const counts = useMemo(() => {
    const map = { all: PRODUCTS.length }
    CATEGORIES.forEach((c) => (map[c.id] = PRODUCTS.filter((p) => p.category === c.id).length))
    return map
  }, [])

  // Semua tag yang dipakai produk (otomatis, urut dari yang paling banyak)
  const tags = useMemo(() => {
    const count = {}
    PRODUCTS.forEach((p) => p.tags?.forEach((t) => (count[t] = (count[t] ?? 0) + 1)))
    return Object.entries(count)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([name]) => name)
  }, [])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return PRODUCTS.filter((p) => {
      if (category !== 'all' && p.category !== category) return false
      if (tag && !p.tags?.includes(tag)) return false
      if (!q) return true
      const catLabel = CATEGORIES.find((c) => c.id === p.category)?.label ?? ''
      return `${p.name} ${p.description} ${catLabel} ${p.tags?.join(' ')}`.toLowerCase().includes(q)
    })
  }, [query, category, tag])

  const reset = () => {
    setQuery('')
    setCategory('all')
    setTag(null)
  }

  const chip = (active) =>
    `flex shrink-0 snap-start items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
      active ? 'border-ink bg-ink text-white' : 'border-ink/15 bg-white text-ink/70 hover:border-ink hover:text-ink'
    }`

  return (
    <section id="katalog" className="border-t border-ink/10 bg-white pb-20 md:pb-28">
      {/* Bar filter: menempel di bawah navbar pada layar ≥ md */}
      <div className="z-30 border-b border-ink/10 bg-white/90 py-4 backdrop-blur-xl md:sticky md:top-[72px]">
        <div className="container-page space-y-3">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h2 className="font-display text-2xl font-extrabold tracking-[-0.03em] sm:text-3xl">Katalog Template</h2>
            <label className="relative block w-full md:w-80">
              <span className="sr-only">Cari produk</span>
              <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari template, bidang, atau tag…"
                className="w-full rounded-full border border-ink/15 bg-paper py-3 pl-11 pr-10 text-sm outline-none transition-colors placeholder:text-ink/40 focus:border-ink focus:bg-white [&::-webkit-search-cancel-button]:hidden"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Hapus pencarian"
                  className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full hover:bg-ink/5"
                >
                  <X size={15} />
                </button>
              )}
            </label>
          </div>

          <ChipRow label="Filter bidang perusahaan">
            {[{ id: 'all', label: 'Semua' }, ...CATEGORIES].map((c) => (
              <button key={c.id} role="tab" aria-selected={category === c.id} onClick={() => setCategory(c.id)} className={chip(category === c.id)}>
                {c.short ?? c.label}
                <span className={`font-mono text-[10px] ${category === c.id ? 'text-brand' : 'text-ink/40'}`}>{counts[c.id]}</span>
              </button>
            ))}
          </ChipRow>
        </div>
      </div>

      <div className="container-page">
        {/* Filter tag */}
        <div className="mt-5 flex items-center gap-3 md:mt-6">
          <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45">Tag</span>
          <div className="no-scrollbar flex min-w-0 snap-x gap-1.5 overflow-x-auto md:flex-wrap md:overflow-visible">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setTag(tag === t ? null : t)}
                aria-pressed={tag === t}
                className={`shrink-0 snap-start rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                  tag === t ? 'border-brand bg-brand text-white' : 'border-ink/15 text-ink/60 hover:border-brand hover:text-brand'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-ink/45" aria-live="polite">
          {results.length} template
          {(category !== 'all' || tag || query) && (
            <button onClick={reset} className="ml-3 normal-case tracking-normal text-brand underline-offset-2 hover:underline">
              Reset filter
            </button>
          )}
        </p>

        {results.length > 0 ? (
          <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} onDetail={onDetail} onTag={(t) => setTag(t)} />
            ))}
          </div>
        ) : (
          <div className="mt-6 flex flex-col items-center rounded-3xl border border-dashed border-ink/20 px-6 py-20 text-center">
            <PackageSearch size={40} className="text-brand" strokeWidth={1.5} />
            <h3 className="mt-5 font-display text-2xl font-bold tracking-tight">Template tidak ditemukan</h3>
            <p className="mt-2 max-w-sm text-sm text-ink/60">Coba kata kunci lain atau pilih bidang dan tag yang berbeda.</p>
            <button onClick={reset} className="btn btn-primary mt-6">
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
