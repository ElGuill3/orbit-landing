import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

const PAGE_CONFIG = {
  home: {
    title: 'Orbit',
    subtitle: 'Prediction Markets Infrastructure for LATAM',
    desc: 'Quantitative capital and risk systems for event-based markets',
  },
  pitch: {
    title: 'Orbit',
    subtitle: 'Pitch Comercial 2026',
    desc: 'Building the prediction markets infrastructure for LATAM',
  },
  capital: {
    title: 'Orbit Capital',
    subtitle: 'Quant Hedge Fund',
    desc: 'The first quant hedge fund focused on prediction markets in Latin America',
  },
  risk: {
    title: 'Orbit Risk',
    subtitle: 'B2B Coverage',
    desc: 'Enterprise coverage powered by prediction markets',
  },
  intel: {
    title: 'Orbit Intelligence',
    subtitle: 'Internal Infrastructure',
    desc: 'Knowledge Graph + 13 AI agents powering Capital and Risk',
  },
  team: {
    title: 'Orbit',
    subtitle: 'Founding Team',
    desc: 'Four founders, one mission',
  },
  blog: { title: 'Orbit', subtitle: 'Blog', desc: 'Research and analysis' },
  agents: { title: 'Orbit', subtitle: '13 AI Agents', desc: 'Autonomous trading agents operating 24/7' },
  whitepaper: { title: 'Orbit', subtitle: 'Whitepaper', desc: 'Investment thesis and technical architecture' },
};

export default function handler(req) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get('page') || 'home';
  const config = PAGE_CONFIG[page] || PAGE_CONFIG.home;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0A0A',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle orbital decoration */}
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          <ellipse cx="600" cy="315" rx="400" ry="200" fill="none" stroke="#333333" strokeWidth="0.8" opacity="0.4" />
          <ellipse cx="600" cy="315" rx="280" ry="140" fill="none" stroke="#333333" strokeWidth="0.6" opacity="0.3" />
          <circle cx="250" cy="200" r="4" fill="#EF4444" opacity="0.5" />
          <circle cx="900" cy="280" r="3" fill="#3B82F6" opacity="0.4" />
          <circle cx="450" cy="150" r="3.5" fill="#2DD4A8" opacity="0.5" />
          <circle cx="750" cy="480" r="3" fill="#8B5CF6" opacity="0.4" />
        </svg>

        {/* Title */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.03em',
            display: 'flex',
            marginBottom: '16px',
          }}
        >
          {config.title}
        </div>

        {/* Subtitle badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(45,212,168,0.1)',
            borderRadius: '9999px',
            padding: '10px 28px',
            border: '1px solid rgba(45,212,168,0.2)',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#2DD4A8',
              letterSpacing: '0.06em',
              display: 'flex',
            }}
          >
            {config.subtitle}
          </div>
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '18px',
            color: '#888888',
            display: 'flex',
            maxWidth: '600px',
            textAlign: 'center',
          }}
        >
          {config.desc}
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            fontSize: '14px',
            color: '#555555',
            letterSpacing: '0.05em',
            display: 'flex',
          }}
        >
          orbitcapital.ai
        </div>

        {/* Confidential badge for pitch */}
        {page === 'pitch' && (
          <div
            style={{
              position: 'absolute',
              top: '32px',
              right: '40px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(239,68,68,0.1)',
              border: '1px solid rgba(239,68,68,0.3)',
              borderRadius: '6px',
              padding: '6px 14px',
              fontSize: '11px',
              fontWeight: 700,
              color: '#EF4444',
              letterSpacing: '0.12em',
            }}
          >
            CONFIDENCIAL 2026
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
