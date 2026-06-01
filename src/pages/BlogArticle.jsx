import { useMemo, useState, useEffect, useRef, useCallback } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { useTheme, ACCENTS } from "../shared/theme";
import { createStyles } from "../shared/styles";
import { SvgIcon, FadeIn } from "../shared/components";
import { useLang } from "../shared/i18n";
import { getArticleBySlug, articles } from "../shared/blogData";
import { BlogIllustration } from "../shared/blogIllustrations";

/* ── Blog Article SEO ── */
function useBlogArticleSEO(article) {
  useEffect(() => {
    if (!article) return;
    const BASE_URL = "https://orbitcapital.ai";
    const url = `${BASE_URL}/blog/${article.slug}`;
    const title = `${article.title} | Blog Orbit`;
    const description = article.metaDescription || article.excerpt.slice(0, 155);
    const ogImage = `${BASE_URL}/og-image.png`;

    document.title = title;

    const setMeta = (attr, attrVal, content) => {
      let el = document.querySelector(`meta[${attr}="${attrVal}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, attrVal); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    const setLink = (rel, href, attrs = {}) => {
      const sel = Object.entries(attrs).map(([k,v]) => `[${k}="${v}"]`).join("");
      let el = document.querySelector(`link[rel="${rel}"]${sel}`);
      if (!el) { el = document.createElement("link"); el.setAttribute("rel", rel); Object.entries(attrs).forEach(([k,v]) => el.setAttribute(k,v)); document.head.appendChild(el); }
      el.setAttribute("href", href);
    };

    setMeta("name", "description", description);
    setLink("canonical", url);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", "article");
    setMeta("property", "og:image", ogImage);
    setMeta("property", "article:published_time", article.publishedAt);
    setMeta("property", "article:author", article.author.name);
    setMeta("property", "article:section", article.category);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);

    // Article JSON-LD
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: description,
      datePublished: article.publishedAt,
      dateModified: article.publishedAt,
      image: ogImage,
      author: { "@type": "Person", name: article.author.name, jobTitle: article.author.role },
      publisher: { "@type": "Organization", name: "Orbit Capital + Intelligence", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/favicon-512.png` } },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      inLanguage: "es",
      keywords: article.tags?.join(", "),
    };
    const id = "orbit-jsonld";
    let el = document.getElementById(id);
    if (!el) { el = document.createElement("script"); el.id = id; el.type = "application/ld+json"; document.head.appendChild(el); }
    el.textContent = JSON.stringify(jsonLd);

    // BreadcrumbList: Home > Blog > Article
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
      ],
    };
    const bcId = "orbit-jsonld-breadcrumb";
    let bcEl = document.getElementById(bcId);
    if (!bcEl) { bcEl = document.createElement("script"); bcEl.id = bcId; bcEl.type = "application/ld+json"; document.head.appendChild(bcEl); }
    bcEl.textContent = JSON.stringify(breadcrumb);
  }, [article]);
}

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

