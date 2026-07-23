"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./network.module.css";

const initialPosts = [
  {
    id: "1",
    content: "Just completed an intense 3-week high altitude training camp in Jos. Feeling stronger and faster than ever! 🏃🏾‍♂️💨 Next stop: National Trials.\n\n#RoadToGold #AthleticsNigeria",
    authorName: "Emmanuel Chidiebere",
    authorRole: "Track & Field Athlete",
    authorAvatar: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=150&auto=format&fit=crop",
    mediaUrl: "https://images.unsplash.com/photo-1551280857-2b9bbe5260fc?q=80&w=800&auto=format&fit=crop",
    likes: 342,
    commentsCount: 45,
    timeAgo: "2h ago"
  },
  {
    id: "2",
    content: "We are currently scouting for U-17 defensive midfielders for our upcoming European tour. Must have excellent vision and stamina. Drop a link to your highlight reel below! 👇⚽",
    authorName: "Kano Pillars Academy",
    authorRole: "Verified Scout",
    authorAvatar: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=150&auto=format&fit=crop",
    mediaUrl: null,
    likes: 1205,
    commentsCount: 312,
    timeAgo: "5h ago"
  },
  {
    id: "3",
    content: "Honored to receive the Grassroots Development Award from the Ministry of Sports today. Thank you to everyone who has supported our local basketball clinics in Port Harcourt! 🏀🇳🇬",
    authorName: "Coach Sarah Okon",
    authorRole: "Basketball Coach",
    authorAvatar: "https://images.unsplash.com/photo-1518605368461-1eb7b63f2735?q=80&w=150&auto=format&fit=crop",
    mediaUrl: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=800&auto=format&fit=crop",
    likes: 890,
    commentsCount: 56,
    timeAgo: "1d ago"
  }
];

