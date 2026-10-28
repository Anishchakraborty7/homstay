import React, { useState } from "react";
import { MessageCircle, ArrowDown, MapPin, Calendar, Users, BedDouble, Check } from "lucide-react";
import { PROPERTY_CONFIG, buildWhatsAppLink } from "../data/property";
import "./Hero.css";

export default function Hero({ onOpenEnquiry }) {
  // Booking bar state
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("Any Suite / Villa");
  const [guests, setGuests] = useState("2 Guests");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const url = buildWhatsAppLink({
      roomName: selectedRoom === "Any Suite / Villa" ? "" : selectedRoom,
      checkIn: checkIn,
      checkOut: checkOut,
      guests: guests,
      customMessage: "I would like to check availability and rates for these dates.",
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="hero-section" id="home">
      {/* Cinematic Background Image with Dark Vignette Overlay */}
      <div className="hero-bg-container">
        <img
          src={PROPERTY_CONFIG.hero.backgroundImage}
          alt={PROPERTY_CONFIG.name}
          className="hero-bg-img"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content-wrapper">
        {/* Top Badges & Location */}
        <div className="hero-eyebrow-row">
          <span className="hero-badge">{PROPERTY_CONFIG.hero.preTitle}</span>
          <span className="hero-location-tag">
            <MapPin size={14} />
            <span>{PROPERTY_CONFIG.location.area}, {PROPERTY_CONFIG.location.state}</span>
          </span>
        </div>

        {/* Grand Headline */}
        <h1 className="hero-headline">{PROPERTY_CONFIG.hero.headline}</h1>

        {/* Narrative Subtitle */}
        <p className="hero-subheadline">{PROPERTY_CONFIG.hero.subheadline}</p>

        {/* Primary Action Buttons */}
        <div className="hero-actions">
          <a href="#rooms" className="btn btn-accent hero-cta-btn">
            <span>Explore Our Rooms</span>
          </a>
          <button
            onClick={() => onOpenEnquiry && onOpenEnquiry()}
            className="btn btn-whatsapp hero-cta-btn"
          >
            <MessageCircle size={18} />
            <span>Enquire on WhatsApp</span>
          </button>
        </div>

        {/* Highlights Pills */}
        <div className="hero-highlights-strip">
          {PROPERTY_CONFIG.hero.highlights.map((highlight, idx) => (
            <div key={idx} className="highlight-pill">
              <span className="highlight-dot"></span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        {/* Direct Availability & WhatsApp Enquiry Bar */}
        <div className="hero-booking-card">
          <div className="booking-card-header">
            <span className="booking-card-title">Instant Stay Enquiry</span>
            <span className="booking-card-note">Direct WhatsApp response within minutes</span>
          </div>

          <form onSubmit={handleSearchSubmit} className="booking-bar-form">
            {/* Check-In */}
            <div className="booking-input-group">
              <label htmlFor="hero-checkin" className="booking-label">
                <Calendar size={14} />
                <span>Check-in</span>
              </label>
              <input
                id="hero-checkin"
                type="date"
                className="booking-input"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>

            {/* Check-Out */}
            <div className="booking-input-group">
              <label htmlFor="hero-checkout" className="booking-label">
                <Calendar size={14} />
                <span>Check-out</span>
              </label>
              <input
                id="hero-checkout"
                type="date"
                className="booking-input"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>

            {/* Room Select */}
            <div className="booking-input-group">
              <label htmlFor="hero-room" className="booking-label">
                <BedDouble size={14} />
                <span>Accommodation</span>
              </label>
              <select
                id="hero-room"
                className="booking-select"
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value)}
              >
                <option value="Any Suite / Villa">Any Room / Suite</option>
                {PROPERTY_CONFIG.rooms.map((room) => (
                  <option key={room.id} value={room.name}>
                    {room.name} ({room.currency}{room.pricePerNight.toLocaleString("en-IN")})
                  </option>
                ))}
              </select>
            </div>

            {/* Guests */}
            <div className="booking-input-group">
              <label htmlFor="hero-guests" className="booking-label">
                <Users size={14} />
                <span>Guests</span>
              </label>
              <select
                id="hero-guests"
                className="booking-select"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                <option value="1 Guest">1 Guest</option>
                <option value="2 Guests">2 Guests</option>
                <option value="3 Guests">3 Guests</option>
                <option value="4+ Guests">4+ Guests (Family)</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="booking-action-group">
              <button type="submit" className="btn btn-whatsapp booking-submit-btn">
                <MessageCircle size={18} />
                <span>Check Dates</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <a href="#about" className="hero-scroll-indicator" aria-label="Scroll to about section">
        <span>Discover Avana</span>
        <ArrowDown size={14} className="bounce-arrow" />
      </a>
    </section>
  );
}
