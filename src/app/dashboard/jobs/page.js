"use client";

import { useState } from "react";
import styles from "./jobs.module.css";

export default function JobsPage() {
  const [filterType, setFilterType] = useState("All");
  const [appliedJobs, setAppliedJobs] = useState([]);

  const jobs = [
    {
      id: 1,
      title: "Head Youth Football Coach (U-17)",
      organization: "Enyimba International Youth Academy",
      location: "Aba, Abia State",
      type: "Full-Time",
      salary: "₦350,000 / month",
      tags: ["Coaching", "Football", "CAF C-License"],
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Sports Medicine Physiotherapist",
      organization: "Nigeria Basketball Federation (NBBF)",
      location: "Abuja (FCT)",
      type: "Full-Time",
      salary: "₦450,000 / month",
      tags: ["Medical", "Basketball", "NIN Verified"],
      posted: "1 day ago"
    },
    {
      id: 3,
      title: "Grassroots Talent Scout (Western Zone)",
      organization: "Nigeria Sports Commission (NSC)",
      location: "Lagos / Ogun / Oyo",
      type: "Contract",
      salary: "₦250,000 + Performance Bonus",
      tags: ["Scouting", "Talent ID", "Multi-Sport"],
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "National Sports Festival Operations Volunteer",
      organization: "Lagos State Sports Council",
      location: "Surulere, Lagos State",
      type: "Volunteer",
      salary: "Stipend + Certificate",
      tags: ["Event Ops", "Volunteer", "Certificate"],
      posted: "Just now"
    },
    {
      id: 5,
      title: "Sports Data Analyst & Performance Tracker",
      organization: "Super Eagles Analytics Lab",
      location: "Remote / Abuja",
      type: "Full-Time",
      salary: "₦500,000 / month",
      tags: ["Analytics", "GPS Tracking", "Python/R"],
      posted: "4 days ago"
    }
  ];

  const handleApply = (jobId) => {
    if (!appliedJobs.includes(jobId)) {
      setAppliedJobs([...appliedJobs, jobId]);
    }
  };

  const filteredJobs = filterType === "All" 
    ? jobs 
    : jobs.filter(j => j.type === filterType);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <span className={styles.badge}>Job Board & Careers</span>
          <h1 className={styles.title}>Nigerian Sports Careers Hub</h1>
          <p className={styles.subtitle}>
            Find vacancies for certified coaches, physiotherapists, referees, sports scientists, and grassroots volunteers.
          </p>
        </div>

        <button className="button-primary" onClick={() => alert("Post a sports vacancy form modal coming up...")}>
          + Post Vacancy
        </button>
      </div>

      {/* Filter Tabs */}
      <div className={styles.tabs}>
        {["All", "Full-Time", "Contract", "Volunteer"].map(type => (
          <button
            key={type}
            className={`${styles.tabBtn} ${filterType === type ? styles.activeTab : ""}`}
            onClick={() => setFilterType(type)}
          >
            {type} Opportunities
          </button>
        ))}
      </div>

      {/* Jobs List */}
      <div className={styles.list}>
        {filteredJobs.map((j) => {
          const isApplied = appliedJobs.includes(j.id);
          return (
            <div key={j.id} className={`${styles.card} card`}>
              <div className={styles.jobMain}>
                <div className={styles.orgAvatar}>{j.organization.charAt(0)}</div>
                <div className={styles.details}>
                  <div className={styles.titleRow}>
                    <h3>{j.title}</h3>
                    <span className={styles.typeBadge}>{j.type}</span>
                  </div>
                  <p className={styles.orgName}>{j.organization} • 📍 {j.location}</p>
                  
                  <div className={styles.tagsRow}>
                    {j.tags.map(t => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.jobSide}>
                <span className={styles.salary}>{j.salary}</span>
                <span className={styles.posted}>{j.posted}</span>
                <button 
                  className={`${styles.applyBtn} ${isApplied ? styles.applied : ""}`}
                  onClick={() => handleApply(j.id)}
                >
                  {isApplied ? "✓ Application Sent" : "Apply Now"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
