"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./events.module.css";

const mockEvents = [
  {
    id: "1",
    title: "National U-17 Football Championship 2026",
    sport: "Football",
    location: "Godswill Akpabio Stadium, Uyo",
    date: "2026-08-15",
    status: "Upcoming",
    ticketsAvailable: 1500,
    bannerUrl: "/images/nigerian_sports_event.png",
  },
  {
    id: "2",
    title: "22nd Nigeria National Sports Festival",
    sport: "Multi-Sport",
    location: "Moshood Abiola Stadium, Abuja",
    date: "2026-09-02",
    status: "Upcoming",
    ticketsAvailable: 5000,
    bannerUrl: "/images/nigerian_stadium.png",
  },
  {
    id: "3",
    title: "NBBF Premier League Finals: Lagos vs Rivers",
    sport: "Basketball",
    location: "Teslim Balogun Indoor Hall, Lagos",
    date: "2026-07-28",
    status: "Ongoing",
    ticketsAvailable: 420,
    bannerUrl: "/images/demo/basketball-court.jpg",
  },
];

const liveScores = [
  { match: "Super Eagles Friendly: Nigeria 2 - 1 Ghana", time: "78' (LIVE)", sport: "Football" },
  { match: "NBBF Finals: Lagos Hoops 68 - 64 Rivers Hoops", time: "Q4 3:12 (LIVE)", sport: "Basketball" },
  { match: "National Athletics 100m Semi-Final 1: Obasi 10.12s", time: "Official", sport: "Athletics" }
];

export default function EventsDashboard() {
  const [activeTab, setActiveTab] = useState("events"); // events, liveScores, leaderboards
  const [selectedEventModal, setSelectedEventModal] = useState(null);
  const [ticketIssued, setTicketIssued] = useState(false);

  return (
    <div className={styles.eventsDashboard}>
      <div className={styles.header}>
        <div>
          <span className={styles.badge}>Module 6: Events & Competitions</span>
          <h1 className={styles.title}>National Calendar, Live Scores & Ticketing</h1>
          <p className={styles.subtitle}>
            National, state & local competitions, live scoreboard ticker, participant registration & digital QR tickets.
          </p>
        </div>

        <button className="button-primary" onClick={() => alert("Organizers Event Submission Form...")}>
          + Sanction New Event
        </button>
      </div>

      {/* Live Match Scoreboard Ticker */}
      <div className={styles.tickerContainer}>
        <span className={styles.tickerTitle}>🔴 LIVE SCORES TICKER:</span>
        <div className={styles.tickerTrack}>
          {liveScores.map((ls, idx) => (
            <div key={idx} className={styles.tickerItem}>
              <span>{ls.sport}:</span>
              <strong>{ls.match}</strong>
              <span className={styles.liveTag}>{ls.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className={styles.featureTabs}>
        <button 
          className={`${styles.tabBtn} ${activeTab === "events" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("events")}
        >
          📅 Calendar & Registration
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === "liveScores" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("liveScores")}
        >
          🏆 Live Results & Matches
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === "leaderboards" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("leaderboards")}
        >
          🥇 State Rankings & Leaderboard
        </button>
      </div>

      {activeTab === "events" && (
        <div className={styles.eventsGrid}>
          {mockEvents.map(event => (
            <div key={event.id} className={`${styles.eventCard} card`}>
              <div className={styles.eventBannerContainer}>
                <Image src={event.bannerUrl} alt={event.title} fill style={{ objectFit: 'cover' }} />
                <div className={styles.statusBadge}>{event.status}</div>
              </div>

              <div className={styles.eventInfo}>
                <div className={styles.eventHeaderRow}>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <span className={styles.sportTag}>{event.sport}</span>
                </div>
                
                <p className={styles.eventLocation}>📍 {event.location}</p>
                <p className={styles.eventDate}>📅 Date: {event.date}</p>

                <div className={styles.cardFooter}>
                  <span>🎟️ {event.ticketsAvailable} Passes Left</span>
                  <button 
                    className="button-primary"
                    onClick={() => {
                      setSelectedEventModal(event);
                      setTicketIssued(false);
                    }}
                  >
                    Register / Pass
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "liveScores" && (
        <div className={styles.scoresList}>
          {liveScores.map((ls, i) => (
            <div key={i} className={`${styles.scoreCard} card`}>
              <div className={styles.scoreHeader}>
                <span>{ls.sport}</span>
                <span className={styles.livePulse}>● {ls.time}</span>
              </div>
              <h3 className={styles.matchText}>{ls.match}</h3>
              <div className={styles.matchActions}>
                <button className={styles.matchBtn} onClick={() => alert("Loading match stats commentary...")}>
                  📊 View Match Statistics
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "leaderboards" && (
        <div className={`${styles.leaderboardBox} card`}>
          <h2>🥇 National Sports Festival Medal Table (2026 Standings)</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Rank</th>
                <th>State / Delegation</th>
                <th>Gold 🥇</th>
                <th>Silver 🥈</th>
                <th>Bronze 🥉</th>
                <th>Total Medals</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Delta State</td>
                <td>42</td>
                <td>28</td>
                <td>19</td>
                <td><strong>89</strong></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Lagos State</td>
                <td>38</td>
                <td>31</td>
                <td>22</td>
                <td><strong>91</strong></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Edo State</td>
                <td>29</td>
                <td>24</td>
                <td>18</td>
                <td><strong>71</strong></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Kano State</td>
                <td>21</td>
                <td>19</td>
                <td>15</td>
                <td><strong>55</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Ticket Pass Modal */}
      {selectedEventModal && (
        <div className={styles.modalOverlay} onClick={() => setSelectedEventModal(null)}>
          <div className={styles.modalCard} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedEventModal(null)}>✕</button>

            {!ticketIssued ? (
              <>
                <h2>🎟️ Digital Ticket & Athlete Pass</h2>
                <p>Event: <strong>{selectedEventModal.title}</strong></p>
                <p>Location: 📍 {selectedEventModal.location}</p>

                <div className={styles.ticketForm}>
                  <label>Pass Type</label>
                  <select className={styles.select}>
                    <option>Athlete / Participant Entry Pass (NIN Verified)</option>
                    <option>Standard Spectator Ticket (₦2,000)</option>
                    <option>VIP Press & Media Accreditation</option>
                  </select>

                  <button 
                    className="button-primary"
                    onClick={() => setTicketIssued(true)}
                  >
                    Generate Digital QR Ticket Pass
                  </button>
                </div>
              </>
            ) : (
              <div className={styles.qrTicketBox}>
                <div className={styles.qrHeader}>
                  <span>OFFICIAL DIGITAL PASS</span>
                  <h3>{selectedEventModal.title}</h3>
                </div>

                <div className={styles.qrCodeSim}>
                  <div className={styles.qrSquare}>
                    <span>[ QR CODE PASS ]</span>
                    <p>NSC-TICKET-894102</p>
                  </div>
                </div>

                <p style={{ fontSize: "0.85rem", color: "#10b981", fontWeight: "700" }}>
                  ✓ Pass Activated & Saved to NaijaSports Wallet
                </p>

                <button className="button-primary" onClick={() => setSelectedEventModal(null)}>
                  Close Ticket
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
