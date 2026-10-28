import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Compass,
  ArrowUp,
  Heart,
} from "lucide-react";
import { PROPERTY_CONFIG, buildWhatsAppLink } from "../data/property";
import "./Footer.css";

// Clean bespoke SVG social icons
function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function YoutubeIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
    </svg>
  );
}

export default function Footer({ onOpenEnquiry }) {
  const { name, shortDescription, location, phoneNumber, email, social } = PROPERTY_CONFIG;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Stay & Rooms", href: "#rooms" },
    { label: "Property Story", href: "#about" },
    { label: "Amenities", href: "#amenities" },
    { label: "Experiences", href: "#experiences" },
    { label: "Photo Essay", href: "#gallery" },
    { label: "Location & Directions", href: "#location" },
    { label: "Guest Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Reservations", href: "#contact" },
  ];

  const whatsappUrl = buildWhatsAppLink({
    customMessage: "Hello! I am reaching out through the website footer for a reservation query.",
  });

  return (
    <footer className="luxury-footer">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <div className="footer-brand-emblem">A</div>
              <div>
                <span className="footer-brand-title">{name}</span>
                <span className="footer-brand-sub">BOUTIQUE HOMESTAY & RESORT</span>
              </div>
            </div>

            <p className="footer-narrative">{shortDescription}</p>

            <div className="footer-social-row">
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href={social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="YouTube"
              >
                <YoutubeIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              {navLinks.slice(0, 5).map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="footer-nav-link">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience & Information */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Experiences & Info</h4>
            <ul className="footer-links-list">
              {navLinks.slice(5).map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="footer-nav-link">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Concierge & Location */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Reservations & Concierge</h4>
            <ul className="footer-contact-list">
              <li>
                <Phone size={16} className="f-icon" />
                <a href={`tel:${phoneNumber.replace(/\s+/g, "")}`}>{phoneNumber}</a>
              </li>
              <li>
                <Mail size={16} className="f-icon" />
                <a href={`mailto:${email}`}>{email}</a>
              </li>
              <li>
                <MapPin size={16} className="f-icon" />
                <span>{location.fullAddress}</span>
              </li>
            </ul>

            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="btn btn-whatsapp btn-sm footer-whatsapp-cta"
            >
              <MessageCircle size={16} />
              <span>Direct WhatsApp Desk</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {name}. All rights reserved. Designed for luxury hospitality.
          </p>

          <p className="footer-customizer-note">
            <span>Configurable static template • Edit </span>
            <code>src/data/property.js</code>
          </p>

          <button onClick={scrollToTop} className="footer-scroll-top" aria-label="Back to top">
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
