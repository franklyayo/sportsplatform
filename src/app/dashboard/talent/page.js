"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./talent.module.css";

const mockTalents = [
  {
    id: "1",
    name: "Chinedu Obasi",
    sport: "Football",
    position: "Striker",
    stateOfOrigin: "Lagos",
    age: 18,
    height: 185,
    weight: 78,
    preferredFoot: "Right",
    isVerified: true,
    nin: "NIN-8492049182",
    wadaStatus: "Anti-Doping Cleared",
    scoutRating: "9.2 / 10",
    achievements: ["Top Scorer, U-17 State League", "MVP Lagos Youth Cup 2025"],
    stats: { goals: 24, assists: 8, sprintSpeed: "34 km/h", shotPower: "88" },
    mediaUrl: "/images/nigerian_athlete_1.png",
  },
  {
    id: "2",
    name: "Tunde Bakare",
    sport: "Football",
    position: "Midfielder",
    stateOfOrigin: "Ogun",
    age: 20,
    height: 178,
    weight: 72,
    preferredFoot: "Both",
    isVerified: true,
    nin: "NIN-7391038472",
    wadaStatus: "Anti-Doping Cleared",
    scoutRating: "8.9 / 10",
    achievements: ["Best Midfielder Ogun State Championship"],
    stats: { goals: 5, assists: 15, passAccuracy: "89%", tackles: "3.2/game" },
    mediaUrl: "/images/avatars/tunde.svg",
  },
  {
    id: "3",
    name: "Ngozi Okoro",
    sport: "Football",
    position: "Center Back",
    stateOfOrigin: "Enugu",
    age: 19,
    height: 178,
    weight: 72,
    preferredFoot: "Right",
    isVerified: true,
    nin: "NIN-2940184721",
    wadaStatus: "Anti-Doping Cleared",
    scoutRating: "9.0 / 10",
    achievements: ["Captain, Eastern Youth Academy", "Clean Sheet Record (15)"],
    stats: { tacklesPerGame: 4.5, interceptions: 62, aerialDuelsWon: "84%" },
    mediaUrl: "/images/avatars/ngozi.svg",
  },
  {
    id: "4",
    name: "Ibrahim Musa",
    sport: "Basketball",
    position: "Point Guard",
    stateOfOrigin: "Kano",
    age: 17,
    height: 192,
    weight: 82,
    preferredFoot: "Right",
    isVerified: true,
    nin: "NIN-5829103948",
    wadaStatus: "Anti-Doping Cleared",
    scoutRating: "9.4 / 10",
    achievements: ["MVP Northern Zone Basketball Championship"],
    stats: { pointsPerGame: "22.4", assistsPerGame: "8.1", steals: "2.8" },
    mediaUrl: "/images/avatars/ibrahim.svg",
  },
  {
    id: "5",
    name: "Blessing Okagbare Jr.",
    sport: "Athletics",
    position: "100m / 200m Sprint",
    stateOfOrigin: "Delta",
    age: 18,
    height: 175,
    weight: 64,
    preferredFoot: "Right",
    isVerified: true,
    nin: "NIN-1940293847",
    wadaStatus: "Anti-Doping Cleared",
    scoutRating: "9.6 / 10",
    achievements: ["Gold Medal, 100m National Junior Trials (10.98s)"],
    stats: { pb100m: "10.98s", pb200m: "22.45s", reactionTime: "0.12s" },
    mediaUrl: "/images/nigerian_athlete_2.png",
  },
];

