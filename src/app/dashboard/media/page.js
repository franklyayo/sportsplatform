"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./media.module.css";

export default function MediaHubPage() {
  const [activeMedia, setActiveMedia] = useState(null);

  const videos = [
    {
      id: 1,
      title: "Super Eagles: The Journey to Global Glory (Full Documentary)",
      type: "Documentary",
      duration: "45 mins",
      views: "124K views",
      thumb: "/images/nigerian_sports_media.png"
    },
    {
      id: 2,
      title: "2026 National Sports Festival - Athletics 100m Sprint Finals",
      type: "Match Highlights",
      duration: "12 mins",
      views: "45K views",
      thumb: "/images/nigerian_sports_media.png"
    },
    {
      id: 3,
      title: "Grassroots Discovery: Kano & Enugu Youth Championship",
      type: "Talent Showcase",
      duration: "18 mins",
      views: "29K views",
      thumb: "/images/nigerian_sports_media.png"
    }
  ];

  const podcasts = [
    {
      id: 101,
      title: "Ep 42: Building World-Class Sports Infrastructure in Nigeria",
      host: "NaijaSports Podcast Network",
      duration: "34 mins",
      date: "Yesterday"
    },
    {
      id: 102,
      title: "Ep 41: NSC Anti-Doping Guidelines & Athlete Integrity",
      host: "Dr. Paul O. (NSC)",
      duration: "28 mins",
      date: "3 days ago"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <span className={styles.badge}>Media Hub</span>
          <h1 className={styles.title}>News, Videos, Documentaries & Podcasts</h1>
          <p className={styles.subtitle}>
            Broadcasting Nigerian sports excellence — live coverage, match highlights, and podcasts.
          </p>
        </div>
      </div>

      {/* Featured Video Player Modal / Banner */}
      {activeMedia && (
        <div className={styles.videoPlayerModal}>
          <div className={styles.playerContent}>
            <div className={styles.playerHeader}>
              <h3>🎬 Now Playing: {activeMedia.title}</h3>
              <button className={styles.closePlayer} onClick={() => setActiveMedia(null)}>✕</button>
            </div>
            <div className={styles.videoFrame}>
              <div className={styles.playOverlay}>
                <span>▶ LIVE STREAMING / HIGH-DEFINITION VIDEO SIMULATOR</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Videos Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📺 Featured Video Documentaries & Highlights</h2>
        <div className={styles.grid}>
          {videos.map((v) => (
            <div key={v.id} className={`${styles.card} card`} onClick={() => setActiveMedia(v)}>
              <div className={styles.thumbBox}>
                <Image src={v.thumb} alt={v.title} fill style={{ objectFit: "cover" }} />
                <div className={styles.playBtnIcon}>▶</div>
                <span className={styles.durationTag}>{v.duration}</span>
              </div>
              <div className={styles.videoInfo}>
                <span className={styles.typeTag}>{v.type}</span>
                <h3 className={styles.videoTitle}>{v.title}</h3>
                <span className={styles.views}>{v.views}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Podcasts Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🎙️ Sports Podcasts & Audio Interviews</h2>
        <div className={styles.podcastList}>
          {podcasts.map((p) => (
            <div key={p.id} className={`${styles.podcastCard} card`}>
              <div className={styles.podcastIcon}>🎙️</div>
              <div className={styles.podcastDetails}>
                <h3>{p.title}</h3>
                <p>{p.host} • {p.duration}</p>
              </div>
              <button className={styles.listenBtn} onClick={() => alert(`Playing podcast episode: "${p.title}"`)}>
                ▶ Listen Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
