"use client";
import React from "react";
import "./filters.css"; // we'll add styles for the buttons

const categories = ["All", "JavaScript", "CSS"]; // you can add more later

type FilterBarProps = {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function FilterBar({ activeCategory, onCategoryChange }: FilterBarProps) {
  return (
    <div className="filter-buttons">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`filter-button ${activeCategory === cat ? "active" : ""}`}
          onClick={() => onCategoryChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
