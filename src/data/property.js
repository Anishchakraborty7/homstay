/**
 * ============================================================================
 * PROPERTY CONFIGURATION FILE - SINGLE SOURCE OF TRUTH
 * ============================================================================
 * 
 * Property owners: Edit this single file to completely customize all text,
 * contact details, WhatsApp number, rooms, prices, images, amenities, and policies.
 * 
 * NOTE ON DEMO DATA:
 * All prices, availability, and guest reviews below are editable demonstration
 * placeholders. Replace them with your actual property rates and verified details.
 */

export const PROPERTY_CONFIG = {
  // Brand & Identity
  name: "Avana Forest Estate",
  badge: "Boutique Homestay & Luxury Villa Retreat",
  tagline: "Where Nature Meets Exceptional Comfort",
  shortDescription:
    "Nestled amidst 25 acres of misty coffee plantations and ancient rainforest trees in the Western Ghats, Avana offers a secluded haven of understated luxury, farm-to-table culinary experiences, and soul-stirring tranquility.",
  
  // Contact & WhatsApp Configuration
  // IMPORTANT: Enter your WhatsApp phone number in international format WITHOUT '+' or spaces.
  // Example for India: "919876543210", for UK: "447123456789", for US: "14155552671"
  whatsappNumber: "916001135715",
  phoneNumber: "+91 60011 35715",
  secondaryPhone: "+91 60011 35715",
  email: "stay@avanaforestestate.com",
  
  // Location & Navigation
  location: {
    estate: "Avana Forest Estate & Plantation",
    area: "Byakaravalli, Sakleshpur",
    district: "Hassan District",
    state: "Karnataka",
    pincode: "573134",
    country: "India",
    fullAddress: "Avana Forest Estate, Byakaravalli Road, Sakleshpur, Karnataka 573134, India",
    googleMapsUrl: "https://maps.google.com/?q=Sakleshpur+Karnataka+India",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124584.57790379963!2d75.71457816823908!3d12.969136932408016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5260195d52cc7%3A0xc3b839aa03b71ebf!2sSakleshpur%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    nearestHubs: [
      { name: "Mangalore International Airport (IXE)", distance: "132 km (~3.5 hrs drive)" },
      { name: "Bengaluru Kempegowda Airport (BLR)", distance: "235 km (~4.5 hrs drive)" },
      { name: "Sakleshpur Railway Station", distance: "14 km (~25 mins drive)" },
      { name: "Hassan Junction Railway Station", distance: "48 km (~1 hr drive)" },
    ],
    gettingHereTips:
      "Private transfers can be arranged on request from Bengaluru or Mangalore airports. The last 2.5 km traverses a scenic, scenic private estate road suitable for all vehicles.",
  },

  // Timings & Stay Policies
  policies: {
    checkIn: "01:00 PM",
    checkOut: "11:00 AM",
    advanceBooking: "50% advance deposit to confirm your reservation dates.",
    cancellation: "100% refund up to 7 days before check-in. 50% refund within 3-7 days.",
    petsAllowed: "Pet-friendly cottages available on prior confirmation.",
    childPolicy: "Children under 6 stay complimentary with existing bedding.",
  },

  // Hero Section
  hero: {
    preTitle: "YOUR PRIVATE ESCAPE",
    headline: "Where Nature Meets Exceptional Comfort",
    subheadline:
      "A secluded sanctuary enveloped in misty coffee groves, birdsong, and slow living. Experience authentic boutique hospitality crafted for the mindful traveler.",
    backgroundImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=85",
    highlights: [
      "25-Acre Private Plantation",
      "Farm-Fresh Gourmet Dining",
      "Forest Plunge Pool",
      "Serene Valley Views",
    ],
  },

  // Property Overview & Story
  introduction: {
    heading: "A Sanctuary Crafted for Mindful Repose",
    subheading: "SLOW DOWN TO THE RHYTHM OF THE MOUNTAINS",
    narrative: [
      "Tucked away from crowded tourist trails, Avana Forest Estate was born out of a deep reverence for the Western Ghats' rich biodiversity. Spread across 25 acres of shade-grown Arabica coffee, silver oak trees, and spice trails, our estate invites you to unplug and rediscover stillness.",
      "Every suite has been thoughtfully positioned to honor the landscape, utilizing reclaimed teakwood, indigenous stone, and expansive floor-to-ceiling glass that frames the shifting morning mist and golden sunset horizons.",
    ],
    stats: [
      { label: "Acres of Rainfed Estate", value: "25+" },
      { label: "Boutique Suites & Villas", value: "8" },
      { label: "Elevation Above Sea Level", value: "3,200 ft" },
      { label: "Species of Birds Spotted", value: "65+" },
    ],
    mainImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=900&q=80",
    quote: "“The mornings belong to the whistling thrush and steaming estate coffee; the evenings to crackling bonfires and starry skies.”",
    host: "Anand & Gayatri Rao, Estate Hosts",
  },

  // Rooms and Accommodation
  // Each room has rich details, photography, price in INR (demo), and WhatsApp prefill link
  rooms: [
    {
      id: "canopy-villa",
      name: "The Canopy Pool Villa",
      category: "Private Villa",
      badge: "Signature Stay",
      pricePerNight: 7499,
      currency: "₹",
      priceLabel: "per night + taxes (includes farm breakfast)",
      guests: "Up to 3 Guests (2 Adults + 1 Child)",
      bed: "1 King Plush Bed + Daybed",
      size: "750 sq. ft. living area",
      bathroom: "Ensuite stone bath with outdoor rain shower",
      balcony: "Expansive private deck with heated plunge pool & valley view",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      ],
      description:
        "Our crown jewel sanctuary perched along the edge of the hill. Features an infinity plunge pool, handcrafted teak furniture, expansive panoramic valley deck, and an open-sky rain shower.",
      amenities: [
        "Private Plunge Pool",
        "Panoramic Valley Deck",
        "Open-Sky Rain Shower",
        "French Press Coffee Station",
        "High-Speed Optical Wi-Fi",
        "Mini Refrigerator & Kettle",
        "Premium Organic Toiletries",
        "Daily Evening Turndown Service",
      ],
    },
    {
      id: "mist-valley-suite",
      name: "The Mist Valley Suite",
      category: "Luxury Suite",
      badge: "Best Valley View",
      pricePerNight: 5499,
      currency: "₹",
      priceLabel: "per night + taxes (includes farm breakfast)",
      guests: "Up to 2 Adults",
      bed: "1 California King Bed",
      size: "520 sq. ft.",
      bathroom: "Deep freestanding soaking tub & dual rain shower",
      balcony: "Private glass-railing balcony facing the sunset ridge",
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
      ],
      description:
        "Designed for romantic getaways, this suite commands breathtaking views of the shifting mist over the valley. Soak in the tub with floor-to-ceiling glass views of the Western Ghats canopy.",
      amenities: [
        "Valley Sunset Balcony",
        "Deep Soaking Tub",
        "King Four-Poster Bed",
        "Gourmet Tea & Coffee Bar",
        "Complimentary Wi-Fi",
        "Smart Bluetooth Speaker",
        "Herbal Bath Salts & Robes",
      ],
    },
    {
      id: "plantation-cottage",
      name: "The Plantation Stone Cottage",
      category: "Private Cottage",
      badge: "Cozy & Quiet",
      pricePerNight: 4499,
      currency: "₹",
      priceLabel: "per night + taxes (includes farm breakfast)",
      guests: "Up to 3 Adults or Family of 4",
      bed: "1 King Bed + 1 Single Daybed",
      size: "580 sq. ft.",
      bathroom: "Modern ensuite bath with skylight",
      balcony: "Shaded verandah overlooking Arabica coffee plants",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      ],
      description:
        "Built with indigenous laterite stone and warm timber rafters, this private cottage sits directly inside the estate plantation. Step onto your verandah to the fragrant aroma of coffee blossoms.",
      amenities: [
        "Coffee Plantation Verandah",
        "Skylight Ensuite Bath",
        "Writing Desk & Library Nook",
        "High-Speed Wi-Fi",
        "Warm Heating for Winter",
        "Kettle & Herbal Infusions",
        "Eco-Friendly Cotton Linens",
      ],
    },
    {
      id: "heritage-room",
      name: "The Heritage Garden Room",
      category: "Deluxe Room",
      badge: "Classic Heritage",
      pricePerNight: 3499,
      currency: "₹",
      priceLabel: "per night + taxes (includes farm breakfast)",
      guests: "Up to 2 Adults",
      bed: "1 Queen Teakwood Bed",
      size: "380 sq. ft.",
      bathroom: "Attached vintage-tiled bathroom with hot water shower",
      balcony: "Shared open courtyard & private patio seating",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      ],
      description:
        "An intimate room celebrating traditional regional architecture with clay-tiled roofs, terracotta pavers, hand-carved pillars, and quiet garden views blooming with native orchids.",
      amenities: [
        "Garden Patio Seating",
        "Antique Teakwood Decor",
        "Modern Rain Shower",
        "Estate Coffee Station",
        "High-Speed Wi-Fi",
        "Cotton Bathrobes",
      ],
    },
  ],

  // Visual Photo Gallery with Category Filters
  gallery: [
    {
      id: "g1",
      title: "Estate Infinity Plunge Pool",
      category: "Outdoors",
      categoryLabel: "Outdoors & Grounds",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      description: "Infinity edge overlooking the rainforest canopy during golden hour.",
    },
    {
      id: "g2",
      title: "The Canopy Villa Suite Deck",
      category: "Rooms",
      categoryLabel: "Rooms & Suites",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      description: "Private wooden sun deck overlooking the morning valley mist.",
    },
    {
      id: "g3",
      title: "Glass Pavilion Dining Room",
      category: "Dining",
      categoryLabel: "Dining & Experiences",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      description: "Farm-to-table breakfast and candlelit evening dinners under the stars.",
    },
    {
      id: "g4",
      title: "Mist Valley Freestanding Tub",
      category: "Bathrooms",
      categoryLabel: "Bathrooms & Details",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      description: "Luxury ensuite with uninterrupted views of the Western Ghats.",
    },
    {
      id: "g5",
      title: "Morning Mist Across the Coffee Grove",
      category: "Outdoors",
      categoryLabel: "Outdoors & Grounds",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      description: "Wake up to gentle mountain mist rolling across the Arabica plantation.",
    },
    {
      id: "g6",
      title: "The Plantation Stone Cottage Verandah",
      category: "Rooms",
      categoryLabel: "Rooms & Suites",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      description: "Crafted with native stone and reclaimed timber for cozy retreats.",
    },
    {
      id: "g7",
      title: "Evening Bonfire & Stargazing",
      category: "Dining",
      categoryLabel: "Dining & Experiences",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      description: "Gather around the sunken fire pit under unpolluted, starlit mountain skies.",
    },
    {
      id: "g8",
      title: "Heritage Garden Courtyard",
      category: "Outdoors",
      categoryLabel: "Outdoors & Grounds",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
      description: "Paved courtyard filled with indigenous flora, ferns, and orchids.",
    },
    {
      id: "g9",
      title: "Organic Farm-Fresh Breakfast",
      category: "Dining",
      categoryLabel: "Dining & Experiences",
      image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=80",
      description: "Freshly roasted estate coffee, tropical fruits, and artisanal local breads.",
    },
    {
      id: "g10",
      title: "Open-Air Rain Shower Detail",
      category: "Bathrooms",
      categoryLabel: "Bathrooms & Details",
      image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
      description: "Herbal botanical soaps and showers framed by native stone masonry.",
    },
    {
      id: "g11",
      title: "Sunlit Bedroom Interiors",
      category: "Rooms",
      categoryLabel: "Rooms & Suites",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      description: "Crisp white linens, brass lighting fixtures, and serene forest views.",
    },
    {
      id: "g12",
      title: "Private Sunset Ridge Walk",
      category: "Outdoors",
      categoryLabel: "Outdoors & Grounds",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      description: "Direct access to private nature trails with sweeping vistas.",
    },
  ],

  // Curated Amenities & Facilities
  amenities: [
    {
      icon: "Wifi",
      title: "High-Speed Optical Wi-Fi",
      description: "Reliable fiber internet throughout suites and open decks, ideal for seamless remote work.",
    },
    {
      icon: "UtensilsCrossed",
      title: "Farm-to-Table Gourmet Dining",
      description: "Wholesome regional Malnad delicacies and continental fare made with organic estate produce.",
    },
    {
      icon: "Waves",
      title: "Forest Plunge Pool",
      description: "Secluded plunge pool surrounded by dense greenery and mountain panoramas.",
    },
    {
      icon: "Trees",
      title: "25-Acre Private Trails",
      description: "Guided or self-guided nature walks through shade-grown coffee, pepper vines, and streams.",
    },
    {
      icon: "Flame",
      title: "Evening Bonfire & BBQ",
      description: "Unwind around the warmth of a crackling fire pit under clear mountain constellations.",
    },
    {
      icon: "Zap",
      title: "100% Silent Power Backup",
      description: "Round-the-clock automatic inverter and silent generator support for uninterrupted comfort.",
    },
    {
      icon: "Car",
      title: "Secure On-Site Parking",
      description: "Spacious private parking inside the gated property with dedicated EV charging points.",
    },
    {
      icon: "Coffee",
      title: "Fresh Estate Coffee",
      description: "Unlimited freshly roasted single-origin Arabica coffee brewed to your taste throughout your stay.",
    },
    {
      icon: "Sparkles",
      title: "Daily Housekeeping & Turndown",
      description: "Attentive yet discreet housekeeping, herbal sanitization, and warm evening turndown.",
    },
    {
      icon: "ShieldCheck",
      title: "24/7 Gated Security",
      description: "Peace of mind with gated estate access, discreet night surveillance, and on-call caretakers.",
    },
    {
      icon: "PawPrint",
      title: "Pet-Friendly Grounds",
      description: "Designated pet-welcoming cottages and ample open grass for your four-legged companions.",
    },
    {
      icon: "Compass",
      title: "Curated Local Concierge",
      description: "Tailored itineraries, private cab hires, and offbeat viewpoint tours recommended by hosts.",
    },
  ],

  // Curated Experiences
  experiences: [
    {
      id: "exp1",
      title: "Guided Coffee Plantation Tour",
      time: "Morning 07:30 AM • 90 Mins",
      tag: "Signature Experience",
      description:
        "Walk alongside our resident estate naturalist to learn the craft of shade-grown Arabica coffee, spice intercropping, and berry harvesting followed by an artisanal coffee-cupping session.",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "exp2",
      title: "Sunset High Tea on the Ridge",
      time: "Evening 05:00 PM • 60 Mins",
      tag: "Scenic & Romantic",
      description:
        "Enjoy fresh spiced tea, handmade cardamom pastries, and local savories served on our secluded western ridge as the sun melts behind the misty mountain peaks.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "exp3",
      title: "Private Stargazing & Acoustic Bonfire",
      time: "Night 08:00 PM • On Request",
      tag: "Nighttime Magic",
      description:
        "Sakleshpur's unpolluted skies offer breathtaking celestial views of the Milky Way. Savor grilled kebabs and estate-pressed cider beside a warm crackling fire pit.",
      image: "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "exp4",
      title: "Estate Stream Trek & Forest Bathing",
      time: "Early Morning • 2 Hours",
      tag: "Nature & Wellness",
      description:
        "Recharge through the Japanese practice of 'Shinrin-yoku'. Follow private trails down to our crystal-clear natural stream, listening to the calls of endemic hornbills and kingfishers.",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    },
  ],

  // Testimonials & Reviews
  // Note: Clearly marked as demo reviews for property preview
  reviewsNotice: "Sample guest impressions for design preview. Real reviews can be linked from Google or TripAdvisor.",
  reviews: [
    {
      name: "Dr. Vikram & Shweta K.",
      city: "Bengaluru",
      rating: 5,
      date: "Stayed December 2025",
      room: "The Canopy Pool Villa",
      quote:
        "Avana exceeded every expectation. The private plunge pool facing the misty valley in the early morning is pure heaven. The food was so authentic and fresh—we didn’t want to leave. The hosts Anand and Gayatri made us feel like family.",
    },
    {
      name: "Rohit Deshmukh",
      city: "Mumbai",
      rating: 5,
      date: "Stayed January 2026",
      room: "The Plantation Stone Cottage",
      quote:
        "If you are looking for true silence, birdsong, and world-class coffee, this is the place. Wi-Fi was fast enough for my video conferences, and the evening bonfire was magical. Hands down the best homestay experience in the Western Ghats.",
    },
    {
      name: "Pooja & Sameer Sen",
      city: "Hyderabad",
      rating: 5,
      date: "Stayed February 2026",
      room: "The Mist Valley Suite",
      quote:
        "The attention to detail is remarkable—from the brass fittings to the fresh estate coffee grounds in the room. The sunset view from our balcony was unforgettable. Highly recommend booking via WhatsApp; response was instant and hassle-free.",
    },
  ],

  // Frequently Asked Questions
  faqs: [
    {
      question: "What are your check-in and check-out timings?",
      answer:
        "Check-in is from 01:00 PM onwards, and check-out is by 11:00 AM. Early check-in or late check-out is subject to room availability on that day and can be coordinated in advance via WhatsApp.",
    },
    {
      question: "How do I confirm my booking via WhatsApp?",
      answer:
        "Click any 'Enquire on WhatsApp' button on this website. It automatically composes a message with your selected room, dates, and guest count. Our reservations team will confirm live availability, share payment options (UPI, Netbanking, Cards), and issue your instant booking voucher upon receipt of the advance.",
    },
    {
      question: "Is advance payment required?",
      answer:
        "Yes, we require a 50% advance deposit to secure your room dates. The remaining balance can be settled upon check-in at the property via UPI, cash, or credit/debit card.",
    },
    {
      question: "What meals are included in the tariff?",
      answer:
        "All room tariffs include our complimentary gourmet farm-fresh breakfast and unlimited freshly roasted estate coffee/tea. Wholesome lunch and dinner featuring traditional local Malnad recipes or continental options are available on prior order.",
    },
    {
      question: "Is the homestay suitable for families with children?",
      answer:
        "Absolutely! We have safe, open grassy lawns, shallow splash areas in the plunge pool, board games, and child-friendly meal options. Children below 6 stay complimentary when sharing existing bedding.",
    },
    {
      question: "Are pets allowed at the property?",
      answer:
        "Yes, we warmly welcome well-behaved pets in our designated ground-floor Plantation Stone Cottages. Please inform us via WhatsApp during enquiry so we can reserve pet-suitable accommodation.",
    },
    {
      question: "Is Wi-Fi reliable for workations?",
      answer:
        "Yes, we have high-speed dedicated optical fiber Wi-Fi (up to 100 Mbps) with continuous power backup across all suites and common verandahs, making Avana a favorite choice for productive workations.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "100% refund for cancellations requested 7 days or more prior to your check-in date. Cancellations made between 3 to 7 days receive a 50% refund or free date-rescheduling voucher valid for 6 months. Cancellations under 3 days are non-refundable.",
    },
  ],

  // Social Links (Editable)
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    tripadvisor: "https://tripadvisor.com",
  },
};

