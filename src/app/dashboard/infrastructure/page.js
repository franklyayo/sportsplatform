"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./infrastructure.module.css";

const mockFacilities = [
  {
    id: "1",
    name: "Godswill Akpabio International Stadium (Nest of Champions)",
    facilityType: "Stadium",
    location: "Uyo, Akwa Ibom State",
    capacity: 30000,
    condition: "World Class",
    amenities: ["Floodlights", "VIP Suites", "Athletics Track", "VAR Ready", "Press Center"],
    imageUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=600&auto=format&fit=crop",
    bookingAvailable: true,
    pricePerDay: "₦2,500,000"
  },
  {
    id: "2",
    name: "Moshood Abiola National Stadium",
    facilityType: "National Sports Complex",
    location: "Abuja, FCT",
    capacity: 60491,
    condition: "Excellent",
    amenities: ["Natural Grass", "Velodrome", "Indoor Sports Hall", "VIP Lounge"],
    imageUrl: "https://images.unsplash.com/photo-1518605368461-1eb7b63f2735?q=80&w=600&auto=format&fit=crop",
    bookingAvailable: true,
    pricePerDay: "₦4,000,000"
  },
  {
    id: "3",
    name: "Teslim Balogun Stadium & Arena",
    facilityType: "Multi-Purpose Stadium",
    location: "Surulere, Lagos State",
    capacity: 24325,
    condition: "Good",
    amenities: ["Artificial Turf", "Locker Rooms", "Olympic Pool", "Media Hub"],
    imageUrl: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=600&auto=format&fit=crop",
    bookingAvailable: true,
    pricePerDay: "₦1,800,000"
  },
  {
    id: "4",
    name: "Remo Stars High-Performance Sports Center",
    facilityType: "Training Complex & Academy",
    location: "Ikenne, Ogun State",
    capacity: 5000,
    condition: "World Class",
    amenities: ["Natural Hybrid Turf", "Cryotherapy Lab", "Gymnasium", "Hotel Lodge"],
    imageUrl: "https://images.unsplash.com/photo-1551280857-2b9bbe5260fc?q=80&w=600&auto=format&fit=crop",
    bookingAvailable: true,
    pricePerDay: "₦1,200,000"
  }
];

export default function InfrastructureDashboard() {
  const [selectedType, setSelectedType] = useState("All");
  const [bookingFacility, setBookingFacility] = useState(null);
  const [virtualTourFacility, setVirtualTourFacility] = useState(null);
  const [bookingDate, setBookingDate] = useState("2026-08-15");

  const filteredFacilities = mockFacilities.filter(f => {
    if (selectedType !== "All" && !f.facilityType.includes(selectedType)) return false;
    return true;
  });

  return (
    <div className={styles.infraDashboard}>
      <div className={styles.header}>
        <div>
          <span className={styles.badge}>Module 3: Infrastructure Hub</span>
          <h1 className={styles.title}>National Sports Infrastructure Directory & Booking</h1>
          <p className={styles.subtitle}>
            Stadiums, arenas, indoor gyms, availability calendars, online reservations & 360 virtual inspection tours.
          </p>
        </div>
        <div className={styles.actions}>
          <button className="button-primary" onClick={() => alert("NSC Facility Audit Registration Form...")}>
            + Register Facility
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <div className={styles.mainLayout}>
        {/* Filters Sidebar */}
        <aside className={`${styles.filtersSidebar} card`}>
          <h3 className={styles.filterTitle}>Facility Filters</h3>
          
          <div className={styles.filterGroup}>
            <label>Facility Category</label>
            <select 
              className={styles.select}
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Stadium">Stadiums</option>
              <option value="Complex">Sports Complexes</option>
              <option value="Training">Training Academies</option>
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label>Amenities Checklist</label>
            <div className={styles.checkboxGroup}>
              <label><input type="checkbox" defaultChecked /> Floodlights</label>
              <label><input type="checkbox" defaultChecked /> VAR Ready</label>
              <label><input type="checkbox" defaultChecked /> Medical & Gym</label>
            </div>
          </div>
        </aside>

        {/* Facilities Grid */}
        <div className={styles.facilitiesGrid}>
          {filteredFacilities.map(facility => (
            <div key={facility.id} className={`${styles.facilityCard} card`}>
              <div className={styles.facilityImageContainer}>
                <Image src={facility.imageUrl} alt={facility.name} fill style={{ objectFit: 'cover' }} />
                <div className={styles.badgeAvailable}>Available for Booking</div>
                <button 
                  className={styles.tourBtnOverlay}
                  onClick={() => setVirtualTourFacility(facility)}
                >
                  🕶️ 360° Virtual Tour
                </button>
              </div>

              <div className={styles.facilityInfo}>
                <div className={styles.titleRow}>
                  <h3 className={styles.facilityName}>{facility.name}</h3>
                  <span className={styles.priceTag}>{facility.pricePerDay}</span>
                </div>
                
                <p className={styles.facilityLocation}>📍 {facility.location}</p>

                <div className={styles.amenityList}>
                  {facility.amenities.map(a => (
                    <span key={a} className={styles.amenityBadge}>{a}</span>
                  ))}
                </div>

                <div className={styles.cardActions}>
                  <button 
                    className="button-primary"
                    onClick={() => setBookingFacility(facility)}
                  >
                    📅 Book Facility
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Calendar Modal */}
      {bookingFacility && (
        <div className={styles.modalOverlay} onClick={() => setBookingFacility(null)}>
          <div className={styles.modalCard} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setBookingFacility(null)}>✕</button>
            
            <h2>📅 Reserve Facility: {bookingFacility.name}</h2>
            <p>Select event dates and confirm official booking with NSC Facility Management.</p>

            <div className={styles.modalForm}>
              <label>Event Date</label>
              <input 
                type="date" 
                value={bookingDate} 
                onChange={(e) => setBookingDate(e.target.value)}
                className={styles.dateInput} 
              />

              <label>Event Purpose / Match Category</label>
              <select className={styles.select}>
                <option>National League Match</option>
                <option>Grassroots Championship</option>
                <option>Training Camp</option>
                <option>Corporate Sports Event</option>
              </select>

              <div className={styles.bookingFeeBox}>
                <span>Daily Rental Fee:</span>
                <strong>{bookingFacility.pricePerDay}</strong>
              </div>

              <button 
                className="button-primary"
                onClick={() => {
                  alert(`Booking confirmed for ${bookingFacility.name} on ${bookingDate}! Confirmation sent to your email.`);
                  setBookingFacility(null);
                }}
              >
                Proceed to Payment & Secure Reservation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 360 Virtual Tour Simulator Modal */}
      {virtualTourFacility && (
        <div className={styles.modalOverlay} onClick={() => setVirtualTourFacility(null)}>
          <div className={styles.modalCardLarge} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setVirtualTourFacility(null)}>✕</button>
            
            <h2>🕶️ 360° Virtual Inspection Tour: {virtualTourFacility.name}</h2>
            <p>Interactive 360-degree stadium view simulator.</p>

            <div className={styles.virtualFrame}>
              <Image src={virtualTourFacility.imageUrl} alt="360 View" fill style={{ objectFit: 'cover' }} />
              <div className={styles.panoramaOverlay}>
                <span>🔄 Drag to Rotate 360° • High Definition Pitch Inspection Mode</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