/* ── Table of Contents (sticky sidebar) ── */
function TableOfContents({ toc, activeId, accent, t, isDark }) {
  const handleClick = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 100,
        maxHeight: "calc(100vh - 140px)",
        overflowY: "auto",
        paddingRight: 16,
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: t.textDim,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: 16,
        }}
      >
        Contenido
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {toc.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              style={{
                display: "block",
                fontSize: 13,
                fontWeight: isActive ? 600 : 400,
                color: isActive ? accent : t.textDim,
                textDecoration: "none",
                padding: "6px 0 6px " + (item.level === 3 ? "16px" : "0"),
                borderLeft: `2px solid ${isActive ? accent : "transparent"}`,
                paddingLeft: item.level === 3 ? 16 : 12,
                transition: "all 0.2s ease",
                lineHeight: 1.4,
              }}
            >
              {item.title}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

/* ── Author Card ── */
function AuthorCard({ author, accent, t, isDark }) {
  return (
    <div
      style={{
        background: isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.55)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.60)"}`,
        borderRadius: 20,
        padding: "28px 24px",
        boxShadow: isDark
          ? "0 4px 16px rgba(0,0,0,0.35)"
          : "0 4px 16px rgba(0,0,0,0.05)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${accent}50, ${accent}20)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            fontWeight: 800,
            color: accent,
            flexShrink: 0,
          }}
        >
          {author.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div>
          <div style={{ fontSize: 16, fontWeight: 700, color: t.heading }}>{author.name}</div>
          <div style={{ fontSize: 13, color: accent, fontWeight: 500 }}>{author.role}</div>
        </div>
      </div>
      <p
        style={{
          fontSize: 13,
          color: t.textMuted,
          lineHeight: 1.65,
          margin: "0 0 16px",
        }}
      >
        {author.bio}
      </p>
      <div style={{ display: "flex", gap: 10 }}>
        {author.social?.twitter && (
          <a
            href={author.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 36,
              height: 36,
              borderRadius: 10,
              background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
              border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
              transition: "all 0.2s ease",
            }}
          >
            <SvgIcon name="x" size={15} color={t.textDim} />
          </a>
        )}
        {author.social?.linkedin && (
          <a
            href={author.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 36,
              height: 36,
              borderRadius: 10,
              background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
              border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
              transition: "all 0.2s ease",
            }}
          >
            <SvgIcon name="linkedin" size={15} color={t.textDim} />
          </a>
        )}
      </div>
    </div>
  );
}

