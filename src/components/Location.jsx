import React from "react";
import {
  MapPin,
  ExternalLink,
  Navigation,
  Plane,
  Train,
  Car,
  Compass,
  Info,
} from "lucide-react";
import { PROPERTY_CONFIG } from "../data/property";
import "./Location.css";

export default function Location() {
  const { location } = PROPERTY_CONFIG;

  return (
    <section className="section-padding bg-ivory-surface location-section" id="location">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">YOUR JOURNEY</span>
          <h2 className="section-title">Location & Getting Here</h2>
          <p className="section-subtitle">
            Tucked deep within the biodiverse hills of Sakleshpur, easily accessible by road
            from Bengaluru and Mangalore.
          </p>
          <div className="gold-divider"></div>
        </div>

        {/* Location Grid */}
        <div className="location-grid">
          {/* Left Column: Details, Distances & Tips */}
          <div className="location-details-col">
            {/* Address Box */}
            <div className="address-card">
              <div className="address-icon-wrapper">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="address-estate-title">{location.estate}</h3>
                <p className="address-full-text">{location.fullAddress}</p>
                <div className="address-actions">
                  <a
                    href={location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <Navigation size={15} />
                    <span>Get Directions</span>
                  </a>
                  <a
                    href={location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    <ExternalLink size={15} />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Travel Distances & Connectivity */}
            <div className="connectivity-card">
              <h4 className="connectivity-title">Nearest Transit Hubs</h4>
              <div className="connectivity-list">
                {location.nearestHubs.map((hub, idx) => {
                  const isAir = hub.name.toLowerCase().includes("airport");
                  return (
                    <div key={idx} className="transit-hub-item">
                      <div className="hub-icon-wrapper">
                        {isAir ? <Plane size={16} /> : <Train size={16} />}
                      </div>
                      <div className="hub-info">
                        <span className="hub-name">{hub.name}</span>
                        <span className="hub-distance">{hub.distance}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Arrival Tips */}
            <div className="arrival-tips-card">
              <div className="tips-header">
                <Car size={18} className="tips-icon" />
                <span className="tips-title">Driving & Scenic Access</span>
              </div>
              <p className="tips-body">{location.gettingHereTips}</p>
            </div>
          </div>

          {/* Right Column: Embedded Map with Overlay CTA */}
          <div className="location-map-col">
            <div className="map-frame-wrapper">
              <iframe
                title="Property Location on Google Maps"
                src={location.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-iframe"
              ></iframe>

              <div className="map-floating-card">
                <span className="map-pin-pulse"></span>
                <div className="map-card-text">
                  <strong>{PROPERTY_CONFIG.name}</strong>
                  <span>{location.area}, {location.state}</span>
                </div>
                <a
                  href={location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent btn-sm map-cta-btn"
                >
                  <Navigation size={14} />
                  <span>Navigate</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
