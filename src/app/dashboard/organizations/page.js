"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./organizations.module.css";

const mockOrganizations = [
  {
    id: "1",
    name: "Nigeria Football Federation (NFF)",
    orgType: "National Federation",
    sport: "Football",
    complianceMetrics: ["NSC Certified", "Audit Passed 2026", "WADA Compliant"],
    establishedYear: 1945,
    headquarters: "Package B, National Stadium, Abuja",
    contactEmail: "info@nff.ng",
    website: "nff.ng",
    logoUrl: "https://images.unsplash.com/photo-1518605368461-1eb7b63f2735?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Lagos State Sports Commission",
    orgType: "State Sports Council",
    sport: "All Sports",
    complianceMetrics: ["NSC Certified", "Grassroots Star Grade A"],
    establishedYear: 2017,
    headquarters: "Teslim Balogun Stadium, Surulere, Lagos",
    contactEmail: "sports@lagosstate.gov.ng",
    website: "sports.lagosstate.gov.ng",
    logoUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Athletics Federation of Nigeria (AFN)",
    orgType: "National Federation",
    sport: "Athletics",
    complianceMetrics: ["NSC Certified", "World Athletics Affiliate"],
    establishedYear: 1944,
    headquarters: "Abuja (FCT)",
    contactEmail: "contact@afn.org.ng",
    website: "afn.org.ng",
    logoUrl: null
  },
  {
    id: "4",
    name: "Nigeria Basketball Federation (NBBF)",
    orgType: "National Federation",
    sport: "Basketball",
    complianceMetrics: ["NSC Certified", "FIBA Affiliate"],
    establishedYear: 1964,
    headquarters: "Abuja (FCT)",
    contactEmail: "info@nbbf.com.ng",
    website: "nbbf.com.ng",
    logoUrl: null
  }
];

export default function OrganizationsDashboard() {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedOrgModal, setSelectedOrgModal] = useState(null);

  const filteredOrgs = mockOrganizations.filter(org => {
    if (selectedType !== "All" && org.orgType !== selectedType) return false;
    return true;
  });

  return (
    <div className={styles.orgDashboard}>
      <div className={styles.header}>
        <div>
          <span className={styles.badge}>Module 2: Sports Organizations & Federations</span>
          <h1 className={styles.title}>National Federations & Governance Hub</h1>
          <p className={styles.subtitle}>
            Directory of 50+ national federations, 36 state sports councils, accredited clubs & governance compliance tracker.
          </p>
        </div>
        <div className={styles.actions}>
          <button className="button-primary" onClick={() => alert("NSC Federation Accreditation Portal...")}>
            + Apply for NSC Accreditation
          </button>
        </div>
      </div>

      <div className={styles.mainLayout}>
        {/* Sidebar Filters */}
        <aside className={`${styles.filtersSidebar} card`}>
          <h3 className={styles.filterTitle}>Directory Filters</h3>
          
          <div className={styles.filterGroup}>
            <label>Organization Category</label>
            <select 
              className={styles.select}
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="National Federation">National Federations</option>
              <option value="State Sports Council">State Sports Councils</option>
            </select>
          </div>
        </aside>

        {/* Organizations List */}
        <div className={styles.orgList}>
          {filteredOrgs.map(org => (
            <div key={org.id} className={`${styles.orgCard} card`}>
              <div className={styles.orgLogoContainer}>
                {org.logoUrl ? (
                  <Image src={org.logoUrl} alt={org.name} fill style={{ objectFit: 'cover' }} />
                ) : (
                  <div className={styles.placeholderLogo}>{org.name.charAt(0)}</div>
                )}
              </div>

              <div className={styles.orgInfo}>
                <h3 className={styles.orgName}>{org.name}</h3>
                <p className={styles.orgDetail}>{org.orgType} • {org.sport} • 📍 {org.headquarters}</p>
                
                <div className={styles.complianceTags}>
                  {org.complianceMetrics.map((metric, i) => (
                    <span key={i} className={styles.complianceBadge}>
                      ✓ {metric}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.orgAction}>
                <button 
                  className="button-primary"
                  onClick={() => setSelectedOrgModal(org)}
                >
                  View Directory Contact →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Directory Modal */}
      {selectedOrgModal && (
        <div className={styles.modalOverlay} onClick={() => setSelectedOrgModal(null)}>
          <div className={styles.modalCard} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedOrgModal(null)}>✕</button>

            <span className={styles.badge}>NSC Accredited Entity</span>
            <h2>{selectedOrgModal.name}</h2>
            <p>{selectedOrgModal.orgType} • Established {selectedOrgModal.establishedYear}</p>

            <div className={styles.contactDetailsBox}>
              <p>📍 <strong>Headquarters:</strong> {selectedOrgModal.headquarters}</p>
              <p>✉️ <strong>Official Email:</strong> {selectedOrgModal.contactEmail}</p>
              <p>🌐 <strong>Website:</strong> https://{selectedOrgModal.website}</p>
              <p>✅ <strong>Audit Rating:</strong> Passed NSC Quarterly Financial & Governance Audit</p>
            </div>

            <button className="button-primary" onClick={() => setSelectedOrgModal(null)}>
              Close Directory Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
