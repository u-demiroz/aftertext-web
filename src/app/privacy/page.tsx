import Link from 'next/link'
import Image from 'next/image'

export default function Privacy() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      {/* Nav */}
      <div className="flex items-center gap-3 mb-16">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/logo.png" alt="AfterText" width={36} height={36} className="rounded-xl" />
          <span className="font-black text-lg tracking-tight text-white/80 group-hover:text-white transition-colors">
            After<span style={{ color: '#FF2D78' }}>Text</span>
          </span>
        </Link>
      </div>

      <h1 className="text-4xl font-black text-white mb-2">Privacy Policy</h1>
      <p className="text-white/40 mb-12 text-sm">Last updated: May 2025</p>

      <div className="space-y-10 text-white/60 leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-white mb-3">1. Overview</h2>
          <p>
            AfterText (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is an entertainment-only AI chat analyzer.
            We are committed to protecting your privacy. This policy explains what data we collect,
            how we use it, and your rights.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">2. Data We Collect</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li><span className="text-white font-semibold">Chat Text:</span> The text you paste into the app is sent to our AI provider for analysis and is not stored on our servers.</li>
            <li><span className="text-white font-semibold">Analysis History:</span> Stored locally on your device only. We do not upload your history.</li>
            <li><span className="text-white font-semibold">Usage Data:</span> Anonymized analytics (e.g., number of analyses, app version) to improve the service.</li>
            <li><span className="text-white font-semibold">Ad Data:</span> Our ad providers (Google AdMob) may collect device identifiers for personalized advertising. See Google&apos;s Privacy Policy for details.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Data</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>To provide and improve the AI analysis feature.</li>
            <li>To display relevant advertisements via Google AdMob.</li>
            <li>To understand usage patterns and fix bugs.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">4. Data Sharing</h2>
          <p>
            We do not sell your personal data. Chat text is processed by our AI provider (subject to their privacy policy)
            and is not stored, shared with third parties, or used for training without explicit consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">5. Children&apos;s Privacy</h2>
          <p>
            AfterText is intended for users aged 18 and older. We do not knowingly collect data from
            children under 18. If you believe a child has provided us with data, please contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">6. Data Security</h2>
          <p>
            We use industry-standard encryption for data in transit. Chat text is processed in real-time
            and not persisted beyond the analysis request.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">7. Your Rights</h2>
          <p>
            You may request deletion of any data associated with your usage by contacting us.
            Since history is stored locally, you can delete it directly from the app&apos;s Settings screen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">8. Entertainment Disclaimer</h2>
          <p>
            AfterText is for entertainment purposes only. All AI-generated analysis is fictional and should
            not be taken as real advice, therapy, or relationship guidance. The app is not a substitute
            for professional mental health support.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">9. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Continued use of the app after changes
            constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">10. Contact</h2>
          <p>
            Questions? Reach us at{' '}
            <a href="mailto:privacy@aftertext.app" className="underline hover:text-white transition-colors" style={{ color: '#FF2D78' }}>
              privacy@aftertext.app
            </a>
          </p>
        </section>
      </div>

      <div className="mt-16 pt-8 border-t border-white/5 text-center">
        <Link href="/" className="text-white/30 hover:text-white/60 transition-colors text-sm">
          ← Back to AfterText
        </Link>
      </div>
    </main>
  )
}
