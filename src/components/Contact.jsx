import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
  Users,
  BedDouble,
  FileText,
  ShieldCheck,
  Send,
} from "lucide-react";
import { PROPERTY_CONFIG, buildWhatsAppLink } from "../data/property";
import "./Contact.css";

export default function Contact({ preselectedRoom = "" }) {
  const { location, policies, rooms, phoneNumber, secondaryPhone, email, whatsappNumber } =
    PROPERTY_CONFIG;

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    room: preselectedRoom || rooms[0]?.name || "",
    checkIn: "",
    checkOut: "",
    guests: "2 Guests",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let customMsg = "";
    if (formData.name) customMsg += `Guest Name: ${formData.name}\n`;
    if (formData.phone) customMsg += `Contact: ${formData.phone}\n`;
    if (formData.notes) customMsg += `Special Request: ${formData.notes}\n`;

    const url = buildWhatsAppLink({
      roomName: formData.room,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guests: formData.guests,
      customMessage: customMsg.trim(),
    });

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const directChatUrl = buildWhatsAppLink({
    customMessage: "Hello! I am looking for general information about staying at Avana Forest Estate.",
  });

  return (
    <section className="section-padding bg-dark-forest contact-section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">RESERVATIONS & CONCIERGE</span>
          <h2 className="section-title">Connect with Our Hosts</h2>
          <p className="section-subtitle">
            Plan your serene mountain getaway. Direct reservations enjoy complimentary
            farm-fresh breakfast, flexible date alterations, and priority room placement.
          </p>
          <div className="gold-divider"></div>
        </div>

        {/* Contact Layout */}
        <div className="contact-grid">
          {/* Left Column: Direct Channels & Address */}
          <div className="contact-info-col">
            <h3 className="contact-col-title">Direct Reservations</h3>
            <p className="contact-col-desc">
              We respond promptly to all WhatsApp inquiries, phone calls, and reservation emails.
            </p>

            {/* Channels List */}
            <div className="contact-channels-list">
              {/* WhatsApp Card */}
              <div className="channel-card highlight-whatsapp">
                <div className="channel-icon-box whatsapp-box">
                  <MessageCircle size={22} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Official WhatsApp (Fastest Response)</span>
                  <a
                    href={directChatUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-value whatsapp-link"
                  >
                    Chat Directly on WhatsApp →
                  </a>
                  <span className="channel-sub">Typically responds in under 15 minutes</span>
                </div>
              </div>

              {/* Phone Card */}
              <div className="channel-card">
                <div className="channel-icon-box">
                  <Phone size={22} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Direct Phone Calls</span>
                  <a href={`tel:${phoneNumber.replace(/\s+/g, "")}`} className="channel-value">
                    {phoneNumber}
                  </a>
                  {secondaryPhone && secondaryPhone !== phoneNumber && (
                    <a
                      href={`tel:${secondaryPhone.replace(/\s+/g, "")}`}
                      className="channel-value secondary"
                    >
                      {secondaryPhone}
                    </a>
                  )}
                  <span className="channel-sub">Available 8:00 AM – 9:00 PM IST</span>
                </div>
              </div>

              {/* Email Card */}
              <div className="channel-card">
                <div className="channel-icon-box">
                  <Mail size={22} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Reservation Desk Email</span>
                  <a href={`mailto:${email}`} className="channel-value">
                    {email}
                  </a>
                  <span className="channel-sub">For group retreats & extended workations</span>
                </div>
              </div>

              {/* Physical Address */}
              <div className="channel-card">
                <div className="channel-icon-box">
                  <MapPin size={22} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Estate Sanctuary Location</span>
                  <p className="channel-address">{location.fullAddress}</p>
                </div>
              </div>

              {/* Check-in / out hours */}
              <div className="channel-card">
                <div className="channel-icon-box">
                  <Clock size={22} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Stay Timings</span>
                  <p className="channel-timings">
                    Check-in: <strong>{policies.checkIn}</strong> • Check-out:{" "}
                    <strong>{policies.checkOut}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom WhatsApp Booking Enquiry Form */}
          <div className="contact-form-col">
            <div className="booking-form-card">
              <div className="form-card-header">
                <h3 className="form-card-title">Send WhatsApp Enquiry</h3>
                <p className="form-card-subtitle">
                  Fill in your preferred dates to compose a verified inquiry message for our team.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="enquiry-actual-form">
                {/* Name & Phone */}
                <div className="form-row two-col">
                  <div className="form-group">
                    <label htmlFor="form-name" className="form-label">
                      Your Full Name
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      className="form-input"
                      placeholder="e.g. Ananya Sen"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="form-phone" className="form-label">
                      Mobile / WhatsApp Number
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      name="phone"
                      className="form-input"
                      placeholder="e.g. +91 60011 35715"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Room Selector */}
                <div className="form-group">
                  <label htmlFor="form-room" className="form-label">
                    <BedDouble size={14} />
                    <span>Select Room or Cottage</span>
                  </label>
                  <select
                    id="form-room"
                    name="room"
                    className="form-select"
                    value={formData.room}
                    onChange={handleChange}
                  >
                    {rooms.map((r) => (
                      <option key={r.id} value={r.name}>
                        {r.name} — {r.currency}{r.pricePerNight.toLocaleString("en-IN")}/night
                      </option>
                    ))}
                  </select>
                </div>

                {/* Dates & Guests */}
                <div className="form-row three-col">
                  <div className="form-group">
                    <label htmlFor="form-checkin" className="form-label">
                      <Calendar size={14} />
                      <span>Check-In</span>
                    </label>
                    <input
                      id="form-checkin"
                      type="date"
                      name="checkIn"
                      className="form-input"
                      value={formData.checkIn}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="form-checkout" className="form-label">
                      <Calendar size={14} />
                      <span>Check-Out</span>
                    </label>
                    <input
                      id="form-checkout"
                      type="date"
                      name="checkOut"
                      className="form-input"
                      value={formData.checkOut}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="form-guests" className="form-label">
                      <Users size={14} />
                      <span>Guests</span>
                    </label>
                    <select
                      id="form-guests"
                      name="guests"
                      className="form-select"
                      value={formData.guests}
                      onChange={handleChange}
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests</option>
                      <option value="3 Guests">3 Guests</option>
                      <option value="4+ Guests">4+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* Special Requests / Notes */}
                <div className="form-group">
                  <label htmlFor="form-notes" className="form-label">
                    <FileText size={14} />
                    <span>Special Notes or Questions (Optional)</span>
                  </label>
                  <textarea
                    id="form-notes"
                    name="notes"
                    rows="3"
                    className="form-textarea"
                    placeholder="Dietary preferences, celebration, pet travel, or airport transfer request..."
                    value={formData.notes}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* Submit to WhatsApp */}
                <button type="submit" className="btn btn-whatsapp w-full enquiry-submit-btn">
                  <MessageCircle size={18} />
                  <span>Send WhatsApp Enquiry</span>
                </button>

                {/* Policy Disclaimer */}
                <div className="form-disclaimer">
                  <ShieldCheck size={14} className="disclaimer-icon" />
                  <span>
                    Sending this enquiry opens WhatsApp with your prefilled details. Bookings are
                    confirmed directly by our reservation manager once live availability is checked.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
