"use client";

import Link from "next/link";
import styles from "./dashboard.module.css";

export default function DashboardPage() {
  const coreModulesSummary = [
    { title: "Talent Discovery", icon: "🔍", count: "1.4M+ Athletes", link: "/dashboard/talent", badge: "01" },
    { title: "Organizations & Federations", icon: "🏢", count: "50+ Bodies", link: "/dashboard/organizations", badge: "02" },
    { title: "Infrastructure Hub", icon: "🏟️", count: "8,940 Facilities", link: "/dashboard/infrastructure", badge: "03" },
    { title: "Sports Network", icon: "👥", count: "Sports LinkedIn", link: "/dashboard/network", badge: "04" },
    { title: "Training & Certifications", icon: "🎓", count: "Accredited Licensing", link: "/dashboard/training", badge: "05" },
    { title: "Events & Competitions", icon: "🏆", count: "Live Scoreboard", link: "/dashboard/events", badge: "06" },
    { title: "Financing & Opportunities", icon: "💰", count: "₦14.2B Grants", link: "/dashboard/funding", badge: "07" },
    { title: "Policies & Knowledge", icon: "📚", count: "NSIP 2026 Policy", link: "/dashboard/knowledge", badge: "08" },
  ];

  return (
    <div>
      <div className={styles.welcomeBanner}>
        <div>
          <h2>🇳🇬 Welcome to NaijaSports</h2>
          <p>
            Unified national sports ecosystem — switch roles above to demo NSC, state, scout, athlete, and fan perspectives.
          </p>
        </div>
        <Link href="/dashboard/governance" className={styles.welcomeCta}>
          Open NSC Matrix →
        </Link>
      </div>

      <div className={styles.pageHeader}>
        <div>
          <span className="badge-pill">Unified Ecosystem Overview</span>
          <h1 className={styles.pageTitle} style={{ marginTop: "0.5rem" }}>
            Nigeria Sports Aggregation Platform
          </h1>
          <p className={styles.pageSubtitle}>
            One-stop portal connecting people, institutions, opportunities and resources across all 36 Nigerian states + FCT.
          </p>
        </div>
        <Link href="/dashboard/talent" className="button-primary">
          🔍 Scout Talent
        </Link>
      </div>

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

      <h2 className={styles.modulesSectionTitle}>
        Explore Core Modules
      </h2>
      <div className={styles.modulesGrid}>
        {coreModulesSummary.map((m) => (
          <Link key={m.badge} href={m.link} className={`${styles.moduleCard} card`}>
            <div className={styles.moduleCardTop}>
              <span className={styles.moduleIcon}>{m.icon}</span>
              <span className={styles.moduleBadge}>Module {m.badge}</span>
            </div>
            <h3 className={styles.moduleTitle}>{m.title}</h3>
            <span className={styles.moduleCount}>{m.count}</span>
            <span className={styles.moduleLink}>Demonstrate →</span>
          </Link>
        ))}
      </div>

      <div className={styles.mainGrid}>
        <div className={`${styles.sectionBox} card`}>
          <h3 className={styles.sectionBoxTitle}>💡 Additional Features</h3>
          <div className={styles.featureGrid}>
            <Link href="/dashboard/marketplace" className={styles.featureCard}>
              <h4>🛍️ Marketplace</h4>
              <p>Buy & sell sports apparel, kits, and equipment nationwide.</p>
            </Link>
            <Link href="/dashboard/jobs" className={styles.featureCard}>
              <h4>💼 Job Board</h4>
              <p>Vacancies for coaches, referees & sports volunteers.</p>
            </Link>
            <Link href="/dashboard/media" className={styles.featureCard}>
              <h4>🎙️ Media Hub</h4>
              <p>Documentaries, highlights & sports podcasts.</p>
            </Link>
            <Link href="/dashboard/analytics" className={styles.featureCard}>
              <h4>📈 Analytics</h4>
              <p>Executive dashboards & state KPI maps.</p>
            </Link>
          </div>
        </div>

        <div className={`${styles.sectionBox} card`}>
          <h3 className={styles.sectionBoxTitle}>📢 Live Ecosystem Feed</h3>

          <div className={styles.feedItem}>
            <div
              className={styles.feedAvatar}
              style={{
                background: "var(--primary)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "700",
              }}
            >
              NSC
            </div>
            <div className={styles.feedContent}>
              <h4>Nigeria Sports Commission</h4>
              <p>Anti-Doping integrity audit for Q3 complete. 100% WADA cleared across federations.</p>
              <div className={styles.feedTime}>2 hours ago · Abuja</div>
            </div>
          </div>

          <div className={styles.feedItem}>
            <div
              className={styles.feedAvatar}
              style={{
                background: "#0f766e",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "700",
              }}
            >
              LSC
            </div>
            <div className={styles.feedContent}>
              <h4>Lagos State Sports Council</h4>
              <p>National Trials registration open for 1,200 grassroots athletes across 12 LGAs.</p>
              <div className={styles.feedTime}>5 hours ago · Lagos</div>
            </div>
          </div>

          <div className={styles.feedItem}>
            <div
              className={styles.feedAvatar}
              style={{
                background: "#b45309",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "700",
              }}
            >
              NFF
            </div>
            <div className={styles.feedContent}>
              <h4>Nigeria Football Federation</h4>
              <p>U-17 Golden Eaglets camp roster published. Scouts invited via Talent Discovery.</p>
              <div className={styles.feedTime}>Yesterday · Abuja</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
