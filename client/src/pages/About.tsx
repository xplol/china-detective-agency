/* Neo-Noir Detective Aesthetic - About Page
 * Company information and team expertise
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Target,
  Award,
  Users,
  Globe,
  Shield,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Confidentiality",
      description:
        "We maintain the highest standards of confidentiality. All client information and investigation details are protected with strict privacy protocols.",
    },
    {
      icon: Target,
      title: "Accuracy",
      description:
        "Our investigations are thorough and evidence-based. We provide accurate, verifiable information you can trust.",
    },
    {
      icon: Clock,
      title: "Efficiency",
      description:
        "Time-sensitive investigations require swift action. We deliver results within agreed timeframes without compromising quality.",
    },
    {
      icon: Award,
      title: "Professionalism",
      description:
        "Our team of licensed investigators adheres to international standards and Chinese legal requirements.",
    },
  ];

  const expertise = [
    {
      title: "Local Expertise",
      description:
        "Deep understanding of Chinese business culture, legal system, and social dynamics. Our investigators are native speakers with extensive local networks.",
    },
    {
      title: "International Standards",
      description:
        "We follow international investigation standards and best practices, ensuring our services meet the expectations of global clients.",
    },
    {
      title: "Legal Compliance",
      description:
        "All investigations are conducted within the framework of Chinese law. Evidence collected is admissible in legal proceedings.",
    },
    {
      title: "Multilingual Team",
      description:
        "Our team speaks English, Chinese (Mandarin and Cantonese), and other languages to serve international clients effectively.",
    },
  ];

  const stats = [
    { number: "20+", label: "Years of Experience" },
    { number: "2000+", label: "Cases Completed" },
    { number: "95%", label: "Success Rate" },
    { number: "50+", label: "Countries Served" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden film-grain">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/images/investigator-work.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-mono text-xs text-amber uppercase tracking-widest">
              About Our Agency
            </span>
            <h1 className="text-display text-5xl md:text-6xl font-bold text-foreground">
              Trusted Investigation Experts in China
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over 20 years, we have been helping international clients uncover the truth in China with professional, discreet, and reliable investigation services.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-display text-4xl md:text-5xl font-bold text-amber">
                  {stat.number}
                </div>
                <div className="text-mono text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <span className="text-mono text-xs text-amber uppercase tracking-widest">
                  Our Mission
                </span>
                <h2 className="text-display text-4xl font-bold text-foreground">
                  Empowering International Clients with Truth
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  China Detective Agency was founded with a clear mission: to provide international clients with reliable, professional investigation services in China. We understand the unique challenges foreigners face when conducting investigations in a country with different language, culture, and legal systems.
                </p>
                <p>
                  Our team combines deep local expertise with international standards to deliver results that meet the expectations of clients from around the world. Whether you need to verify a relationship, conduct due diligence on a business partner, or locate a missing person, we have the experience and resources to help.
                </p>
                <p>
                  We pride ourselves on our discretion, accuracy, and commitment to client satisfaction. Every investigation is handled with the utmost professionalism and confidentiality.
                </p>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <img
                src="/images/china-cityscape.png"
                alt="China investigation services"
                className="rounded-sm shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card relative film-grain">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <span className="text-mono text-xs text-amber uppercase tracking-widest">
              Our Core Values
            </span>
            <h2 className="text-display text-4xl font-bold text-foreground">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="bg-background border-border hover:border-amber/50 transition-all duration-300"
                >
                  <CardContent className="p-6 space-y-4 text-center">
                    <div className="w-12 h-12 bg-amber/10 rounded-sm flex items-center justify-center mx-auto">
                      <Icon className="text-amber" size={24} />
                    </div>
                    <h3 className="text-display text-xl font-bold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <span className="text-mono text-xs text-amber uppercase tracking-widest">
              Our Expertise
            </span>
            <h2 className="text-display text-4xl font-bold text-foreground">
              Why International Clients Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {expertise.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="text-amber" size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-display text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 bg-card relative film-grain">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <div className="w-16 h-16 bg-amber/10 rounded-sm flex items-center justify-center mx-auto">
                <Globe className="text-amber" size={32} />
              </div>
              <h2 className="text-display text-4xl font-bold text-foreground">
                Nationwide Coverage in China
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our investigation network covers all major cities and provinces across China, including:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
              {[
                "Beijing",
                "Shanghai",
                "Guangzhou",
                "Shenzhen",
                "Chengdu",
                "Hangzhou",
                "Wuhan",
                "Xi'an",
                "Chongqing",
                "Tianjin",
                "Nanjing",
                "Suzhou",
              ].map((city, index) => (
                <div
                  key={index}
                  className="py-3 px-4 bg-background border border-border rounded-sm text-sm text-foreground hover:border-amber/50 transition-colors"
                >
                  {city}
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              And many more cities across China. Contact us for investigations in any location.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-display text-4xl font-bold text-foreground">
              Ready to Work with Us?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Contact us today for a free, confidential consultation. Let us help you uncover the truth.
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
                Free Consultation
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
