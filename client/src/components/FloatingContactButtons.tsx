/* Neo-Noir Detective Aesthetic - Floating Contact Buttons
 * Sticky contact buttons in bottom-right corner with smooth animations
 */

import { MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function FloatingContactButtons() {
  const [isOpen, setIsOpen] = useState(false);

  const contactMethods = [
    {
      id: "telegram",
      name: "Telegram",
      icon: Send,
      url: "https://t.me/chinadetective8848_bot",
      color: "bg-blue-500 hover:bg-blue-600",
      label: "Telegram Bot",
    },
    {
      id: "wechat",
      name: "WeChat",
      icon: MessageCircle,
      url: "https://wa.me/8615397615812", // Placeholder - WeChat doesn't have direct URL scheme like WhatsApp
      color: "bg-green-600 hover:bg-green-700",
      label: "WeChat",
      isWeChat: true,
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/8615397615812",
      color: "bg-green-500 hover:bg-green-600",
      label: "WhatsApp",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded buttons */}
      {isOpen && (
        <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3"
              title={method.label}
            >
              <span className="text-xs font-medium text-foreground bg-background px-3 py-2 rounded-sm border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {method.label}
              </span>
              <button
                className={`w-12 h-12 rounded-full ${method.color} flex items-center justify-center text-white shadow-lg transition-all duration-300 transform hover:scale-110 flex-shrink-0`}
              >
                <method.icon size={24} />
              </button>
            </a>
          ))}
        </div>
      )}

      {/* Main toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-amber text-background rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Open contact menu"
      >
        <Phone size={28} />
      </button>
    </div>
  );
}
