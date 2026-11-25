// ============================================================
//  DATA PRODUK — tambah / edit produk hanya di file ini
// ============================================================
//
//  Field setiap produk (dibuat oleh helper `cp()` di bawah):
//   id            : string unik
//   name          : nama produk
//   label         : kata pendek untuk cover placeholder (maks ±12 huruf)
//   description   : deskripsi singkat
//   category      : id kategori (bidang perusahaan) — lihat CATEGORIES
//   tags          : daftar tag, mis. ['Modern', 'Korporat']. Tag baru otomatis muncul di filter.
//   price         : harga normal (angka, Rupiah)
//   discountPrice : harga diskon (angka) atau null
//   cover         : '/products/nama.jpg' — kosong ('') = cover placeholder otomatis
//   checkoutUrl   : link checkout Scalev (default: SCALEV + '/' + id)
//   badge         : 'BEST SELLER' | 'TERBARU' | null
//
//  ⚠️ 30 produk di bawah adalah PLACEHOLDER (nama, deskripsi, harga). Ganti dengan data asli.

export const CATEGORIES = [
  { id: 'konstruksi', label: 'Konstruksi & Properti', short: 'Konstruksi' },
  { id: 'logistik', label: 'Logistik & Transportasi', short: 'Logistik' },
  { id: 'supplier', label: 'General Supplier & Trading', short: 'Supplier' },
  { id: 'keuangan', label: 'Akuntansi & Keuangan', short: 'Keuangan' },
  { id: 'teknologi', label: 'Teknologi & IT', short: 'Teknologi' },
  { id: 'industri', label: 'Industri & Energi', short: 'Industri' },
  { id: 'outdoor', label: 'Outdoor & Wisata', short: 'Outdoor' },
  { id: 'kreatif', label: 'Kreatif & Agensi', short: 'Kreatif' },
  { id: 'umum', label: 'Korporat & Umum', short: 'Umum' },
]

// Base link checkout Scalev — ganti dengan alamat toko asli
const SCALEV = 'https://scalev.id/nama-toko'

const FEATURES = [
  'File Canva — langsung bisa diedit',
  '20+ halaman layout siap pakai',
  'Ukuran A4 landscape',
  'Font gratis & palet warna mudah diganti',
  'Panduan penggunaan singkat',
]

const cp = (o) => ({
  cover: '',
  badge: null,
  discountPrice: null,
  features: FEATURES,
  details: o.description,
  checkoutUrl: `${SCALEV}/${o.id}`,
  ...o,
})

