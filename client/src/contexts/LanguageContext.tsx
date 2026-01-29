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
      "services.relationship.desc": "Comprehensive relationship investigation services for international clients concerned about relationships in China. Our discreet investigators provide evidence-based reports on relationship verification, matrimonial background checks, and infidelity investigations.",
      "services.relationship.keywords": "infidelity investigation, matrimonial investigation, relationship verification",
      "services.relationship.features": [
        "Matrimonial background verification",
        "Infidelity and cheating investigation",
        "Pre-marital background checks",
        "Relationship history verification",
        "Dating scam investigation",
        "Evidence collection and documentation"
      ],
      
      "services.background.title": "Background Check Services",
      "services.background.desc": "Professional background check services in China for individuals and businesses. We verify employment history, education credentials, criminal records, and personal references to help you make informed decisions.",
      "services.background.keywords": "background check China, personal background investigation, credential verification",
      "services.background.features": [
        "Employment history verification",
        "Education credential checks",
        "Criminal record searches",
        "Personal reference verification",
        "Identity verification",
        "Social media investigation"
      ],
      
      "services.business.title": "Business Investigation",
      "services.business.desc": "Protect your business interests with comprehensive business investigation services in China. We conduct supplier verification, business partner background checks, and commercial fraud investigations.",
      "services.business.keywords": "business investigation, corporate due diligence, supplier verification China",
      "services.business.features": [
        "Supplier verification and factory audits",
        "Business partner background checks",
        "Commercial fraud investigation",
        "Competitor intelligence",
        "Market research and analysis",
        "Trade secret protection"
      ],
      
      "services.corporate.title": "Corporate Due Diligence",
      "services.corporate.desc": "In-depth corporate due diligence services for companies operating in or entering the Chinese market. We provide comprehensive reports on financial status, legal compliance, and business reputation.",
      "services.corporate.keywords": "corporate investigation China, due diligence services, company verification",
      "services.corporate.features": [
        "Financial verification and analysis",
        "Legal compliance checks",
        "Corporate structure investigation",
        "Reputation and market standing",
        "Litigation and dispute history",
        "Management background checks"
      ],
      
      "services.asset.title": "Asset Investigation",
      "services.asset.desc": "Locate and verify assets in China including property, bank accounts, and business holdings. Essential for legal proceedings, divorce cases, and financial disputes.",
      "services.asset.keywords": "asset search China, asset investigation, financial investigation",
      "services.asset.features": [
        "Property and real estate searches",
        "Bank account investigation",
        "Business asset verification",
        "Hidden asset discovery",
        "Asset valuation assistance",
        "Legal evidence collection"
      ],
      
      "services.missing.title": "Locate Missing Persons",
      "services.missing.desc": "Professional people search services to locate missing persons, lost contacts, or family members in China. We use advanced investigation techniques to find individuals discreetly and efficiently.",
      "services.missing.keywords": "find person China, locate missing person, people search services",
      "services.missing.features": [
        "Missing person investigation",
        "Lost contact location services",
        "Family member searches",
        "Skip tracing services",
        "Witness location for legal cases",
        "Adoption and birth parent searches"
      ],
      
      "services.debt.title": "Debt Collection Investigation",
      "services.debt.desc": "Support debt collection efforts with professional investigation services. We locate debtors, verify assets, and provide evidence for legal proceedings in China.",
      "services.debt.keywords": "debt collection investigation China, locate debtor, asset verification",
      "services.debt.features": [
        "Debtor location services",
        "Asset verification for collection",
        "Employment and income verification",
        "Evidence collection for legal action",
        "Skip tracing for absconded debtors",
        "Fraud investigation"
      ],
      
      "services.fraud.title": "Fraud Investigation",
      "services.fraud.desc": "Comprehensive fraud investigation services for victims of scams and fraudulent schemes in China. We investigate romance scams, investment fraud, and business fraud.",
      "services.fraud.keywords": "fraud investigation China, romance scam investigation, investment fraud",
      "services.fraud.features": [
        "Romance and dating scam investigation",
        "Investment fraud investigation",
        "Business and trade fraud",
        "Identity theft investigation",
        "Online scam investigation",
        "Evidence collection for prosecution"
      ],
      
      "services.employee.title": "Employee Investigation",
      "services.employee.desc": "Pre-employment screening and employee investigation services for companies hiring in China. Verify credentials, conduct background checks, and investigate employee misconduct.",
      "services.employee.keywords": "employee investigation China, pre-employment screening, background check employees",
      "services.employee.features": [
        "Pre-employment background screening",
        "Employee misconduct investigation",
        "Theft and fraud investigation",
        "Workplace harassment investigation",
        "Competitor solicitation investigation",
        "Intellectual property theft"
      ],
      
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
      
      "footer.copyright": "© 2024 China Detective Agency. All rights reserved.",
      "footer.license": "Business License: XXXXXXXX",
      "footer.partner_site": "Recommended Detective Service",
      
      // Common
      "common.learn_more": "Learn More",
      "common.contact_us": "Contact Us",
      "common.read_more": "Read More",
      "common.what_we_offer": "What We Offer",
      "common.request_service": "Request This Service",
      "common.get_started": "Get Started",
      "common.our_approach": "Our Approach",
      "common.why_choose": "Why Choose Us",
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
      "services.relationship.desc": "为关注中国关系的国际客户提供全面的关系调查服务。我们谨慎的调查员提供基于证据的报告，涵盖关系验证、婚姻背景调查和不忠调查。",
      "services.relationship.keywords": "不忠调查, 婚姻调查, 关系验证",
      "services.relationship.features": [
        "婚姻背景验证",
        "不忠和出轨调查",
        "婚前背景调查",
        "关系历史验证",
        "约会诈骗调查",
        "证据收集和文档记录"
      ],
      
      "services.background.title": "背景调查服务",
      "services.background.desc": "为个人和企业提供专业的中国背景调查服务。我们验证就业历史、教育证书、犯罪记录和个人推荐，帮助您做出明智的决策。",
      "services.background.keywords": "中国背景调查, 个人背景调查, 证书验证",
      "services.background.features": [
        "就业历史验证",
        "教育证书核查",
        "犯罪记录查询",
        "个人推荐验证",
        "身份验证",
        "社交媒体调查"
      ],
      
      "services.business.title": "商业调查",
      "services.business.desc": "通过全面的商业调查服务保护您在中国的商业利益。我们进行供应商验证、商业伙伴背景调查和商业欺诈调查。",
      "services.business.keywords": "商业调查, 企业尽职调查, 中国供应商验证",
      "services.business.features": [
        "供应商验证和工厂审计",
        "商业伙伴背景调查",
        "商业欺诈调查",
        "竞争对手情报",
        "市场研究和分析",
        "商业机密保护"
      ],
      
      "services.corporate.title": "企业尽职调查",
      "services.corporate.desc": "为在中国运营或进入中国市场的公司提供深入的企业尽职调查服务。我们提供关于财务状况、法律合规性和商业声誉的全面报告。",
      "services.corporate.keywords": "中国企业调查, 尽职调查服务, 公司验证",
      "services.corporate.features": [
        "财务验证和分析",
        "法律合规性检查",
        "公司结构调查",
        "声誉和市场地位",
        "诉讼和纠纷历史",
        "管理层背景调查"
      ],
      
      "services.asset.title": "资产调查",
      "services.asset.desc": "在中国定位和验证资产，包括房产、银行账户和商业持有。对法律诉讼、离婚案件和财务纠纷至关重要。",
      "services.asset.keywords": "中国资产搜索, 资产调查, 财务调查",
      "services.asset.features": [
        "房产和不动产搜索",
        "银行账户调查",
        "商业资产验证",
        "隐藏资产发现",
        "资产估值协助",
        "法律证据收集"
      ],
      
      "services.missing.title": "寻找失踪人员",
      "services.missing.desc": "专业的寻人服务，在中国定位失踪人员、失联联系人或家庭成员。我们使用先进的调查技术谨慎高效地找到目标人员。",
      "services.missing.keywords": "在中国找人, 定位失踪人员, 寻人服务",
      "services.missing.features": [
        "失踪人员调查",
        "失联联系人定位服务",
        "家庭成员搜索",
        "追踪服务",
        "法律案件证人定位",
        "收养和生父母搜索"
      ],
      
      "services.debt.title": "债务追收调查",
      "services.debt.desc": "通过专业调查服务支持债务追收工作。我们定位债务人、验证资产，并为中国的法律诉讼提供证据。",
      "services.debt.keywords": "中国债务追收调查, 定位债务人, 资产验证",
      "services.debt.features": [
        "债务人定位服务",
        "追收资产验证",
        "就业和收入验证",
        "法律行动证据收集",
        "逃跑债务人追踪",
        "欺诈调查"
      ],
      
      "services.fraud.title": "欺诈调查",
      "services.fraud.desc": "为中国诈骗和欺诈计划的受害者提供全面的欺诈调查服务。我们调查浪漫诈骗、投资欺诈和商业欺诈。",
      "services.fraud.keywords": "中国欺诈调查, 浪漫诈骗调查, 投资欺诈",
      "services.fraud.features": [
        "浪漫和约会诈骗调查",
        "投资欺诈调查",
        "商业和贸易欺诈",
        "身份盗用调查",
        "网络诈骗调查",
        "起诉证据收集"
      ],
      
      "services.employee.title": "员工调查",
      "services.employee.desc": "为在中国招聘的公司提供入职前筛选和员工调查服务。验证资质、进行背景调查并调查员工不当行为。",
      "services.employee.keywords": "中国员工调查, 入职前筛选, 员工背景调查",
      "services.employee.features": [
        "入职前背景筛选",
        "员工不当行为调查",
        "盗窃和欺诈调查",
        "工作场所骚扰调查",
        "竞争对手招揽调查",
        "知识产权盗窃"
      ],
      
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
      "footer.partner_site": "我们推荐",
      
      // Common
      "common.learn_more": "了解更多",
      "common.contact_us": "联系我们",
      "common.read_more": "阅读更多",
      "common.what_we_offer": "我们提供的服务",
      "common.request_service": "申请此服务",
      "common.get_started": "开始行动",
      "common.our_approach": "我们的方法",
      "common.why_choose": "为什么选择我们",
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
