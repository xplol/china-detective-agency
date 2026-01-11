/* Neo-Noir Detective Aesthetic - Footer Component
 * Professional footer with contact information and links
 */

import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber rounded-sm flex items-center justify-center">
                <span className="text-display text-2xl font-bold text-background">C</span>
              </div>
              <div className="flex flex-col">
                <span className="text-display text-lg font-bold text-foreground">
                  China Detective
                </span>
                <span className="text-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Investigation Agency
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional private investigation services in China for international clients. Discreet, reliable, and results-driven.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-display text-lg font-bold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services">
                  <span className="text-sm text-muted-foreground hover:text-amber transition-colors cursor-pointer">
                    Relationship Investigation
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-sm text-muted-foreground hover:text-amber transition-colors cursor-pointer">
                    Background Check
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-sm text-muted-foreground hover:text-amber transition-colors cursor-pointer">
                    Business Investigation
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-sm text-muted-foreground hover:text-amber transition-colors cursor-pointer">
                    Corporate Due Diligence
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-display text-lg font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-sm text-muted-foreground hover:text-amber transition-colors cursor-pointer">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-sm text-muted-foreground hover:text-amber transition-colors cursor-pointer">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-sm text-muted-foreground hover:text-amber transition-colors cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <span className="text-sm text-muted-foreground hover:text-amber transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-display text-lg font-bold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-amber mt-0.5 flex-shrink-0" />
                <a href="tel:+8615397615812" className="text-sm text-muted-foreground hover:text-amber transition-colors">
                  +86 153 9761 5812
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-amber mt-0.5 flex-shrink-0" />
                <a href="mailto:chinadetective8848@gmail.com" className="text-sm text-muted-foreground hover:text-amber transition-colors">
                  chinadetective8848@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Shanghai, Beijing, Guangzhou, Shenzhen
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={18} className="text-amber mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/8615397615812" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-amber transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={18} className="text-amber mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">WeChat: ChinaDetective</span>
              </li>
              <li className="flex items-start gap-3">
                <Send size={18} className="text-amber mt-0.5 flex-shrink-0" />
                <a href="https://t.me/chinadetective8848_bot" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-amber transition-colors">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} China Detective Agency. All rights reserved.
            </p>
            <p className="text-mono text-xs text-muted-foreground uppercase tracking-wider">
              Confidential · Professional · Reliable
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
