'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const content = {
  en: {
    label: '🇬🇧 English',
    title: 'Support',
    subtitle: 'We\'re here to help.',
    faqTitle: 'Frequently Asked Questions',
    contactTitle: 'Contact Us',
    contactBody: 'Can\'t find your answer? Reach us at',
    contactEmail: 'hello@tulpara.com',
    responseTime: 'We typically respond within 24–48 hours.',
    faq: [
      {
        q: 'How does AfterText work?',
        a: 'Paste any chat conversation into AfterText and our AI will analyze the tone, sentiment, and subtext — giving you an entertaining breakdown of what\'s really being said.',
      },
      {
        q: 'Is my chat data stored or shared?',
        a: 'No. The text you paste is sent to our AI provider for analysis only and is never stored on our servers. Your analysis history is saved locally on your device.',
      },
      {
        q: 'How do I delete my history?',
        a: 'Open the app → go to Settings → tap "Clear History". All locally stored analyses will be permanently deleted.',
      },
      {
        q: 'AfterText says my results expired. Why?',
        a: 'Free analysis results are available for 24 hours. Upgrade to AfterText Pro to unlock unlimited, permanent history.',
      },
      {
        q: 'How do I cancel my subscription?',
        a: 'Subscriptions are managed through Apple. Go to Settings → Apple ID → Subscriptions → AfterText → Cancel Subscription.',
      },
      {
        q: 'The app crashed or isn\'t working. What do I do?',
        a: 'Try force-closing and reopening the app. If the issue persists, make sure you\'re on the latest version and contact us at hello@tulpara.com with your device model and iOS version.',
      },
      {
        q: 'Is AfterText suitable for all ages?',
        a: 'AfterText is intended for users 18 and older due to the nature of relationship and chat content analysis.',
      },
      {
        q: 'Is the analysis accurate?',
        a: 'AfterText is for entertainment purposes only. The AI analysis is fun and thought-provoking but should not be taken as real advice, therapy, or relationship guidance.',
      },
    ],
  },
  tr: {
    label: '🇹🇷 Türkçe',
    title: 'Destek',
    subtitle: 'Yardım etmek için buradayız.',
    faqTitle: 'Sıkça Sorulan Sorular',
    contactTitle: 'Bize Ulaşın',
    contactBody: 'Cevabınızı bulamadınız mı? Bize yazın:',
    contactEmail: 'hello@tulpara.com',
    responseTime: 'Genellikle 24–48 saat içinde yanıt veririz.',
    faq: [
      {
        q: 'AfterText nasıl çalışır?',
        a: 'Herhangi bir sohbet konuşmasını AfterText\'e yapıştırın; yapay zekamız tonunu, duygusunu ve alt metnini analiz ederek gerçekte ne söylendiğini eğlenceli bir şekilde ortaya koyar.',
      },
      {
        q: 'Sohbet verilerim saklanıyor veya paylaşılıyor mu?',
        a: 'Hayır. Yapıştırdığınız metin yalnızca analiz için yapay zeka sağlayıcımıza gönderilir ve sunucularımızda hiçbir zaman saklanmaz. Analiz geçmişiniz yalnızca cihazınızda yerel olarak kaydedilir.',
      },
      {
        q: 'Geçmişimi nasıl silerim?',
        a: 'Uygulamayı açın → Ayarlar\'a gidin → "Geçmişi Temizle"ye dokunun. Yerel olarak saklanan tüm analizler kalıcı olarak silinir.',
      },
      {
        q: 'Sonuçlarımın süresi doldu yazıyor. Neden?',
        a: 'Ücretsiz analiz sonuçları 24 saat süreyle erişilebilir. Sınırsız ve kalıcı geçmiş için AfterText Pro\'ya yükseltin.',
      },
      {
        q: 'Aboneliğimi nasıl iptal ederim?',
        a: 'Abonelikler Apple üzerinden yönetilir. Ayarlar → Apple ID → Abonelikler → AfterText → Aboneliği İptal Et yolunu izleyin.',
      },
      {
        q: 'Uygulama çöktü veya çalışmıyor. Ne yapmalıyım?',
        a: 'Uygulamayı tamamen kapatıp yeniden açmayı deneyin. Sorun devam ederse güncel sürümde olduğunuzdan emin olun ve cihaz modeliniz ile iOS sürümünüzü belirterek hello@tulpara.com adresine yazın.',
      },
      {
        q: 'AfterText her yaşa uygun mu?',
        a: 'AfterText, ilişki ve sohbet analizi içeriğinin yapısı gereği 18 yaş ve üzeri kullanıcılara yöneliktir.',
      },
      {
        q: 'Analiz sonuçları doğru mu?',
        a: 'AfterText yalnızca eğlence amaçlıdır. Yapay zeka analizleri eğlenceli ve düşündürücüdür; ancak gerçek tavsiye, terapi veya ilişki rehberliği olarak yorumlanamaz.',
      },
    ],
  },
  es: {
    label: '🇪🇸 Español',
    title: 'Soporte',
    subtitle: 'Estamos aquí para ayudarte.',
    faqTitle: 'Preguntas Frecuentes',
    contactTitle: 'Contáctanos',
    contactBody: '¿No encontraste tu respuesta? Escríbenos a',
    contactEmail: 'hello@tulpara.com',
    responseTime: 'Solemos responder en 24–48 horas.',
    faq: [
      {
        q: '¿Cómo funciona AfterText?',
        a: 'Pega cualquier conversación de chat en AfterText y nuestra IA analizará el tono, el sentimiento y el subtexto, dándote un desglose entretenido de lo que realmente se está diciendo.',
      },
      {
        q: '¿Mis datos de chat se almacenan o comparten?',
        a: 'No. El texto que pegas se envía a nuestro proveedor de IA solo para análisis y nunca se almacena en nuestros servidores. Tu historial de análisis se guarda localmente en tu dispositivo.',
      },
      {
        q: '¿Cómo elimino mi historial?',
        a: 'Abre la app → ve a Configuración → toca "Borrar historial". Todos los análisis almacenados localmente se eliminarán de forma permanente.',
      },
      {
        q: 'AfterText dice que mis resultados han expirado. ¿Por qué?',
        a: 'Los resultados de análisis gratuitos están disponibles por 24 horas. Actualiza a AfterText Pro para desbloquear historial ilimitado y permanente.',
      },
      {
        q: '¿Cómo cancelo mi suscripción?',
        a: 'Las suscripciones se gestionan a través de Apple. Ve a Configuración → Apple ID → Suscripciones → AfterText → Cancelar suscripción.',
      },
      {
        q: 'La app se cerró o no funciona. ¿Qué hago?',
        a: 'Intenta cerrar y volver a abrir la app. Si el problema persiste, asegúrate de tener la última versión y contáctanos en hello@tulpara.com con tu modelo de dispositivo y versión de iOS.',
      },
      {
        q: '¿AfterText es apto para todas las edades?',
        a: 'AfterText está destinado a usuarios mayores de 18 años debido a la naturaleza del análisis de relaciones y chats.',
      },
      {
        q: '¿El análisis es preciso?',
        a: 'AfterText es solo para entretenimiento. El análisis de IA es divertido y reflexivo, pero no debe interpretarse como consejo real, terapia o guía de relaciones.',
      },
    ],
  },
  ru: {
    label: '🇷🇺 Русский',
    title: 'Поддержка',
    subtitle: 'Мы здесь, чтобы помочь.',
    faqTitle: 'Часто задаваемые вопросы',
    contactTitle: 'Связаться с нами',
    contactBody: 'Не нашли ответ? Напишите нам:',
    contactEmail: 'hello@tulpara.com',
    responseTime: 'Мы обычно отвечаем в течение 24–48 часов.',
    faq: [
      {
        q: 'Как работает AfterText?',
        a: 'Вставьте любую переписку в AfterText, и наш ИИ проанализирует тон, настроение и подтекст — и выдаст вам развлекательный разбор того, что действительно имеется в виду.',
      },
      {
        q: 'Мои данные переписки хранятся или передаются?',
        a: 'Нет. Вставленный текст отправляется нашему поставщику ИИ только для анализа и никогда не хранится на наших серверах. История анализов сохраняется только локально на вашем устройстве.',
      },
      {
        q: 'Как удалить историю?',
        a: 'Откройте приложение → перейдите в Настройки → нажмите «Очистить историю». Все локально сохранённые анализы будут удалены навсегда.',
      },
      {
        q: 'AfterText пишет, что срок результатов истёк. Почему?',
        a: 'Результаты бесплатного анализа доступны в течение 24 часов. Перейдите на AfterText Pro для безлимитной и постоянной истории.',
      },
      {
        q: 'Как отменить подписку?',
        a: 'Подписками управляет Apple. Перейдите в Настройки → Apple ID → Подписки → AfterText → Отменить подписку.',
      },
      {
        q: 'Приложение вылетает или не работает. Что делать?',
        a: 'Попробуйте полностью закрыть и снова открыть приложение. Если проблема не устранена, убедитесь, что у вас последняя версия, и напишите нам на hello@tulpara.com, указав модель устройства и версию iOS.',
      },
      {
        q: 'AfterText подходит для всех возрастов?',
        a: 'AfterText предназначен для пользователей от 18 лет в связи с характером анализа отношений и переписок.',
      },
      {
        q: 'Анализ точный?',
        a: 'AfterText предназначен исключительно для развлечения. Анализ ИИ весёлый и заставляет задуматься, но не должен восприниматься как реальный совет, терапия или руководство по отношениям.',
      },
    ],
  },
}