export const PRODUCTS = [
  // ---------- Konstruksi & Properti ----------
  cp({ id: 'cp-construction-modern', name: 'Company Profile Construction Modern', label: 'Construction', category: 'konstruksi', tags: ['Modern', 'Bold', 'Profesional'], description: 'Template bold dan tegas untuk kontraktor dan perusahaan konstruksi yang ingin tampil meyakinkan.', price: 149000, discountPrice: 99000, cover: '/products/1.webp', badge: 'BEST SELLER' }),
  cp({ id: 'cp-contractor-civil', name: 'Company Profile Contractor & Civil Works', label: 'Contractor', category: 'konstruksi', tags: ['Industrial', 'Profesional'], description: 'Menampilkan portofolio proyek, legalitas, dan sertifikasi kontraktor sipil dengan rapi.', price: 149000, discountPrice: 99000, cover: '/products/2.webp'}),
  cp({ id: 'cp-property-developer', name: 'Company Profile Property & Developer', label: 'Property', category: 'konstruksi', tags: ['Elegan', 'Modern'], description: 'Tampilan elegan untuk developer dan agen properti dengan ruang besar untuk foto proyek.', price: 149000, discountPrice: 109000, cover: '/products/3.webp', badge: 'TERBARU' }),
  cp({ id: 'cp-architecture-interior', name: 'Company Profile Architecture & Interior', label: 'Architecture', category: 'konstruksi', tags: ['Minimalis', 'Elegan', 'Clean'], description: 'Layout minimalis dan lapang untuk studio arsitek dan desain interior.', price: 129000, discountPrice: 89000, cover: '/products/4.webp'}),

  // ---------- Logistik & Transportasi ----------
  cp({ id: 'cp-truck-heavy-equipment', name: 'Company Profile Truck & Heavy Equipment', label: 'Heavy Equip.', category: 'logistik', tags: ['Industrial', 'Bold'], description: 'Tampilan kokoh dan industrial untuk bisnis alat berat, truk, dan kontraktor.', price: 149000, discountPrice: 109000, cover: '/products/5.webp', badge: 'BEST SELLER' }),
  cp({ id: 'cp-freight-cargo', name: 'Company Profile Freight Forwarding & Cargo', label: 'Cargo', category: 'logistik', tags: ['Korporat', 'Profesional'], description: 'Struktur jelas untuk menampilkan jaringan, layanan, dan rute pengiriman perusahaan cargo.', price: 149000, discountPrice: 99000, cover: '/products/6.webp' }),
  cp({ id: 'cp-logistics-warehouse', name: 'Company Profile Logistics & Warehouse', label: 'Warehouse', category: 'logistik', tags: ['Modern', 'Clean'], description: 'Desain modern untuk jasa pergudangan, distribusi, dan supply chain.', price: 139000, discountPrice: 99000, badge: 'TERBARU' }),
  cp({ id: 'cp-fleet-rental', name: 'Company Profile Fleet & Transportation Rental', label: 'Fleet', category: 'logistik', tags: ['Bold', 'Modern'], description: 'Cocok untuk rental kendaraan, armada angkutan, dan penyedia transportasi.', price: 129000, discountPrice: 89000 }),

  // ---------- General Supplier & Trading ----------
  cp({ id: 'cp-general-supplier', name: 'Company Profile General Supplier', label: 'Supplier', category: 'supplier', tags: ['Korporat', 'Clean'], description: 'Template rapi untuk general supplier yang melayani banyak kategori produk dan klien.', price: 139000, discountPrice: 99000, badge: 'BEST SELLER' }),
  cp({ id: 'cp-trading-distribution', name: 'Company Profile Trading & Distribution', label: 'Trading', category: 'supplier', tags: ['Modern', 'Profesional'], description: 'Menampilkan katalog produk, principal, dan jaringan distribusi secara profesional.', price: 129000, discountPrice: 89000 }),
  cp({ id: 'cp-industrial-supply', name: 'Company Profile Industrial Supply & Procurement', label: 'Procurement', category: 'supplier', tags: ['Industrial', 'Korporat'], description: 'Untuk pemasok kebutuhan industri, procurement, dan vendor perusahaan besar.', price: 139000, discountPrice: 99000 }),

  // ---------- Akuntansi & Keuangan ----------
  cp({ id: 'cp-accounting-finance', name: 'Company Profile Accounting & Finance', label: 'Finance', category: 'keuangan', tags: ['Clean', 'Profesional', 'Korporat'], description: 'Desain bersih dan terpercaya untuk kantor akuntan dan lembaga keuangan.', price: 129000, discountPrice: 89000 }),
  cp({ id: 'cp-tax-consultant', name: 'Company Profile Tax Consultant', label: 'Tax', category: 'keuangan', tags: ['Minimalis', 'Profesional'], description: 'Tampilan tenang dan mudah dibaca untuk konsultan pajak dan jasa advisory.', price: 119000, discountPrice: 79000 }),
  cp({ id: 'cp-insurance-leasing', name: 'Company Profile Insurance & Leasing', label: 'Insurance', category: 'keuangan', tags: ['Korporat', 'Elegan'], description: 'Template korporat elegan untuk asuransi, leasing, dan jasa pembiayaan.', price: 129000, discountPrice: 89000 }),

  // ---------- Teknologi & IT ----------
  cp({ id: 'cp-technology', name: 'Company Profile Technology', label: 'Technology', category: 'teknologi', tags: ['Modern', 'Startup'], description: 'Desain futuristik dan fungsional untuk startup dan perusahaan teknologi.', price: 149000, discountPrice: 99000, badge: 'TERBARU' }),
  cp({ id: 'cp-software-house', name: 'Company Profile Software House', label: 'Software', category: 'teknologi', tags: ['Startup', 'Clean', 'Modern'], description: 'Menampilkan layanan, tech stack, dan studi kasus software house dengan jelas.', price: 139000, discountPrice: 99000 }),
  cp({ id: 'cp-it-solutions', name: 'Company Profile IT Solutions & Network', label: 'IT Network', category: 'teknologi', tags: ['Korporat', 'Modern'], description: 'Untuk penyedia solusi IT, jaringan, dan managed service.', price: 139000, discountPrice: 99000 }),

  // ---------- Industri & Energi ----------
  cp({ id: 'cp-manufacturing', name: 'Company Profile Manufacturing', label: 'Manufacture', category: 'industri', tags: ['Industrial', 'Korporat'], description: 'Template untuk pabrik dan perusahaan manufaktur: lini produksi, kapasitas, dan sertifikasi.', price: 149000, discountPrice: 99000 }),
  cp({ id: 'cp-mining-oil-gas', name: 'Company Profile Mining & Oil Gas', label: 'Mining', category: 'industri', tags: ['Industrial', 'Bold'], description: 'Tampilan tangguh untuk perusahaan pertambangan, migas, dan jasa pendukungnya.', price: 149000, discountPrice: 109000 }),
  cp({ id: 'cp-energy-utilities', name: 'Company Profile Energy & Utilities', label: 'Energy', category: 'industri', tags: ['Modern', 'Profesional'], description: 'Desain modern untuk perusahaan energi, kelistrikan, dan utilitas.', price: 139000, discountPrice: 99000 }),

  // ---------- Outdoor & Wisata ----------
  cp({ id: 'cp-outdoor-adventure', name: 'Company Profile Outdoor & Adventure', label: 'Outdoor', category: 'outdoor', tags: ['Bold', 'Kreatif'], description: 'Nuansa petualangan dengan visual dinamis untuk brand outdoor dan komunitas.', price: 139000, discountPrice: 99000, badge: 'TERBARU' }),
  cp({ id: 'cp-travel-tourism', name: 'Company Profile Travel & Tourism', label: 'Travel', category: 'outdoor', tags: ['Kreatif', 'Modern'], description: 'Layout penuh foto untuk biro perjalanan, wisata alam, dan operator tur.', price: 129000, discountPrice: 89000 }),

  // ---------- Kreatif & Agensi ----------
  cp({ id: 'cp-creative-agency', name: 'Company Profile Creative Agency', label: 'Agency', category: 'kreatif', tags: ['Kreatif', 'Bold'], description: 'Tata letak berani dan ekspresif untuk agensi dan studio kreatif.', price: 149000, discountPrice: 99000, badge: 'BEST SELLER' }),
  cp({ id: 'cp-photography-studio', name: 'Company Profile Photography & Studio', label: 'Photography', category: 'kreatif', tags: ['Minimalis', 'Elegan'], description: 'Tampilan minimalis yang memberi ruang untuk karya fotografi dan videografi.', price: 119000, discountPrice: 79000 }),
  cp({ id: 'cp-event-organizer', name: 'Company Profile Event Organizer', label: 'Event', category: 'kreatif', tags: ['Kreatif', 'Modern'], description: 'Untuk event organizer, wedding planner, dan rumah produksi acara.', price: 129000, discountPrice: 89000 }),

  // ---------- Korporat & Umum ----------
  cp({ id: 'cp-modern-corporate', name: 'Company Profile Modern Corporate', label: 'Corporate', category: 'umum', tags: ['Modern', 'Korporat'], description: 'Gaya korporat modern dengan layout rapi dan tegas untuk berbagai jenis perusahaan.', price: 149000, discountPrice: 99000, badge: 'BEST SELLER' }),
  cp({ id: 'cp-minimalist', name: 'Company Profile Minimalist', label: 'Minimalist', category: 'umum', tags: ['Minimalis', 'Clean'], description: 'Banyak ruang kosong dan tipografi kuat, cocok untuk brand yang mengutamakan kesederhanaan.', price: 119000, discountPrice: 79000 }),
  cp({ id: 'cp-elegant-luxury', name: 'Company Profile Elegant Luxury', label: 'Luxury', category: 'umum', tags: ['Elegan'], description: 'Nuansa premium dan elegan untuk brand yang ingin tampil eksklusif.', price: 149000, discountPrice: 109000, badge: 'TERBARU' }),
  cp({ id: 'cp-clean-professional', name: 'Company Profile Clean Professional', label: 'Professional', category: 'umum', tags: ['Clean', 'Profesional'], description: 'Desain bersih dan serbaguna yang mudah disesuaikan untuk bidang usaha apa pun.', price: 129000, discountPrice: 89000 }),
  cp({ id: 'cp-startup', name: 'Company Profile Startup', label: 'Startup', category: 'umum', tags: ['Startup', 'Modern', 'Bold'], description: 'Segar dan berani untuk startup dan bisnis rintisan yang sedang tumbuh.', price: 129000, discountPrice: 89000 }),
]

