# Storefront Template Company Profile

React + Vite + Tailwind CSS v4 + Lucide Icons.

```bash
npm install
npm run dev      # development
npm run build    # produksi (hasil di /dist)
```

> ⚠️ `index.html` di folder ini adalah file sumber Vite — kalau diklik dua kali akan tampil kosong (normal).
> Untuk melihat hasilnya: jalankan `npm run dev`, atau buka `siap-buka/index.html` (versi pratinjau yang sudah jadi).

## Ganti brand (mis. ke Foxez Studio)
Edit **`src/data/site.js`** → `SITE.name` dan `SITE.role`.
Logo, footer, copyright, cover produk, pesan WhatsApp, dan judul tab otomatis mengikuti.
Tinggal ganti juga link kontak (WhatsApp/Instagram/TikTok/Email) di file yang sama.

## Produk
Semua produk, kategori (bidang perusahaan), tag, harga, dan bundling ada di **`src/data/products.js`**.
- 30 produk saat ini adalah **placeholder** — ganti nama, deskripsi, harga, dan `checkoutUrl`.
- Ganti `SCALEV` (base link checkout) di bagian atas file.
- Tag baru otomatis muncul di filter. Kategori baru: tambahkan ke `CATEGORIES`.
- Cover asli: taruh gambar di `public/products/`, isi `cover: '/products/nama.jpg'`.
- Bundling (`BUNDLES`): harga normal dihitung otomatis dari isi bundle; atur `savePercent`.
