import { useCallback, useState } from 'react'
import { PRODUCTS } from './data/products'
import { SITE } from './data/site'
import Navbar from './components/Navbar'
import BestSeller from './components/BestSeller'
import ProductSection from './components/ProductSection'
import ProductModal from './components/ProductModal'
import Footer from './components/Footer'
import { Reveal } from './components/ui'

export default function App() {
  const [selected, setSelected] = useState(null)
  const closeModal = useCallback(() => setSelected(null), [])

  return (
    <>
      <Navbar />
      <main>
        {/* Langsung ke produk digital */}
        <header className="pb-10 pt-28 md:pb-14 md:pt-36">
          <div className="container-page">
            <Reveal>
              <span className="eyebrow">{SITE.role}</span>
              <h1 className="mt-4 font-display text-[clamp(2.6rem,7vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.045em]">
                Produk <span className="text-brand">Digital Apps</span>
              </h1>
            </Reveal>
            <Reveal delay={100} className="mt-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <p className="max-w-xl text-base leading-relaxed text-ink/60">
                Berbagai template dan aset desain yang dibuat untuk membantu pekerjaan Anda menjadi lebih mudah dan efisien.
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45">
                {PRODUCTS.length} template company profile · akses instan
              </p>
            </Reveal>
          </div>
        </header>

        <BestSeller onDetail={setSelected} />
        <ProductSection onDetail={setSelected} />
      </main>
      <Footer />
      <ProductModal product={selected} onClose={closeModal} />
    </>
  )
}
