import React, { createContext, useContext, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.about": "About",
      "nav.contact": "Contact",
      
      // Hero Section
      "hero.badge": "Professional Investigation Services",
      "hero.title": "Uncover the Truth in",
      "hero.title.highlight": "China",
      "hero.description": "Professional private investigation services for international clients. Specializing in relationship investigations, background checks, and corporate due diligence across China.",
      "hero.cta": "Free Consultation",
      "hero.cta.secondary": "View Services",
      "hero.stats.experience": "20+",
      "hero.stats.experience.label": "Years Experience",
      "hero.stats.cases": "2000+",
      "hero.stats.cases.label": "Cases Solved",
      "hero.stats.success": "95%",
      "hero.stats.success.label": "Success Rate",
      
      // Services
      "services.badge": "Our Expertise",
      "services.title": "Investigation Services",
      "services.subtitle": "Comprehensive private investigation services tailored for international clients operating in China.",
      
      "services.relationship.title": "Relationship Investigation",
      "services.relationship.desc": "Discreet investigation services for relationship verification, matrimonial background checks, and infidelity investigations. We help international clients verify relationships in China.",
      "services.relationship.keywords": "infidelity investigation, matrimonial investigation, relationship verification",
      
      "services.background.title": "Background Check",
      "services.background.desc": "Comprehensive background checks on individuals in China. Verify employment history, education credentials, criminal records, and personal references for peace of mind.",
      "services.background.keywords": "background check China, personal background investigation, credential verification",
      
      "services.business.title": "Business Investigation",
      "services.business.desc": "Corporate due diligence, supplier verification, and business partner background checks. Protect your business interests with thorough investigations in China.",
      "services.business.keywords": "business investigation, corporate due diligence, supplier verification China",
      
      "services.corporate.title": "Corporate Due Diligence",
      "services.corporate.desc": "In-depth corporate investigations including financial verification, legal compliance checks, and reputation analysis for companies operating in China.",
      "services.corporate.keywords": "corporate investigation China, due diligence services, company verification",
      
      "services.asset.title": "Asset Investigation",
      "services.asset.desc": "Locate and verify assets in China including property, bank accounts, and business holdings. Essential for legal proceedings and financial disputes.",
      "services.asset.keywords": "asset search China, asset investigation, financial investigation",
      
      "services.missing.title": "Locate Missing Persons",
      "services.missing.desc": "Professional people search services to locate missing persons, lost contacts, or family members in China. Discreet and effective.",
      "services.missing.keywords": "find person China, locate missing person, people search services",
      
      "services.cta": "View All Services",
      
      // Why Choose Us
      "why.badge": "Why Choose Us",
      "why.title": "Your Trusted Investigation Partner in China",
      "why.description": "With over 20 years of experience serving international clients, we combine local expertise with international standards to deliver reliable investigation results across China.",
      
      "why.experience.title": "20+ Years Experience",
      "why.experience.desc": "Over two decades serving international clients with complex investigations in China.",
      
      "why.confidential.title": "Absolute Confidentiality",
      "why.confidential.desc": "Strict privacy protocols and encrypted communications protect your sensitive information.",
      
      "why.fast.title": "Fast Results",
      "why.fast.desc": "Efficient investigation processes deliver actionable results within agreed timeframes.",
      
      "why.legal.title": "Legal Compliance",
      "why.legal.desc": "All investigations conducted within Chinese legal framework with admissible evidence.",
      
      "why.cta": "Contact Us Today",
      
      // CTA Section
      "cta.badge": "Get Started",
      "cta.title": "Ready to Uncover the Truth?",
      "cta.description": "Contact us today for a free, confidential consultation. Our experienced investigators are ready to assist you with your case in China.",
      "cta.button": "Start Free Consultation",
      
      // Contact
      "contact.title": "Contact Us",
      "contact.subtitle": "Get in Touch",
      "contact.description": "Contact us for a free consultation. All communications are strictly confidential.",
      
      "contact.hotline": "24/7 Hotline",
      "contact.email": "Email",
      "contact.office": "Office Locations",
      "contact.hours": "Business Hours",
      "contact.hours.value": "Mon-Sun: 9:00-21:00",
      "contact.privacy": "Privacy Commitment",
      "contact.privacy.value": "All client information is strictly confidential and protected by law.",
      
      "contact.office.beijing": "Beijing Office",
      "contact.office.beijing.address": "Chaoyang District, Beijing",
      
      "contact.office.shanghai": "Shanghai Office",
      "contact.office.shanghai.address": "Pudong New Area, Shanghai",
      
      "contact.office.guangzhou": "Guangzhou Office",
      "contact.office.guangzhou.address": "Tianhe District, Guangzhou",
      
      "contact.social": "Follow Us",
      
      // Footer
      "footer.brand": "Truth Detective Agency",
      "footer.brand.desc": "Professional, Confidential, Reliable Investigation Services",
      
      "footer.quick": "Quick Links",
      "footer.services.title": "Services",
      "footer.legal": "Legal",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Service",
      "footer.disclaimer": "Disclaimer",
      
      "footer.copyright": "© 2024 Truth Detective Agency. All rights reserved.",
      "footer.license": "Business License: 京ICP备XXXXXXXX号",
      
      // Common
      "common.learn_more": "Learn More",
      "common.contact_us": "Contact Us",
      "common.read_more": "Read More",
    }
  },
  zh: {
    translation: {
      // Navigation
      "nav.home": "首页",
      "nav.services": "服务项目",
      "nav.about": "关于我们",
      "nav.contact": "联系我们",
      
      // Hero Section
      "hero.badge": "专业调查服务",
      "hero.title": "在",
      "hero.title.highlight": "中国",
      "hero.title.suffix": "揭开真相",
      "hero.description": "为国际客户提供专业的私人调查服务。专注于关系调查、背景调查和企业尽职调查。",
      "hero.cta": "免费咨询",
      "hero.cta.secondary": "查看服务",
      "hero.stats.experience": "20+",
      "hero.stats.experience.label": "年经验",
      "hero.stats.cases": "2000+",
      "hero.stats.cases.label": "成功案例",
      "hero.stats.success": "95%",
      "hero.stats.success.label": "成功率",
      
      // Services
      "services.badge": "我们的专业领域",
      "services.title": "调查服务",
      "services.subtitle": "为在中国运营的国际客户量身定制的全面私人调查服务。",
      
      "services.relationship.title": "关系调查",
      "services.relationship.desc": "谨慎的关系验证、婚姻背景调查和不忠调查服务。帮助国际客户在中国验证关系。",
      "services.relationship.keywords": "不忠调查, 婚姻调查, 关系验证",
      
      "services.background.title": "背景调查",
      "services.background.desc": "对中国个人进行全面背景调查。验证就业历史、教育证书、犯罪记录和个人推荐，让您放心。",
      "services.background.keywords": "中国背景调查, 个人背景调查, 证书验证",
      
      "services.business.title": "商业调查",
      "services.business.desc": "企业尽职调查、供应商验证和商业伙伴背景调查。通过在中国的全面调查保护您的商业利益。",
      "services.business.keywords": "商业调查, 企业尽职调查, 中国供应商验证",
      
      "services.corporate.title": "企业尽职调查",
      "services.corporate.desc": "深入的企业调查，包括财务验证、法律合规性检查和在中国运营的公司声誉分析。",
      "services.corporate.keywords": "中国企业调查, 尽职调查服务, 公司验证",
      
      "services.asset.title": "资产调查",
      "services.asset.desc": "在中国定位和验证资产，包括房产、银行账户和商业持有。对法律诉讼和财务纠纷至关重要。",
      "services.asset.keywords": "中国资产搜索, 资产调查, 财务调查",
      
      "services.missing.title": "寻找失踪人员",
      "services.missing.desc": "专业的寻人服务，在中国定位失踪人员、失联联系人或家庭成员。谨慎且高效。",
      "services.missing.keywords": "在中国找人, 定位失踪人员, 寻人服务",
      
      "services.cta": "查看所有服务",
      
      // Why Choose Us
      "why.badge": "为什么选择我们",
      "why.title": "您在中国值得信赖的调查伙伴",
      "why.description": "拥有超过20年为国际客户服务的经验，我们结合当地专业知识和国际标准，在中国各地提供可靠的调查结果。",
      
      "why.experience.title": "20+年经验",
      "why.experience.desc": "二十多年为国际客户提供中国复杂调查服务。",
      
      "why.confidential.title": "绝对保密",
      "why.confidential.desc": "严格的隐私协议和加密通信保护您的敏感信息。",
      
      "why.fast.title": "快速结果",
      "why.fast.desc": "高效的调查流程在约定的时间内提供可行动的结果。",
      
      "why.legal.title": "法律合规",
      "why.legal.desc": "所有调查均在中国法律框架内进行，提供可接受的证据。",
      
      "why.cta": "立即联系我们",
      
      // CTA Section
      "cta.badge": "开始行动",
      "cta.title": "准备好揭开真相了吗？",
      "cta.description": "立即联系我们获取免费、保密的咨询。我们经验丰富的调查员随时准备帮助您处理在中国的案件。",
      "cta.button": "开始免费咨询",
      
      // Contact
      "contact.title": "联系我们",
      "contact.subtitle": "取得联系",
      "contact.description": "联系我们获取免费咨询。所有通信严格保密。",
      
      "contact.hotline": "24/7 热线",
      "contact.email": "电子邮件",
      "contact.office": "办公地点",
      "contact.hours": "营业时间",
      "contact.hours.value": "周一至周日：9:00-21:00",
      "contact.privacy": "隐私承诺",
      "contact.privacy.value": "所有客户信息严格保密，受法律保护。",
      
      "contact.office.beijing": "北京办公室",
      "contact.office.beijing.address": "北京市朝阳区",
      
      "contact.office.shanghai": "上海办公室",
      "contact.office.shanghai.address": "上海市浦东新区",
      
      "contact.office.guangzhou": "广州办公室",
      "contact.office.guangzhou.address": "广州市天河区",
      
      "contact.social": "关注我们",
      
      // Footer
      "footer.brand": "真相侦探社",
      "footer.brand.desc": "专业、保密、可靠的调查服务",
      
      "footer.quick": "快速链接",
      "footer.services.title": "服务项目",
      "footer.legal": "法律信息",
      "footer.privacy": "隐私政策",
      "footer.terms": "服务条款",
      "footer.disclaimer": "免责声明",
      
      "footer.copyright": "© 2024 真相侦探社。保留所有权利。",
      "footer.license": "营业执照：京ICP备XXXXXXXX号",
      
      // Common
      "common.learn_more": "了解更多",
      "common.contact_us": "联系我们",
      "common.read_more": "阅读更多",
    }
  }
};

// Detect browser language
const getBrowserLanguage = (): string => {
  const browserLang = navigator.language || (navigator as any).userLanguage;
  // If browser language starts with 'zh', use Chinese, otherwise use English
  return browserLang.toLowerCase().startsWith('zh') ? 'zh' : 'en';
};

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getBrowserLanguage(), // Auto-detect browser language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t, i18n } = useTranslation();

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language: i18n.language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
