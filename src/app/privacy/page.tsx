'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const content = {
  en: {
    label: '🇬🇧 English',
    title: 'Privacy Policy',
    updated: 'Last updated: May 2025',
    sections: [
      {
        title: '1. Overview',
        body: 'AfterText ("we", "our", or "us") is an entertainment-only AI chat analyzer. We are committed to protecting your privacy. This policy explains what data we collect, how we use it, and your rights.',
      },
      {
        title: '2. Data We Collect',
        items: [
          '<strong>Chat Text:</strong> The text you paste into the app is sent to our AI provider for analysis and is not stored on our servers.',
          '<strong>Analysis History:</strong> Stored locally on your device only. We do not upload your history.',
          '<strong>Usage Data:</strong> Anonymized analytics (e.g., number of analyses, app version) to improve the service.',
          '<strong>Ad Data:</strong> Our ad provider (Google AdMob) may collect device identifiers for personalized advertising.',
        ],
      },
      {
        title: '3. How We Use Your Data',
        items: [
          'To provide and improve the AI analysis feature.',
          'To display relevant advertisements via Google AdMob.',
          'To understand usage patterns and fix bugs.',
        ],
      },
      {
        title: '4. Data Sharing',
        body: 'We do not sell your personal data. Chat text is processed by our AI provider and is not stored, shared with third parties, or used for training without explicit consent.',
      },
      {
        title: "5. Children's Privacy",
        body: 'AfterText is intended for users aged 18 and older. We do not knowingly collect data from children under 18. If you believe a child has provided us with data, please contact us immediately.',
      },
      {
        title: '6. Data Security',
        body: 'We use industry-standard encryption for data in transit. Chat text is processed in real-time and not persisted beyond the analysis request.',
      },
      {
        title: '7. Your Rights',
        body: "You may request deletion of any data associated with your usage by contacting us. Since history is stored locally, you can delete it directly from the app's Settings screen.",
      },
      {
        title: '8. Entertainment Disclaimer',
        body: 'AfterText is for entertainment purposes only. All AI-generated analysis is fictional and should not be taken as real advice, therapy, or relationship guidance.',
      },
      {
        title: '9. Changes to This Policy',
        body: 'We may update this policy from time to time. Continued use of the app after changes constitutes acceptance of the updated policy.',
      },
      {
        title: '10. Contact',
        body: 'Questions? Reach us at <a href="mailto:hello@tulpara.com" class="underline" style="color:#FF2D78">hello@tulpara.com</a>',
      },
    ],
  },
  tr: {
    label: '🇹🇷 Türkçe',
    title: 'Gizlilik Politikası',
    updated: 'Son güncelleme: Mayıs 2025',
    sections: [
      {
        title: '1. Genel Bakış',
        body: 'AfterText ("biz", "bizim") yalnızca eğlence amaçlı bir yapay zeka sohbet analiz uygulamasıdır. Gizliliğinizi korumayı taahhüt ediyoruz. Bu politika, hangi verileri topladığımızı, nasıl kullandığımızı ve haklarınızı açıklamaktadır.',
      },
      {
        title: '2. Topladığımız Veriler',
        items: [
          '<strong>Sohbet Metni:</strong> Uygulamaya yapıştırdığınız metin, analiz için yapay zeka sağlayıcımıza gönderilir ve sunucularımızda saklanmaz.',
          '<strong>Analiz Geçmişi:</strong> Yalnızca cihazınızda yerel olarak saklanır. Geçmişinizi yüklemeyiz.',
          '<strong>Kullanım Verileri:</strong> Hizmeti iyileştirmek amacıyla anonimleştirilmiş istatistikler (analiz sayısı, uygulama sürümü vb.) toplanır.',
          '<strong>Reklam Verileri:</strong> Reklam sağlayıcımız (Google AdMob) kişiselleştirilmiş reklamlar için cihaz tanımlayıcıları toplayabilir.',
        ],
      },
      {
        title: '3. Verilerinizi Nasıl Kullanıyoruz',
        items: [
          'Yapay zeka analiz özelliğini sağlamak ve geliştirmek için.',
          'Google AdMob aracılığıyla ilgili reklamları göstermek için.',
          'Kullanım kalıplarını anlamak ve hataları düzeltmek için.',
        ],
      },
      {
        title: '4. Veri Paylaşımı',
        body: 'Kişisel verilerinizi satmıyoruz. Sohbet metni, yapay zeka sağlayıcımız tarafından işlenir; üçüncü taraflarla paylaşılmaz, saklanmaz ve açık rıza olmadan eğitim amacıyla kullanılmaz.',
      },
      {
        title: '5. Çocukların Gizliliği',
        body: 'AfterText, 18 yaş ve üzeri kullanıcılara yöneliktir. 18 yaşın altındaki çocuklardan bilerek veri toplamıyoruz. Bir çocuğun bize veri sağladığını düşünüyorsanız lütfen bize hemen ulaşın.',
      },
      {
        title: '6. Veri Güvenliği',
        body: 'İletim sırasındaki veriler için endüstri standardı şifreleme kullanıyoruz. Sohbet metni gerçek zamanlı olarak işlenir ve analiz isteğinin ötesinde saklanmaz.',
      },
      {
        title: '7. Haklarınız',
        body: "Kullanımınızla ilişkili verilerin silinmesini bize ulaşarak talep edebilirsiniz. Geçmiş yerel olarak saklandığından, uygulamanın Ayarlar ekranından doğrudan silebilirsiniz.",
      },
      {
        title: '8. Eğlence Feragatnamesi',
        body: 'AfterText yalnızca eğlence amaçlıdır. Yapay zeka tarafından üretilen tüm analizler kurgusaldır ve gerçek tavsiye, terapi veya ilişki rehberliği olarak yorumlanamaz.',
      },
      {
        title: '9. Politika Değişiklikleri',
        body: 'Bu politikayı zaman zaman güncelleyebiliriz. Değişikliklerden sonra uygulamayı kullanmaya devam etmek, güncellenmiş politikayı kabul ettiğiniz anlamına gelir.',
      },
      {
        title: '10. İletişim',
        body: 'Sorularınız için: <a href="mailto:hello@tulpara.com" class="underline" style="color:#FF2D78">hello@tulpara.com</a>',
      },
    ],
  },
  ru: {
    label: '🇷🇺 Русский',
    title: 'Политика конфиденциальности',
    updated: 'Последнее обновление: май 2025',
    sections: [
      {
        title: '1. Обзор',
        body: 'AfterText («мы», «нас») — развлекательное приложение для анализа переписок на основе искусственного интеллекта. Мы обязуемся защищать вашу конфиденциальность. Настоящая политика объясняет, какие данные мы собираем, как их используем и каковы ваши права.',
      },
      {
        title: '2. Данные, которые мы собираем',
        items: [
          '<strong>Текст переписки:</strong> Текст, вставленный в приложение, отправляется нашему поставщику ИИ для анализа и не хранится на наших серверах.',
          '<strong>История анализов:</strong> Хранится только локально на вашем устройстве. Мы не загружаем вашу историю.',
          '<strong>Данные об использовании:</strong> Анонимизированная статистика (количество анализов, версия приложения) для улучшения сервиса.',
          '<strong>Рекламные данные:</strong> Наш рекламный провайдер (Google AdMob) может собирать идентификаторы устройств для персонализированной рекламы.',
        ],
      },
      {
        title: '3. Как мы используем ваши данные',
        items: [
          'Для предоставления и улучшения функции ИИ-анализа.',
          'Для отображения релевантной рекламы через Google AdMob.',
          'Для понимания паттернов использования и исправления ошибок.',
        ],
      },
      {
        title: '4. Передача данных',
        body: 'Мы не продаём ваши личные данные. Текст переписки обрабатывается нашим поставщиком ИИ и не хранится, не передаётся третьим сторонам и не используется для обучения без явного согласия.',
      },
      {
        title: '5. Конфиденциальность детей',
        body: 'AfterText предназначен для пользователей от 18 лет. Мы сознательно не собираем данные детей до 18 лет. Если вы считаете, что ребёнок предоставил нам свои данные, немедленно свяжитесь с нами.',
      },
      {
        title: '6. Безопасность данных',
        body: 'Мы используем отраслевое шифрование для данных при передаче. Текст переписки обрабатывается в реальном времени и не хранится дольше, чем требуется для запроса анализа.',
      },
      {
        title: '7. Ваши права',
        body: 'Вы можете запросить удаление любых данных, связанных с вашим использованием, связавшись с нами. Поскольку история хранится локально, вы можете удалить её прямо в разделе «Настройки» приложения.',
      },
      {
        title: '8. Развлекательный дисклеймер',
        body: 'AfterText предназначен исключительно для развлечения. Весь анализ, сгенерированный ИИ, является вымышленным и не должен восприниматься как реальный совет, терапия или руководство по отношениям.',
      },
      {
        title: '9. Изменения в политике',
        body: 'Мы можем периодически обновлять эту политику. Продолжение использования приложения после изменений означает принятие обновлённой политики.',
      },
      {
        title: '10. Контакты',
        body: 'Есть вопросы? Напишите нам: <a href="mailto:hello@tulpara.com" class="underline" style="color:#FF2D78">hello@tulpara.com</a>',
      },
    ],
  },
  es: {
    label: '🇪🇸 Español',
    title: 'Política de Privacidad',
    updated: 'Última actualización: Mayo 2025',
    sections: [
      {
        title: '1. Resumen',
        body: 'AfterText ("nosotros") es una aplicación de análisis de chats por IA, solo para entretenimiento. Estamos comprometidos con la protección de tu privacidad. Esta política explica qué datos recopilamos, cómo los usamos y tus derechos.',
      },
      {
        title: '2. Datos que Recopilamos',
        items: [
          '<strong>Texto del Chat:</strong> El texto que pegas en la app se envía a nuestro proveedor de IA para análisis y no se almacena en nuestros servidores.',
          '<strong>Historial de Análisis:</strong> Almacenado localmente en tu dispositivo. No subimos tu historial.',
          '<strong>Datos de Uso:</strong> Estadísticas anonimizadas (número de análisis, versión de la app) para mejorar el servicio.',
          '<strong>Datos Publicitarios:</strong> Nuestro proveedor de anuncios (Google AdMob) puede recopilar identificadores de dispositivo para publicidad personalizada.',
        ],
      },
      {
        title: '3. Cómo Usamos tus Datos',
        items: [
          'Para proporcionar y mejorar la función de análisis por IA.',
          'Para mostrar anuncios relevantes a través de Google AdMob.',
          'Para entender los patrones de uso y corregir errores.',
        ],
      },
      {
        title: '4. Compartición de Datos',
        body: 'No vendemos tus datos personales. El texto del chat es procesado por nuestro proveedor de IA y no se almacena, comparte con terceros ni se usa para entrenamiento sin consentimiento explícito.',
      },
      {
        title: '5. Privacidad de Menores',
        body: 'AfterText está destinado a usuarios mayores de 18 años. No recopilamos datos de menores de 18 años a sabiendas. Si crees que un menor nos ha proporcionado datos, contáctanos de inmediato.',
      },
      {
        title: '6. Seguridad de Datos',
        body: 'Usamos cifrado estándar del sector para los datos en tránsito. El texto del chat se procesa en tiempo real y no se conserva más allá de la solicitud de análisis.',
      },
      {
        title: '7. Tus Derechos',
        body: 'Puedes solicitar la eliminación de cualquier dato asociado a tu uso contactándonos. Como el historial se almacena localmente, puedes eliminarlo directamente desde la pantalla de Configuración de la app.',
      },
      {
        title: '8. Aviso de Entretenimiento',
        body: 'AfterText es solo para entretenimiento. Todo análisis generado por IA es ficticio y no debe interpretarse como consejo real, terapia o guía de relaciones.',
      },
      {
        title: '9. Cambios en esta Política',
        body: 'Podemos actualizar esta política ocasionalmente. El uso continuado de la app tras los cambios implica la aceptación de la política actualizada.',
      },
      {
        title: '10. Contacto',
        body: '¿Preguntas? Contáctanos en <a href="mailto:hello@tulpara.com" class="underline" style="color:#FF2D78">hello@tulpara.com</a>',
      },
    ],
  },
}

type Lang = 'en' | 'tr' | 'es' | 'ru'

export default function Privacy() {
  const [lang, setLang] = useState<Lang>('en')
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

      {/* Title */}
      <h1 className="text-4xl font-black text-white mb-2">{c.title}</h1>
      <p className="text-white/30 mb-12 text-sm">{c.updated}</p>

      {/* Sections */}
      <div className="space-y-10 text-white/60 leading-relaxed">
        {c.sections.map((s, i) => (
          <section key={i}>
            <h2 className="text-xl font-bold text-white mb-3">{s.title}</h2>
            {'items' in s && s.items ? (
              <ul className="space-y-2 list-disc list-inside">
                {s.items.map((item, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            ) : (
              <p dangerouslySetInnerHTML={{ __html: (s as { title: string; body: string }).body }} />
            )}
          </section>
        ))}
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
