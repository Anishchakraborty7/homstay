import React from "react";
import {
  Wifi,
  UtensilsCrossed,
  Waves,
  Trees,
  Flame,
  Zap,
  Car,
  Coffee,
  Sparkles,
  ShieldCheck,
  PawPrint,
  Compass,
  CheckCircle,
} from "lucide-react";
import { PROPERTY_CONFIG } from "../data/property";
import "./Amenities.css";

// Dynamic Lucide icon lookup map
const ICON_MAP = {
  Wifi: Wifi,
  UtensilsCrossed: UtensilsCrossed,
  Waves: Waves,
  Trees: Trees,
  Flame: Flame,
  Zap: Zap,
  Car: Car,
  Coffee: Coffee,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  PawPrint: PawPrint,
  Compass: Compass,
};

export default function Amenities() {
  const { amenities } = PROPERTY_CONFIG;

  return (
    <section className="section-padding bg-dark-forest amenities-section" id="amenities">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">CURATED HOSPITALITY</span>
          <h2 className="section-title">Refined Comfort in Untamed Nature</h2>
          <p className="section-subtitle">
            Every convenience has been curated to balance secluded wild landscapes with modern
            seamless indulgence.
          </p>
          <div className="gold-divider"></div>
        </div>

        {/* Amenities Grid */}
        <div className="amenities-grid">
          {amenities.map((item, index) => {
            const IconComponent = ICON_MAP[item.icon] || CheckCircle;

            return (
              <div key={index} className="amenity-card">
                <div className="amenity-icon-box">
                  <IconComponent size={24} className="amenity-icon" />
                </div>
                <div className="amenity-content">
                  <h3 className="amenity-title">{item.title}</h3>
                  <p className="amenity-desc">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Note */}
        <div className="amenities-bottom-note">
          <ShieldCheck size={18} className="assurance-icon" />
          <span>
            All amenities are maintained on-site and fully managed by our dedicated estate staff.
          </span>
        </div>
      </div>
    </section>
  );
}
