'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const content = {
  en: {
    label: '🇬🇧 English',
    title: 'Child Safety Standards Policy',
    updated: 'Last updated: July 2025',
    sections: [
      {
        title: '1. Our Commitment',
        body: 'AfterText is committed to providing a safe environment for all users. We have a zero-tolerance policy for any content or behavior that endangers children.',
      },
      {
        title: '2. Prohibition of CSAE',
        body: 'AfterText strictly prohibits any form of Child Sexual Abuse and Exploitation (CSAE). This includes, but is not limited to:\n• Uploading, sharing, or distributing child sexual abuse material (CSAM)\n• Grooming or soliciting minors\n• Exploiting minors in any way\n• Using the app to facilitate harm to children',
      },
      {
        title: '3. User Conduct',
        body: 'All users must be 17 years of age or older to use AfterText. Users are strictly prohibited from using the app to analyze, generate, or share any content that sexualizes, exploits, or endangers minors.',
      },
      {
        title: '4. Reporting',
        body: 'If you encounter any content or behavior that violates this policy, please report it immediately to: hello@tulpara.com\n\nWe will investigate all reports and take appropriate action, including reporting to relevant authorities where required by law.',
      },
      {
        title: '5. Enforcement',
        body: 'Violations of this policy will result in immediate account termination and may be reported to law enforcement and the National Center for Missing & Exploited Children (NCMEC) or equivalent authorities in your jurisdiction.',
      },
      {
        title: '6. Compliance',
        body: 'AfterText complies with all applicable laws regarding child safety, including the Children\'s Online Privacy Protection Act (COPPA) and other relevant regulations. We cooperate fully with law enforcement agencies investigating child exploitation.',
      },
    ],
    contact: 'For child safety concerns, contact us at: hello@tulpara.com',
  },
  tr: {
    label: '🇹🇷 Türkçe',
    title: 'Çocuk Güvenliği Standartları Politikası',
    updated: 'Son güncelleme: Temmuz 2025',
    sections: [
      {
        title: '1. Taahhüdümüz',
        body: 'AfterText, tüm kullanıcılar için güvenli bir ortam sağlamaya kararlıdır. Çocukları tehlikeye atan her türlü içerik veya davranışa sıfır tolerans politikamız vardır.',
      },
      {
        title: '2. CSAE Yasağı',
        body: 'AfterText, Çocuk Cinsel İstismarı ve Sömürüsü\'nün (CSAE) her türlüsünü kesinlikle yasaklar. Buna şunlar dahildir:\n• Çocuk cinsel istismar materyali (CSAM) yükleme, paylaşma veya dağıtma\n• Küçükleri kandırma veya istismar etme\n• Küçükleri herhangi bir şekilde sömürme\n• Çocuklara zarar vermek amacıyla uygulamanın kullanılması',
      },
      {
        title: '3. Kullanıcı Davranışı',
        body: 'AfterText\'i kullanmak için tüm kullanıcıların 17 yaşında veya daha büyük olması gerekmektedir. Kullanıcıların uygulamayı küçükleri cinsiyetlendiren, istismar eden veya tehlikeye atan içerikleri analiz etmek, oluşturmak veya paylaşmak için kullanması kesinlikle yasaktır.',
      },
      {
        title: '4. Raporlama',
        body: 'Bu politikayı ihlal eden içerik veya davranışla karşılaşırsanız lütfen derhal şu adrese bildirin: hello@tulpara.com\n\nTüm raporları inceleyecek ve yasal olarak gerekli hallerde ilgili makamlara bildirme dahil olmak üzere uygun önlemleri alacağız.',
      },
      {
        title: '5. Yaptırımlar',
        body: 'Bu politikanın ihlali, hesabın derhal kapatılmasıyla sonuçlanacak ve yargı yetkisine bağlı olarak kolluk kuvvetlerine ve Kayıp ve İstismar Edilen Çocuklar Ulusal Merkezi\'ne (NCMEC) bildirilebilir.',
      },
      {
        title: '6. Uyumluluk',
        body: 'AfterText, Çocukların Çevrimiçi Gizliliğini Koruma Yasası (COPPA) ve diğer ilgili mevzuat dahil olmak üzere çocuk güvenliğine ilişkin tüm geçerli yasalara uymaktadır. Çocuk istismarını araştıran kolluk kuvvetleriyle tam iş birliği yapıyoruz.',
      },
    ],
    contact: 'Çocuk güvenliği endişeleri için iletişim: hello@tulpara.com',
  },
}

export default function ChildSafety() {
  const [lang, setLang] = useState<'en' | 'tr'>('en')
  const t = content[lang]

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #0f0a1a 100%)',
      color: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <Image src="/logo.png" alt="AfterText" width={32} height={32} style={{ borderRadius: '8px' }} />
          <span style={{ color: 'white', fontWeight: 700, fontSize: '18px' }}>AfterText</span>
        </Link>
      </div>

      {/* Lang switcher */}
      <div style={{ display: 'flex', gap: '8px', padding: '20px 24px 0' }}>
        {(Object.keys(content) as Array<'en' | 'tr'>).map(l => (
          <button key={l} onClick={() => setLang(l)} style={{
            padding: '6px 14px', borderRadius: '20px', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: 600,
            background: lang === l ? 'rgba(255,45,120,0.8)' : 'rgba(255,255,255,0.1)',
            color: 'white',
          }}>{content[l].label}</button>
        ))}
      </div>

      {/* Content */}
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '40px 24px 80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <span style={{ fontSize: '32px' }}>🛡️</span>
          <h1 style={{ fontSize: '28px', fontWeight: 800, margin: 0 }}>{t.title}</h1>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', marginBottom: '40px' }}>{t.updated}</p>

        {t.sections.map((section, i) => (
          <div key={i} style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#FF2D78', marginBottom: '10px' }}>{section.title}</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: '1.7', whiteSpace: 'pre-line', margin: 0 }}>{section.body}</p>
          </div>
        ))}

        <div style={{
          marginTop: '48px', padding: '20px', borderRadius: '12px',
          background: 'rgba(255,45,120,0.1)', border: '1px solid rgba(255,45,120,0.3)',
        }}>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>📧 {t.contact}</p>
        </div>

        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '20px' }}>
          <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px' }}>Privacy Policy</Link>
          <Link href="/support" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px' }}>Support</Link>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px' }}>Home</Link>
        </div>
      </div>
    </div>
  )
}
