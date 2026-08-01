"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DEMO } from "../lib/demoAssets";
import styles from "./page.module.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const modules = [
    {
      title: "Talent Discovery",
      description: "National talent database, scouting tools, and performance tracking for grassroots athletes across all 36 states.",
      icon: "🔍",
      href: "/dashboard/talent",
      num: "01",
    },
    {
      title: "Organizations Hub",
      description: "Directory and compliance hub for national federations, clubs, and state sports councils.",
      icon: "🏢",
      href: "/dashboard/organizations",
      num: "02",
    },
    {
      title: "Infrastructure Hub",
      description: "Virtual tours, bookings, and availability for stadiums, arenas, and facilities nationwide.",
      icon: "🏟️",
      href: "/dashboard/infrastructure",
      num: "03",
    },
    {
      title: "Sports Network",
      description: "Connect athletes, coaches, officials, and fans — Nigeria's premier sports professional network.",
      icon: "👥",
      href: "/dashboard/network",
      num: "04",
    },
    {
      title: "Training & Development",
      description: "E-learning, certifications, and capacity building for coaches, referees, and officials.",
      icon: "🎓",
      href: "/dashboard/training",
      num: "05",
    },
    {
      title: "Events & Competitions",
      description: "Live scores, national calendar, and ticketing for state, national, and grassroots events.",
      icon: "🏆",
      href: "/dashboard/events",
      num: "06",
    },
    {
      title: "Financing & Grants",
      description: "Grants, scholarships, loans, and sponsorship pathways for athletes and sports bodies.",
      icon: "💰",
      href: "/dashboard/funding",
      num: "07",
    },
    {
      title: "Policies & Knowledge",
      description: "Sports policies, laws, research, statistics, and the national document library.",
      icon: "📚",
      href: "/dashboard/knowledge",
      num: "08",
    },
  ];

  const stakeholders = [
    {
      icon: "🏛️",
      title: "Government & NSC",
      desc: "National Sports Commission and 36 state ministries get a single source of truth for policy, funding, and performance oversight.",
    },
    {
      icon: "🏃",
      title: "Athletes & Coaches",
      desc: "From grassroots to elite — discover opportunities, track performance, train, and get discovered by scouts and federations.",
    },
    {
      icon: "🤝",
      title: "Federations & Partners",
      desc: "Clubs, federations, sponsors, and media collaborate on events, compliance, and talent pipelines in one place.",
    },
  ];

  return (
    <main className={styles.main}>
      {/* Navbar */}
      <nav className={`${styles.navbar} glass`}>
        <div className="container">
          <div className={styles.navContainer}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}>N</div>
              <div className={styles.logoText}>
                <span>NaijaSports</span>
                <span className={styles.logoSub}>National Sports Portal</span>
              </div>
            </Link>

            <div className={styles.navLinks}>
              <a href="#modules" className={styles.navLink}>Modules</a>
              <a href="#stakeholders" className={styles.navLink}>Stakeholders</a>
              <a href="#about" className={styles.navLink}>NSC & States</a>
              <a href="#impact" className={styles.navLink}>Impact</a>
            </div>

            <div className={styles.navActions}>
              <Link href="/login" className={styles.navGhost}>Sign in</Link>
              <Link href="/dashboard" className="button-primary">
                Enter Portal →
              </Link>
              <button
                type="button"
                className={styles.mobileMenuBtn}
                aria-label="Toggle menu"
                onClick={() => setMenuOpen((o) => !o)}
              >
                {menuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className={styles.mobileMenu}>
            <a href="#modules" onClick={() => setMenuOpen(false)}>Modules</a>
            <a href="#stakeholders" onClick={() => setMenuOpen(false)}>Stakeholders</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>NSC & States</a>
            <a href="#impact" onClick={() => setMenuOpen(false)}>Impact</a>
            <Link href="/login" onClick={() => setMenuOpen(false)}>Sign in</Link>
            <Link href="/dashboard" className="button-primary" onClick={() => setMenuOpen(false)}>
              Enter Portal →
            </Link>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <Image
          src={DEMO.hero}
          alt="Nigeria sports digital ecosystem"
          fill
          priority
          className={styles.heroBg}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroTag}>
              <span className={styles.heroTagDot} />
              Federal Ministry of Sports · MVP Showcase
            </div>
            <h1 className={styles.heroTitle}>
              One portal for <span>everything sports</span> in Nigeria.
            </h1>
            <p className={styles.heroDescription}>
              From grassroots pitches in Kano to the Super Eagles — a unified digital ecosystem connecting people, institutions, facilities, and funding to grow Nigerian sport and global competitiveness.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/dashboard" className="button-primary">
                🚀 Explore Live Dashboard
              </Link>
              <a href="#modules" className={styles.buttonSecondary}>
                View 8 Core Modules
              </a>
            </div>
            <div className={styles.heroTrust}>
              <div className={styles.heroTrustItem}>
                <strong>36+</strong> State ministries
              </div>
              <div className={styles.heroTrustItem}>
                <strong>50+</strong> Federations
              </div>
              <div className={styles.heroTrustItem}>
                <strong>1.4M+</strong> Athlete records
              </div>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.floatCard}>
              <div className={styles.floatCardLabel}>Talent pipeline</div>
              <div className={styles.floatCardValue}>1,420,850</div>
              <div className={styles.floatCardMeta}>NIN-linked athlete profiles</div>
            </div>
            <div className={styles.floatCard}>
              <div className={styles.floatCardRow}>
                <div className={styles.floatAvatar}>CO</div>
                <div>
                  <div className={styles.floatCardLabel}>New scout match</div>
                  <div style={{ fontWeight: 800, fontSize: "0.95rem" }}>Chinedu Obasi</div>
                  <div className={styles.floatCardMeta}>U-17 · Lagos · Striker</div>
                </div>
              </div>
            </div>
            <div className={styles.floatCard}>
              <div className={styles.floatCardLabel}>Active funding</div>
              <div className={styles.floatCardValue}>₦14.2B</div>
              <div className={styles.floatCardMeta}>Grants · scholarships · loans</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section id="impact" className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={`${styles.statValue} gradient-text`}>36+</div>
              <div className={styles.statLabel}>State Ministries</div>
            </div>
            <div className={styles.statCard}>
              <div className={`${styles.statValue} gradient-text`}>1.4M+</div>
              <div className={styles.statLabel}>Grassroots Talents</div>
            </div>
            <div className={styles.statCard}>
              <div className={`${styles.statValue} gradient-text`}>50+</div>
              <div className={styles.statLabel}>Sports Federations</div>
            </div>
            <div className={styles.statCard}>
              <div className={`${styles.statValue} gradient-text`}>10k+</div>
              <div className={styles.statLabel}>Facilities & Hubs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section id="modules" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Platform architecture</span>
            <h2 className={styles.sectionTitle}>
              Eight modules. <span className="gradient-text">One national system.</span>
            </h2>
            <p className={styles.sectionDescription}>
              Built to serve the Federal Ministry of Sports, NSC, state councils, federations, athletes, and partners — from discovery to podium.
            </p>
          </div>

          <div className={styles.modulesGrid}>
            {modules.map((module) => (
              <Link key={module.num} href={module.href} className={`${styles.moduleCard} card`}>
                <span className={styles.moduleNum}>{module.num}</span>
                <div className={styles.moduleIcon}>{module.icon}</div>
                <h3 className={styles.moduleTitle}>{module.title}</h3>
                <p className={styles.moduleDescription}>{module.description}</p>
                <span className={styles.moduleCta}>Open module →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholders */}
      <section id="stakeholders" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Who it serves</span>
            <h2 className={styles.sectionTitle}>
              Built for every player in the <span className="gradient-text">Nigerian sports ecosystem</span>
            </h2>
            <p className={styles.sectionDescription}>
              One platform, many perspectives — switch roles in the demo to see how NSC admins, state ministers, scouts, athletes, and fans experience the system.
            </p>
          </div>
          <div className={styles.stakeholderGrid}>
            {stakeholders.map((s) => (
              <div key={s.title} className={`${styles.stakeholderCard} card`}>
                <div className={styles.stakeholderIcon}>{s.icon}</div>
                <h3 className={styles.stakeholderTitle}>{s.title}</h3>
                <p className={styles.stakeholderDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / NSC */}
      <section id="about" className={styles.section}>
        <div className="container">
          <div className={styles.aboutBand}>
            <div className={styles.aboutVisual}>
              <Image
                src={DEMO.athletics}
                alt="Floodlit football pitch in Nigeria"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className={styles.aboutBadge}>
                <div className={styles.aboutBadgeIcon}>🇳🇬</div>
                <div>
                  <strong>NSC × 36 States</strong>
                  <span>National governance matrix ready for demo</span>
                </div>
              </div>
            </div>
            <div className={styles.aboutContent}>
              <span className={styles.sectionEyebrow}>Governance & reach</span>
              <h2>
                Designed with the <span className="gradient-text">National Sports Commission</span> in mind
              </h2>
              <p>
                NaijaSports is the proposed one-stop digital backbone for sports administration in Nigeria — aligning federal policy with state execution, federation compliance, and athlete development.
              </p>
              <ul className={styles.aboutList}>
                <li>
                  <span className={styles.aboutCheck}>✓</span>
                  Unified NIN-linked talent registry across all states
                </li>
                <li>
                  <span className={styles.aboutCheck}>✓</span>
                  Transparent funding, grants, and scholarship workflows
                </li>
                <li>
                  <span className={styles.aboutCheck}>✓</span>
                  Facility inventory, bookings, and condition tracking
                </li>
                <li>
                  <span className={styles.aboutCheck}>✓</span>
                  Multilingual UI: English, Yorùbá, Hausa & Igbo
                </li>
              </ul>
              <Link href="/dashboard/governance" className="button-primary">
                🏛️ View NSC & States Matrix
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>Ready to tour the live MVP?</h2>
            <p>
              Walk through every core module as an NSC administrator, state minister, scout, athlete, or fan — no backend required for this ministry presentation.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/dashboard" className={styles.ctaPrimary}>
                Launch Dashboard
              </Link>
              <Link href="/signup" className={styles.ctaSecondary}>
                Create demo account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerTop} />
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerColumn}>
              <div className={styles.footerLogo}>
                <div className={styles.footerLogoIcon}>N</div>
                <span>NaijaSports</span>
              </div>
              <p className={styles.footerBlurb}>
                The one-stop portal for everything sports in Nigeria. Building champions. Developing communities. Elevating the nation.
              </p>
            </div>

            <div className={styles.footerColumn}>
              <div className={styles.footerTitle}>Platform</div>
              <a href="#modules" className={styles.footerLink}>Core Modules</a>
              <Link href="/dashboard" className={styles.footerLink}>Dashboard</Link>
              <a href="#stakeholders" className={styles.footerLink}>Stakeholders</a>
              <Link href="/dashboard/governance" className={styles.footerLink}>NSC Matrix</Link>
            </div>

            <div className={styles.footerColumn}>
              <div className={styles.footerTitle}>For ministry</div>
              <span className={styles.footerLink}>MVP demonstration</span>
              <span className={styles.footerLink}>Functional spec tour</span>
              <span className={styles.footerLink}>Role perspectives</span>
              <span className={styles.footerLink}>Impact metrics</span>
            </div>

            <div className={styles.footerColumn}>
              <div className={styles.footerTitle}>Contact</div>
              <span className={styles.footerLink}>Partnerships</span>
              <span className={styles.footerLink}>Media inquiries</span>
              <span className={styles.footerLink}>Technical support</span>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <span>© {new Date().getFullYear()} Nigeria Sports Aggregation Platform</span>
            <span>·</span>
            <span>MVP for Federal Ministry of Sports presentation</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
