import { useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme, ACCENTS } from "../shared/theme";
import { createStyles } from "../shared/styles";
import { SvgIcon, FadeIn } from "../shared/components";
import { useLang } from "../shared/i18n";
import { articles } from "../shared/blogData";
import LazyBlogIllustration from "../shared/LazyBlogIllustration";

const CATEGORY_META = {
  intel: { label: "Intel", color: (m) => ACCENTS.intel[m] },
  risk: { label: "Risk", color: (m) => ACCENTS.risk[m] },
  capital: { label: "Capital", color: (m) => ACCENTS.capital[m] },
  education: { label: "Education", color: (m) => ACCENTS.intel[m] },
};

function formatDate(dateStr, lang) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString(lang === "es" ? "es-MX" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ArticleCard({ article, isDark, t, lang, delay }) {
  const cat = CATEGORY_META[article.category];
  const accent = cat.color(isDark ? "dark" : "light");

  return (
    <FadeIn delay={delay} direction="up">
      <Link
        to={`/blog/${article.slug}`}
        className="card-hover"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          textDecoration: "none",
          background: isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.55)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.60)"}`,
          borderRadius: 20,
          overflow: "hidden",
          transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
          boxShadow: isDark
            ? "0 4px 16px rgba(0,0,0,0.35)"
            : "0 4px 16px rgba(0,0,0,0.05)",
        }}
      >
        {/* Cover illustration */}
        <div
          style={{
            height: 200,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <LazyBlogIllustration slug={article.slug} isDark={isDark} />
          <div
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: isDark ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.85)",
              backdropFilter: "blur(12px)",
              borderRadius: 8,
              padding: "5px 12px",
              fontSize: 11,
              fontWeight: 700,
              color: accent,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: accent,
              }}
            />
            {cat.label}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
          <h3
            style={{
              fontSize: 20,
              fontWeight: 800,
              color: t.heading,
              letterSpacing: "-0.02em",
              lineHeight: 1.3,
              margin: "0 0 10px",
            }}
          >
            {article.title}
          </h3>
          <p
            style={{
              fontSize: 14,
              color: t.textMuted,
              lineHeight: 1.7,
              margin: "0 0 20px",
              flex: 1,
            }}
          >
            {article.excerpt}
          </p>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"}`,
              paddingTop: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${accent}40, ${accent}20)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: 700,
                  color: accent,
                }}
              >
                {article.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: t.heading }}>
                  {article.author.name}
                </div>
                <div style={{ fontSize: 11, color: t.textDim }}>
                  {formatDate(article.publishedAt, lang)}
                </div>
              </div>
            </div>
            <div
              style={{
                fontSize: 12,
                color: t.textDim,
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <SvgIcon name="clock" size={13} color={t.textDim} />
              {article.readTime}
            </div>
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}

function FeaturedArticle({ article, isDark, t, lang }) {
  const cat = CATEGORY_META[article.category];
  const accent = cat.color(isDark ? "dark" : "light");

  return (
    <FadeIn>
      <Link
        to={`/blog/${article.slug}`}
        className="card-hover"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          textDecoration: "none",
          background: isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.55)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.60)"}`,
          borderRadius: 24,
          overflow: "hidden",
          transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
          boxShadow: isDark
            ? "0 8px 32px rgba(0,0,0,0.4)"
            : "0 8px 32px rgba(0,0,0,0.06)",
        }}
      >
        {/* Cover */}
        <div
          className="featured-cover"
          style={{
            minHeight: 340,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", inset: 0 }}>
            <LazyBlogIllustration slug={article.slug} isDark={isDark} />
          </div>
          <div
            style={{
              position: "absolute",
              top: 24,
              left: 24,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: isDark ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.85)",
              backdropFilter: "blur(12px)",
              borderRadius: 10,
              padding: "7px 16px",
              fontSize: 12,
              fontWeight: 700,
              color: accent,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: accent,
              }}
            />
            {cat.label}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: accent,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Destacado
          </div>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 800,
              color: t.heading,
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              margin: "0 0 12px",
            }}
          >
            {article.title}
          </h2>
          <p
            style={{
              fontSize: 15,
              color: t.textMuted,
              lineHeight: 1.7,
              margin: "0 0 24px",
            }}
          >
            {article.subtitle}
          </p>

          {/* Author + meta */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${accent}40, ${accent}20)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 700,
                color: accent,
              }}
            >
              {article.author.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: t.heading }}>
                {article.author.name}
              </div>
              <div style={{ fontSize: 12, color: t.textDim }}>
                {formatDate(article.publishedAt, lang)} &middot; {article.readTime}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}

export default function Blog() {
  const { mode, t } = useTheme();
  const { S } = useMemo(() => createStyles(t), [t]);
  const isDark = mode === "dark";
  const { lang } = useLang();

  // Inject ItemList structured data for all blog articles
  useEffect(() => {
    const BASE_URL = "https://orbitcapital.ai";
    const itemList = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: articles.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${BASE_URL}/blog/${a.slug}`,
        name: a.title,
      })),
    };
    const id = "orbit-jsonld-itemlist";
    let el = document.getElementById(id);
    if (!el) { el = document.createElement("script"); el.id = id; el.type = "application/ld+json"; document.head.appendChild(el); }
    el.textContent = JSON.stringify(itemList);
    return () => { document.getElementById(id)?.remove(); };
  }, []);

  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <div style={{ overflowX: "hidden" }}>
      {/* Hero */}
      <section
        style={{
          paddingTop: 140,
          paddingBottom: 60,
          background: t.bgAlt,
          transition: "background 0.4s",
        }}
      >
        <div style={S.container}>
          <FadeIn>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 12,
                fontWeight: 700,
                color: t.accent,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              <SvgIcon name="brain" size={16} color={t.accent} />
              Blog
            </div>
            <h1
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 800,
                color: t.heading,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                margin: "0 0 16px",
                maxWidth: 700,
              }}
            >
              Ideas, Investigaci&oacute;n y An&aacute;lisis
            </h1>
            <p
              style={{
                fontSize: 18,
                color: t.textMuted,
                lineHeight: 1.7,
                maxWidth: 580,
                margin: 0,
              }}
            >
              Exploramos el mundo de los mercados de predicci&oacute;n, la
              inteligencia de datos y la gesti&oacute;n cuantitativa de riesgos
              para Am&eacute;rica Latina.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured */}
      <section style={{ padding: "60px 0 40px" }}>
        <div style={S.container}>
          <FeaturedArticle
            article={featured}
            isDark={isDark}
            t={t}
            lang={lang}
          />
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: "20px 0 100px" }}>
        <div style={S.container}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 28,
            }}
          >
            {rest.map((article, i) => (
              <ArticleCard
                key={article.slug}
                article={article}
                isDark={isDark}
                t={t}
                lang={lang}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .featured-cover { min-height: 200px !important; }
          .card-hover[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
