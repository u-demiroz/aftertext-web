'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

/* ─────────────────────── DATA ─────────────────────── */

const vibeQuotes = [
  { text: '"This chat has unpaid internship energy."', lang: '🇬🇧' },
  { text: '"You\'re dating a human loading screen."', lang: '🇬🇧' },
  { text: '"Emotionally sponsored by dry texting."', lang: '🇬🇧' },
  { text: '"Bu konuşmada tek kıvılcım senin umutların."', lang: '🇹🇷' },
  { text: '"Karşı taraf cevap veriyor ama ruhu uçak modunda."', lang: '🇹🇷' },
  { text: '"Bu ilişki değil, düşük bütçeli müşteri temsilciliği."', lang: '🇹🇷' },
  { text: '"Este chat tiene energía de lectura en visto."', lang: '🇪🇸' },
  { text: '"Él responde, pero su alma está en modo avión."', lang: '🇪🇸' },
  { text: '"This man texts like he\'s in a hostage negotiation."', lang: '🇬🇧' },
  { text: '"Conversación patrocinada por el ghosting emocional."', lang: '🇪🇸' },
]

const steps = [
  {
    icon: '📋',
    title: 'Paste the Chat',
    desc: 'Copy any romantic or dating conversation and drop it in.',
    color: '#9B30FF',
  },
  {
    icon: '🧠',
    title: 'AI Does the Roasting',
    desc: 'Our brutally honest AI analyzes every message, silence, and vibe.',
    color: '#FF2D78',
  },
  {
    icon: '🔥',
    title: 'Share the Drama',
    desc: 'Get a viral story card and screenshot it for the group chat.',
    color: '#00E5FF',
  },
]

const features = [
  {
    icon: '👻',
    label: 'Ghost Risk Score',
    desc: 'How likely is this person to vanish into thin air? 0–100.',
    color: '#9B30FF',
  },
  {
    icon: '💘',
    label: 'Interest Score',
    desc: 'Are they actually into you or just bored?',
    color: '#FF2D78',
  },
  {
    icon: '⚖️',
    label: 'Who Likes Who More',
    desc: 'The uncomfortable truth about effort balance.',
    color: '#00E5FF',
  },
  {
    icon: '☢️',
    label: 'Toxicity Score',
    desc: 'Red flags measured, ranked, and roasted.',
    color: '#FF2D78',
  },
  {
    icon: '💬',
    label: 'Conversation Vibe',
    desc: 'One savage, meme-worthy line that nails the whole chat.',
    color: '#9B30FF',
  },
  {
    icon: '📝',
    label: 'Suggested Replies',
    desc: 'Cool, Flirty, or Savage — you choose the energy.',
    color: '#00E5FF',
  },
]

const languages = [
  { flag: '🇬🇧', name: 'English', vibe: 'Witty · Savage · TikTok-brained' },
  { flag: '🇹🇷', name: 'Türkçe', vibe: 'Sarcastic · Street-smart · Sharp' },
  { flag: '🇪🇸', name: 'Español', vibe: 'Dramatic · Flirty · Emotionally Unhinged' },
]

/* ─────────────────────── COMPONENTS ─────────────────────── */

function GhostRiskCard() {
  return (
    <div
      className="relative rounded-3xl p-6 w-full max-w-sm mx-auto border border-white/10 backdrop-blur-xl"
      style={{
        background: 'linear-gradient(135deg, rgba(155,48,255,0.15), rgba(255,45,120,0.1))',
        boxShadow: '0 0 40px rgba(255,45,120,0.2), 0 0 80px rgba(155,48,255,0.1)',
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
          style={{ background: 'rgba(255,45,120,0.2)', border: '1px solid #FF2D78' }}
        >
          👻
        </div>
        <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Ghost Risk</span>
      </div>

      {/* Big Score */}
      <div className="mb-3">
        <span
          className="text-7xl font-black"
          style={{ color: '#FF2D78', textShadow: '0 0 30px #FF2D78' }}
        >
          89
          <span className="text-3xl text-white/40">%</span>
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 rounded-full bg-white/10 mb-5">
        <div
          className="h-full rounded-full"
          style={{
            width: '89%',
            background: 'linear-gradient(90deg, #9B30FF, #FF2D78)',
            boxShadow: '0 0 10px #FF2D78',
          }}
        />
      </div>

      {/* Vibe */}
      <div
        className="rounded-2xl p-3 border border-white/10"
        style={{ background: 'rgba(255,255,255,0.04)' }}
      >
        <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Conversation Vibe</p>
        <p className="text-white text-sm font-semibold leading-snug">
          &ldquo;This man texts like he&apos;s replying during a hostage negotiation.&rdquo;
        </p>
      </div>

      {/* Interest score row */}
      <div className="flex gap-3 mt-3">
        <div
          className="flex-1 rounded-2xl p-3 border border-white/10 text-center"
          style={{ background: 'rgba(155,48,255,0.1)' }}
        >
          <p className="text-white/40 text-xs mb-1">Interest</p>
          <p className="font-black text-xl" style={{ color: '#9B30FF' }}>34%</p>
        </div>
        <div
          className="flex-1 rounded-2xl p-3 border border-white/10 text-center"
          style={{ background: 'rgba(0,229,255,0.07)' }}
        >
          <p className="text-white/40 text-xs mb-1">Toxicity</p>
          <p className="font-black text-xl" style={{ color: '#00E5FF' }}>61%</p>
        </div>
      </div>

      {/* Label badge */}
      <div className="absolute -top-3 right-4">
        <span
          className="text-xs font-bold px-3 py-1 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #FF2D78, #9B30FF)',
            boxShadow: '0 0 15px rgba(255,45,120,0.5)',
          }}
        >
          EXAMPLE
        </span>
      </div>
    </div>
  )
}

