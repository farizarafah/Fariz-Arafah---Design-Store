import { CATEGORIES } from '../data/products'
import { SITE } from '../data/site'

const THEMES = {
  dark: { bg: '#111111', pageA: '#FF6B1A', pageB: '#F7F7F5', ink: '#111111' },
  orange: { bg: '#FF6B1A', pageA: '#111111', pageB: '#F7F7F5', ink: '#111111' },
  light: { bg: '#E5E5E5', pageA: '#FFFFFF', pageB: '#111111', ink: '#111111' },
  cream: { bg: '#F7F7F5', pageA: '#111111', pageB: '#FF6B1A', ink: '#111111' },
}
const THEME_KEYS = Object.keys(THEMES)
const MOTIFS = ['circle', 'stripes', 'triangle', 'grid', 'arc']

// Tema & motif otomatis dari id produk (stabil, tidak acak), bisa ditimpa lewat product.art
const hash = (s) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7)

const resolveArt = (product) => {
  const h = hash(product.id)
  return {
    theme: product.art?.theme ?? THEME_KEYS[h % THEME_KEYS.length],
    motif: product.art?.motif ?? MOTIFS[(h >> 3) % MOTIFS.length],
  }
}

export const coverBg = (product) =>
  product.isBundle ? '#111111' : THEMES[resolveArt(product).theme].bg

function Motif({ type, x, y, w, h, color }) {
  switch (type) {
    case 'circle':
      return <circle cx={x + w / 2} cy={y + h * 0.42} r={w * 0.3} fill={color} />
    case 'stripes':
      return (
        <g fill={color}>
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={x} y={y + i * (h * 0.11)} width={w * (1 - i * 0.15)} height={h * 0.06} rx="2" />
          ))}
        </g>
      )
    case 'triangle':
      return <polygon points={`${x},${y + h * 0.78} ${x + w * 0.5},${y} ${x + w},${y + h * 0.78}`} fill={color} />
    case 'grid':
      return (
        <g fill={color}>
          <rect x={x} y={y} width={w * 0.47} height={h * 0.34} rx="3" />
          <rect x={x + w * 0.53} y={y} width={w * 0.47} height={h * 0.34} rx="3" opacity=".55" />
          <rect x={x} y={y + h * 0.4} width={w * 0.47} height={h * 0.34} rx="3" opacity=".55" />
          <rect x={x + w * 0.53} y={y + h * 0.4} width={w * 0.47} height={h * 0.34} rx="3" />
        </g>
      )
    default:
      return <path d={`M${x} ${y + h * 0.7} A${w / 2} ${w / 2} 0 0 1 ${x + w} ${y + h * 0.7} Z`} fill={color} />
  }
}

function Page({ x, y, w, h, rot, fill, ink, motifColor, motif, children }) {
  const pad = w * 0.12
  return (
    <g transform={`rotate(${rot} ${x + w / 2} ${y + h / 2})`}>
      <rect x={x + 5} y={y + 8} width={w} height={h} rx="6" fill="#00000030" />
      <rect x={x} y={y} width={w} height={h} rx="6" fill={fill} />
      <rect x={x + pad} y={y + pad} width={w * 0.22} height="4" rx="2" fill={motifColor} />
      <Motif type={motif} x={x + pad} y={y + h * 0.2} w={w - pad * 2} h={h * 0.5} color={motifColor} />
      <g fill={ink} opacity=".7">
        <rect x={x + pad} y={y + h * 0.78} width={w * 0.62} height="5" rx="2.5" />
        <rect x={x + pad} y={y + h * 0.78 + 11} width={w * 0.76} height="3" rx="1.5" opacity=".5" />
        <rect x={x + pad} y={y + h * 0.78 + 18} width={w * 0.5} height="3" rx="1.5" opacity=".5" />
      </g>
      {children}
    </g>
  )
}

const MONO = 'DM Mono, monospace'

