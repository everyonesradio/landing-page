'use client'
import React from "react";
import { projectsGridData } from "@/data/projects.data";
import FilterGrid from "@/components/FilterGrid";

const MusicAPIs = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="items-center justify-center lg:flex flex-col lg:pw-24 m-10 mb-5">
        <div className="text-center text-white">
          <h1 className="text-2xl lg:text-3xl leading-normal font-bold text-gradient">MUSIC API INDEX</h1>
        </div>
        <FilterGrid items={projectsGridData}/>
      </div>
    </main>
  );
 };
 
 export default MusicAPIs;