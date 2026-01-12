import { Helmet } from "react-helmet-async";
import { useLocation } from "wouter";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const SITE_URL = "https://www.spy007.top";
const DEFAULT_TITLE = "China Private Investigator | Professional Detective Agency";
const DEFAULT_DESCRIPTION = "Professional private investigation services in China for international clients. Specializing in relationship investigations, background checks, business due diligence, and corporate investigations.";
const DEFAULT_KEYWORDS = "private investigator China, China detective agency, background check China, relationship investigation China, business investigation China, corporate investigation China";

export default function SEO({
  title,
  description,
  keywords,
  ogImage,
}: SEOProps) {
  const [location] = useLocation();
  
  // Construct canonical URL
  const canonicalUrl = `${SITE_URL}${location}`;
  
  // Use provided values or defaults
  const pageTitle = title || DEFAULT_TITLE;
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const pageKeywords = keywords || DEFAULT_KEYWORDS;
  const pageImage = ogImage || `${SITE_URL}/images/og-image.jpg`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />

      {/* Canonical URL - Critical for SEO */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={pageImage} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="China Detective Agency" />
    </Helmet>
  );
}
