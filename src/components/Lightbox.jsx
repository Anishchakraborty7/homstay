import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import "./Lightbox.css";

export default function Lightbox({
  isOpen,
  images = [],
  currentIndex = 0,
  onClose,
  onNext,
  onPrev,
  title = "",
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        onNext();
      } else if (e.key === "ArrowLeft") {
        onPrev();
      }
    };

    // Prevent body scroll when lightbox is open
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  const currentItem = images[currentIndex];
  // Handle whether item is string URL or object
  const currentImgUrl = typeof currentItem === "string" ? currentItem : currentItem.image;
  const currentTitle = typeof currentItem === "string" ? title : currentItem.title || title;
  const currentDesc = typeof currentItem === "string" ? "" : currentItem.description || "";

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
      onClick={onClose}
    >
      {/* Lightbox Container */}
      <div className="lightbox-content-box" onClick={(e) => e.stopPropagation()}>
        {/* Top Control Bar */}
        <div className="lightbox-top-bar">
          <div className="lightbox-info">
            <span className="lightbox-counter">
              {currentIndex + 1} / {images.length}
            </span>
            {currentTitle && <span className="lightbox-title-text">{currentTitle}</span>}
          </div>

          <button
            className="lightbox-close-btn"
            onClick={onClose}
            aria-label="Close lightbox (Escape)"
          >
            <X size={24} />
          </button>
        </div>

        {/* Main Image Stage */}
        <div className="lightbox-image-stage">
          {images.length > 1 && (
            <button
              className="lightbox-nav-btn prev"
              onClick={onPrev}
              aria-label="Previous image (Left arrow)"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          <div className="lightbox-img-wrapper">
            <img
              src={currentImgUrl}
              alt={currentTitle || "Property gallery photo"}
              className="lightbox-active-img"
            />
          </div>

          {images.length > 1 && (
            <button
              className="lightbox-nav-btn next"
              onClick={onNext}
              aria-label="Next image (Right arrow)"
            >
              <ChevronRight size={32} />
            </button>
          )}
        </div>

        {/* Bottom Caption */}
        {currentDesc && (
          <div className="lightbox-bottom-caption">
            <p>{currentDesc}</p>
          </div>
        )}
      </div>
    </div>
  );
}
