"use client";

import { useState } from "react";
import styles from "./training.module.css";

export default function TrainingPage() {
  const [activeTab, setActiveTab] = useState("courses");
  const [certifiedUser, setCertifiedUser] = useState(false);
  const [activeCourseModal, setActiveCourseModal] = useState(null);

  const courses = [
    {
      id: 1,
      title: "NSC Certified Level 1 Youth Coaching License",
      target: "Coaches & Trainers",
      duration: "6 Modules (Self-Paced)",
      students: "4,250 Enrolled",
      badge: "Official NSC Accreditation",
      desc: "Comprehensive grassroots tactical coaching, athlete psychology, and FIFA/CAF approved age-group training methodology."
    },
    {
      id: 2,
      title: "WADA Anti-Doping & Sports Integrity Course 2026",
      target: "Athletes, Medical Staff & Officials",
      duration: "2 Modules (Mandatory)",
      students: "18,900 Enrolled",
      badge: "Global WADA Standard",
      desc: "Banned substances list, supplement safety, therapeutic use exemptions (TUE), and drug testing protocols."
    },
    {
      id: 3,
      title: "Sports Science, Hydration & Injury Prevention",
      target: "Physiotherapists & Athletes",
      duration: "4 Modules",
      students: "3,100 Enrolled",
      badge: "Sports Medicine",
      desc: "Advanced recovery protocols, ACL injury reduction exercises, climate hydration management for tropical environments."
    },
    {
      id: 4,
      title: "National Football Refereeing & VAR Guidelines",
      target: "Referees & Match Officials",
      duration: "5 Modules + Practical",
      students: "1,850 Enrolled",
      badge: "Referees Guild",
      desc: "IFAB laws of the game, video assistant refereeing (VAR) protocols, and match incident management."
    }
  ];

  const webinars = [
    {
      id: 101,
      title: "Webinar: High Altitude Performance Training in Jos",
      speaker: "Prof. Kenneth Alabi (Sports Science Specialist)",
      date: "Tomorrow, 4:00 PM WAT",
      attendees: "840 Registered"
    },
    {
      id: 102,
      title: "Webinar: Transitioning Grassroots Talents to Foreign Leagues",
      speaker: "FIFA Licensed Agent Michael Eyo",
      date: "Friday, 6:00 PM WAT",
      attendees: "1,200 Registered"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <span className={styles.badge}>Module 5: Training & Development</span>
          <h1 className={styles.title}>E-Learning, Certifications & Capacity Building</h1>
          <p className={styles.subtitle}>
            Accredited courses, digital licensing for coaches and officials, sports science webinars & capacity building.
          </p>
        </div>

        <button 
          className="button-primary"
          onClick={() => setCertifiedUser(!certifiedUser)}
        >
          {certifiedUser ? "🎓 View My Digital License" : "📜 Certificate Vault"}
        </button>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        <button 
          className={`${styles.tabBtn} ${activeTab === "courses" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("courses")}
        >
          📚 Course Catalog
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === "webinars" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("webinars")}
        >
          🎙️ Webinars & Sports Science
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === "certifications" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("certifications")}
        >
          📜 Digital Licenses & Verification
        </button>
      </div>

      {activeTab === "courses" && (
        <div className={styles.grid}>
          {courses.map((c) => (
            <div key={c.id} className={`${styles.courseCard} card`}>
              <div className={styles.cardHeader}>
                <span className={styles.accreditationTag}>{c.badge}</span>
                <span className={styles.targetTag}>{c.target}</span>
              </div>
              
              <h3 className={styles.courseTitle}>{c.title}</h3>
              <p className={styles.courseDesc}>{c.desc}</p>
              
              <div className={styles.courseMeta}>
                <span>⏱️ {c.duration}</span>
                <span>👥 {c.students}</span>
              </div>

              <button 
                className="button-primary" 
                style={{ marginTop: "1rem" }}
                onClick={() => setActiveCourseModal(c)}
              >
                Enroll in Course Free
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === "webinars" && (
        <div className={styles.webinarList}>
          {webinars.map((w) => (
            <div key={w.id} className={`${styles.webinarCard} card`}>
              <div className={styles.webinarIcon}>🎙️</div>
              <div className={styles.webinarInfo}>
                <h3>{w.title}</h3>
                <p>Speaker: <strong>{w.speaker}</strong></p>
                <span>📅 {w.date} • {w.attendees}</span>
              </div>
              <button 
                className="button-primary"
                onClick={() => alert(`Seat reserved for webinar: ${w.title}`)}
              >
                Reserve Free Seat
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === "certifications" && (
        <div className={`${styles.certBox} card`}>
          <h2>📜 Official NSC Digital Certification Portal</h2>
          <p>All certifications awarded on the Nigeria Sports Aggregation Platform are tamper-proof and verifiable by national federations.</p>

          <div className={styles.certificatePreview}>
            <div className={styles.certBorder}>
              <span className={styles.certBadgeHeader}>NIGERIA SPORTS COMMISSION (NSC)</span>
              <h3>CERTIFICATE OF COMPETENCY</h3>
              <p>This certifies that</p>
              <h4>Dr. Paul O.</h4>
              <p>has successfully completed the national standard course in</p>
              <h5>Grassroots Sports Administration & Anti-Doping Integrity</h5>
              <div className={styles.certFooter}>
                <span>License ID: NSC-2026-COACH-8941</span>
                <span>Issued: July 2026</span>
              </div>
            </div>
          </div>

          <button className="button-primary" onClick={() => alert("Downloading PDF Certificate with QR Verification...")}>
            📥 Download Verifiable PDF Certificate
          </button>
        </div>
      )}

      {/* Course Enrollment Modal */}
      {activeCourseModal && (
        <div className={styles.modalOverlay} onClick={() => setActiveCourseModal(null)}>
          <div className={styles.modalCard} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setActiveCourseModal(null)}>✕</button>
            <h2>📚 Course Enrollment: {activeCourseModal.title}</h2>
            <p>{activeCourseModal.desc}</p>
            
            <div className={styles.syllabusBox}>
              <h4>Course Syllabus:</h4>
              <ul>
                <li>Module 1: Principles of Nigerian Sports Administration</li>
                <li>Module 2: Athlete Safety & Anti-Doping Regulations</li>
                <li>Module 3: Practical Tactical Exercises</li>
                <li>Module 4: Final Assessment & Certification</li>
              </ul>
            </div>

            <button 
              className="button-primary" 
              onClick={() => {
                alert(`Successfully enrolled in ${activeCourseModal.title}! Module 1 is ready.`);
                setActiveCourseModal(null);
              }}
            >
              Start Module 1 Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