export default function TalentDashboard() {
  const [selectedSport, setSelectedSport] = useState("All");
  const [selectedState, setSelectedState] = useState("All");
  const [activeTab, setActiveTab] = useState("database"); // database, scouting, international
  const [activeTalentModal, setActiveTalentModal] = useState(null);

  const filteredTalents = mockTalents.filter((t) => {
    if (selectedSport !== "All" && t.sport !== selectedSport) return false;
    if (selectedState !== "All" && t.stateOfOrigin !== selectedState) return false;
    return true;
  });

  return (
    <div className={styles.talentDashboard}>
      <div className={styles.header}>
        <div>
          <span className={styles.badge}>Module 1: Talent ID & Discovery</span>
          <h1 className={styles.title}>National Grassroots Talent Pipeline</h1>
          <p className={styles.subtitle}>
            National talent database, scouting evaluation tools, performance tracking & international recruiter access.
          </p>
        </div>
        <div className={styles.actions}>
          <button className="button-primary" onClick={() => alert("Registration form modal for new grassroots athlete...")}>
            + Register Athlete (NIN Verified)
          </button>
        </div>
      </div>

      {/* Feature Tabs */}
      <div className={styles.featureTabs}>
        <button 
          className={`${styles.tabBtn} ${activeTab === "database" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("database")}
        >
          🔍 National Talent Database
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === "scouting" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("scouting")}
        >
          📋 Scouting & Recruitment Evaluation
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === "international" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("international")}
        >
          🌐 International Talent Access Gateway
        </button>
      </div>

      {activeTab === "database" && (
        <div className={styles.mainLayout}>
          {/* Filters Sidebar */}
          <aside className={`${styles.filtersSidebar} card`}>
            <h3 className={styles.filterTitle}>Scouting Filters</h3>
            
            <div className={styles.filterGroup}>
              <label>Sport Discipline</label>
              <select 
                className={styles.select}
                value={selectedSport}
                onChange={(e) => setSelectedSport(e.target.value)}
              >
                <option value="All">All Sports</option>
                <option value="Football">Football</option>
                <option value="Basketball">Basketball</option>
                <option value="Athletics">Athletics (Track & Field)</option>
              </select>
            </div>

            <div className={styles.filterGroup}>
              <label>State of Origin</label>
              <select 
                className={styles.select}
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option value="All">All 36 States</option>
                <option value="Lagos">Lagos State</option>
                <option value="Kano">Kano State</option>
                <option value="Enugu">Enugu State</option>
                <option value="Ogun">Ogun State</option>
                <option value="Delta">Delta State</option>
              </select>
            </div>

            <div className={styles.filterGroup}>
              <label>Identity & Integrity</label>
              <div className={styles.checkboxGroup}>
                <label><input type="checkbox" defaultChecked /> NIN Identity Verified</label>
                <label><input type="checkbox" defaultChecked /> WADA Anti-Doping Cleared</label>
              </div>
            </div>
            
            <button className={styles.applyBtn}>Apply Scouting Matrix</button>
          </aside>

          {/* Talents Grid */}
          <div className={styles.talentsGrid}>
            {filteredTalents.map(talent => (
              <div 
                key={talent.id} 
                className={`${styles.talentCard} card`} 
                onClick={() => setActiveTalentModal(talent)}
              >
                <div className={styles.talentImageContainer}>
                  <Image src={talent.mediaUrl} alt={talent.name} fill style={{ objectFit: 'cover' }} />
                  <div className={styles.sportBadge}>{talent.sport}</div>
                  <div className={styles.verifiedBadge}>✓ {talent.nin.slice(0, 7)}...</div>
                </div>
                <div className={styles.talentInfo}>
                  <div className={styles.nameRow}>
                    <h3 className={styles.talentName}>{talent.name}</h3>
                    <span className={styles.ratingBadge}>{talent.scoutRating}</span>
                  </div>
                  <p className={styles.talentDetail}>{talent.position} • {talent.age} yrs • {talent.stateOfOrigin}</p>
                  
                  <div className={styles.talentStats}>
                    {talent.stats && Object.entries(talent.stats).map(([key, value]) => (
                      <div key={key} className={styles.statPill}>
                        <span className={styles.statKey}>{key}</span>
                        <span className={styles.statVal}>{value}</span>
                      </div>
                    )).slice(0, 3)}
                  </div>

                  <div className={styles.cardActionRow}>
                    <span>View Performance Portfolio →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "scouting" && (
        <div className={styles.scoutingToolSection}>
          <div className={`${styles.scoutBanner} card`}>
            <h3>📋 NSC Talent Evaluation & Scorecard Tool</h3>
            <p>Certified scouts and coaches can grade grassroots athletes on physical metrics, tactical IQ, and discipline.</p>
          </div>

          <div className={styles.scoutGrid}>
            {mockTalents.map(t => (
              <div key={t.id} className={`${styles.scoutCard} card`}>
                <div className={styles.scoutCardTop}>
                  <div>
                    <h4>{t.name}</h4>
                    <span>{t.sport} - {t.position}</span>
                  </div>
                  <strong className={styles.ratingBox}>{t.scoutRating}</strong>
                </div>

                <div className={styles.scoresList}>
                  <div className={styles.scoreRow}>
                    <span>Speed & Stamina:</span>
                    <strong>94 / 100</strong>
                  </div>
                  <div className={styles.scoreRow}>
                    <span>Tactical Vision:</span>
                    <strong>88 / 100</strong>
                  </div>
                  <div className={styles.scoreRow}>
                    <span>Technique & Control:</span>
                    <strong>92 / 100</strong>
                  </div>
                </div>

                <button className={styles.evalBtn} onClick={() => alert(`Opening official NSC evaluation form for ${t.name}...`)}>
                  ✍️ Add Scout Evaluation Report
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "international" && (
        <div className={styles.intlSection}>
          <div className={`${styles.intlBanner} card`}>
            <h3>🌐 International Recruiter & Partner Gateway</h3>
            <p>Verified scouts from FIFA, European Academies, NBA Africa, and US University Athletic Programs access audited Nigerian talent portfolios.</p>
          </div>

          <div className={styles.intlStatsGrid}>
            <div className={`${styles.intlStatCard} card`}>
              <h4>142 Foreign Scouts Active</h4>
              <p>Europe, USA, Middle East</p>
            </div>
            <div className={`${styles.intlStatCard} card`}>
              <h4>38 International Trials Booked</h4>
              <p>2026 Season</p>
            </div>
            <div className={`${styles.intlStatCard} card`}>
              <h4>₦1.2B Transfer & Scholarship Value</h4>
              <p>Facilitated via Platform</p>
            </div>
          </div>
        </div>
      )}

      {/* Talent Profile Modal */}
      {activeTalentModal && (
        <div className={styles.modalOverlay} onClick={() => setActiveTalentModal(null)}>
          <div className={styles.modalCard} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setActiveTalentModal(null)}>✕</button>
            <div className={styles.modalHeader}>
              <div className={styles.modalImgBox}>
                <Image src={activeTalentModal.mediaUrl} alt={activeTalentModal.name} fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.modalHeaderInfo}>
                <span className={styles.modalVerified}>Verified Athlete ({activeTalentModal.nin})</span>
                <h2>{activeTalentModal.name}</h2>
                <p>{activeTalentModal.sport} • {activeTalentModal.position} • {activeTalentModal.stateOfOrigin} State</p>
                <div className={styles.modalPills}>
                  <span className={styles.greenPill}>{activeTalentModal.wadaStatus}</span>
                  <span className={styles.goldPill}>Scout Score: {activeTalentModal.scoutRating}</span>
                </div>
              </div>
            </div>

            <div className={styles.modalBody}>
              <h3>🏆 Career Achievements & Honors</h3>
              <ul>
                {activeTalentModal.achievements.map((ach, i) => (
                  <li key={i}>✓ {ach}</li>
                ))}
              </ul>

              <h3>📊 Verified Performance Metrics</h3>
              <div className={styles.modalMetricsGrid}>
                {Object.entries(activeTalentModal.stats).map(([k, v]) => (
                  <div key={k} className={styles.metricBox}>
                    <span>{k}</span>
                    <strong>{v}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button className="button-primary" onClick={() => alert(`Shortlisting ${activeTalentModal.name} to Scouting List...`)}>
                + Shortlist to Scouting Portfolio
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