type Lang = 'en' | 'tr' | 'es' | 'ru'

export default function Support() {
  const [lang, setLang] = useState<Lang>('en')
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const c = content[lang]

  return (
    <main
      className="min-h-screen px-6 py-16 max-w-3xl mx-auto"
      style={{ background: '#07000F' }}
    >
      {/* Nav */}
      <div className="flex items-center gap-3 mb-16">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/logo.png" alt="AfterText" width={36} height={36} className="rounded-xl" />
          <span className="font-black text-lg tracking-tight text-white/80 group-hover:text-white transition-colors">
            After<span style={{ color: '#FF2D78' }}>Text</span>
          </span>
        </Link>
      </div>

      {/* Language Tabs */}
      <div className="flex gap-2 mb-10 p-1 rounded-2xl w-fit border border-white/10"
        style={{ background: 'rgba(255,255,255,0.04)' }}>
        {(Object.keys(content) as Lang[]).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className="px-5 py-2 rounded-xl text-sm font-bold transition-all duration-200"
            style={
              lang === l
                ? {
                    background: 'linear-gradient(135deg, #FF2D78, #9B30FF)',
                    color: '#fff',
                    boxShadow: '0 0 15px rgba(255,45,120,0.4)',
                  }
                : { color: 'rgba(255,255,255,0.4)' }
            }
          >
            {content[l].label}
          </button>
        ))}
      </div>

      {/* Header */}
      <h1 className="text-4xl font-black text-white mb-2">{c.title}</h1>
      <p className="text-white/40 mb-14 text-lg">{c.subtitle}</p>

      {/* FAQ */}
      <h2 className="text-xl font-bold text-white mb-6">{c.faqTitle}</h2>
      <div className="space-y-3 mb-16">
        {c.faq.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/8 overflow-hidden transition-all duration-200"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left"
            >
              <span className="font-semibold text-white/90 text-sm pr-4">{item.q}</span>
              <span
                className="text-xl transition-transform duration-200 flex-shrink-0"
                style={{
                  color: '#FF2D78',
                  transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)',
                }}
              >
                +
              </span>
            </button>
            {openIndex === i && (
              <div className="px-6 pb-5 text-white/50 text-sm leading-relaxed border-t border-white/5 pt-4">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact */}
      <div
        className="rounded-3xl p-8 text-center border border-white/8"
        style={{ background: 'rgba(255,45,120,0.06)' }}
      >
        <h2 className="text-xl font-bold text-white mb-3">{c.contactTitle}</h2>
        <p className="text-white/40 text-sm mb-4">{c.contactBody}</p>
        <a
          href={`mailto:${c.contactEmail}`}
          className="inline-block font-bold text-lg transition-opacity hover:opacity-80"
          style={{ color: '#FF2D78' }}
        >
          {c.contactEmail}
        </a>
        <p className="text-white/25 text-xs mt-4">{c.responseTime}</p>
      </div>

      <div className="mt-16 pt-8 border-t border-white/5 text-center space-y-3">
        <Link href="/" className="text-white/30 hover:text-white/60 transition-colors text-sm block">
          ← Back to AfterText
        </Link>
        <p className="text-white/20 text-xs">
          Made with ♥ by{' '}
          <a
            href="https://www.tulpara.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/50 transition-colors"
            style={{ color: 'rgba(255,45,120,0.6)' }}
          >
            Tulpara
          </a>
        </p>
      </div>
    </main>
  )
}
