import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Globe, AtSign, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: '#080809',
      borderTop: '1px solid var(--border)',
      padding: '60px 5% 32px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 32, height: 32, background: 'var(--accent)', borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Layers size={16} color="#0C0C0F" strokeWidth={2.5} />
              </div>
              <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 17, color: 'var(--text)' }}>
                Print<span style={{ color: 'var(--accent)' }}>Forge</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7, maxWidth: 240 }}>
              Professional 3D printing in Bangalore. Powered by Bambu Lab P1S — 256 mm³ build volume, multi-material capable.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {[Globe, AtSign, Mail].map((Icon, i) => (
                <div key={i} style={{
                  width: 36, height: 36, borderRadius: 8, border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                  background: 'var(--bg-card)', transition: 'border-color 0.2s',
                }}>
                  <Icon size={16} color="var(--text-muted)" />
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: 'Products', links: ['Catalog', 'Custom Order', 'Materials', 'Pricing'] },
            { title: 'Support', links: ['Track Order', 'FAQ', 'File Guidelines', 'Contact'] },
            { title: 'Company', links: ['About', 'Portfolio', 'Reviews', 'Blog'] },
          ].map(({ title, links }) => (
            <div key={title}>
              <h4 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 13, color: 'var(--text)', marginBottom: 16, letterSpacing: '0.5px', textTransform: 'uppercase' }}>{title}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map(link => (
                  <Link key={link} to="/" style={{
                    textDecoration: 'none', fontSize: 13, color: 'var(--text-muted)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                  >{link}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: '1px solid var(--border)', paddingTop: 24,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: 12, color: 'var(--text-subtle)' }}>© 2025 PrintForge. Bangalore, India.</p>
          <p style={{ fontSize: 12, color: 'var(--text-subtle)' }}>
            Printed on{' '}
            <span style={{ color: 'var(--accent)', fontFamily: 'Space Grotesk', fontWeight: 600 }}>Bambu Lab P1S</span>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
