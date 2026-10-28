import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { PROPERTY_CONFIG, buildWhatsAppLink } from "../data/property";
import "./FAQ.css";

export default function FAQ({ onOpenEnquiry }) {
  const { faqs } = PROPERTY_CONFIG;
  const [openIndices, setOpenIndices] = useState([0]); // First question open by default

  const toggleIndex = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const generalWhatsAppUrl = buildWhatsAppLink({
    customMessage: "Hello! I have a question about staying at Avana Forest Estate.",
  });

  return (
    <section className="section-padding bg-ivory-surface faq-section" id="faq">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">ESSENTIAL INFORMATION</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about our stay policies, dining, connectivity,
            and booking confirmations.
          </p>
          <div className="gold-divider"></div>
        </div>

        {/* Accordion Container */}
        <div className="faq-container">
          <div className="faq-accordion-list">
            {faqs.map((faq, index) => {
              const isOpen = openIndices.includes(index);

              return (
                <div
                  key={index}
                  className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
                >
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleIndex(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <span className="faq-chevron-box">
                      <ChevronDown
                        size={18}
                        className={`faq-chevron ${isOpen ? "rotated" : ""}`}
                      />
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className={`faq-answer-collapse ${isOpen ? "expanded" : ""}`}
                    role="region"
                    aria-hidden={!isOpen}
                  >
                    <div className="faq-answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Still Have Questions Box */}
          <div className="faq-help-box">
            <div className="help-box-content">
              <HelpCircle size={28} className="help-box-icon" />
              <div>
                <h4 className="help-box-title">Have a specific question not covered here?</h4>
                <p className="help-box-desc">
                  Our reservations team is available directly on WhatsApp to answer your custom
                  queries or accommodate special dietary requirements.
                </p>
              </div>
            </div>
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
            >
              <MessageCircle size={16} />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
