import React from "react";
import { Clock, MessageCircle, Sparkles } from "lucide-react";
import { PROPERTY_CONFIG, buildWhatsAppLink } from "../data/property";
import "./Experiences.css";

export default function Experiences({ onOpenEnquiry }) {
  const { experiences } = PROPERTY_CONFIG;

  return (
    <section className="section-padding bg-ivory experiences-section" id="experiences">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">CURATED DISCOVERIES</span>
          <h2 className="section-title">Experiences Beyond Ordinary Travel</h2>
          <p className="section-subtitle">
            Immerse yourself in authentic plantation life, slow mountain evenings, and
            unforgettable starlit nights under the Western Ghats sky.
          </p>
          <div className="gold-divider"></div>
        </div>

        {/* Experiences Grid */}
        <div className="experiences-grid">
          {experiences.map((exp) => {
            const expWhatsAppUrl = buildWhatsAppLink({
              customMessage: `Hello! I would love to enquire about booking the "${exp.title}" experience during my stay at ${PROPERTY_CONFIG.name}.`,
            });

            return (
              <article key={exp.id} className="experience-card">
                <div className="exp-image-box">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="exp-img"
                    loading="lazy"
                  />
                  <div className="exp-tag-badge">
                    <Sparkles size={13} />
                    <span>{exp.tag}</span>
                  </div>
                </div>

                <div className="exp-content">
                  <div className="exp-time-row">
                    <Clock size={14} className="exp-clock-icon" />
                    <span>{exp.time}</span>
                  </div>

                  <h3 className="exp-title">{exp.title}</h3>
                  <p className="exp-description">{exp.description}</p>

                  <div className="exp-action-row">
                    <a
                      href={expWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="exp-enquire-link"
                    >
                      <span>Enquire on WhatsApp</span>
                      <MessageCircle size={15} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
