"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./marketplace.module.css";

export default function MarketplacePage() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    {
      id: 1,
      name: "Official Super Eagles Match Jersey (Green)",
      category: "Apparel",
      price: 25000,
      rating: "4.9 ★",
      seller: "Nike Nigeria Official Store",
      img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Molten Professional Leather Basketball (Size 7)",
      category: "Equipment",
      price: 35000,
      rating: "4.8 ★",
      seller: "NBBF Certified Gear",
      img: "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Grassroots Pro Agility Training Cones & Ladder Kit",
      category: "Training Gear",
      price: 18500,
      rating: "4.7 ★",
      seller: "Lagos Sports Academy Supplies",
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Spike Sprint Shoes for Track & Field (Unisex)",
      category: "Footwear",
      price: 42000,
      rating: "5.0 ★",
      seller: "AFN Equipment Partner",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Professional Boxing Gloves 14oz (Everlast)",
      category: "Equipment",
      price: 28000,
      rating: "4.8 ★",
      seller: "Nigeria Boxing Federation Hub",
      img: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "High-Performance Compression Base Layer",
      category: "Apparel",
      price: 12000,
      rating: "4.6 ★",
      seller: "NaijaFit Sports",
      img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=400&auto=format&fit=crop"
    }
  ];

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <span className={styles.badge}>Additional Feature</span>
          <h1 className={styles.title}>Nigeria Sports Marketplace</h1>
          <p className={styles.subtitle}>
            Buy & sell authentic sports gear, apparel, equipment, and certified training accessories nationwide.
          </p>
        </div>

        <div className={styles.cartSummary}>
          🛒 Cart: <strong>{cart.length} items</strong> (₦{cartTotal.toLocaleString()})
          {cart.length > 0 && (
            <button className={styles.checkoutBtn} onClick={() => alert("Redirecting to Paystack / Interswitch Payment Gateway Simulator...")}>
              Checkout
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className={styles.categories}>
        {["All", "Apparel", "Equipment", "Footwear", "Training Gear"].map(cat => (
          <button
            key={cat}
            className={`${styles.catBtn} ${selectedCategory === cat ? styles.activeCat : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className={styles.grid}>
        {filteredProducts.map((p) => (
          <div key={p.id} className={`${styles.card} card`}>
            <div className={styles.imageBox}>
              <Image src={p.img} alt={p.name} fill style={{ objectFit: "cover" }} />
              <span className={styles.priceTag}>₦{p.price.toLocaleString()}</span>
            </div>

            <div className={styles.info}>
              <div className={styles.metaRow}>
                <span className={styles.catLabel}>{p.category}</span>
                <span className={styles.rating}>{p.rating}</span>
              </div>
              <h3 className={styles.productName}>{p.name}</h3>
              <p className={styles.seller}>Seller: {p.seller}</p>
              
              <button className={styles.addBtn} onClick={() => addToCart(p)}>
                + Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
