"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./dashboard.module.css";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const coreModulesSummary = [
    { title: "Talent Discovery", icon: "🔍", count: "1.4M+ Athletes", link: "/dashboard/talent", badge: "Module 1" },
    { title: "Organizations & Federations", icon: "🏢", count: "50+ Bodies", link: "/dashboard/organizations", badge: "Module 2" },
    { title: "Infrastructure Hub", icon: "🏟️", count: "8,940 Facilities", link: "/dashboard/infrastructure", badge: "Module 3" },
    { title: "Social Network for Sports", icon: "👥", count: "Sports LinkedIn", link: "/dashboard/network", badge: "Module 4" },
    { title: "Training & Certifications", icon: "🎓", count: "Accredited Licensing", link: "/dashboard/training", badge: "Module 5" },
    { title: "Events & Competitions", icon: "🏆", count: "Live Scoreboard", link: "/dashboard/events", badge: "Module 6" },
    { title: "Financing & Opportunities", icon: "💰", count: "₦14.2B Grants", link: "/dashboard/funding", badge: "Module 7" },
    { title: "Policies & Knowledge", icon: "📚", count: "NSIP 2026 Policy", link: "/dashboard/knowledge", badge: "Module 8" }
  ];

  return (
    <div>
      {/* Welcome & Overview Header */}
      <div className={styles.pageHeader}>
        <div>
          <span style={{ 
            background: "var(--primary)", 
            color: "white", 
            padding: "0.2rem 0.6rem", 
            borderRadius: "9999px", 
            fontSize: "0.75rem", 
            fontWeight: "700",
            textTransform: "uppercase"
          }}>
            Unified Ecosystem Overview
          </span>
          <h1 className={styles.pageTitle} style={{ marginTop: "0.25rem" }}>
            Nigeria Sports Aggregation Platform
          </h1>
          <p className={styles.pageSubtitle}>
            The one-stop portal connecting people, institutions, opportunities and resources across all 36 Nigerian states.
          </p>
        </div>

        <Link href="/dashboard/governance" className="button-primary">
          🏛️ NSC & State Governance Hub
        </Link>
      </div>

      {/* KPI Cards Grid */}
      <div className={styles.overviewGrid}>
        <div className={`${styles.statCard} card`}>
          <div className={styles.statCardIcon}>🇳🇬</div>
          <div>
            <div className={styles.statCardTitle}>National Governance</div>
            <div className={styles.statCardValue}>NSC + 36 States</div>
          </div>
        </div>
        <div className={`${styles.statCard} card`}>
          <div className={styles.statCardIcon}>🏃</div>
          <div>
            <div className={styles.statCardTitle}>Grassroots Talents</div>
            <div className={styles.statCardValue}>1,420,850 NIN</div>
          </div>
        </div>
        <div className={`${styles.statCard} card`}>
          <div className={styles.statCardIcon}>💰</div>
          <div>
            <div className={styles.statCardTitle}>Active Funding</div>
            <div className={styles.statCardValue}>₦14.2 Billion</div>
          </div>
        </div>
      </div>

      {/* Core Modules Grid */}
      <div style={{ marginTop: "1rem", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: "800", marginBottom: "1rem" }}>
          Explore Platform Core Modules
        </h2>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", 
          gap: "1.25rem" 
        }}>
          {coreModulesSummary.map((m, idx) => (
            <Link key={idx} href={m.link} className="card" style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "1.75rem" }}>{m.icon}</span>
                <span style={{ fontSize: "0.7rem", background: "rgba(4, 139, 78, 0.15)", color: "var(--primary)", fontWeight: "700", padding: "0.15rem 0.4rem", borderRadius: "0.25rem" }}>{m.badge}</span>
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: "700" }}>{m.title}</h3>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: "600" }}>{m.count}</span>
              <span style={{ fontSize: "0.8rem", color: "var(--primary)", fontWeight: "700", marginTop: "auto" }}>Demonstrate Module →</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Main Grid: Additional Features & Feed */}
      <div className={styles.mainGrid}>
        <div className={styles.mainColumn}>
          <div className={`${styles.sectionBox} card`}>
            <h3 className={styles.sectionBoxTitle}>💡 Additional System Features</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <Link href="/dashboard/marketplace" className="card" style={{ textDecoration: "none", color: "inherit" }}>
                <h4>🛍️ Marketplace</h4>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>Buy & sell sports apparel, kits, and equipment.</p>
              </Link>
              <Link href="/dashboard/jobs" className="card" style={{ textDecoration: "none", color: "inherit" }}>
                <h4>💼 Job Board</h4>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>Vacancies for coaches, referees & volunteers.</p>
              </Link>
              <Link href="/dashboard/media" className="card" style={{ textDecoration: "none", color: "inherit" }}>
                <h4>🎙️ Media Hub</h4>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>Documentaries, video highlights & podcasts.</p>
              </Link>
              <Link href="/dashboard/analytics" className="card" style={{ textDecoration: "none", color: "inherit" }}>
                <h4>📈 Analytics & Reports</h4>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>Executive dashboards & state KPI maps.</p>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.sideColumn}>
          <div className={`${styles.sectionBox} card`}>
            <h3 className={styles.sectionBoxTitle}>📢 Live Ecosystem Feed</h3>
            
            <div className={styles.feedItem}>
              <div className={styles.feedAvatar} style={{ background: "var(--primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700" }}>NSC</div>
              <div className={styles.feedContent}>
                <h4>Nigeria Sports Commission</h4>
                <p>Anti-Doping Integrity compliance audit for Q3 complete. 100% WADA cleared.</p>
              </div>
            </div>
            
            <div className={styles.feedItem}>
              <div className={styles.feedAvatar} style={{ background: "#3b82f6", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700" }}>LSC</div>
              <div className={styles.feedContent}>
                <h4>Lagos State Sports Council</h4>
                <p>National Trials registration now active for 1,200 grassroots athletes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
