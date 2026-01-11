/* Neo-Noir Detective Aesthetic - Home Page
 * Cinematic hero section with dramatic lighting and asymmetric layouts
 * Film grain texture, venetian blind effects, high contrast design
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
  const services = [
    {
      icon: Heart,
      title: "Relationship Investigation",
      description:
        "Discreet investigation services for relationship verification, matrimonial background checks, and infidelity investigations. We help international clients verify relationships in China.",
      keywords: "infidelity investigation, matrimonial investigation, relationship verification",
    },
    {
      icon: FileCheck,
      title: "Background Check",
      description:
        "Comprehensive background checks on individuals in China. Verify employment history, education credentials, criminal records, and personal references for peace of mind.",
      keywords: "background check China, personal background investigation, credential verification",
    },
    {
      icon: Building2,
      title: "Business Investigation",
      description:
        "Corporate due diligence, supplier verification, and business partner background checks. Protect your business interests with thorough investigations in China.",
      keywords: "business investigation, corporate due diligence, supplier verification China",
    },
    {
      icon: Search,
      title: "Corporate Due Diligence",
      description:
        "In-depth corporate investigations including financial verification, legal compliance checks, and reputation analysis for companies operating in China.",
      keywords: "corporate investigation China, due diligence services, company verification",
    },
    {
      icon: Shield,
      title: "Asset Investigation",
      description:
        "Locate and verify assets in China including property, bank accounts, and business holdings. Essential for legal proceedings and financial disputes.",
      keywords: "asset search China, asset investigation, financial investigation",
    },
    {
      icon: Users,
      title: "Locate Missing Persons",
      description:
        "Professional people search services to locate missing persons, lost contacts, or family members in China. Discreet and effective.",
      keywords: "find person China, locate missing person, people search services",
    },
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle2,
      title: "20+ Years Experience",
      description: "Over two decades serving international clients with complex investigations in China.",
    },
    {
      icon: Lock,
      title: "Absolute Confidentiality",
      description: "Strict privacy protocols and encrypted communications protect your sensitive information.",
    },
    {
      icon: Clock,
      title: "Fast Results",
      description: "Efficient investigation processes deliver actionable results within agreed timeframes.",
    },
    {
      icon: Shield,
      title: "Legal Compliance",
      description: "All investigations conducted within Chinese legal framework with admissible evidence.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
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
                    Professional Investigation Services
                  </span>
                </div>
                <h1 className="text-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Uncover the Truth in{" "}
                  <span className="text-amber">China</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Professional private investigation services for international clients. Specializing in relationship investigations, background checks, and corporate due diligence across China.
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
                    Free Consultation
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber text-amber hover:bg-amber/10 font-medium text-base px-8 py-6"
                >
                  View Services
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="space-y-1">
                  <div className="text-display text-3xl font-bold text-amber">20+</div>
                  <div className="text-mono text-xs text-muted-foreground uppercase tracking-wider">
                    Years Experience
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-display text-3xl font-bold text-amber">2000+</div>
                  <div className="text-mono text-xs text-muted-foreground uppercase tracking-wider">
                    Cases Solved
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-display text-3xl font-bold text-amber">95%</div>
                  <div className="text-mono text-xs text-muted-foreground uppercase tracking-wider">
                    Success Rate
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
              Our Expertise
            </span>
            <h2 className="text-display text-4xl md:text-5xl font-bold text-foreground">
              Investigation Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive private investigation services tailored for international clients operating in China.
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
              View All Services
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
                  Why Choose Us
                </span>
                <h2 className="text-display text-4xl md:text-5xl font-bold text-foreground">
                  Trusted by International Clients
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We understand the unique challenges international clients face when conducting investigations in China. Our team combines local expertise with international standards.
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
                Learn More About Us
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
              Ready to Start Your Investigation?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Contact us today for a free, confidential consultation. Our experienced investigators are ready to help you uncover the truth.
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
                  Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-amber text-amber hover:bg-amber/10 font-medium text-base px-8 py-6"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
