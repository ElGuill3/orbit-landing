import { lazy, Suspense } from "react";

const BlogIllustrationModule = lazy(() =>
  import("./blogIllustrations").then((mod) => ({
    default: mod.BlogIllustration,
  }))
);

function IllustrationPlaceholder() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: 200,
        background: "rgba(128,128,128,0.06)",
        borderRadius: 12,
      }}
    />
  );
}

export default function LazyBlogIllustration({ slug, isDark }) {
  return (
    <Suspense fallback={<IllustrationPlaceholder />}>
      <BlogIllustrationModule slug={slug} isDark={isDark} />
    </Suspense>
  );
}
