/* Neo-Noir Detective Aesthetic - Home Page
 * Cinematic hero section with dramatic lighting and asymmetric layouts
 * Film grain texture, venetian blind effects, high contrast design
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Shield,
  Search,
  FileCheck,
  Building2,
  Heart,
  Users,
  CheckCircle2,
  Clock,
  Lock,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Heart,
      title: t("services.relationship.title"),
      description: t("services.relationship.desc"),
      keywords: t("services.relationship.keywords"),
    },
    {
      icon: FileCheck,
      title: t("services.background.title"),
      description: t("services.background.desc"),
      keywords: t("services.background.keywords"),
    },
    {
      icon: Building2,
      title: t("services.business.title"),
      description: t("services.business.desc"),
      keywords: t("services.business.keywords"),
    },
    {
      icon: Search,
      title: t("services.corporate.title"),
      description: t("services.corporate.desc"),
      keywords: t("services.corporate.keywords"),
    },
    {
      icon: Shield,
      title: t("services.asset.title"),
      description: t("services.asset.desc"),
      keywords: t("services.asset.keywords"),
    },
    {
      icon: Users,
      title: t("services.missing.title"),
      description: t("services.missing.desc"),
      keywords: t("services.missing.keywords"),
    },
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle2,
      title: t("why.experience.title"),
      description: t("why.experience.desc"),
    },
    {
      icon: Lock,
      title: t("why.confidential.title"),
      description: t("why.confidential.desc"),
    },
    {
      icon: Clock,
      title: t("why.fast.title"),
      description: t("why.fast.desc"),
    },
    {
      icon: Shield,
      title: t("why.legal.title"),
      description: t("why.legal.desc"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="China Private Investigator | Professional Detective Agency"
        description="Professional private investigation services in China for international clients. Specializing in relationship investigations, background checks, business due diligence, and corporate investigations."
        keywords="private investigator China, China detective agency, background check China, relationship investigation China, business investigation China, corporate investigation China"
      />
      <Navigation />

      {/* Hero Section - Cinematic with venetian blind effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain venetian-blinds">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-background.png')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>

        {/* Content */}
        <div className="container relative z-10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Asymmetric layout */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="text-mono text-xs text-amber uppercase tracking-widest border border-amber/30 px-4 py-2 rounded-sm">
                    {t("hero.badge")}
                  </span>
                </div>
                <h1 className="text-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  {t("hero.title")}{" "}
                  <span className="text-amber">{t("hero.title.highlight")}</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  {t("hero.description")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://t.me/chinadetective8848_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-amber text-background hover:bg-amber/90 font-medium text-base px-8 py-6"
                  >
                    {t("hero.cta")}
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber text-amber hover:bg-amber/10 font-medium text-base px-8 py-6"
                >
                  {t("hero.cta.secondary")}
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="space-y-1">
                  <div className="text-display text-3xl font-bold text-amber">{t("hero.stats.experience")}</div>
                  <div className="text-mono text-xs text-muted-foreground uppercase tracking-wider">
                    {t("hero.stats.experience.label")}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-display text-3xl font-bold text-amber">{t("hero.stats.cases")}</div>
                  <div className="text-mono text-xs text-muted-foreground uppercase tracking-wider">
                    {t("hero.stats.cases.label")}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-display text-3xl font-bold text-amber">{t("hero.stats.success")}</div>
                  <div className="text-mono text-xs text-muted-foreground uppercase tracking-wider">
                    {t("hero.stats.success.label")}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative hidden lg:block">
              <div className="relative">
                <img
                  src="/images/china-cityscape.png"
                  alt="China cityscape at night"
                  className="rounded-sm shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-card relative film-grain">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <span className="text-mono text-xs text-amber uppercase tracking-widest">
              {t("services.badge")}
            </span>
            <h2 className="text-display text-4xl md:text-5xl font-bold text-foreground">
              {t("services.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("services.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="bg-background border-border hover:border-amber/50 transition-all duration-300 group"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-amber/10 rounded-sm flex items-center justify-center group-hover:bg-amber/20 transition-colors">
                      <Icon className="text-amber" size={24} />
                    </div>
                    <h3 className="text-display text-xl font-bold text-foreground group-hover:text-amber transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="pt-2">
                      <span className="text-mono text-xs text-muted-foreground/60 uppercase tracking-wider">
                        {service.keywords}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-amber text-amber hover:bg-amber/10 font-medium"
            >
              {t("services.cta")}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/images/investigation-abstract.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <img
                src="/images/trust-partnership.png"
                alt="Professional investigation services"
                className="rounded-sm shadow-2xl"
              />
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-mono text-xs text-amber uppercase tracking-widest">
                  {t("why.badge")}
                </span>
                <h2 className="text-display text-4xl md:text-5xl font-bold text-foreground">
                  {t("why.title")}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("why.description")}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="space-y-3">
                      <div className="w-10 h-10 bg-amber/10 rounded-sm flex items-center justify-center">
                        <Icon className="text-amber" size={20} />
                      </div>
                      <h3 className="text-display text-lg font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <Button
                size="lg"
                className="bg-amber text-background hover:bg-amber/90 font-medium"
              >
                {t("why.cta")}
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card relative film-grain">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-display text-4xl md:text-5xl font-bold text-foreground">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/chinadetective8848_bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-amber text-background hover:bg-amber/90 font-medium text-base px-8 py-6"
                >
                  {t("cta.button")}
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-amber text-amber hover:bg-amber/10 font-medium text-base px-8 py-6"
              >
                {t("nav.contact")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
