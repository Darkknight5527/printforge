import React, { useState } from 'react';
import { Star, Clock, Layers, ShoppingCart } from 'lucide-react';

export default function ProductCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart?.(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const tagColors = {
    bestseller: { bg: 'rgba(168,230,61,0.12)', color: '#A8E63D', label: 'Bestseller' },
    featured: { bg: 'rgba(228,184,45,0.12)', color: '#E4B82D', label: 'Featured' },
    popular: { bg: 'rgba(45,107,228,0.12)', color: '#6B9FE4', label: 'Popular' },
    customizable: { bg: 'rgba(168,230,61,0.08)', color: '#A8E63D', label: 'Customizable' },
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg-card)',
        border: `1px solid ${hovered ? 'var(--border-light)' : 'var(--border)'}`,
        borderRadius: 16,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 40px rgba(0,0,0,0.4)' : '0 2px 8px rgba(0,0,0,0.2)',
      }}
    >
      {/* Product visual area */}
      <div style={{
        height: 180,
        background: `linear-gradient(135deg, #141418 0%, #1E1E28 100%)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
        borderBottom: '1px solid var(--border)',
      }}>
        {/* Abstract 3D-ish shape using the product color */}
        <svg width="100" height="100" viewBox="0 0 100 100">
          <polygon points="50,15 85,32 85,68 50,85 15,68 15,32"
            fill="none" stroke={product.color} strokeWidth="1.5" opacity="0.3" />
          <polygon points="50,25 75,38 75,62 50,75 25,62 25,38"
            fill={product.color} opacity="0.08" stroke={product.color} strokeWidth="1" />
          <polygon points="50,35 65,44 65,56 50,65 35,56 35,44"
            fill={product.color} opacity="0.15" />
          <circle cx="50" cy="50" r="4" fill={product.color} opacity="0.9" />
          <line x1="50" y1="35" x2="50" y2="15" stroke={product.color} strokeWidth="1" opacity="0.4" />
          <line x1="65" y1="44" x2="85" y2="32" stroke={product.color} strokeWidth="1" opacity="0.4" />
          <line x1="65" y1="56" x2="85" y2="68" stroke={product.color} strokeWidth="1" opacity="0.4" />
        </svg>

        {/* Material badge */}
        <div style={{
          position: 'absolute', top: 12, left: 12,
          background: 'rgba(12,12,15,0.85)', backdropFilter: 'blur(8px)',
          borderRadius: 6, padding: '3px 8px',
          fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 11,
          color: 'var(--text-muted)', border: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', gap: 5,
        }}>
          <Layers size={10} color="var(--text-muted)" />
          {product.material}
        </div>

        {/* Tag */}
        {product.tags[0] && tagColors[product.tags[0]] && (
          <div style={{
            position: 'absolute', top: 12, right: 12,
            background: tagColors[product.tags[0]].bg,
            border: `1px solid ${tagColors[product.tags[0]].color}30`,
            borderRadius: 6, padding: '3px 8px',
            fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 11,
            color: tagColors[product.tags[0]].color,
          }}>
            {tagColors[product.tags[0]].label}
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '18px 18px 16px' }}>
        <div style={{ marginBottom: 6 }}>
          <span style={{ fontSize: 11, color: 'var(--text-subtle)', fontFamily: 'Space Grotesk', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {product.category}
          </span>
        </div>

        <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 16, color: 'var(--text)', marginBottom: 8, lineHeight: 1.3 }}>
          {product.name}
        </h3>
        <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: 14, minHeight: 36 }}>
          {product.description}
        </p>

        {/* Meta row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Star size={12} color="#E4B82D" fill="#E4B82D" />
            <span style={{ fontSize: 12, fontFamily: 'Space Grotesk', fontWeight: 600, color: 'var(--text)' }}>{product.rating}</span>
            <span style={{ fontSize: 11, color: 'var(--text-subtle)' }}>({product.reviews})</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Clock size={11} color="var(--text-subtle)" />
            <span style={{ fontSize: 11, color: 'var(--text-subtle)' }}>{product.time} print</span>
          </div>
        </div>

        {/* Price + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 20, color: 'var(--text)' }}>
              ₹{product.price}
            </span>
          </div>

          <button
            onClick={handleAdd}
            style={{
              background: added ? 'rgba(168,230,61,0.15)' : 'rgba(168,230,61,0.08)',
              border: `1px solid ${added ? 'var(--accent)' : 'rgba(168,230,61,0.2)'}`,
              borderRadius: 9, padding: '7px 14px',
              fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 12,
              color: 'var(--accent)', cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex', alignItems: 'center', gap: 6,
            }}
          >
            <ShoppingCart size={13} />
            {added ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
