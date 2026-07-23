"use client";

import { useState } from "react";
import styles from "./funding.module.css";

const mockFunding = [
  {
    id: "1",
    title: "National Athlete Excellence Scholarship 2026",
    provider: "Nigeria Sports Commission (NSC)",
    fundingType: "Scholarship",
    amount: "₦2,500,000 / year",
    deadline: "2026-11-30",
    eligibleEntities: ["Athletes"],
    status: "Open",
    description: "Supports U-20 elite athletes with training, nutritional stipends, international travel, and university tuition."
  },
  {
    id: "2",
    title: "Grassroots Football Club Development Grant",
    provider: "NFF & Corporate Banking Partners",
    fundingType: "Grant",
    amount: "Up to ₦10,000,000",
    deadline: "2026-09-15",
    eligibleEntities: ["Clubs"],
    status: "Open",
    description: "Capital grant for purchasing training kits, pitch repairs, and certified coaching staff hiring."
  },
  {
    id: "3",
    title: "Elite Athlete Corporate Brand Sponsorship Matching",
    provider: "Interswitch / Nike Nigeria",
    fundingType: "Sponsorship",
    amount: "Tiered (₦1M - ₦5M) + Gear",
    deadline: "2026-12-31",
    eligibleEntities: ["Athletes"],
    status: "Open",
    description: "Brand sponsorship deals matching top-performing athletes with national corporate sponsors."
  }
];

const crowdfundingCampaigns = [
  {
    id: 101,
    title: "Rebuild Enugu Youth Boxing Gym",
    raised: "₦3,800,000",
    target: "₦5,000,000",
    donors: "142 Sports Fans",
    percentage: 76
  },
  {
    id: 102,
    title: "Send Kano Girls Basketball Team to National Finals",
    raised: "₦1,200,000",
    target: "₦1,500,000",
    donors: "89 Supporters",
    percentage: 80
  }
];

export default function FundingDashboard() {
  const [activeTab, setActiveTab] = useState("opportunities");
  const [selectedOpportunityModal, setSelectedOpportunityModal] = useState(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  return (
    <div className={styles.fundingDashboard}>
      <div className={styles.header}>
        <div>
          <span className={styles.badge}>Module 7: Financing & Opportunities</span>
          <h1 className={styles.title}>Grants, Loans, Scholarships & Crowdfunding</h1>
          <p className={styles.subtitle}>
            Financial opportunities for athletes, coaches, clubs & state federations across Nigeria.
          </p>
        </div>

        <button className="button-primary" onClick={() => alert("Opportunity Creator Form Modal...")}>
          + Post Funding Opportunity
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className={styles.featureTabs}>
        <button 
          className={`${styles.tabBtn} ${activeTab === "opportunities" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("opportunities")}
        >
          💰 Grants, Funds & Scholarships
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === "crowdfunding" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("crowdfunding")}
        >
          🤝 Grassroots Crowdfunding & Donations
        </button>
      </div>

      {activeTab === "opportunities" && (
        <div className={styles.fundingBoard}>
          {mockFunding.map(opp => (
            <div key={opp.id} className={`${styles.fundingCard} card`}>
              <div className={styles.cardHeader}>
                <span className={styles.statusBadge}>{opp.status}</span>
                <span className={styles.fundingType}>{opp.fundingType}</span>
              </div>
              
              <h3 className={styles.oppTitle}>{opp.title}</h3>
              <p className={styles.provider}>By {opp.provider}</p>
              
              <div className={styles.amountBox}>
                <span className={styles.amountLabel}>Total Funding Value</span>
                <span className={styles.amountValue}>{opp.amount}</span>
              </div>

              <p className={styles.oppDesc}>{opp.description}</p>
              
              <div className={styles.cardFooter}>
                <div className={styles.deadlineInfo}>
                  <span className={styles.deadlineLabel}>Deadline</span>
                  <span className={styles.deadlineValue}>{opp.deadline}</span>
                </div>
                
                <button 
                  className="button-primary"
                  onClick={() => {
                    setSelectedOpportunityModal(opp);
                    setAppliedSuccess(false);
                  }}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "crowdfunding" && (
        <div className={styles.crowdGrid}>
          {crowdfundingCampaigns.map(c => (
            <div key={c.id} className={`${styles.crowdCard} card`}>
              <h3>{c.title}</h3>
              
              <div className={styles.progressTrack}>
                <div className={styles.progressFill} style={{ width: `${c.percentage}%` }}></div>
              </div>

              <div className={styles.crowdMeta}>
                <span>Raised: <strong>{c.raised}</strong></span>
                <span>Target: <strong>{c.target}</strong></span>
              </div>
              <p className={styles.donorCount}>❤️ Supported by {c.donors}</p>

              <button 
                className="button-primary"
                style={{ marginTop: '1rem' }}
                onClick={() => alert(`Redirecting to Paystack / Interswitch donation for ${c.title}...`)}
              >
                💸 Back This Campaign (Donate)
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Grant Application Modal */}
      {selectedOpportunityModal && (
        <div className={styles.modalOverlay} onClick={() => setSelectedOpportunityModal(null)}>
          <div className={styles.modalCard} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedOpportunityModal(null)}>✕</button>

            {!appliedSuccess ? (
              <>
                <h2>📝 Apply for {selectedOpportunityModal.title}</h2>
                <p>Provider: {selectedOpportunityModal.provider} • Value: {selectedOpportunityModal.amount}</p>

                <div className={styles.appForm}>
                  <label>Full Name / Organization Name</label>
                  <input type="text" defaultValue="Dr. Paul O. / Lagos Youth Sports" className={styles.input} />

                  <label>NIN / CAC Verification Number</label>
                  <input type="text" defaultValue="NIN-894102948" className={styles.input} />

                  <label>Statement of Purpose & Budget Pitch</label>
                  <textarea rows={4} placeholder="Briefly describe how funding will be used..." className={styles.textarea} />

                  <button 
                    className="button-primary"
                    onClick={() => setAppliedSuccess(true)}
                  >
                    Submit Official Funding Application
                  </button>
                </div>
              </>
            ) : (
              <div className={styles.successBox}>
                <div className={styles.successIcon}>🎉</div>
                <h3>Application Submitted Successfully!</h3>
                <p>Application Ref: <strong>GRANT-NSC-2026-9841</strong></p>
                <p>The NSC Audit & Grants Committee will review your NIN-verified file within 5 business days.</p>
                <button className="button-primary" onClick={() => setSelectedOpportunityModal(null)}>
                  Close Application
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
