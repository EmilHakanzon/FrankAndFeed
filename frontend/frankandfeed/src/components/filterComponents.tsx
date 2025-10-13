"use client";

import { useState } from "react";
import Image from "next/image";

interface FilterComponentProps {
  onFilterChange?: (filter: string) => void;
}

export default function FilterComponent({
  onFilterChange,
}: FilterComponentProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All Posts");

  const filterOptions = [
    "All Posts",
    "Most Recent",
    "Most Liked",
    "Following",
    "Trending",
  ];

  const handleFilterSelect = (option: string) => {
    setSelectedFilter(option);
    setIsFilterOpen(false);
    if (onFilterChange) {
      onFilterChange(option);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="relative">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center justify-between w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 group"
        >
          <div className="flex items-center space-x-3">
            <span className="font-medium text-gray-700">{selectedFilter}</span>
          </div>
          <div
            className={`transition-transform duration-200 ${
              isFilterOpen ? "rotate-180" : ""
            }`}
          >
            <Image
              src="/filtericon.png"
              alt="Filter"
              width={30}
              height={30}
              className="opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </div>
        </button>

        {/* Dropdown Menu */}
        {isFilterOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden">
            {filterOptions.map((option, index) => (
              <button
                key={option}
                onClick={() => handleFilterSelect(option)}
                className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150 flex items-center space-x-3 ${
                  selectedFilter === option
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700"
                } ${index !== filterOptions.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    selectedFilter === option ? "bg-blue-500" : "bg-transparent"
                  }`}
                />
                <span className="font-medium">{option}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
