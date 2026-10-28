import React, { useState, useEffect } from "react";
import { MessageCircle, Menu, X, Phone, Compass } from "lucide-react";
import { PROPERTY_CONFIG, buildWhatsAppLink } from "../data/property";
import "./Navbar.css";

export default function Navbar({ onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Stay & Rooms", href: "#rooms" },
    { label: "About", href: "#about" },
    { label: "Amenities", href: "#amenities" },
    { label: "Experiences", href: "#experiences" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Demo Bar */}
      <div className="demo-banner">
        <Compass size={14} className="demo-icon" />
        <span>
          <strong>DEMO PREVIEW:</strong> All rates & details are editable demo placeholders in{" "}
          <code>src/data/property.js</code>
        </span>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`luxury-navbar ${scrolled ? "navbar-scrolled" : "navbar-transparent"}`}
        id="navbar"
      >
        <div className="container-wide nav-container">
          {/* Brand Logo & Title */}
          <a href="#home" className="nav-brand" onClick={closeMobileMenu}>
            <div className="brand-emblem">
              <span>A</span>
            </div>
            <div className="brand-text">
              <span className="brand-name">{PROPERTY_CONFIG.name}</span>
              <span className="brand-sub">WESTERN GHATS • RETREAT</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="nav-menu-desktop" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs (Desktop) */}
          <div className="nav-actions-desktop">
            <a
              href={`tel:${PROPERTY_CONFIG.phoneNumber.replace(/\s+/g, "")}`}
              className="nav-phone-link"
              title="Call Resort"
            >
              <Phone size={16} />
              <span>{PROPERTY_CONFIG.phoneNumber}</span>
            </a>
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="btn btn-whatsapp btn-sm nav-cta-btn"
            >
              <MessageCircle size={16} />
              <span>Enquire on WhatsApp</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`mobile-drawer ${mobileMenuOpen ? "mobile-drawer-open" : ""}`}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="mobile-drawer-inner">
            <div className="mobile-drawer-header">
              <span className="mobile-drawer-title">{PROPERTY_CONFIG.name}</span>
              <button
                className="mobile-close-btn"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="mobile-nav-links">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mobile-drawer-footer">
              <button
                onClick={() => {
                  closeMobileMenu();
                  if (onOpenEnquiry) onOpenEnquiry();
                }}
                className="btn btn-whatsapp w-full mb-3"
              >
                <MessageCircle size={18} />
                <span>Enquire on WhatsApp</span>
              </button>
              <a
                href={`tel:${PROPERTY_CONFIG.phoneNumber.replace(/\s+/g, "")}`}
                className="btn btn-outline w-full"
                onClick={closeMobileMenu}
              >
                <Phone size={16} />
                <span>Call {PROPERTY_CONFIG.phoneNumber}</span>
              </a>
              <p className="mobile-estate-addr">{PROPERTY_CONFIG.location.area}, {PROPERTY_CONFIG.location.state}</p>
            </div>
          </div>
        </div>

        {/* Mobile Backdrop */}
        {mobileMenuOpen && (
          <div className="mobile-backdrop" onClick={closeMobileMenu}></div>
        )}
      </header>
    </>
  );
}
