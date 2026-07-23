"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./SpecTourModal.module.css";

export default function SpecTourModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("all");

  if (!isOpen) return null;

  const specCategories = [
    {
      id: "governance",
      title: "NSC & State Ministries",
      icon: "🏛️",
      items: [
        {
          name: "Nigeria Sports Commission (NSC)",
          scope: "National Level",
          desc: "Develop national policies, regulate sports nationwide, oversee federations, allocate funding, anti-doping oversight, talent ID.",
          link: "/dashboard/governance?tab=nsc",
          badge: "National Hub"
        },
        {
          name: "State Ministries of Sports",
          scope: "36 States Level",
          desc: "Implement national policies at state level, manage sports councils, grassroots talent development, infrastructure maintenance.",
          link: "/dashboard/governance?tab=states",
          badge: "36 States"
        }
      ]
    },
    {
      id: "core",
      title: "The 8 Core Modules",
      icon: "⚡",
      items: [
        {
          name: "Talent Identification & Discovery",
          desc: "National Talent Database, Scouting tools, Athlete profiles & portfolios, Performance tracking, International access.",
          link: "/dashboard/talent",
          badge: "Module 1"
        },
        {
          name: "Sports Organizations & Federations",
          desc: "Directory of 50+ federations, State Sports Councils, Clubs & Academies, Governance & Compliance hub.",
          link: "/dashboard/organizations",
          badge: "Module 2"
        },
        {
          name: "Infrastructure Hub",
          desc: "Stadiums, Arenas, Gyms, Facility availability calendar, Online booking system & Virtual 360 tours.",
          link: "/dashboard/infrastructure",
          badge: "Module 3"
        },
        {
          name: "Social Network for Sports",
          desc: "Sports LinkedIn for Nigeria, Connect, Follow, Direct Messages, Groups & Forums, Community News Feed.",
          link: "/dashboard/network",
          badge: "Module 4"
        },
        {
          name: "Training & Development",
          desc: "Certifications for coaches/officials, E-Learning courses, Webinars, Sports Science & Capacity building.",
          link: "/dashboard/training",
          badge: "Module 5"
        },
        {
          name: "Events & Competitions",
          desc: "Calendar of National/State events, Digital ticket registration, Live match scoreboards & Leaderboards.",
          link: "/dashboard/events",
          badge: "Module 6"
        },
        {
          name: "Financing & Opportunities",
          desc: "Grants, Loans, Athlete Scholarships, Corporate Sponsorship matching, Crowdfunding & Investment hub.",
          link: "/dashboard/funding",
          badge: "Module 7"
        },
        {
          name: "Policies & Knowledge Center",
          desc: "National Sports Policy documents, laws, guidelines, sports statistics, research library & downloadable files.",
          link: "/dashboard/knowledge",
          badge: "Module 8"
        }
      ]
    },
    {
      id: "additional",
      title: "Additional Features",
      icon: "🎁",
      items: [
        {
          name: "Marketplace",
          desc: "Buy & sell sports equipment, apparel, kits & gear across Nigeria.",
          link: "/dashboard/marketplace",
          badge: "E-Commerce"
        },
        {
          name: "Job Board",
          desc: "Sports jobs, coaching vacancies, volunteer roles, sports science internships.",
          link: "/dashboard/jobs",
          badge: "Careers"
        },
        {
          name: "Media Hub",
          desc: "News, video highlights, documentaries (Super Eagles, Grassroots), and podcasts.",
          link: "/dashboard/media",
          badge: "Broadcasting"
        },
        {
          name: "Analytics & Reports",
          desc: "Executive dashboards, state talent density maps, facility usage KPIs.",
          link: "/dashboard/analytics",
          badge: "BI & Data"
        }
      ]
    },
    {
      id: "system",
      title: "Integrations & Security",
      icon: "🔒",
      items: [
        {
          name: "Payments & Monetization",
          desc: "Interswitch / Paystack / Flutterwave gateway, ticketing QR codes, premium subscriptions.",
          link: "/dashboard/funding?tab=payments",
          badge: "Fintech"
        },
        {
          name: "Identity & Integrity",
          desc: "NIN / BVN / CAC identity verification badges & WADA Anti-Doping compliance check.",
          link: "/dashboard/talent?filter=verified",
          badge: "Verification"
        },
        {
          name: "Data & Privacy",
          desc: "Role-based access control (NSC Admin, State Minister, Scout, Fan) & Nigerian Law compliance.",
          link: "/dashboard/governance?tab=compliance",
          badge: "Security"
        }
      ]
    }
  ];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.headerTitleContainer}>
            <span className={styles.badge}>Functional Specification</span>
            <h2>Nigeria Sports Aggregation Platform</h2>
            <p>Interactive feature map directly from the functional specification blueprint.</p>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        <div className={styles.tabs}>
          <button 
            className={`${styles.tabBtn} ${activeTab === "all" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("all")}
          >
            🌟 All Features
          </button>
          {specCategories.map(cat => (
            <button 
              key={cat.id}
              className={`${styles.tabBtn} ${activeTab === cat.id ? styles.activeTab : ""}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.icon} {cat.title}
            </button>
          ))}
        </div>

        <div className={styles.body}>
          {specCategories
            .filter(cat => activeTab === "all" || activeTab === cat.id)
            .map(cat => (
              <div key={cat.id} className={styles.section}>
                <h3 className={styles.sectionHeader}>
                  <span>{cat.icon}</span> {cat.title}
                </h3>
                <div className={styles.grid}>
                  {cat.items.map((item, idx) => (
                    <div key={idx} className={styles.card}>
                      <div className={styles.cardTop}>
                        <h4>{item.name}</h4>
                        <span className={styles.itemBadge}>{item.badge}</span>
                      </div>
                      <p>{item.desc}</p>
                      <Link href={item.link} onClick={onClose} className={styles.demoBtn}>
                        Demonstrate Feature →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>

        <div className={styles.footer}>
          <span>One Nation • One Platform • Limitless Possibilities</span>
          <button className="button-primary" onClick={onClose}>Close Spec Tour</button>
        </div>
      </div>
    </div>
  );
}
