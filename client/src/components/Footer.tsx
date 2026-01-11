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
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="font-medium text-foreground whitespace-nowrap">Phone:</span>
                <a href="tel:+8615397615812" className="text-muted-foreground hover:text-amber transition-colors break-all">
                  +86 153 9761 5812
                </a>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-medium text-foreground whitespace-nowrap">E-mail:</span>
                <a href="mailto:chinadetective8848@gmail.com" className="text-muted-foreground hover:text-amber transition-colors break-all">
                  chinadetective8848@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-medium text-foreground whitespace-nowrap">WhatsApp:</span>
                <a href="https://wa.me/8615397615812" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-amber transition-colors">
                  +86 153 9761 5812
                </a>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-medium text-foreground whitespace-nowrap">WeChat:</span>
                <span className="text-muted-foreground">+86 153 9761 5812</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-medium text-foreground whitespace-nowrap">Telegram:</span>
                <a href="https://t.me/chinadetective8848_bot" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-amber transition-colors break-all">
                  https://t.me/chinadetective8848_bot
                </a>
              </div>
              <div className="pt-2 border-t border-border mt-3">
                <span className="text-muted-foreground text-xs">
                  Shanghai, Beijing, Guangzhou, Shenzhen, ChengDu
                </span>
              </div>
            </div>
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
