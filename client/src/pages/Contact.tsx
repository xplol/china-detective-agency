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
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
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
              Get In Touch
            </span>
            <h1 className="text-display text-5xl md:text-6xl font-bold text-foreground">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Start your investigation with a free, confidential consultation. Our team is ready to help you 24/7.
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
                      Send Us a Message
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours.
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
                      className="w-full bg-amber text-background hover:bg-amber/90 font-medium"
                    >
                      Send Message
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
                  <div className="space-y-3">
                    <h3 className="text-display text-lg font-bold text-foreground">
                      Instant Messaging
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      For faster communication, you can also reach us via:
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm text-foreground">
                        <span className="font-medium">WeChat:</span> ChinaDetective
                      </p>
                      <p className="text-sm text-foreground">
                        <span className="font-medium">WhatsApp:</span> +86 153 9761 5812
                      </p>
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
