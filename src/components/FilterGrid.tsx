"use client";
import React, { useState } from "react";
import { GridItemData } from "@/types/grid";
import { Grid } from "@/components/Grid"; // Import your existing Grid and GridItem components
import { priorityTechList } from "@/data/projects.data";

interface FilterGridProps {
  items: GridItemData[];
}

const FilterGrid: React.FC<FilterGridProps> = ({ items }) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const filterWords: string[] = Array.from(
    new Set(items.flatMap((d) => d.tech))
  ).sort((a, b) => {
    const priorityA = priorityTechList.indexOf(a);
    const priorityB = priorityTechList.indexOf(b);

    // If both words are in the priority list, sort based on their order in the list
    if (priorityA !== -1 && priorityB !== -1) {
      return priorityA - priorityB;
    }

    // If only one word is in the priority list, prioritize it over the other
    if (priorityA !== -1) {
      return -1;
    }
    if (priorityB !== -1) {
      return 1;
    }

    // If neither word is in the priority list, maintain their original order
    return 0;
  });

  const handleFilterClick = (word: string) => {
    setActiveFilters((prevFilters) => {
      if (prevFilters.includes(word)) {
        console.log("removing filter");
        // Remove the filter if it's already active
        return prevFilters.filter((filter) => filter !== word);
      } else {
        console.log("adding filter");
        // Add the filter if it's not active
        return [...prevFilters, word];
      }
    });
    console.log(activeFilters);
  };

  const filteredItems = activeFilters.length
    ? items.filter((item) =>
        activeFilters.some((filter) => item.tech.includes(filter))
      )
    : items;

  return (
    <div className='flex flex-col items-start justify-start m-auto mt-2.5 overflow-auto w-full max-w-screen p-4'>
      <div className='flex flex-wrap gap-2 mb-2'>
        {filterWords.map((word) => (
          <button
            key={word}
            className={`text-black font-semibold md:text-sm text-xs md:m-0.5m md:px-1.7 md:py-0.2 rounded-lg whitespace-nowrap font-headers cursor-pointer transition-colors duration-300 bubble-overlay hover:bg-gray-400 ${activeFilters.includes(word) ? "bg-gray-400" : "bg-white"}`}
            onClick={() => handleFilterClick(word)}
          >
            {word}
          </button>
        ))}
      </div>

      <Grid items={filteredItems} />
    </div>
  );
};

export default FilterGrid;