/* ── Content Block Renderer ── */
function ContentRenderer({ content, references, accent, t, isDark }) {
  const renderInlineRefs = (text) => {
    if (!text) return text;
    // Split on [n] references and plain URLs (https://...)
    return text.split(/(\[\d+\]|https?:\/\/[^\s),]+)/).map((part, i) => {
      const refMatch = part.match(/^\[(\d+)\]$/);
      if (refMatch) {
        const num = parseInt(refMatch[1]);
        return (
          <sup key={i}>
            <a
              href={`#ref-${num}`}
              style={{
                color: accent,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.75em",
                marginLeft: 1,
              }}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(`ref-${num}`);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "center" });
                  el.style.background = `${accent}15`;
                  setTimeout(() => (el.style.background = ""), 2000);
                }
              }}
            >
              [{num}]
            </a>
          </sup>
        );
      }
      // Convert plain URLs to clickable links
      if (/^https?:\/\//.test(part)) {
        const isInternal = part.includes("orbitcapital.ai");
        const internalPath = isInternal ? part.replace(/https?:\/\/orbitcapital\.ai/, "") : null;
        if (isInternal && internalPath) {
          return <Link key={i} to={internalPath} style={{ color: accent, textDecoration: "underline", fontWeight: 500 }}>{part}</Link>;
        }
        return <a key={i} href={part} target="_blank" rel="noopener noreferrer" style={{ color: accent, textDecoration: "underline", fontWeight: 500 }}>{part}</a>;
      }
      return part;
    });
  };

  return (
    <div>
      {content.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={i}
                style={{
                  fontSize: 16,
                  color: t.text,
                  lineHeight: 1.85,
                  margin: "0 0 24px",
                  letterSpacing: "-0.005em",
                }}
              >
                {renderInlineRefs(block.text)}
              </p>
            );

          case "heading":
            const HeadingTag = block.level === 2 ? "h2" : "h3";
            return (
              <HeadingTag
                key={i}
                id={block.id}
                style={{
                  fontSize: block.level === 2 ? 28 : 22,
                  fontWeight: block.level === 2 ? 800 : 700,
                  color: t.heading,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.25,
                  margin: block.level === 2 ? "48px 0 20px" : "36px 0 16px",
                  scrollMarginTop: 100,
                }}
              >
                {block.text}
              </HeadingTag>
            );

          case "quote":
            return (
              <blockquote
                key={i}
                style={{
                  borderLeft: `3px solid ${accent}`,
                  margin: "32px 0",
                  padding: "20px 24px",
                  background: isDark ? `${accent}08` : `${accent}06`,
                  borderRadius: "0 14px 14px 0",
                }}
              >
                <p
                  style={{
                    fontSize: 17,
                    color: t.heading,
                    fontStyle: "italic",
                    lineHeight: 1.7,
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  "{renderInlineRefs(block.text)}"
                </p>
                {block.author && (
                  <div
                    style={{
                      fontSize: 13,
                      color: accent,
                      fontWeight: 600,
                      marginTop: 12,
                    }}
                  >
                    — {block.author}
                  </div>
                )}
              </blockquote>
            );

          case "list":
            return (
              <ul
                key={i}
                style={{
                  margin: "0 0 28px",
                  paddingLeft: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: 15,
                      color: t.text,
                      lineHeight: 1.75,
                    }}
                  >
                    {renderInlineRefs(item)}
                  </li>
                ))}
              </ul>
            );

          case "callout": {
            const calloutAccent =
              block.variant === "intel"
                ? ACCENTS.intel[isDark ? "dark" : "light"]
                : block.variant === "risk"
                ? ACCENTS.risk[isDark ? "dark" : "light"]
                : block.variant === "capital"
                ? ACCENTS.capital[isDark ? "dark" : "light"]
                : accent;
            return (
              <div
                key={i}
                style={{
                  background: isDark
                    ? `${calloutAccent}10`
                    : `${calloutAccent}08`,
                  border: `1px solid ${calloutAccent}25`,
                  borderRadius: 16,
                  padding: "24px 28px",
                  margin: "32px 0",
                }}
              >
                {block.title && (
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: calloutAccent,
                      marginBottom: 8,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <SvgIcon
                      name={
                        block.variant === "risk"
                          ? "shield"
                          : block.variant === "capital"
                          ? "chart"
                          : "cpu"
                      }
                      size={16}
                      color={calloutAccent}
                    />
                    {block.title}
                  </div>
                )}
                <p
                  style={{
                    fontSize: 14,
                    color: t.textMuted,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {renderInlineRefs(block.text)}
                </p>
              </div>
            );
          }

          case "stat":
            return (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(auto-fit, minmax(140px, 1fr))`,
                  gap: 16,
                  margin: "32px 0",
                }}
              >
                {block.items.map((s, j) => (
                  <div
                    key={j}
                    style={{
                      textAlign: "center",
                      padding: "20px 16px",
                      background: isDark
                        ? "rgba(255,255,255,0.03)"
                        : "rgba(255,255,255,0.55)",
                      border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
                      borderRadius: 14,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 28,
                        fontWeight: 800,
                        color: accent,
                        lineHeight: 1.1,
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: t.textMuted,
                        marginTop: 6,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            );

          case "divider":
            return (
              <hr
                key={i}
                style={{
                  border: "none",
                  borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
                  margin: "40px 0",
                }}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

/* ── References Section ── */
function ReferencesSection({ references, accent, t, isDark }) {
  if (!references?.length) return null;
  return (
    <div
      style={{
        marginTop: 56,
        paddingTop: 32,
        borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
      }}
    >
      <h3
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: t.heading,
          marginBottom: 20,
        }}
      >
        Referencias y Fuentes
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {references.map((ref) => (
          <div
            key={ref.num}
            id={`ref-${ref.num}`}
            style={{
              display: "flex",
              gap: 10,
              fontSize: 13,
              lineHeight: 1.6,
              padding: "8px 12px",
              borderRadius: 10,
              transition: "background 0.3s ease",
            }}
          >
            <span
              style={{
                color: accent,
                fontWeight: 700,
                minWidth: 28,
                flexShrink: 0,
              }}
            >
              [{ref.num}]
            </span>
            <span style={{ color: t.textMuted }}>
              {ref.text}
              {ref.url && (
                <>
                  {" "}
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: accent,
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                  >
                    ↗
                  </a>
                </>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Related Articles ── */
function RelatedArticles({ slugs, isDark, t, lang }) {
  const related = slugs
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter(Boolean);
  if (!related.length) return null;
  const mode = isDark ? "dark" : "light";

  return (
    <div style={{ marginTop: 64 }}>
      <h3
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: t.heading,
          marginBottom: 24,
        }}
      >
        Art&iacute;culos relacionados
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        {related.map((article) => {
          const cat = CATEGORY_META[article.category];
          const accent = cat.color(mode);
          return (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="card-hover"
              style={{
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
                background: isDark
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(255,255,255,0.55)",
                border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.60)"}`,
                borderRadius: 16,
                padding: "24px 20px",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: accent,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                {cat.label}
              </div>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: t.heading,
                  lineHeight: 1.3,
                  marginBottom: 8,
                }}
              >
                {article.title}
              </div>
              <div
                style={{ fontSize: 13, color: t.textDim }}
              >
                {formatDate(article.publishedAt, lang)} &middot; {article.readTime}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/* ── Main Article Page ── */
export default function BlogArticle() {
  const { slug } = useParams();
  const { mode, t } = useTheme();
  const { S } = useMemo(() => createStyles(t), [t]);
  const isDark = mode === "dark";
  const { lang } = useLang();

  const article = getArticleBySlug(slug);
  useBlogArticleSEO(article);
  const [activeId, setActiveId] = useState("");
  const observerRef = useRef(null);

  // Intersection observer for TOC highlighting
  useEffect(() => {
    if (!article) return;
    const headings = article.toc.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (!headings.length) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    headings.forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, [article, slug]);

  if (!article) return <Navigate to="/blog" replace />;

  const cat = CATEGORY_META[article.category];
  const accent = cat.color(mode);

  return (
    <div style={{ overflowX: "hidden" }}>
      {/* Article Header */}
      <section
        style={{
          paddingTop: 120,
          paddingBottom: 48,
          background: t.bgAlt,
          transition: "background 0.4s",
        }}
      >
        <div style={{ ...S.container, maxWidth: 1180 }}>
          <FadeIn>
            {/* Breadcrumb */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                color: t.textDim,
                marginBottom: 28,
              }}
            >
              <Link
                to="/blog"
                className="nav-link"
                style={{ color: t.textDim, textDecoration: "none" }}
              >
                Blog
              </Link>
              <span>/</span>
              <span style={{ color: accent }}>{cat.label}</span>
            </div>

            {/* Category badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: isDark ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.85)",
                backdropFilter: "blur(12px)",
                borderRadius: 10,
                padding: "7px 16px",
                fontSize: 12,
                fontWeight: 700,
                color: accent,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 20,
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

            {/* Title */}
            <h1
              style={{
                fontSize: "clamp(30px, 4.5vw, 48px)",
                fontWeight: 800,
                color: t.heading,
                letterSpacing: "-0.035em",
                lineHeight: 1.15,
                margin: "0 0 16px",
                maxWidth: 800,
              }}
            >
              {article.title}
            </h1>
            <p
              style={{
                fontSize: 19,
                color: t.textMuted,
                lineHeight: 1.6,
                maxWidth: 680,
                margin: "0 0 32px",
              }}
            >
              {article.subtitle}
            </p>

            {/* Author + date row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${accent}50, ${accent}20)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 800,
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
                  <div style={{ fontSize: 15, fontWeight: 600, color: t.heading }}>
                    {article.author.name}
                  </div>
                  <div style={{ fontSize: 13, color: t.textDim }}>
                    {article.author.role}
                  </div>
                </div>
              </div>
              <div
                style={{
                  height: 20,
                  width: 1,
                  background: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)",
                }}
              />
              <div style={{ fontSize: 13, color: t.textDim }}>
                {formatDate(article.publishedAt, lang)}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: t.textDim,
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <SvgIcon name="clock" size={14} color={t.textDim} />
                {article.readTime}
              </div>
            </div>

            {/* Tags */}
            {article.tags?.length > 0 && (
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  marginTop: 20,
                }}
              >
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: t.textDim,
                      background: isDark
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(0,0,0,0.04)",
                      borderRadius: 6,
                      padding: "4px 10px",
                      letterSpacing: "0.02em",
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </FadeIn>
        </div>
      </section>

      {/* Article Cover Illustration */}
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 24px",
          transform: "translateY(-24px)",
        }}
      >
        <div
          style={{
            borderRadius: 20,
            overflow: "hidden",
            border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
            boxShadow: isDark
              ? "0 8px 32px rgba(0,0,0,0.4)"
              : "0 8px 32px rgba(0,0,0,0.08)",
          }}
        >
          <BlogIllustration slug={article.slug} isDark={isDark} />
        </div>
      </div>

      {/* Article Body — 3-column layout */}
      <section style={{ padding: "24px 0 100px" }}>
        <div
          style={{
            ...S.container,
            maxWidth: 1180,
            display: "grid",
            gridTemplateColumns: "220px 1fr 280px",
            gap: 48,
            alignItems: "flex-start",
          }}
          className="article-grid"
        >
          {/* Left: TOC */}
          <aside className="toc-sidebar">
            <TableOfContents
              toc={article.toc}
              activeId={activeId}
              accent={accent}
              t={t}
              isDark={isDark}
            />
          </aside>

          {/* Center: Content */}
          <article style={{ minWidth: 0, maxWidth: 700 }}>
            <ContentRenderer
              content={article.content}
              references={article.references}
              accent={accent}
              t={t}
              isDark={isDark}
            />
            <ReferencesSection
              references={article.references}
              accent={accent}
              t={t}
              isDark={isDark}
            />
            <RelatedArticles
              slugs={article.relatedSlugs || []}
              isDark={isDark}
              t={t}
              lang={lang}
            />
          </article>

          {/* Right: Author Card */}
          <aside className="author-sidebar">
            <div style={{ position: "sticky", top: 100 }}>
              <AuthorCard
                author={article.author}
                accent={accent}
                t={t}
                isDark={isDark}
              />

              {/* Share section */}
              <div
                style={{
                  marginTop: 20,
                  background: isDark
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(255,255,255,0.55)",
                  border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.60)"}`,
                  borderRadius: 16,
                  padding: "20px 20px",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: t.textDim,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: 14,
                  }}
                >
                  Compartir
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  {[
                    {
                      icon: "x",
                      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://orbitcapital.ai/blog/${article.slug}`)}`,
                    },
                    {
                      icon: "linkedin",
                      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://orbitcapital.ai/blog/${article.slug}`)}`,
                    },
                  ].map((s) => (
                    <a
                      key={s.icon}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: isDark
                          ? "rgba(255,255,255,0.06)"
                          : "rgba(0,0,0,0.04)",
                        border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
                        transition: "all 0.2s ease",
                      }}
                    >
                      <SvgIcon name={s.icon} size={16} color={t.textDim} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Back to blog */}
      <section
        style={{
          padding: "40px 0 80px",
          borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"}`,
        }}
      >
        <div style={{ ...S.container, textAlign: "center" }}>
          <Link
            to="/blog"
            className="nav-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 15,
              fontWeight: 600,
              color: accent,
              textDecoration: "none",
            }}
          >
            <span style={{ fontSize: 18 }}>&larr;</span>
            Volver al Blog
          </Link>
        </div>
      </section>

      {/* Responsive */}
      <style>{`
        .toc-sidebar {
          align-self: start;
        }
        .author-sidebar {
          align-self: start;
        }
        @media (max-width: 1024px) {
          .article-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .toc-sidebar {
            display: none !important;
          }
          .author-sidebar {
            order: -1;
            align-self: auto;
          }
        }
        @media (max-width: 768px) {
          .author-sidebar {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