export default function NetworkDashboard() {
  const [posts, setPosts] = useState(initialPosts);
  const [newPostText, setNewPostText] = useState("");
  const [activeTab, setActiveTab] = useState("feed"); // feed, forums, messages
  const [activeChatUser, setActiveChatUser] = useState(null);
  const [messages, setMessages] = useState([
    { sender: "Mark Smith (Euro Talent Scout)", text: "Hello! Impressive stats from the U-17 Lagos trials." },
    { sender: "You", text: "Thank you! I have uploaded my video highlights on my platform profile." }
  ]);
  const [chatInput, setChatInput] = useState("");

  const handleCreatePost = () => {
    if (!newPostText.trim()) return;
    const newPost = {
      id: Date.now().toString(),
      content: newPostText,
      authorName: "Dr. Paul O.",
      authorRole: "NSC Administrator",
      authorAvatar: null,
      mediaUrl: null,
      likes: 0,
      commentsCount: 0,
      timeAgo: "Just now"
    };
    setPosts([newPost, ...posts]);
    setNewPostText("");
  };

  const handleLike = (id) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    setMessages([...messages, { sender: "You", text: chatInput }]);
    setChatInput("");
  };

  return (
    <div className={styles.networkDashboard}>
      <div className={styles.header}>
        <div>
          <span className={styles.badge}>Module 4: Social Network for Sports</span>
          <h1 className={styles.title}>Sports LinkedIn for Nigeria</h1>
          <p className={styles.subtitle}>
            Connect, follow, message, and collaborate across athletes, coaches, scouts, federations & fans.
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className={styles.networkTabs}>
        <button 
          className={`${styles.tabBtn} ${activeTab === "feed" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("feed")}
        >
          📰 Community News Feed
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === "forums" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("forums")}
        >
          💬 Groups & Specialized Forums
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === "messages" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("messages")}
        >
          ✉️ Direct Messaging Hub
        </button>
      </div>

      {activeTab === "feed" && (
        <div className={styles.mainLayout}>
          {/* Main Feed Column */}
          <div className={styles.feedColumn}>
            {/* Composer Box */}
            <div className={`${styles.composerBox} card`}>
              <div className={styles.composerHeader}>
                <div className={styles.currentUserAvatar}>NS</div>
                <input 
                  type="text" 
                  placeholder="Share a sports update, scout callout, or achievement..." 
                  className={styles.composerInput}
                  value={newPostText}
                  onChange={(e) => setNewPostText(e.target.value)}
                />
              </div>
              <div className={styles.composerActions}>
                <div className={styles.composerTools}>
                  <button className={styles.toolBtn}>📷 Media</button>
                  <button className={styles.toolBtn}>🏅 Achievement</button>
                </div>
                <button 
                  className="button-primary" 
                  style={{ padding: '0.5rem 1.5rem' }}
                  onClick={handleCreatePost}
                >
                  Publish Post
                </button>
              </div>
            </div>

            {/* Posts List */}
            <div className={styles.postsList}>
              {posts.map(post => (
                <div key={post.id} className={`${styles.postCard} card`}>
                  <div className={styles.postHeader}>
                    <div className={styles.authorAvatar}>
                      {post.authorAvatar ? (
                        <Image src={post.authorAvatar} alt={post.authorName} fill style={{ objectFit: 'cover' }} />
                      ) : (
                        <div className={styles.placeholderAvatar}>{post.authorName.charAt(0)}</div>
                      )}
                    </div>
                    <div className={styles.authorInfo}>
                      <div className={styles.authorNameRow}>
                        <span className={styles.authorName}>{post.authorName}</span>
                        <span className={styles.verifiedBadge}>✓ Verified</span>
                      </div>
                      <div className={styles.authorRole}>{post.authorRole} • {post.timeAgo}</div>
                    </div>
                  </div>

                  <div className={styles.postContent}>
                    {post.content.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>

                  {post.mediaUrl && (
                    <div className={styles.postMedia}>
                      <Image src={post.mediaUrl} alt="Post media" fill style={{ objectFit: 'cover' }} />
                    </div>
                  )}

                  <div className={styles.postStats}>
                    <span>👍 {post.likes} Likes</span>
                    <span>{post.commentsCount} Comments</span>
                  </div>

                  <div className={styles.postActions}>
                    <button className={styles.actionBtn} onClick={() => handleLike(post.id)}>👍 Like</button>
                    <button className={styles.actionBtn} onClick={() => alert("Comment box expanded...")}>💬 Comment</button>
                    <button className={styles.actionBtn} onClick={() => setActiveTab("messages")}>✉️ Message</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar - Suggestions */}
          <aside className={styles.sidebarColumn}>
            <div className={`${styles.suggestionBox} card`}>
              <h3 className={styles.suggestionTitle}>Connect with Scouts & Coaches</h3>
              
              <div className={styles.suggestionItem}>
                <div className={styles.suggAvatar}>MS</div>
                <div className={styles.suggInfo}>
                  <div className={styles.suggName}>Mark Smith (Euro Scout)</div>
                  <div className={styles.suggRole}>UEFA Certified Recruiter</div>
                </div>
                <button className={styles.connectBtn} onClick={() => setActiveChatUser("Mark Smith")}>Message</button>
              </div>

              <div className={styles.suggestionItem}>
                <div className={styles.suggAvatar}>SO</div>
                <div className={styles.suggInfo}>
                  <div className={styles.suggName}>Coach Sarah Okon</div>
                  <div className={styles.suggRole}>Head Coach, Rivers Hoops</div>
                </div>
                <button className={styles.connectBtn} onClick={() => setActiveChatUser("Coach Sarah")}>Message</button>
              </div>
            </div>
          </aside>
        </div>
      )}

      {activeTab === "forums" && (
        <div className={styles.forumsSection}>
          <div className={styles.forumsGrid}>
            <div className={`${styles.forumCard} card`}>
              <h3>⚽ Grassroots Football Coaches Guild</h3>
              <p>Discuss tactical setups, youth player safety, and tournament scheduling.</p>
              <span>12,400 Members • 45 Active Topics</span>
              <button className="button-primary" style={{ marginTop: '1rem' }}>Join Forum Community</button>
            </div>
            <div className={`${styles.forumCard} card`}>
              <h3>🏃 Athletics & Track Field Nigeria</h3>
              <p>Sprint techniques, national trials, and international meet preparation.</p>
              <span>8,900 Members • 28 Active Topics</span>
              <button className="button-primary" style={{ marginTop: '1rem' }}>Join Forum Community</button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "messages" && (
        <div className={`${styles.messagingBox} card`}>
          <div className={styles.chatHeader}>
            <h3>✉️ Direct Messages (Encrypted & NIN Verified)</h3>
            <span>Connected with: Mark Smith (Euro Talent Scout)</span>
          </div>

          <div className={styles.chatLog}>
            {messages.map((m, idx) => (
              <div key={idx} className={m.sender === "You" ? styles.msgRight : styles.msgLeft}>
                <strong>{m.sender}:</strong> {m.text}
              </div>
            ))}
          </div>

          <div className={styles.chatInputRow}>
            <input 
              type="text" 
              placeholder="Type your message to recruiter..." 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              className={styles.chatInput}
            />
            <button className="button-primary" onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
