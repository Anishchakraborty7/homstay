import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Rooms from "./components/Rooms";
import Amenities from "./components/Amenities";
import Experiences from "./components/Experiences";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Lightbox from "./components/Lightbox";
import BookingModal from "./components/BookingModal";
import "./App.css";

export default function App() {
  // Lightbox Modal State
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
    title: "",
  });

  // Stay Enquiry Modal State
  const [enquiryModal, setEnquiryModal] = useState({
    isOpen: false,
    room: "",
  });

  // Open Room Gallery in Lightbox
  const handleOpenRoomGallery = (room) => {
    const images = room.gallery && room.gallery.length > 0 ? room.gallery : [room.image];
    setLightboxState({
      isOpen: true,
      images: images,
      currentIndex: 0,
      title: `${room.name} — Photo Tour`,
    });
  };

  // Open General Photo Essay in Lightbox
  const handleOpenGeneralGallery = (images, index) => {
    setLightboxState({
      isOpen: true,
      images: images,
      currentIndex: index,
      title: images[index]?.title || "Avana Forest Estate",
    });
  };

  // Lightbox Controls
  const handleLightboxClose = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleLightboxNext = () => {
    setLightboxState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
  };

  const handleLightboxPrev = () => {
    setLightboxState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }));
  };

  // Enquiry Modal Controls
  const handleOpenEnquiry = (roomName = "") => {
    setEnquiryModal({
      isOpen: true,
      room: roomName,
    });
  };

  const handleCloseEnquiry = () => {
    setEnquiryModal({
      isOpen: false,
      room: "",
    });
  };

  return (
    <div className="luxury-app-wrapper">
      {/* 1. Header & Navigation */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry("")} />

      {/* 2. Hero Section */}
      <Hero onOpenEnquiry={() => handleOpenEnquiry("")} />

      {/* 3. Property Introduction & Story */}
      <Introduction />

      {/* 4. Rooms and Accommodation */}
      <Rooms
        onOpenRoomGallery={handleOpenRoomGallery}
        onOpenEnquiryWithRoom={(roomName) => handleOpenEnquiry(roomName)}
      />

      {/* 5. Amenities & Facilities */}
      <Amenities />

      {/* 6. Experiences & Highlights */}
      <Experiences onOpenEnquiry={() => handleOpenEnquiry("")} />

      {/* 7. Room & Estate Photo Gallery */}
      <Gallery onImageClick={handleOpenGeneralGallery} />

      {/* 8. Location & Getting There */}
      <Location />

      {/* 9. Guest Testimonials */}
      <Reviews />

      {/* 10. Frequently Asked Questions */}
      <FAQ onOpenEnquiry={() => handleOpenEnquiry("")} />

      {/* 11. Contact & WhatsApp Form */}
      <Contact preselectedRoom={enquiryModal.room} />

      {/* 12. Footer */}
      <Footer onOpenEnquiry={() => handleOpenEnquiry("")} />

      {/* 13. Persistent Floating WhatsApp & Mobile Sticky Bar */}
      <FloatingWhatsApp onOpenEnquiry={() => handleOpenEnquiry("")} />

      {/* 14. Responsive Lightbox Modal */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        images={lightboxState.images}
        currentIndex={lightboxState.currentIndex}
        title={lightboxState.title}
        onClose={handleLightboxClose}
        onNext={handleLightboxNext}
        onPrev={handleLightboxPrev}
      />

      {/* 15. Stay Enquiry Drawer / Modal */}
      <BookingModal
        isOpen={enquiryModal.isOpen}
        onClose={handleCloseEnquiry}
        defaultRoom={enquiryModal.room}
      />
    </div>
  );
}
