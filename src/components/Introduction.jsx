import React from "react";
import { Sparkles, Trees, Eye, ShieldCheck, HeartHandshake } from "lucide-react";
import { PROPERTY_CONFIG } from "../data/property";
import "./Introduction.css";

export default function Introduction() {
  const { introduction, location, name } = PROPERTY_CONFIG;

  return (
    <section className="section-padding bg-ivory intro-section" id="about">
      <div className="container">
        {/* Editorial Two-Column Layout */}
        <div className="intro-grid">
          {/* Left Column: Visual Storytelling */}
          <div className="intro-visual-col">
            <div className="intro-image-frame-main">
              <img
                src={introduction.mainImage}
                alt="Avana Forest Estate Grounds and Architecture"
                className="intro-img-main"
                loading="lazy"
              />
              <div className="intro-badge-overlay">
                <span className="badge-gold">ESTATE RETREAT</span>
                <span className="intro-badge-text">25 ACRES OF TRANQUILITY</span>
              </div>
            </div>

            <div className="intro-image-frame-secondary">
              <img
                src={introduction.secondaryImage}
                alt="Private Estate Balcony View"
                className="intro-img-secondary"
                loading="lazy"
              />
            </div>

            <div className="intro-quote-card">
              <p className="intro-quote-text">{introduction.quote}</p>
              <span className="intro-quote-author">{introduction.host}</span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Features */}
          <div className="intro-narrative-col">
            <div className="section-header left-aligned intro-header-block">
              <span className="section-eyebrow">{introduction.subheading}</span>
              <h2 className="section-title">{introduction.heading}</h2>
              <div className="gold-divider left"></div>
            </div>

            <div className="intro-paragraphs">
              {introduction.narrative.map((para, index) => (
                <p key={index} className="intro-paragraph">
                  {para}
                </p>
              ))}
            </div>

            {/* Highlights List */}
            <div className="intro-features-list">
              <div className="intro-feature-item">
                <div className="feature-icon-wrapper">
                  <Trees size={20} />
                </div>
                <div>
                  <h4 className="feature-title">Shade-Grown Coffee Plantation</h4>
                  <p className="feature-desc">Walk directly from your suite into aromatic Arabica and Robusta trails.</p>
                </div>
              </div>

              <div className="intro-feature-item">
                <div className="feature-icon-wrapper">
                  <Eye size={20} />
                </div>
                <div>
                  <h4 className="feature-title">Unobstructed Mountain Vistas</h4>
                  <p className="feature-desc">Perched at 3,200 ft elevation with rolling mist and untouched valleys.</p>
                </div>
              </div>

              <div className="intro-feature-item">
                <div className="feature-icon-wrapper">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="feature-title">Mindful Boutique Hospitality</h4>
                  <p className="feature-desc">Only 8 boutique suites ensure utmost privacy, quietude, and personalized care.</p>
                </div>
              </div>
            </div>

            {/* Key Statistics Strip */}
            <div className="intro-stats-strip">
              {introduction.stats.map((stat, idx) => (
                <div key={idx} className="intro-stat-card">
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
