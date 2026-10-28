import React, { useState } from "react";
import {
  Users,
  Bed,
  Maximize2,
  Bath,
  Sun,
  Camera,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  Info,
} from "lucide-react";
import { PROPERTY_CONFIG, buildWhatsAppLink } from "../data/property";
import "./Rooms.css";

export default function Rooms({ onOpenRoomGallery, onOpenEnquiryWithRoom }) {
  const { rooms } = PROPERTY_CONFIG;
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Private Villa", "Luxury Suite", "Private Cottage", "Deluxe Room"];

  const filteredRooms =
    selectedCategory === "All"
      ? rooms
      : rooms.filter((r) => r.category === selectedCategory);

  return (
    <section className="section-padding bg-ivory-surface rooms-section" id="rooms">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">ACCOMMODATION & SUITES</span>
          <h2 className="section-title">Designed for Repose & Scenic Immersion</h2>
          <p className="section-subtitle">
            Every suite is thoughtfully positioned across the hillside to offer complete privacy,
            generous natural light, and uninterrupted views of the misty coffee groves.
          </p>
          <div className="gold-divider"></div>

          {/* Demo Content Disclosure Note */}
          <div className="rooms-demo-alert">
            <Info size={15} />
            <span>
              <strong>Owner Notice:</strong> All nightly tariffs and room dimensions shown below
              are editable sample placeholders. Rates can be adjusted in <code>src/data/property.js</code>.
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="rooms-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Room Cards Grid */}
        <div className="rooms-grid">
          {filteredRooms.map((room) => {
            const directWhatsAppUrl = buildWhatsAppLink({
              roomName: room.name,
              customMessage: `I would like to enquire about staying in ${room.name}.`,
            });

            return (
              <article key={room.id} className="room-card" id={`room-${room.id}`}>
                {/* Room Image Container */}
                <div className="room-image-box">
                  <img
                    src={room.image}
                    alt={`${room.name} - ${room.category}`}
                    className="room-img"
                    loading="lazy"
                  />
                  {/* Category & Feature Badges */}
                  <div className="room-badges">
                    <span className="badge-dark">{room.category}</span>
                    {room.badge && <span className="badge-gold">{room.badge}</span>}
                  </div>

                  {/* "View Photos" Trigger Button on Image */}
                  <button
                    className="room-view-photos-btn"
                    onClick={() => onOpenRoomGallery && onOpenRoomGallery(room)}
                    aria-label={`View photos of ${room.name}`}
                  >
                    <Camera size={16} />
                    <span>View {room.gallery?.length || 4} Photos</span>
                  </button>
                </div>

                {/* Room Details Body */}
                <div className="room-body">
                  <div className="room-header-row">
                    <div>
                      <h3 className="room-title">{room.name}</h3>
                      <span className="room-category-label">{room.category}</span>
                    </div>

                    {/* Price in INR */}
                    <div className="room-price-box">
                      <span className="room-price-demo-tag">Sample Rate</span>
                      <div className="room-price-val">
                        <span className="room-currency">{room.currency}</span>
                        <span className="room-amount">{room.pricePerNight.toLocaleString("en-IN")}</span>
                      </div>
                      <span className="room-price-period">/ night + taxes</span>
                    </div>
                  </div>

                  <p className="room-description">{room.description}</p>

                  {/* Room Specifications Grid */}
                  <div className="room-specs-grid">
                    <div className="spec-item" title="Maximum Capacity">
                      <Users size={16} className="spec-icon" />
                      <span>{room.guests}</span>
                    </div>

                    <div className="spec-item" title="Bed Configuration">
                      <Bed size={16} className="spec-icon" />
                      <span>{room.bed}</span>
                    </div>

                    <div className="spec-item" title="Floor Area">
                      <Maximize2 size={16} className="spec-icon" />
                      <span>{room.size}</span>
                    </div>

                    <div className="spec-item" title="Bathroom">
                      <Bath size={16} className="spec-icon" />
                      <span>{room.bathroom}</span>
                    </div>

                    <div className="spec-item full-width" title="Outdoor Verandah">
                      <Sun size={16} className="spec-icon" />
                      <span>{room.balcony}</span>
                    </div>
                  </div>

                  {/* Key Room Features */}
                  <div className="room-amenities-tags">
                    {room.amenities.slice(0, 4).map((amenity, i) => (
                      <span key={i} className="room-amenity-chip">
                        <CheckCircle2 size={13} className="amenity-chip-icon" />
                        {amenity}
                      </span>
                    ))}
                    {room.amenities.length > 4 && (
                      <span className="room-amenity-chip-more">
                        +{room.amenities.length - 4} more amenities
                      </span>
                    )}
                  </div>

                  {/* Card Actions */}
                  <div className="room-card-actions">
                    <button
                      className="btn btn-outline btn-room-photos"
                      onClick={() => onOpenRoomGallery && onOpenRoomGallery(room)}
                    >
                      <Camera size={16} />
                      <span>View Gallery</span>
                    </button>

                    <button
                      className="btn btn-whatsapp btn-room-enquire"
                      onClick={() =>
                        onOpenEnquiryWithRoom
                          ? onOpenEnquiryWithRoom(room.name)
                          : window.open(directWhatsAppUrl, "_blank", "noopener,noreferrer")
                      }
                    >
                      <MessageCircle size={17} />
                      <span>Enquire on WhatsApp</span>
                    </button>
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
