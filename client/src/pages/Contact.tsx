/* Neo-Noir Detective Aesthetic - Contact Page
 * Contact form and information
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin, Clock, MessageSquare, MessageCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { submitContactMessage } from "@/lib/supabase";

export default function Contact() {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitContactMessage({
        full_name: formData.name,
        email: formData.email,
        phone_number: formData.phone,
        service_interested_in: formData.service,
        message: formData.message,
      });

      if (result.success) {
        toast.success("Message sent! We'll contact you within 24 hours.");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        toast.error(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+86 153 9761 5812", "Available 24/7"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["chinadetective8848@gmail.com", "Response within 24 hours"],
    },
    {
      icon: MapPin,
      title: "Locations",
      details: ["Shanghai, Beijing, Guangzhou", "Shenzhen & other major cities"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["24/7 Emergency Service", "Office: Mon-Fri 9AM-6PM"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Contact Us | China Private Investigator & Detective Agency"
        description="Contact our professional private investigation agency in China. Free consultation available 24/7. We provide confidential investigation services for international clients across China."
        keywords="contact China detective, private investigator contact, investigation consultation, China detective agency contact"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden film-grain">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/images/investigation-abstract.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-mono text-xs text-amber uppercase tracking-widest">
              {t("common.get_started")}
            </span>
            <h1 className="text-display text-5xl md:text-6xl font-bold text-foreground">
              {t("nav.contact")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("cta.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Contact Form */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-display text-3xl font-bold text-foreground">
                      {t("common.contact_us")}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {t("cta.description")}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-background border-border text-foreground"
                        placeholder="John Smith"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-background border-border text-foreground"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="bg-background border-border text-foreground"
                        placeholder="+1 234 567 8900"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-foreground">
                        Service Interested In
                      </Label>
                      <Input
                        id="service"
                        type="text"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="bg-background border-border text-foreground"
                        placeholder="e.g., Background Check, Relationship Investigation"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="bg-background border-border text-foreground resize-none"
                        placeholder="Please describe your investigation needs. All information will be kept strictly confidential."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-amber text-background hover:bg-amber/90 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      All communications are encrypted and confidential. We typically respond within 24 hours.
                    </p>
                  </form>
                </div>
              </CardContent>
            </Card>

            {/* Right - Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-display text-3xl font-bold text-foreground">
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We're here to help 24/7. Choose the most convenient way to reach us.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card
                      key={index}
                      className="bg-card border-border hover:border-amber/50 transition-all duration-300"
                    >
                      <CardContent className="p-6 space-y-3">
                        <div className="w-10 h-10 bg-amber/10 rounded-sm flex items-center justify-center">
                          <Icon className="text-amber" size={20} />
                        </div>
                        <h3 className="text-display text-lg font-bold text-foreground">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className="text-sm text-muted-foreground"
                          >
                            {detail}
                          </p>
                        ))}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Additional Info Card */}
              <Card className="bg-card border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="text-amber flex-shrink-0 mt-1" size={24} />
                    <div className="space-y-2">
                      <h3 className="text-display text-lg font-bold text-foreground">
                        Confidential Consultation
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        All initial consultations are completely free and confidential. We'll discuss your case, provide professional advice, and give you a clear understanding of our services and pricing.
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We understand the sensitive nature of investigation work and guarantee absolute discretion in all communications.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WeChat/WhatsApp Info */}
              <Card className="bg-amber/10 border-amber/30">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-display text-lg font-bold text-foreground">
                      Instant Messaging
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      For faster communication, reach us directly via:
                    </p>
                    <div className="space-y-3">
                      {/* WhatsApp */}
                      <a
                        href="https://wa.me/8615397615812"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-background rounded-sm border border-border hover:border-amber/50 transition-colors"
                      >
                        <div className="w-10 h-10 bg-green-500/20 rounded-sm flex items-center justify-center flex-shrink-0">
                          <MessageCircle className="text-green-500" size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">WhatsApp</p>
                          <p className="text-xs text-muted-foreground">+86 153 9761 5812</p>
                        </div>
                        <ArrowRight size={16} className="text-amber flex-shrink-0" />
                      </a>

                      {/* WeChat */}
                      <div className="p-3 bg-background rounded-sm border border-border">
                        <p className="text-sm font-medium text-foreground mb-2">WeChat</p>
                        <p className="text-xs text-muted-foreground mb-3">Scan QR code or search: <span className="font-medium text-foreground">ChinaDetective</span></p>
                        <div className="flex justify-center">
                          <img
                            src="/images/wechat-qr-code.jpg"
                            alt="WeChat QR Code for ChinaDetective"
                            className="w-32 h-32 rounded-sm object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card relative film-grain">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <span className="text-mono text-xs text-amber uppercase tracking-widest">
                Common Questions
              </span>
              <h2 className="text-display text-4xl font-bold text-foreground">
                Before You Contact Us
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <h3 className="text-display text-lg font-bold text-foreground mb-2">
                    How quickly can you start an investigation?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We can typically begin investigations within 24-48 hours after the initial consultation and agreement. Emergency cases can be started immediately.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <h3 className="text-display text-lg font-bold text-foreground mb-2">
                    How much do your services cost?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Costs vary depending on the complexity and scope of the investigation. We provide transparent pricing after understanding your specific needs during the free consultation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <h3 className="text-display text-lg font-bold text-foreground mb-2">
                    Is my information kept confidential?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Absolutely. We maintain the highest standards of confidentiality. All client information and investigation details are protected with strict privacy protocols and encrypted communications.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <h3 className="text-display text-lg font-bold text-foreground mb-2">
                    Do you work with clients outside of China?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yes, we specialize in serving international clients. We have experience working with clients from over 50 countries and provide services in multiple languages.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
