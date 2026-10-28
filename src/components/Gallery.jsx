import React, { useState } from "react";
import { Eye, Camera, Filter } from "lucide-react";
import { PROPERTY_CONFIG } from "../data/property";
import "./Gallery.css";

export default function Gallery({ onImageClick }) {
  const { gallery } = PROPERTY_CONFIG;
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Outdoors & Grounds",
    "Rooms & Suites",
    "Bathrooms & Details",
    "Dining & Experiences",
  ];

  const filteredImages =
    activeCategory === "All"
      ? gallery
      : gallery.filter((item) => item.categoryLabel === activeCategory);

  return (
    <section className="section-padding bg-ivory gallery-section" id="gallery">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">PHOTO ESSAY</span>
          <h2 className="section-title">Glimpses of Avana Living</h2>
          <p className="section-subtitle">
            Explore our secluded hillside architecture, mist-kissed plantation grounds,
            artisanal interiors, and serene mountain vistas.
          </p>
          <div className="gold-divider"></div>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="gallery-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery-filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredImages.map((item, index) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => onImageClick && onImageClick(filteredImages, index)}
              role="button"
              tabIndex={0}
              aria-label={`Open photo: ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onImageClick && onImageClick(filteredImages, index);
                }
              }}
            >
              <div className="gallery-img-box">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-card-overlay">
                  <div className="gallery-overlay-badge">
                    <span>{item.categoryLabel}</span>
                  </div>
                  <div className="gallery-overlay-bottom">
                    <h4 className="gallery-item-title">{item.title}</h4>
                    <span className="gallery-zoom-prompt">
                      <Eye size={15} />
                      <span>Click to view</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
