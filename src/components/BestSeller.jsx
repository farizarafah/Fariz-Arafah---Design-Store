import { ArrowUpRight, Layers } from 'lucide-react'
import { BUNDLES } from '../data/products'
import { discountPercent } from '../utils/format'
import CoverArt from './CoverArt'
import { Badge, Price } from './ProductCard'
import { Reveal } from './ui'

function MainBundle({ bundle, onDetail }) {
  return (
    <Reveal className="overflow-hidden rounded-[1.75rem] bg-ink text-white md:rounded-[2.25rem]">
      <div className="grid md:grid-cols-2">
        <div className="order-2 flex flex-col justify-center p-6 sm:p-10 md:order-1 md:p-12">
          <div className="flex items-center gap-3">
            <Badge>{bundle.badge}</Badge>
            <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-white/55">
              <Layers size={13} /> {bundle.items.length} template
            </span>
          </div>
          <h3 className="mt-5 font-display text-3xl font-extrabold leading-[0.98] tracking-[-0.035em] sm:text-4xl lg:text-5xl">
            {bundle.name}
          </h3>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/65">{bundle.description}</p>
          <div className="mt-6">
            <Price product={bundle} size="lg" light />
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={bundle.checkoutUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent !bg-brand hover:!bg-white hover:!text-ink">
              Beli Sekarang <ArrowUpRight size={18} />
            </a>
            <button onClick={() => onDetail(bundle)} className="btn border border-white/25 text-white hover:bg-white hover:text-ink">
              Lihat Isi Paket
            </button>
          </div>
        </div>

        <div className="relative order-1 aspect-square md:order-2 md:aspect-auto md:min-h-[420px]">
          <div className="absolute inset-0">
            <CoverArt product={bundle} fit="meet" />
          </div>
          <div className="absolute right-4 top-4 flex h-24 w-24 rotate-12 flex-col items-center justify-center rounded-full bg-brand text-center sm:h-28 sm:w-28 md:right-8 md:top-8">
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em]">Hemat</span>
            <span className="font-display text-3xl font-extrabold leading-none sm:text-4xl">{discountPercent(bundle)}%</span>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

function BundleCard({ bundle, index, onDetail }) {
  return (
    <Reveal delay={index * 90} className="group flex flex-col rounded-3xl border border-ink/10 bg-white p-3 sm:p-4">
      <button
        onClick={() => onDetail(bundle)}
        aria-label={`Lihat detail ${bundle.name}`}
        className="relative block aspect-square w-full overflow-hidden rounded-2xl bg-ink"
      >
        <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]">
          <CoverArt product={bundle} />
        </div>
        <span className="absolute left-3 top-3">
          <Badge>{bundle.badge}</Badge>
        </span>
        <span className="absolute bottom-3 right-3 rounded-full bg-brand px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-white">
          Hemat {discountPercent(bundle)}%
        </span>
      </button>
      <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
        <span className="flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-brand">
          <Layers size={12} /> {bundle.items.length} template
        </span>
        <h3 className="mt-2 font-display text-xl font-bold leading-tight tracking-tight">{bundle.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/60">{bundle.description}</p>
        <div className="mt-4">
          <Price product={bundle} />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button onClick={() => onDetail(bundle)} className="btn btn-outline !px-3 !py-3 !text-sm">
            Lihat Isi
          </button>
          <a href={bundle.checkoutUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary !px-3 !py-3 !text-sm">
            Beli Sekarang
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export default function BestSeller({ onDetail }) {
  const [main, ...others] = BUNDLES
  return (
    <section id="best-seller" className="pb-16 md:pb-24">
      <div className="container-page">
        <Reveal className="mb-8 flex items-end justify-between gap-6">
          <div>
            <span className="eyebrow">( Best Seller )</span>
            <h2 className="mt-3 font-display text-[clamp(1.9rem,4.5vw,3.25rem)] font-extrabold leading-[0.98] tracking-[-0.04em]">
              Paket Bundling Terlaris
            </h2>
          </div>
        </Reveal>

        <MainBundle bundle={main} onDetail={onDetail} />

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {others.map((b, i) => (
            <BundleCard key={b.id} bundle={b} index={i} onDetail={onDetail} />
          ))}
        </div>
      </div>
    </section>
  )
}
