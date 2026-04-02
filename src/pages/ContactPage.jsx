import { useState } from 'react'
import { FadeUp } from '../components/Animate'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main style={{ paddingTop: 64 }}>
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <FadeUp>
              <p className="label-tag">Contact</p>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 4vw, 52px)',
                lineHeight: 1.1, letterSpacing: '-0.03em',
                color: 'var(--text-primary)', marginBottom: 20,
              }}>
                Request access or learn more.
              </h1>
              <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 48, fontWeight: 300 }}>
                Speak with our team about how PAL can transform your service operations. We work with enterprises building at scale.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { Icon: Mail, label: 'Email', val: 'hello@palgenie.com' },
                  { Icon: Phone, label: 'Phone', val: '+91 44 0000 0000' },
                  { Icon: MapPin, label: 'Chennai, India', val: 'Global coverage' },
                ].map(({ Icon, label, val }, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 8,
                      background: 'var(--surface)', border: '1px solid var(--border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--text-secondary)', flexShrink: 0,
                    }}><Icon size={15} /></div>
                    <div>
                      <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 2 }}>{label}</p>
                      <p style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 500 }}>{val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div style={{
                padding: '40px 36px',
                border: '1px solid var(--border)',
                background: 'var(--bg2)', borderRadius: 12,
              }}>
                {sent ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: 'var(--text-primary)', marginBottom: 12 }}>
                      Message received.
                    </p>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
                      Our team will reach out within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handle}>
                    <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 24 }}>Request Access</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {[
                        { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Jane Smith' },
                        { key: 'company', label: 'Company', type: 'text', placeholder: 'Acme Corp' },
                        { key: 'email', label: 'Work Email', type: 'email', placeholder: 'jane@acme.com' },
                      ].map(f => (
                        <div key={f.key}>
                          <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: 'var(--text-secondary)', marginBottom: 6 }}>{f.label}</label>
                          <input
                            type={f.type}
                            placeholder={f.placeholder}
                            required
                            value={form[f.key]}
                            onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                            style={{
                              width: '100%', padding: '10px 14px',
                              background: 'var(--bg)', border: '1px solid var(--border)',
                              borderRadius: 6, fontSize: 14,
                              color: 'var(--text-primary)',
                              fontFamily: 'var(--font-body)',
                              outline: 'none', transition: 'border-color 0.2s',
                            }}
                            onFocus={e => e.target.style.borderColor = 'var(--border-strong)'}
                            onBlur={e => e.target.style.borderColor = 'var(--border)'}
                          />
                        </div>
                      ))}
                      <div>
                        <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: 'var(--text-secondary)', marginBottom: 6 }}>Message (optional)</label>
                        <textarea
                          rows={4}
                          placeholder="Tell us about your use case..."
                          value={form.message}
                          onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                          style={{
                            width: '100%', padding: '10px 14px',
                            background: 'var(--bg)', border: '1px solid var(--border)',
                            borderRadius: 6, fontSize: 14, resize: 'vertical',
                            color: 'var(--text-primary)',
                            fontFamily: 'var(--font-body)',
                            outline: 'none', transition: 'border-color 0.2s',
                          }}
                          onFocus={e => e.target.style.borderColor = 'var(--border-strong)'}
                          onBlur={e => e.target.style.borderColor = 'var(--border)'}
                        />
                      </div>
                      <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                        Submit Request <ArrowRight size={14} />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </main>
  )
}