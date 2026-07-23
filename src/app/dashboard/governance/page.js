"use client";

import { useState } from "react";
import styles from "./governance.module.css";

export default function GovernancePage() {
  const [activeTab, setActiveTab] = useState("nsc");
  const [selectedState, setSelectedState] = useState("Lagos");

  const nscResponsibilities = [
    { id: 1, title: "Develop National Sports Policies & Frameworks", status: "Active - NSIP 2026", metric: "100% Implemented" },
    { id: 2, title: "Regulate & Standardize Sports Nationwide", status: "Compliant", metric: "54 Federations Audited" },
    { id: 3, title: "Oversee National Federations & Associations", status: "Monitoring", metric: "Quarterly Audit Passed" },
    { id: 4, title: "Allocate & Monitor Funding & Resources", status: "Allocated", metric: "₦12.5 Billion Distributed" },
    { id: 5, title: "National Talent Identification & Development", status: "Active Pipeline", metric: "14,500 Talents Tracked" },
    { id: 6, title: "Coordinate International Partnerships", status: "Active (IOC/FIFA/IAAF)", metric: "18 MoUs Signed" },
    { id: 7, title: "Organize National Competitions & Events", status: "Upcoming", metric: "22nd National Sports Festival" },
    { id: 8, title: "Data, Analytics & Performance Monitoring", status: "Live Feed", metric: "36 State Dashboards" },
    { id: 9, title: "Anti-Doping, Ethics & Integrity Oversight", status: "WADA Compliant", metric: "1,200 Tests Executed" },
    { id: 10, title: "Promote Sports Tourism & Economic Value", status: "Expanding", metric: "₦4.8B Tourism Impact" }
  ];

  const stateResponsibilities = [
    { id: 1, title: "Implement National Policies at State Level", status: "Synchronized" },
    { id: 2, title: "Develop State Sports Plans & Strategies", status: "Completed Q3" },
    { id: 3, title: "Manage State Sports Councils & Programs", status: "Operational" },
    { id: 4, title: "Identify & Nurture Grassroots Talents", status: "8 Scout Centers" },
    { id: 5, title: "Develop & Maintain Sports Infrastructure", status: "14 Stadiums Upgraded" },
    { id: 6, title: "Organize State Competitions & Leagues", status: "State League Active" },
    { id: 7, title: "Support Local Clubs, Academies & Athletes", status: "120 Clubs Funded" },
    { id: 8, title: "Facilitate Public-Private Partnerships", status: "5 Corporate MoUs" },
    { id: 9, title: "Community Engagement & Grassroots Programs", status: "Weekly Events" },
    { id: 10, title: "Monitor & Report State Sports Performance", status: "Report Submitted" }
  ];

  const statesList = [
    "Lagos", "Kano", "Rivers", "Enugu", "Ogun", "Delta", "Kaduna", "Edo", "FCT Abuja", "Anambra", "Oyo", "Akwa Ibom"
  ];

  return (
    <div className={styles.governanceContainer}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <span className={styles.badge}>Governance & Compliance</span>
          <h1 className={styles.title}>National & State Responsibilities Framework</h1>
          <p className={styles.subtitle}>
            Working together for a stronger Nigerian sports ecosystem — National Sports Commission (NSC) & 36 State Ministries.
          </p>
        </div>
      </div>

      {/* Center Banner */}
      <div className={styles.centerBanner}>
        <div className={styles.bannerIcon}>🏛️</div>
        <div>
          <h3>WORKING TOGETHER FOR A STRONGER SPORTS ECOSYSTEM</h3>
          <p>A unified digital ecosystem that connects people, institutions, opportunities and resources to drive sports growth.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className={styles.tabsContainer}>
        <button 
          className={`${styles.tabBtn} ${activeTab === "nsc" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("nsc")}
        >
          🇳🇬 Nigeria Sports Commission (NSC) - National Level
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === "states" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("states")}
        >
          🏛️ State Ministries of Sports (State Level)
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === "compliance" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("compliance")}
        >
          ✅ Compliance & Audit Scorecard
        </button>
      </div>

      {/* Tab 1: NSC National Responsibilities */}
      {activeTab === "nsc" && (
        <div className={styles.contentSection}>
          <div className={styles.sectionTitleRow}>
            <h2>Nigeria Sports Commission (NSC)</h2>
            <span className={styles.tag}>National Level Mandate</span>
          </div>

          <div className={styles.grid}>
            {nscResponsibilities.map((item) => (
              <div key={item.id} className={`${styles.card} card`}>
                <div className={styles.cardHeader}>
                  <span className={styles.itemNum}>#{item.id}</span>
                  <span className={styles.statusPill}>{item.status}</span>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <div className={styles.cardFooter}>
                  <span>Key Metric:</span>
                  <strong>{item.metric}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: State Ministries Responsibilities */}
      {activeTab === "states" && (
        <div className={styles.contentSection}>
          <div className={styles.stateHeaderSelector}>
            <div>
              <h2>State Ministry of Sports & Youth Development</h2>
              <p>Select state to view grassroots sports performance and infrastructure status.</p>
            </div>

            <select 
              className={styles.stateSelect} 
              value={selectedState} 
              onChange={(e) => setSelectedState(e.target.value)}
            >
              {statesList.map(st => (
                <option key={st} value={st}>{st} State</option>
              ))}
            </select>
          </div>

          <div className={styles.stateOverviewCard}>
            <div className={styles.stateStatItem}>
              <span>Selected State</span>
              <h4>{selectedState} State</h4>
            </div>
            <div className={styles.stateStatItem}>
              <span>Active Athletes</span>
              <h4>4,820 Verified</h4>
            </div>
            <div className={styles.stateStatItem}>
              <span>Sports Infrastructure</span>
              <h4>18 Facilities</h4>
            </div>
            <div className={styles.stateStatItem}>
              <span>NSC Compliance Rating</span>
              <h4 style={{ color: "var(--primary)" }}>96.4% (Grade A)</h4>
            </div>
          </div>

          <div className={styles.grid}>
            {stateResponsibilities.map((item) => (
              <div key={item.id} className={`${styles.card} card`}>
                <div className={styles.cardHeader}>
                  <span className={styles.itemNum}>State Task #{item.id}</span>
                  <span className={styles.statusPill}>{item.status}</span>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <div className={styles.cardFooter}>
                  <span>State Operational Status:</span>
                  <strong>Active in {selectedState}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Compliance & Audit Scorecard */}
      {activeTab === "compliance" && (
        <div className={styles.contentSection}>
          <div className={styles.sectionTitleRow}>
            <h2>Federation & State Compliance Audit Hub</h2>
            <span className={styles.tag}>Live Anti-Doping & Governance Track</span>
          </div>

          <div className={styles.tableCard}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Entity / Federation</th>
                  <th>Level</th>
                  <th>Governance Audit</th>
                  <th>NIN / Identity Verified</th>
                  <th>WADA Anti-Doping Status</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nigeria Football Federation (NFF)</td>
                  <td>National</td>
                  <td><span className={styles.passBadge}>Passed (100%)</span></td>
                  <td>98.4% Verified</td>
                  <td><span className={styles.passBadge}>Cleared</span></td>
                  <td><span className={styles.activeTag}>NSC Certified</span></td>
                </tr>
                <tr>
                  <td>Lagos State Sports Council</td>
                  <td>State (Lagos)</td>
                  <td><span className={styles.passBadge}>Passed (96%)</span></td>
                  <td>95.1% Verified</td>
                  <td><span className={styles.passBadge}>Cleared</span></td>
                  <td><span className={styles.activeTag}>Active</span></td>
                </tr>
                <tr>
                  <td>Athletics Federation of Nigeria (AFN)</td>
                  <td>National</td>
                  <td><span className={styles.passBadge}>Passed (94%)</span></td>
                  <td>96.8% Verified</td>
                  <td><span className={styles.passBadge}>Cleared</span></td>
                  <td><span className={styles.activeTag}>NSC Certified</span></td>
                </tr>
                <tr>
                  <td>Nigeria Basketball Federation (NBBF)</td>
                  <td>National</td>
                  <td><span className={styles.passBadge}>Passed (92%)</span></td>
                  <td>91.2% Verified</td>
                  <td><span className={styles.passBadge}>Cleared</span></td>
                  <td><span className={styles.activeTag}>NSC Certified</span></td>
                </tr>
                <tr>
                  <td>Kano State Ministry of Sports</td>
                  <td>State (Kano)</td>
                  <td><span className={styles.passBadge}>Passed (95%)</span></td>
                  <td>93.0% Verified</td>
                  <td><span className={styles.passBadge}>Cleared</span></td>
                  <td><span className={styles.activeTag}>Active</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
