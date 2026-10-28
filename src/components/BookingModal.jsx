import React, { useState, useEffect } from "react";
import { X, MessageCircle, Calendar, Users, BedDouble, ShieldCheck, Check } from "lucide-react";
import { PROPERTY_CONFIG, buildWhatsAppLink } from "../data/property";
import "./BookingModal.css";

export default function BookingModal({ isOpen, onClose, defaultRoom = "" }) {
  const { rooms, name } = PROPERTY_CONFIG;

  const [selectedRoom, setSelectedRoom] = useState(defaultRoom || rooms[0]?.name || "");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Guests");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (defaultRoom) {
      setSelectedRoom(defaultRoom);
    }
  }, [defaultRoom]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSendWhatsApp = (e) => {
    e.preventDefault();

    let customMsg = notes ? `Note: ${notes}` : "";

    const url = buildWhatsAppLink({
      roomName: selectedRoom,
      checkIn: checkIn,
      checkOut: checkOut,
      guests: guests,
      customMessage: customMsg,
    });

    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div>
            <span className="modal-eyebrow">DIRECT RESERVATIONS</span>
            <h3 className="modal-title">Enquire via WhatsApp</h3>
            <span className="modal-estate-tag">{name}</span>
          </div>

          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSendWhatsApp} className="modal-form">
          {/* Room Selection */}
          <div className="modal-field">
            <label htmlFor="modal-room" className="modal-label">
              <BedDouble size={14} />
              <span>Room / Villa Selection</span>
            </label>
            <select
              id="modal-room"
              className="modal-select"
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.target.value)}
            >
              {rooms.map((r) => (
                <option key={r.id} value={r.name}>
                  {r.name} ({r.currency}{r.pricePerNight.toLocaleString("en-IN")}/night)
                </option>
              ))}
            </select>
          </div>

          {/* Dates */}
          <div className="modal-row two-col">
            <div className="modal-field">
              <label htmlFor="modal-checkin" className="modal-label">
                <Calendar size={14} />
                <span>Check-in Date</span>
              </label>
              <input
                id="modal-checkin"
                type="date"
                className="modal-input"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>

            <div className="modal-field">
              <label htmlFor="modal-checkout" className="modal-label">
                <Calendar size={14} />
                <span>Check-out Date</span>
              </label>
              <input
                id="modal-checkout"
                type="date"
                className="modal-input"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
          </div>

          {/* Guests */}
          <div className="modal-field">
            <label htmlFor="modal-guests" className="modal-label">
              <Users size={14} />
              <span>Number of Guests</span>
            </label>
            <select
              id="modal-guests"
              className="modal-select"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              <option value="1 Guest">1 Guest</option>
              <option value="2 Guests">2 Guests</option>
              <option value="3 Guests">3 Guests</option>
              <option value="4+ Guests">4+ Guests (Family)</option>
            </select>
          </div>

          {/* Optional notes */}
          <div className="modal-field">
            <label htmlFor="modal-notes" className="modal-label">
              Special Requests or Questions
            </label>
            <input
              id="modal-notes"
              type="text"
              className="modal-input"
              placeholder="e.g. Vegetarian meals, anniversary, baby cot..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-whatsapp w-full modal-submit-btn">
            <MessageCircle size={18} />
            <span>Open in WhatsApp</span>
          </button>

          {/* Assurance */}
          <div className="modal-assurance">
            <ShieldCheck size={14} />
            <span>Opens WhatsApp directly with the host. No payment collected until confirmed.</span>
          </div>
        </form>
      </div>
    </div>
  );
}
