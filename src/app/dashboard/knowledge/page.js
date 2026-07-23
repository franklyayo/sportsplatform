"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./knowledge.module.css";

const mockResources = [
  {
    id: "1",
    title: "National Sports Industry Policy (NSIP 2026)",
    description: "The primary legal and operational framework governing sports business, infrastructure incentives, and tax concessions in Nigeria.",
    mediaType: "PDF Policy Document",
    category: "Policies & Laws",
    author: "Federal Ministry of Sports & NSC",
    fileSize: "4.8 MB",
    thumbnailUrl: "https://images.unsplash.com/photo-1551280857-2b9bbe5260fc?q=80&w=600&auto=format&fit=crop",
    fullText: "NATIONAL SPORTS INDUSTRY POLICY (NSIP 2026)\n\n1. EXECUTIVE SUMMARY:\nThis policy establishes sports as a key economic driver for Nigeria, classifying sports infrastructure as national priority infrastructure eligible for pioneer tax incentives.\n\n2. GOVERNANCE & INTEGRITY:\nAll national federations must comply with quarterly financial audits and NIN-based athlete identification registry.\n\n3. INFRASTRUCTURE & LEASES:\nPublic-Private Partnerships (PPP) guidelines for stadium management and long-term facility leases."
  },
  {
    id: "2",
    title: "2026 National Anti-Doping Regulations & Prohibited List",
    description: "The official guide detailing updated WADA prohibited substances, athlete testing protocols, and TUE applications.",
    mediaType: "PDF Regulation",
    category: "Anti-Doping & Integrity",
    author: "WADA & National Anti-Doping Agency",
    fileSize: "2.4 MB",
    thumbnailUrl: "https://images.unsplash.com/photo-1518605368461-1eb7b63f2735?q=80&w=600&auto=format&fit=crop",
    fullText: "NATIONAL ANTI-DOPING REGULATIONS 2026\n\n1. SCOPE:\nApplies to all registered athletes, coaches, and medical personnel participating in sanctioned Nigerian sports events.\n\n2. TESTING PROTOCOLS:\nIn-competition and out-of-competition testing mandatory for national trials and league matches."
  },
  {
    id: "3",
    title: "Grassroots Sports Economic Impact Report 2026",
    description: "Statistical analysis of jobs created, infrastructure utilization rates, and talent retention across 36 states.",
    mediaType: "Research Report",
    category: "Statistics & Research",
    author: "Nigeria Sports Statistics Bureau",
    fileSize: "6.1 MB",
    thumbnailUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=600&auto=format&fit=crop",
    fullText: "STATISTICAL REPORT ON NIGERIAN SPORTS ECONOMY 2026\n\n- Total Verified Athletes: 1,420,850\n- Total Active Facilities: 8,940\n- Grassroots Economic Value: ₦185.4 Billion"
  }
];

export default function KnowledgeDashboard() {
  const [selectedDocModal, setSelectedDocModal] = useState(null);

  return (
    <div className={styles.knowledgeDashboard}>
      <div className={styles.header}>
        <div>
          <span className={styles.badge}>Module 8: Policies & Knowledge Center</span>
          <h1 className={styles.title}>Policies, Laws, Research & Document Library</h1>
          <p className={styles.subtitle}>
            National sports policies, laws, guidelines, research statistics, best practices & document library.
          </p>
        </div>
      </div>

      <div className={styles.mainLayout}>
        {/* Filters Sidebar */}
        <aside className={`${styles.filtersSidebar} card`}>
          <h3 className={styles.filterTitle}>Document Categories</h3>
          
          <div className={styles.checkboxGroup}>
            <label><input type="checkbox" defaultChecked /> Policies & National Laws</label>
            <label><input type="checkbox" defaultChecked /> Anti-Doping & Integrity</label>
            <label><input type="checkbox" defaultChecked /> Statistics & Case Studies</label>
          </div>
        </aside>

        {/* Resources Grid */}
        <div className={styles.resourcesGrid}>
          {mockResources.map(res => (
            <div key={res.id} className={`${styles.resourceCard} card`}>
              <div className={styles.thumbnailContainer}>
                <Image src={res.thumbnailUrl} alt={res.title} fill style={{ objectFit: 'cover' }} />
                <div className={styles.mediaBadge}>{res.mediaType}</div>
              </div>

              <div className={styles.resourceInfo}>
                <span className={styles.categoryLabel}>{res.category}</span>
                <h3 className={styles.resourceTitle}>{res.title}</h3>
                <p className={styles.authorLabel}>By {res.author} • {res.fileSize}</p>
                <p className={styles.resourceDesc}>{res.description}</p>

                <div className={styles.cardActions}>
                  <button 
                    className="button-primary"
                    onClick={() => setSelectedDocModal(res)}
                  >
                    📖 Read Document Online
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Document Reader Modal */}
      {selectedDocModal && (
        <div className={styles.modalOverlay} onClick={() => setSelectedDocModal(null)}>
          <div className={styles.modalCardLarge} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedDocModal(null)}>✕</button>

            <div className={styles.docHeader}>
              <span className={styles.badge}>{selectedDocModal.category}</span>
              <h2>{selectedDocModal.title}</h2>
              <p>Authority: {selectedDocModal.author} • Size: {selectedDocModal.fileSize}</p>
            </div>

            <div className={styles.docReaderContent}>
              <pre>{selectedDocModal.fullText}</pre>
            </div>

            <div className={styles.docModalFooter}>
              <button 
                className="button-primary"
                onClick={() => alert(`Downloading official ${selectedDocModal.title} PDF...`)}
              >
                📥 Download Official PDF File
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