// ============================================================
//  BUNDLING (section Best Seller)
//  price = jumlah harga normal item di dalam bundle (otomatis)
//  savePercent = diskon bundling → discountPrice dihitung otomatis
//  categories: null = semua produk, atau daftar id kategori
// ============================================================
const bundle = ({ id, name, description, categories, savePercent, label }) => {
  const items = categories ? PRODUCTS.filter((p) => categories.includes(p.category)) : PRODUCTS
  const price = items.reduce((sum, p) => sum + p.price, 0)
  const discountPrice = Math.round((price * (1 - savePercent / 100)) / 1000) * 1000
  return {
    id,
    name,
    label,
    description,
    details: description,
    isBundle: true,
    items,
    category: null,
    tags: ['Bundling'],
    price,
    discountPrice,
    cover: '',
    badge: 'BEST SELLER',
    checkoutUrl: `${SCALEV}/${id}`,
    features: [
      `${items.length} template company profile`,
      'File Canva — langsung bisa diedit',
      'Akses digital instan setelah pembelian',
    ],
  }
}

// ⚠️ Persentase hemat selain bundle "Semua" adalah placeholder — sesuaikan.
export const BUNDLES = [
  bundle({
    id: 'bundle-semua-company-profile',
    name: 'Bundling Semua Company Profile',
    label: 'All Templates',
    description: 'Seluruh template company profile dari semua bidang usaha dalam satu paket. Hemat 90%.',
    categories: null,
    savePercent: 90,
  }),
  bundle({
    id: 'bundle-konstruksi',
    name: 'Bundling Perusahaan Konstruksi',
    label: 'Konstruksi',
    description: 'Paket lengkap template untuk kontraktor, developer, dan perusahaan konstruksi.',
    categories: ['konstruksi'],
    savePercent: 70,
  }),
  bundle({
    id: 'bundle-logistik',
    name: 'Bundling Perusahaan Logistik',
    label: 'Logistik',
    description: 'Paket template untuk perusahaan logistik, cargo, armada, dan alat berat.',
    categories: ['logistik'],
    savePercent: 70,
  }),
  bundle({
    id: 'bundle-general-supplier',
    name: 'Bundling Perusahaan General Supplier',
    label: 'Supplier',
    description: 'Paket template untuk general supplier, trading, distribusi, dan procurement.',
    categories: ['supplier'],
    savePercent: 70,
  }),
]
