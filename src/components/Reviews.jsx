import React from "react";
import { Star, Quote, CheckCircle2, Info } from "lucide-react";
import { PROPERTY_CONFIG } from "../data/property";
import "./Reviews.css";

export default function Reviews() {
  const { reviews, reviewsNotice } = PROPERTY_CONFIG;

  return (
    <section className="section-padding bg-ivory reviews-section" id="reviews">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">GUEST EXPERIENCES</span>
          <h2 className="section-title">Memories Made in the Mountains</h2>
          <p className="section-subtitle">
            Reflections from travelers who sought seclusion, warmth, and the healing stillness
            of our coffee plantation.
          </p>
          <div className="gold-divider"></div>

          {/* Transparent Notice */}
          <div className="reviews-demo-badge">
            <Info size={14} />
            <span>{reviewsNotice}</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="reviews-grid">
          {reviews.map((rev, idx) => (
            <article key={idx} className="review-card">
              <div className="review-header">
                <div className="review-stars">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star-icon filled" />
                  ))}
                </div>
                <Quote size={28} className="quote-icon" />
              </div>

              <blockquote className="review-quote">
                “{rev.quote}”
              </blockquote>

              <div className="review-footer">
                <div className="reviewer-info">
                  <h4 className="reviewer-name">{rev.name}</h4>
                  <span className="reviewer-meta">{rev.city} • {rev.date}</span>
                </div>
                <div className="review-stayed-room">
                  <span className="stayed-badge">{rev.room}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