/**
 * Utility helper to build a perfectly encoded WhatsApp booking enquiry link.
 * 
 * @param {Object} params
 * @param {string} params.roomName - Selected room name (optional)
 * @param {string} params.checkIn - Check-in date (optional)
 * @param {string} params.checkOut - Check-out date (optional)
 * @param {number|string} params.guests - Number of guests (optional)
 * @param {string} params.customMessage - Additional note or query (optional)
 * @returns {string} The formatted https://wa.me/... URL
 */
export function buildWhatsAppLink({
  roomName = "",
  checkIn = "",
  checkOut = "",
  guests = "",
  customMessage = "",
} = {}) {
  const number = PROPERTY_CONFIG.whatsappNumber;
  
  let msg = `Hello! I would like to enquire about staying at ${PROPERTY_CONFIG.name}.\n\n`;
  
  if (roomName) {
    msg += `🛏️ Selected Room: ${roomName}\n`;
  }
  if (checkIn) {
    msg += `📅 Check-in Date: ${checkIn}\n`;
  }
  if (checkOut) {
    msg += `📅 Check-out Date: ${checkOut}\n`;
  }
  if (guests) {
    msg += `👥 Guests: ${guests}\n`;
  }
  if (customMessage) {
    msg += `💬 Note / Query: ${customMessage}\n`;
  }
  
  msg += `\nPlease share live availability, total pricing, and booking details. Thank you!`;

  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
}
