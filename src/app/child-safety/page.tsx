'use client'

import Link from 'next/link'

export default function ChildSafety() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #0f0a1a 100%)',
      color: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '16px 24px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', width: 'fit-content' }}>
          <span style={{ color: 'white', fontWeight: 800, fontSize: '18px' }}>
            After<span style={{ color: '#FF2D78' }}>Text</span>
          </span>
        </Link>
      </div>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '48px 24px 80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <span style={{ fontSize: '32px' }}>🛡️</span>
          <h1 style={{ fontSize: '28px', fontWeight: 800, margin: 0 }}>
            AfterText Child Safety Standards
          </h1>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', marginBottom: '48px' }}>
          Last updated: September 2026
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.7' }}>

          <section>
            <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#FF2D78', marginBottom: '10px' }}>
              1. Our Commitment
            </h2>
            <p>
              AfterText ("the App") is committed to maintaining a safe environment for all users.
              AfterText has a zero-tolerance policy for Child Sexual Abuse and Exploitation (CSAE)
              in any form. This document outlines our standards and enforcement procedures.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#FF2D78', marginBottom: '10px' }}>
              2. Prohibited Content and Behavior
            </h2>
            <p style={{ marginBottom: '12px' }}>
              AfterText explicitly prohibits the following:
            </p>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Uploading, sharing, generating, or distributing child sexual abuse material (CSAM) of any kind</li>
              <li>Grooming, soliciting, or exploiting minors through the App</li>
              <li>Using AfterText to facilitate any form of harm, abuse, or exploitation of children</li>
              <li>Sharing, requesting, or producing content that sexualizes minors</li>
              <li>Any communication intended to manipulate or exploit a minor</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#FF2D78', marginBottom: '10px' }}>
              3. Age Requirement
            </h2>
            <p>
              AfterText is intended for users who are 17 years of age or older. Users under 17
              are not permitted to use AfterText. We do not knowingly collect data from children
              under the age of 13.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#FF2D78', marginBottom: '10px' }}>
              4. Reporting
            </h2>
            <p>
              If you encounter any content or behavior within AfterText that violates these
              Child Safety Standards, please report it immediately to us at:{' '}
              <a href="mailto:hello@tulpara.com" style={{ color: '#FF2D78' }}>
                hello@tulpara.com
              </a>
            </p>
            <p style={{ marginTop: '12px' }}>
              All reports are reviewed promptly. We will take appropriate action, which may
              include immediate account suspension, permanent ban, and reporting to relevant
              law enforcement authorities.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#FF2D78', marginBottom: '10px' }}>
              5. Enforcement
            </h2>
            <p>
              Violations of these Child Safety Standards within AfterText will result in:
            </p>
            <ul style={{ paddingLeft: '20px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Immediate and permanent account termination</li>
              <li>Reporting to law enforcement authorities in the applicable jurisdiction</li>
              <li>Reporting to the National Center for Missing &amp; Exploited Children (NCMEC) or equivalent authority</li>
              <li>Preservation of evidence for law enforcement purposes</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#FF2D78', marginBottom: '10px' }}>
              6. Legal Compliance
            </h2>
            <p>
              AfterText and its developer, Tulpara, comply with all applicable laws regarding
              child safety and child protection, including but not limited to COPPA (Children's
              Online Privacy Protection Act) and international child protection standards.
              We cooperate fully with law enforcement agencies in any investigation related
              to child exploitation or abuse.
            </p>
          </section>

          <div style={{
            marginTop: '16px',
            padding: '20px',
            borderRadius: '12px',
            background: 'rgba(255,45,120,0.08)',
            border: '1px solid rgba(255,45,120,0.25)',
          }}>
            <p style={{ margin: 0, fontSize: '14px' }}>
              📧 To report a child safety concern in AfterText, contact:{' '}
              <a href="mailto:hello@tulpara.com" style={{ color: '#FF2D78' }}>
                hello@tulpara.com
              </a>
            </p>
          </div>

          <div style={{ paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '20px' }}>
            <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none', fontSize: '13px' }}>Privacy Policy</Link>
            <Link href="/support" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none', fontSize: '13px' }}>Support</Link>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none', fontSize: '13px' }}>Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
