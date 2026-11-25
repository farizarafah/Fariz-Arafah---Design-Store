// ============================================================
//  IDENTITAS BRAND — satu-satunya tempat nama brand ditulis.
//  Untuk ganti ke "Foxez Studio": ubah `name` dan `role` di bawah.
//  (Semua teks lain — logo, footer, copyright, cover, pesan WhatsApp,
//   judul tab browser — mengambil nilai dari sini.)
// ============================================================

export const SITE = {
  name: 'Fariz',
  role: 'Motion & Graphic Designer',
  footerTagline: 'Merancang visual, menciptakan ide, dan berbagi kreativitas.',
}

export const COPYRIGHT = `Copyright © ${new Date().getFullYear()} ${SITE.name}. All Rights Reserved.`

export const NAV_LINKS = [
  { label: 'Best Seller', href: '#best-seller' },
  { label: 'Katalog', href: '#katalog' },
]

// Link placeholder — ganti dengan akun asli
export const CONTACT_LINKS = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    icon: 'whatsapp',
    href: `https://wa.me/6281200000000?text=${encodeURIComponent(
      `Halo ${SITE.name}, saya ingin bertanya tentang produk digital Anda.`,
    )}`,
  },
  { id: 'instagram', label: 'Instagram', icon: 'instagram', href: 'https://instagram.com/username' },
  { id: 'tiktok', label: 'TikTok', icon: 'tiktok', href: 'https://tiktok.com/@username' },
  { id: 'email', label: 'Email', icon: 'email', href: 'mailto:halo@example.com' },
]
