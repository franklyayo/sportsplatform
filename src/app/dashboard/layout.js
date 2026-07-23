"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "../../components/LogoutButton";
import SpecTourModal from "../../components/SpecTourModal";
import styles from "./dashboard.module.css";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [isSpecTourOpen, setIsSpecTourOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState("NSC Administrator");
  const [currentLang, setCurrentLang] = useState("EN");

  const navItems = [
    { name: "Overview", path: "/dashboard", icon: "📊" },
    { name: "NSC & States Matrix", path: "/dashboard/governance", icon: "🏛️" },
    { name: "Talent Discovery", path: "/dashboard/talent", icon: "🔍" },
    { name: "Organizations Hub", path: "/dashboard/organizations", icon: "🏢" },
    { name: "Infrastructure Hub", path: "/dashboard/infrastructure", icon: "🏟️" },
    { name: "Social Network", path: "/dashboard/network", icon: "👥" },
    { name: "Training & Courses", path: "/dashboard/training", icon: "🎓" },
    { name: "Events & Scores", path: "/dashboard/events", icon: "🏆" },
    { name: "Funding & Grants", path: "/dashboard/funding", icon: "💰" },
    { name: "Policies & Knowledge", path: "/dashboard/knowledge", icon: "📚" },
  ];

  const additionalItems = [
    { name: "Marketplace", path: "/dashboard/marketplace", icon: "🛍️" },
    { name: "Job Board", path: "/dashboard/jobs", icon: "💼" },
    { name: "Media Hub", path: "/dashboard/media", icon: "🎙️" },
    { name: "Analytics & Reports", path: "/dashboard/analytics", icon: "📈" },
  ];

  return (
    <div className={styles.dashboardLayout}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <div className={styles.logoIcon}>N</div>
          <span>NaijaSports</span>
        </div>
        
        <nav className={styles.sidebarNav}>
          <div className={styles.navGroup}>
            <div className={styles.navGroupTitle}>Core Modules</div>
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`${styles.navItem} ${isActive ? styles.active : ""}`}
                >
                  <span>{item.icon}</span> {item.name}
                </Link>
              );
            })}
          </div>
          
          <div className={styles.navGroup}>
            <div className={styles.navGroupTitle}>Additional Features</div>
            {additionalItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`${styles.navItem} ${isActive ? styles.active : ""}`}
                >
                  <span>{item.icon}</span> {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
        
        <div className={styles.sidebarFooter}>
          <div className={styles.userProfile}>
            <div className={styles.userAvatar}>NS</div>
            <div className={styles.userInfo}>
              <div className={styles.userName}>Dr. Paul O.</div>
              <div className={styles.userRole}>{currentRole}</div>
            </div>
          </div>
          <LogoutButton />
        </div>
      </aside>
      
      <main className={styles.mainContent}>
        <header className={styles.topbar}>
          <div className={styles.topbarLeft}>
            <button 
              className={styles.specTourTriggerBtn}
              onClick={() => setIsSpecTourOpen(true)}
            >
              📱 Functional Spec Tour
            </button>
            <div className={styles.searchBar}>
              <input type="text" placeholder="Search talents, events, federations, or facilities..." />
            </div>
          </div>

          <div className={styles.topbarActions}>
            {/* Perspective Switcher */}
            <div className={styles.perspectiveSelector}>
              <span className={styles.selectorLabel}>View as:</span>
              <select 
                value={currentRole} 
                onChange={(e) => setCurrentRole(e.target.value)}
                className={styles.roleSelect}
              >
                <option value="NSC Administrator">NSC Admin</option>
                <option value="State Sports Minister">State Minister</option>
                <option value="Certified Scout">Scout / Recruiter</option>
                <option value="Elite Athlete">Athlete</option>
                <option value="Fan / Supporter">Fan</option>
              </select>
            </div>

            {/* Multilingual Switcher */}
            <div className={styles.langSelector}>
              <select 
                value={currentLang}
                onChange={(e) => setCurrentLang(e.target.value)}
                className={styles.langSelect}
              >
                <option value="EN">🌐 English</option>
                <option value="YO">🇳🇬 Yorùbá</option>
                <option value="HA">🇳🇬 Hausa</option>
                <option value="IG">🇳🇬 Igbo</option>
              </select>
            </div>

            <button className={styles.iconBtn} title="Notifications">🔔</button>
            <button className={styles.iconBtn} title="Settings">⚙️</button>
          </div>
        </header>
        
        <div className={styles.contentArea}>
          {children}
        </div>
      </main>

      <SpecTourModal 
        isOpen={isSpecTourOpen}
        onClose={() => setIsSpecTourOpen(false)}
      />
    </div>
  );
}
