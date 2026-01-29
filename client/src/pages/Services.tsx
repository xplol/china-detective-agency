/* Neo-Noir Detective Aesthetic - Services Page
 * Detailed service offerings with SEO-optimized content
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
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
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Heart,
      title: t("services.relationship.title"),
      slug: "relationship-investigation",
      description: t("services.relationship.desc"),
      features: t("services.relationship.features") as string[],
      seoKeywords: t("services.relationship.keywords"),
    },
    {
      icon: FileCheck,
      title: t("services.background.title"),
      slug: "background-check",
      description: t("services.background.desc"),
      features: t("services.background.features") as string[],
      seoKeywords: t("services.background.keywords"),
    },
    {
      icon: Building2,
      title: t("services.business.title"),
      slug: "business-investigation",
      description: t("services.business.desc"),
      features: t("services.business.features") as string[],
      seoKeywords: t("services.business.keywords"),
    },
    {
      icon: Search,
      title: t("services.corporate.title"),
      slug: "corporate-due-diligence",
      description: t("services.corporate.desc"),
      features: t("services.corporate.features") as string[],
      seoKeywords: t("services.corporate.keywords"),
    },
    {
      icon: Shield,
      title: t("services.asset.title"),
      slug: "asset-investigation",
      description: t("services.asset.desc"),
      features: t("services.asset.features") as string[],
      seoKeywords: t("services.asset.keywords"),
    },
    {
      icon: Users,
      title: t("services.missing.title"),
      slug: "locate-missing-persons",
      description: t("services.missing.desc"),
      features: t("services.missing.features") as string[],
      seoKeywords: t("services.missing.keywords"),
    },
    {
      icon: DollarSign,
      title: t("services.debt.title"),
      slug: "debt-collection",
      description: t("services.debt.desc"),
      features: t("services.debt.features") as string[],
      seoKeywords: t("services.debt.keywords"),
    },
    {
      icon: AlertTriangle,
      title: t("services.fraud.title"),
      slug: "fraud-investigation",
      description: t("services.fraud.desc"),
      features: t("services.fraud.features") as string[],
      seoKeywords: t("services.fraud.keywords"),
    },
    {
      icon: Briefcase,
      title: t("services.employee.title"),
      slug: "employee-investigation",
      description: t("services.employee.desc"),
      features: t("services.employee.features") as string[],
      seoKeywords: t("services.employee.keywords"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Investigation Services in China | Private Detective Agency"
        description="Comprehensive private investigation services in China: relationship investigation, background checks, business investigation, corporate due diligence, asset investigation, and more."
        keywords="investigation services China, private detective China, relationship investigation, background check, business investigation, corporate due diligence, asset investigation"
      />
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
              {t("hero.badge")}
            </span>
            <h1 className="text-display text-5xl md:text-6xl font-bold text-foreground">
              {t("services.title")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("services.subtitle")}
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
                            {t("common.what_we_offer")}
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
                            {t("common.request_service")}
                            <ArrowRight className="ml-2" size={20} />
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            className="border-border text-foreground hover:bg-muted"
                          >
                            {t("common.learn_more")}
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
              {t("services.custom.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("services.custom.desc")}
            </p>
            <a
              href="https://t.me/chinadetective8848_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-amber text-background hover:bg-amber/90 font-medium text-base px-8 py-6"
              >
                {t("services.custom.button")}
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
