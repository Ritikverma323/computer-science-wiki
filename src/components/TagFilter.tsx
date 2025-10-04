"use client";

import React, { useState, useEffect, useRef } from "react";
import { getAllTags, getTagsWithCounts } from "@/data/tags";

interface TagFilterProps {
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
  className?: string;
}

export default function TagFilter({ selectedTags, onTagsChange, className = "" }: TagFilterProps) {
  const [availableTags, setAvailableTags] = useState<Array<{tag: string, count: number}>>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setAvailableTags(getTagsWithCounts());
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagsChange(selectedTags.filter(t => t !== tag));
    } else {
      onTagsChange([...selectedTags, tag]);
    }
  };

  const clearAllTags = () => {
    onTagsChange([]);
  };

  const selectAllVisible = () => {
    const visibleTagNames = filteredTags.map(t => t.tag);
    const newSelected = [...new Set([...selectedTags, ...visibleTagNames])];
    onTagsChange(newSelected);
  };

  const filteredTags = availableTags.filter(({ tag }) =>
    tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`tag-filter-dropdown ${className}`} ref={dropdownRef}>
      {/* Filter Button */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="filter-dropdown-btn"
        aria-expanded={isDropdownOpen}
      >
        <span className="filter-icon">🏷️</span>
        <span>Filter by Tags</span>
        {selectedTags.length > 0 && (
          <span className="selected-count">({selectedTags.length})</span>
        )}
        <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
      </button>

      {/* Dropdown Content */}
      {isDropdownOpen && (
        <div className="filter-dropdown-content">
          {/* Search within tags */}
          <div className="filter-search">
            <input
              type="text"
              placeholder="Search tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="filter-search-input"
            />
          </div>

          {/* Control buttons */}
          <div className="filter-controls">
            <button onClick={selectAllVisible} className="control-btn select-all">
              Select All{searchQuery && ' Visible'}
            </button>
            <button onClick={clearAllTags} className="control-btn clear-all">
              Clear All ({selectedTags.length})
            </button>
          </div>

          {/* Tags list with checkboxes */}
          <div className="filter-options">
            {filteredTags.length === 0 ? (
              <div className="no-tags-found">No tags found matching "{searchQuery}"</div>
            ) : (
              filteredTags.map(({ tag, count }) => (
                <label key={tag} className="filter-option">
                  <input
                    type="checkbox"
                    checked={selectedTags.includes(tag)}
                    onChange={() => handleTagToggle(tag)}
                    className="filter-checkbox"
                  />
                  <span className="checkbox-custom"></span>
                  <span className="tag-label">
                    <span className="tag-name">{tag}</span>
                    <span className="tag-count">({count})</span>
                  </span>
                </label>
              ))
            )}
          </div>

          {/* Selected tags summary */}
          {selectedTags.length > 0 && (
            <div className="selected-summary">
              <div className="summary-header">Selected Tags:</div>
              <div className="selected-tags-list">
                {selectedTags.map(tag => (
                  <span key={tag} className="selected-tag-item">
                    {tag}
                    <button 
                      onClick={() => handleTagToggle(tag)}
                      className="remove-selected-tag"
                      aria-label={`Remove ${tag}`}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Active filters display outside dropdown */}
      {selectedTags.length > 0 && (
        <div className="active-filters">
          <span className="active-filters-label">Active filters:</span>
          {selectedTags.slice(0, 3).map(tag => (
            <span key={tag} className="active-filter-tag">
              {tag}
              <button 
                onClick={() => handleTagToggle(tag)}
                className="remove-active-filter"
              >
                ×
              </button>
            </span>
          ))}
          {selectedTags.length > 3 && (
            <span className="more-filters">+{selectedTags.length - 3} more</span>
          )}
        </div>
      )}
    </div>
  );
}