function BundleArt({ product, fit }) {
  return (
    <svg
      viewBox="0 0 400 400"
      preserveAspectRatio={fit === 'meet' ? 'xMidYMid meet' : 'xMidYMid slice'}
      role="img"
      aria-label={`Cover ${product.name}`}
      className="h-full w-full"
    >
      <rect width="400" height="400" fill="#111111" />
      <circle cx="340" cy="50" r="110" fill="#FF6B1A33" />
      <g transform="translate(-2 44) scale(1.1)">
      <Page x={52} y={72} w={104} h={150} rot={-18} fill="#E5E5E5" ink="#111" motifColor="#111111" motif="stripes" />
      <Page x={104} y={62} w={104} h={150} rot={-6} fill="#F7F7F5" ink="#111" motifColor="#FF6B1A" motif="circle" />
      <Page x={160} y={62} w={104} h={150} rot={6} fill="#FF6B1A" ink="#111" motifColor="#F7F7F5" motif="grid" />
      <Page x={212} y={72} w={104} h={150} rot={18} fill="#FFFFFF" ink="#111" motifColor="#FF6B1A" motif="triangle">
        <text x={212 + 12} y={72 + 150 - 10} fontSize="8" fontWeight="700" letterSpacing="1.2" fill="#111" fontFamily={MONO}>
          {(product.label ?? 'BUNDLING').toUpperCase()}
        </text>
      </Page>
      </g>
      <text x="22" y="30" fontSize="9" letterSpacing="2.2" fontWeight="500" fontFamily={MONO} fill="#FFFFFFAA">
        BUNDLING
      </text>
      <text x="22" y="384" fontSize="9" letterSpacing="2.2" fontWeight="500" fontFamily={MONO} fill="#FFFFFFAA">
        BY {SITE.name.toUpperCase()}
      </text>
    </svg>
  )
}

/** Cover placeholder otomatis. Jika product.cover diisi, gambar asli yang dipakai. */
export default function CoverArt({ product, fit = 'slice' }) {
  if (product.cover) {
    return <img src={product.cover} alt={`Cover ${product.name}`} loading="lazy" className="h-full w-full object-cover" />
  }
  if (product.isBundle) return <BundleArt product={product} fit={fit} />

  const { theme, motif } = resolveArt(product)
  const t = THEMES[theme]
  const category = CATEGORIES.find((c) => c.id === product.category)
  const onDark = theme === 'dark' || theme === 'orange'
  const label = (product.label ?? product.name).toUpperCase()
  const frontInk = t.pageA === '#111111' ? '#FFFFFF' : t.ink
  const caption = onDark ? '#FFFFFFAA' : '#111111AA'

  return (
    <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label={`Cover ${product.name}`} className="h-full w-full">
      <rect width="400" height="400" fill={t.bg} />
      <circle cx="372" cy="36" r="90" fill={theme === 'orange' ? '#FFFFFF22' : '#FF6B1A22'} />
      <circle cx="40" cy="400" r="80" fill={onDark ? '#FFFFFF10' : '#11111108'} />

      <g transform="translate(-20 18) scale(1.15)">
      <Page x={78} y={58} w={118} h={170} rot={-8} fill={t.pageB} ink={t.ink} motifColor={t.pageA === '#FFFFFF' ? '#FF6B1A' : t.pageA} motif={motif} />
      <Page x={176} y={72} w={128} h={186} rot={6} fill={t.pageA} ink={frontInk} motifColor={t.pageB === '#111111' ? '#FF6B1A' : t.pageB} motif={motif}>
        <text x={176 + 128 * 0.12} y={72 + 186 - 12} fontSize="9" fontWeight="700" letterSpacing="1.2" fill={frontInk} fontFamily={MONO}>
          {label}
        </text>
      </Page>
      </g>

      <text x="22" y="30" fontSize="9" letterSpacing="2.2" fontWeight="500" fontFamily={MONO} fill={caption}>
        {(category?.short ?? 'TEMPLATE').toUpperCase()}
      </text>
      <text x="22" y="384" fontSize="9" letterSpacing="2.2" fontWeight="500" fontFamily={MONO} fill={caption}>
        BY {SITE.name.toUpperCase()}
      </text>
    </svg>
  )
}
