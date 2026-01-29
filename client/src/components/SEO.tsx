import { Helmet } from "react-helmet-async";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const SITE_URL = "https://www.spy007.top";

// Default SEO content by language
const DEFAULT_SEO = {
  en: {
    title: "China Private Investigator | Professional Detective Agency",
    description: "Trusted China private investigator with 20+ years experience. Expert relationship investigations, background checks & corporate due diligence for international clients. Free consultation.",
    keywords: "private investigator China, China detective agency, background check China, relationship investigation China, business investigation China, corporate investigation China",
  },
  zh: {
    title: "中国私人侦探 | 专业调查机构",
    description: "值得信赖的中国私人侦探，拥有20多年经验。为国际客户提供专业的关系调查、背景调查和企业尽职调查服务。免费咨询。",
    keywords: "中国私人侦探, 中国侦探社, 中国背景调查, 关系调查, 商业调查, 企业调查",
  }
};

export default function SEO({
  title,
  description,
  keywords,
  ogImage,
}: SEOProps) {
  const [location] = useLocation();
  const { language } = useLanguage();
  
  // Construct canonical URL
  const canonicalUrl = `${SITE_URL}${location}`;
  
  // Get language-specific defaults
  const defaults = DEFAULT_SEO[language as keyof typeof DEFAULT_SEO] || DEFAULT_SEO.en;
  
  // Use provided values or language-specific defaults
  const pageTitle = title || defaults.title;
  const pageDescription = description || defaults.description;
  const pageKeywords = keywords || defaults.keywords;
  const pageImage = ogImage || `${SITE_URL}/images/og-image.jpg`;
  
  // Determine content language code
  const contentLang = language === 'zh' ? 'zh-CN' : 'en';
  const alternateLang = language === 'zh' ? 'en' : 'zh-CN';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />

      {/* Canonical URL - Critical for SEO */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang for multilingual SEO */}
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="zh-CN" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:locale" content={contentLang} />
      <meta property="og:locale:alternate" content={alternateLang} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={pageImage} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="content-language" content={contentLang} />
      <meta name="language" content={contentLang} />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="China Detective Agency" />
    </Helmet>
  );
}
