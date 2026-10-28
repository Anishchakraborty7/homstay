import React, { useState } from "react";
import { MessageCircle, Phone, X, Calendar } from "lucide-react";
import { PROPERTY_CONFIG, buildWhatsAppLink } from "../data/property";
import "./FloatingWhatsApp.css";

export default function FloatingWhatsApp({ onOpenEnquiry }) {
  const [showTooltip, setShowTooltip] = useState(true);
  const { phoneNumber, name } = PROPERTY_CONFIG;

  const defaultWhatsAppUrl = buildWhatsAppLink({
    customMessage: `Hello! I am planning a trip and would like to enquire about staying at ${name}.`,
  });

  return (
    <>
      {/* Desktop Floating WhatsApp Button with Notification Pulse */}
      <div className="floating-whatsapp-wrapper desktop-only">
        {showTooltip && (
          <div className="floating-tooltip">
            <button
              className="tooltip-close"
              onClick={() => setShowTooltip(false)}
              aria-label="Dismiss message"
            >
              <X size={12} />
            </button>
            <span className="tooltip-badge">ONLINE RESERVATIONS</span>
            <p className="tooltip-text">
              Questions about rooms or rates? Chat directly with us on WhatsApp!
            </p>
          </div>
        )}

        <button
          onClick={() => onOpenEnquiry && onOpenEnquiry()}
          className="floating-whatsapp-btn"
          aria-label="Enquire on WhatsApp"
        >
          <span className="pulse-ring"></span>
          <MessageCircle size={28} />
        </button>
      </div>

      {/* Mobile Sticky Bottom Action Bar (Non-Obstructive) */}
      <div className="mobile-bottom-bar mobile-only">
        <a
          href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
          className="mobile-bottom-btn call-btn"
          aria-label="Call property"
        >
          <Phone size={18} />
          <span>Call Host</span>
        </a>

        <button
          onClick={() => onOpenEnquiry && onOpenEnquiry()}
          className="mobile-bottom-btn whatsapp-btn"
          aria-label="Enquire on WhatsApp"
        >
          <MessageCircle size={18} />
          <span>Enquire on WhatsApp</span>
        </button>
      </div>
    </>
  );
}
