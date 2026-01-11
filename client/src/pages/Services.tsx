/* Neo-Noir Detective Aesthetic - Services Page
 * Detailed service offerings with SEO-optimized content
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Heart,
  FileCheck,
  Building2,
  Search,
  Shield,
  Users,
  DollarSign,
  AlertTriangle,
  Briefcase,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: "Relationship Investigation",
      slug: "relationship-investigation",
      description:
        "Comprehensive relationship investigation services for international clients concerned about relationships in China. Our discreet investigators provide evidence-based reports on relationship verification, matrimonial background checks, and infidelity investigations.",
      features: [
        "Matrimonial background verification",
        "Infidelity and cheating investigation",
        "Pre-marital background checks",
        "Relationship history verification",
        "Dating scam investigation",
        "Evidence collection and documentation",
      ],
      seoKeywords:
        "relationship investigation China, infidelity investigation, matrimonial investigation, verify Chinese girlfriend, verify Chinese boyfriend, romance scam investigation China",
    },
    {
      icon: FileCheck,
      title: "Background Check Services",
      slug: "background-check",
      description:
        "Professional background check services in China for individuals and businesses. We verify employment history, education credentials, criminal records, and personal references to help you make informed decisions.",
      features: [
        "Employment history verification",
        "Education credential checks",
        "Criminal record searches",
        "Personal reference verification",
        "Identity verification",
        "Social media investigation",
      ],
      seoKeywords:
        "background check China, China background investigation, personal background check, employment verification China, criminal record check China, education verification",
    },
    {
      icon: Building2,
      title: "Business Investigation",
      slug: "business-investigation",
      description:
        "Protect your business interests with comprehensive business investigation services in China. We conduct supplier verification, business partner background checks, and commercial fraud investigations.",
      features: [
        "Supplier verification and factory audits",
        "Business partner background checks",
        "Commercial fraud investigation",
        "Competitor intelligence",
        "Market research and analysis",
        "Trade secret protection",
      ],
      seoKeywords:
        "business investigation China, supplier verification China, factory audit, business partner background check, commercial investigation, fraud investigation China",
    },
    {
      icon: Search,
      title: "Corporate Due Diligence",
      slug: "corporate-due-diligence",
      description:
        "In-depth corporate due diligence services for companies operating in or entering the Chinese market. We provide comprehensive reports on financial status, legal compliance, and business reputation.",
      features: [
        "Financial verification and analysis",
        "Legal compliance checks",
        "Corporate structure investigation",
        "Reputation and market standing",
        "Litigation and dispute history",
        "Management background checks",
      ],
      seoKeywords:
        "corporate due diligence China, company verification China, business due diligence, corporate investigation, financial investigation China, legal compliance check",
    },
    {
      icon: Shield,
      title: "Asset Investigation",
      slug: "asset-investigation",
      description:
        "Locate and verify assets in China including property, bank accounts, and business holdings. Essential for legal proceedings, divorce cases, and financial disputes.",
      features: [
        "Property and real estate searches",
        "Bank account investigation",
        "Business asset verification",
        "Hidden asset discovery",
        "Asset valuation assistance",
        "Legal evidence collection",
      ],
      seoKeywords:
        "asset investigation China, asset search China, property investigation, financial investigation, hidden asset discovery, divorce asset investigation",
    },
    {
      icon: Users,
      title: "Locate Missing Persons",
      slug: "locate-missing-persons",
      description:
        "Professional people search services to locate missing persons, lost contacts, or family members in China. We use advanced investigation techniques to find individuals discreetly and efficiently.",
      features: [
        "Missing person investigation",
        "Lost contact location services",
        "Family member searches",
        "Skip tracing services",
        "Witness location for legal cases",
        "Adoption and birth parent searches",
      ],
      seoKeywords:
        "find person China, locate missing person China, people search China, skip tracing China, find family member China, missing person investigation",
    },
    {
      icon: DollarSign,
      title: "Debt Collection Investigation",
      slug: "debt-collection",
      description:
        "Support debt collection efforts with professional investigation services. We locate debtors, verify assets, and provide evidence for legal proceedings in China.",
      features: [
        "Debtor location services",
        "Asset verification for collection",
        "Employment and income verification",
        "Evidence collection for legal action",
        "Skip tracing for absconded debtors",
        "Fraud investigation",
      ],
      seoKeywords:
        "debt collection investigation China, locate debtor China, asset verification, skip tracing China, debt recovery investigation, fraud investigation",
    },
    {
      icon: AlertTriangle,
      title: "Fraud Investigation",
      slug: "fraud-investigation",
      description:
        "Comprehensive fraud investigation services for victims of scams and fraudulent schemes in China. We investigate romance scams, investment fraud, and business fraud.",
      features: [
        "Romance and dating scam investigation",
        "Investment fraud investigation",
        "Business and trade fraud",
        "Identity theft investigation",
        "Online scam investigation",
        "Evidence collection for prosecution",
      ],
      seoKeywords:
        "fraud investigation China, romance scam investigation, investment fraud China, business fraud investigation, scam investigation China, identity theft investigation",
    },
    {
      icon: Briefcase,
      title: "Employee Investigation",
      slug: "employee-investigation",
      description:
        "Pre-employment screening and employee investigation services for companies hiring in China. Verify credentials, conduct background checks, and investigate employee misconduct.",
      features: [
        "Pre-employment background screening",
        "Employee misconduct investigation",
        "Theft and fraud investigation",
        "Workplace harassment investigation",
        "Competitor solicitation investigation",
        "Intellectual property theft",
      ],
      seoKeywords:
        "employee investigation China, pre-employment screening China, background check employees, workplace investigation, employee misconduct investigation, theft investigation",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden film-grain">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/images/detective-office.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-mono text-xs text-amber uppercase tracking-widest">
              Professional Investigation Services
            </span>
            <h1 className="text-display text-5xl md:text-6xl font-bold text-foreground">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive private investigation services in China for international clients. Discreet, professional, and results-driven.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  id={service.slug}
                  className="bg-card border-border hover:border-amber/50 transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Left - Icon and Title */}
                      <div className="space-y-4">
                        <div className="w-16 h-16 bg-amber/10 rounded-sm flex items-center justify-center">
                          <Icon className="text-amber" size={32} />
                        </div>
                        <div>
                          <h2 className="text-display text-2xl font-bold text-foreground mb-2">
                            {service.title}
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Middle - Features */}
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <h3 className="text-display text-lg font-bold text-foreground mb-4">
                            What We Offer
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle2
                                  className="text-amber flex-shrink-0 mt-0.5"
                                  size={18}
                                />
                                <span className="text-sm text-muted-foreground">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <Button
                            size="lg"
                            className="bg-amber text-background hover:bg-amber/90 font-medium"
                          >
                            Request This Service
                            <ArrowRight className="ml-2" size={20} />
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            className="border-border text-foreground hover:bg-muted"
                          >
                            Learn More
                          </Button>
                        </div>

                        {/* SEO Keywords (hidden but indexed) */}
                        <div className="sr-only">{service.seoKeywords}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card relative film-grain">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-display text-4xl font-bold text-foreground">
              Need a Custom Investigation?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every case is unique. Contact us to discuss your specific investigation needs and receive a customized solution.
            </p>
            <Button
              size="lg"
              className="bg-amber text-background hover:bg-amber/90 font-medium text-base px-8 py-6"
            >
              Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
