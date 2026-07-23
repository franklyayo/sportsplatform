"use client";

import styles from "./analytics.module.css";

export default function AnalyticsPage() {
  const kpis = [
    { title: "Total Verified Athletes", value: "1,420,850", growth: "+14.2% YoY", icon: "🏃" },
    { title: "Active Sports Infrastructure", value: "8,940 Facilities", growth: "+8.5% YoY", icon: "🏟️" },
    { title: "NSC Grants Distributed", value: "₦14.2 Billion", growth: "100% Tracked", icon: "💰" },
    { title: "National Sports Economy Value", value: "₦185.4 Billion", growth: "+18.6% Growth", icon: "📈" }
  ];

  const stateTalentDistribution = [
    { state: "Lagos State", talents: 184500, percentage: 85 },
    { state: "Kano State", talents: 142000, percentage: 72 },
    { state: "Rivers State", talents: 118900, percentage: 65 },
    { state: "Enugu State", talents: 98400, percentage: 54 },
    { state: "Delta State", talents: 125000, percentage: 68 },
    { state: "FCT Abuja", talents: 89000, percentage: 48 }
  ];

  const sportParticipationBreakdown = [
    { sport: "Football", share: "48%" },
    { sport: "Athletics (Track & Field)", share: "22%" },
    { sport: "Basketball", share: "14%" },
    { sport: "Boxing & Combat Sports", share: "9%" },
    { sport: "Table Tennis & Others", share: "7%" }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <span className={styles.badge}>Analytics & Reports</span>
          <h1 className={styles.title}>Executive Dashboards, KPIs & Insights</h1>
          <p className={styles.subtitle}>
            Data-driven decision making for the Nigeria Sports Commission (NSC) & State Ministries.
          </p>
        </div>

        <button className="button-primary" onClick={() => alert("Downloading PDF Executive Report (NSC-Q3-2026.pdf)...")}>
          📥 Export PDF Report
        </button>
      </div>

      {/* KPI Cards Grid */}
      <div className={styles.kpiGrid}>
        {kpis.map((kpi, idx) => (
          <div key={idx} className={`${styles.kpiCard} card`}>
            <div className={styles.kpiHeader}>
              <span className={styles.kpiIcon}>{kpi.icon}</span>
              <span className={styles.growthBadge}>{kpi.growth}</span>
            </div>
            <div className={styles.kpiTitle}>{kpi.title}</div>
            <div className={styles.kpiValue}>{kpi.value}</div>
          </div>
        ))}
      </div>

      {/* Main Charts & Analytics Grid */}
      <div className={styles.chartsGrid}>
        {/* State Talent Density Bar Visualizer */}
        <div className={`${styles.chartBox} card`}>
          <div className={styles.chartHeader}>
            <h3>📍 State Grassroots Talent Density (Top States)</h3>
            <span>Verified NIN Profiles</span>
          </div>

          <div className={styles.barList}>
            {stateTalentDistribution.map((st) => (
              <div key={st.state} className={styles.barRow}>
                <div className={styles.barMeta}>
                  <span>{st.state}</span>
                  <strong>{st.talents.toLocaleString()} Athletes</strong>
                </div>
                <div className={styles.barTrack}>
                  <div 
                    className={styles.barFill} 
                    style={{ width: `${st.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Participation Distribution Box */}
        <div className={`${styles.chartBox} card`}>
          <div className={styles.chartHeader}>
            <h3>⚽ Sport Discipline Distribution</h3>
            <span>National Census</span>
          </div>

          <div className={styles.pieList}>
            {sportParticipationBreakdown.map((sp) => (
              <div key={sp.sport} className={styles.pieRow}>
                <div className={styles.pieLabel}>
                  <span className={styles.dot}></span>
                  <span>{sp.sport}</span>
                </div>
                <strong className={styles.pieShare}>{sp.share}</strong>
              </div>
            ))}
          </div>

          <div className={styles.insightNote}>
            💡 <strong>Executive Insight:</strong> Athletics and Basketball showed a combined 34% growth in talent registrations over the last 12 months.
          </div>
        </div>
      </div>
    </div>
  );
}
