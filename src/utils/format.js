const rupiah = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
})

export const formatRupiah = (value) => rupiah.format(value).replace(/\s/g, ' ')

/** Harga yang benar-benar dibayar (harga diskon jika ada). */
export const finalPrice = (product) =>
  product.discountPrice != null && product.discountPrice < product.price
    ? product.discountPrice
    : product.price

export const hasDiscount = (product) =>
  product.discountPrice != null && product.discountPrice < product.price

export const discountPercent = (product) =>
  hasDiscount(product)
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0