function FloatingOrb({ color, size, x, y, blur }: { color: string; size: number; x: string; y: string; blur: number }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: color,
        filter: `blur(${blur}px)`,
        opacity: 0.35,
      }}
    />
  )
}

/* ─────────────────────── PAGE ─────────────────────── */

export default function Home() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: '#07000F' }}
    >
      {/* ── Background orbs ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <FloatingOrb color="#9B30FF" size={600} x="-10%" y="-5%" blur={120} />
        <FloatingOrb color="#FF2D78" size={400} x="60%" y="10%" blur={100} />
        <FloatingOrb color="#00E5FF" size={300} x="80%" y="60%" blur={120} />
        <FloatingOrb color="#9B30FF" size={350} x="10%" y="70%" blur={100} />
      </div>

      {/* ═══════════════════ NAV ═══════════════════ */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="AfterText" width={36} height={36} className="rounded-xl" />
          <span className="font-black text-lg tracking-tight">
            After<span style={{ color: '#FF2D78' }}>Text</span>
          </span>
        </div>
        <a
          href="#download"
          className="text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #FF2D78, #9B30FF)',
            boxShadow: '0 0 20px rgba(255,45,120,0.4)',
          }}
        >
          Get the App
        </a>
      </nav>

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative z-10 pt-16 pb-24 px-6 text-center max-w-6xl mx-auto">
        {/* Logo */}
        <div
          className="mx-auto mb-8 w-28 h-28 rounded-[2rem] overflow-hidden"
          style={{
            boxShadow: '0 0 60px rgba(255,45,120,0.4), 0 0 120px rgba(155,48,255,0.3)',
            animation: 'float 6s ease-in-out infinite',
          }}
        >
          <Image src="/logo.png" alt="AfterText Logo" width={112} height={112} className="w-full h-full object-cover" />
        </div>

        {/* Tagline badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm"
          style={{ background: 'rgba(255,255,255,0.04)' }}>
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#FF2D78' }}>
            🔥 For Entertainment Only
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl font-black leading-none mb-4 tracking-tight">
          <span className="text-white">After</span>
          <span
            className="italic"
            style={{ color: '#FF2D78', textShadow: '0 0 40px #FF2D78aa' }}
          >
            Text.
          </span>
          <br />
          <span
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            Decode the drama.
          </span>
        </h1>

        {/* Sub headline */}
        <p className="text-lg sm:text-xl text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
          Your brutally honest AI best friend with internet brain rot and elite gossip instincts.
          Paste a chat. Get the savage truth.
        </p>

        {/* CTA Buttons */}
        <div id="download" className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="#"
            className="flex items-center gap-3 px-7 py-4 rounded-2xl font-bold text-lg transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #FF2D78, #9B30FF)',
              boxShadow: '0 0 30px rgba(255,45,120,0.5), 0 0 60px rgba(155,48,255,0.3)',
            }}
          >
            <span className="text-2xl">🍎</span>
            <span>Download on App Store</span>
          </a>
        </div>

        {/* Preview Card */}
        <div style={{ animation: 'float 6s ease-in-out infinite' }}>
          <GhostRiskCard />
        </div>

        <p className="text-white/20 text-xs mt-4">Example output — not real analysis</p>
      </section>

      {/* ═══════════════════ MARQUEE ═══════════════════ */}
      <section className="relative z-10 py-8 overflow-hidden border-y border-white/5"
        style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="marquee-track">
          {[...vibeQuotes, ...vibeQuotes].map((q, i) => (
            <div key={i} className="flex items-center gap-4 mx-8 shrink-0">
              <span className="text-xl">{q.lang}</span>
              <span
                className="text-sm font-semibold italic whitespace-nowrap"
                style={{ color: i % 3 === 0 ? '#FF2D78' : i % 3 === 1 ? '#9B30FF' : '#00E5FF' }}
              >
                {q.text}
              </span>
              <span className="text-white/20 text-lg">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ HOW IT WORKS ═══════════════════ */}
      <section className="relative z-10 py-28 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#FF2D78' }}>
            How It Works
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Three steps to the{' '}
            <span className="gradient-text-pink-purple">brutal truth.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative rounded-3xl p-7 border border-white/8 text-center group hover:scale-105 transition-transform duration-300"
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Step number */}
              <div
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black border border-white/20"
                style={{ background: step.color, boxShadow: `0 0 15px ${step.color}` }}
              >
                {i + 1}
              </div>
              <div className="text-5xl mb-4 mt-2">{step.icon}</div>
              <h3 className="text-xl font-black text-white mb-2">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ FEATURES ═══════════════════ */}
      <section className="relative z-10 py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#9B30FF' }}>
            What You Get
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Every metric that{' '}
            <span style={{ color: '#FF2D78', textShadow: '0 0 20px #FF2D78' }}>hurts.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 border border-white/8 hover:border-white/20 transition-all duration-300 hover:scale-105 group"
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-all duration-300"
                style={{
                  background: `${f.color}22`,
                  border: `1px solid ${f.color}44`,
                  boxShadow: `0 0 15px ${f.color}22`,
                }}
              >
                {f.icon}
              </div>
              <h3 className="font-black text-white text-lg mb-1">{f.label}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ LANGUAGES ═══════════════════ */}
      <section className="relative z-10 py-20 px-6 max-w-4xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#00E5FF' }}>
          3 Languages
        </p>
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
          The drama is{' '}
          <span style={{ color: '#00E5FF', textShadow: '0 0 20px #00E5FF' }}>universal.</span>
        </h2>
        <p className="text-white/40 mb-12 text-lg">
          Same savage analysis, native tongue energy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {languages.map((lang, i) => (
            <div
              key={i}
              className="rounded-3xl p-7 border border-white/10 hover:border-white/25 transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="text-5xl mb-4">{lang.flag}</div>
              <h3 className="text-xl font-black text-white mb-2">{lang.name}</h3>
              <p className="text-white/40 text-sm italic">{lang.vibe}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ VIBE SHOWCASE ═══════════════════ */}
      <section className="relative z-10 py-20 px-6 max-w-3xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#FF2D78' }}>
          Conversation Vibes
        </p>
        <h2 className="text-4xl font-black text-white mb-12">
          Meme-worthy.{' '}
          <span className="gradient-text">Every time.</span>
        </h2>

        <div className="flex flex-col gap-4">
          {[
            { text: '"You\'re dating a human loading screen."', flag: '🇬🇧', color: '#FF2D78' },
            { text: '"Bu ilişki değil, düşük bütçeli müşteri temsilciliği."', flag: '🇹🇷', color: '#9B30FF' },
            { text: '"Conversación patrocinada por el ghosting emocional."', flag: '🇪🇸', color: '#00E5FF' },
          ].map((q, i) => (
            <div
              key={i}
              className="rounded-2xl px-7 py-5 border border-white/10 text-left"
              style={{
                background: `${q.color}0d`,
                borderColor: `${q.color}33`,
              }}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0 mt-0.5">{q.flag}</span>
                <p
                  className="text-xl font-bold italic leading-snug"
                  style={{ color: q.color }}
                >
                  {q.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ DISCLAIMER ═══════════════════ */}
      <section className="relative z-10 py-20 px-6">
        <div
          className="max-w-3xl mx-auto rounded-3xl p-10 border text-center"
          style={{
            background: 'rgba(255,255,255,0.03)',
            borderColor: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="text-5xl mb-5">⚠️</div>
          <h3 className="text-3xl font-black text-white mb-4">
            Pure Entertainment Only
          </h3>
          <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
            AfterText is{' '}
            <span className="font-bold text-white">not therapy</span>,{' '}
            <span className="font-bold text-white">not relationship advice</span>, and{' '}
            <span className="font-bold text-white">not a diagnosis</span>. It&apos;s your funny, sarcastic best friend who roasts your chats for laughs.
            All analysis is AI-generated and for entertainment purposes only.
          </p>
          <p className="mt-4 text-white/30 text-sm font-semibold uppercase tracking-wider">18+ · For Entertainment Only</p>
        </div>
      </section>

      {/* ═══════════════════ FINAL CTA ═══════════════════ */}
      <section className="relative z-10 py-28 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-none">
          Stop guessing.<br />
          <span
            className="italic"
            style={{ color: '#FF2D78', textShadow: '0 0 40px #FF2D78aa' }}
          >
            Get the truth.
          </span>
        </h2>
        <p className="text-white/40 text-lg mb-10">
          Paste the chat. Face the facts. Survive the drama.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl font-bold text-xl transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #FF2D78, #9B30FF)',
            boxShadow: '0 0 40px rgba(255,45,120,0.5), 0 0 80px rgba(155,48,255,0.3)',
          }}
        >
          <span className="text-2xl">🍎</span>
          <span>Download AfterText Free</span>
        </a>
        <p className="text-white/20 text-sm mt-4">iOS · Free to download · 3 free analyses/day</p>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="relative z-10 border-t border-white/5 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="AfterText" width={28} height={28} className="rounded-lg opacity-80" />
            <span className="text-white/40 text-sm font-semibold">
              After<span style={{ color: '#FF2D78' }}>Text</span>
            </span>
          </div>
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} AfterText · For entertainment only · Not therapy
          </p>
          <div className="flex gap-5 text-sm">
            <Link href="/privacy" className="text-white/30 hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>

      {/* Float keyframe inline */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </main>
  )
}
