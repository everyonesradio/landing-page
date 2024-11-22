'use client';
import React from 'react';
import { projectsGridData } from '@/data/projects.data';
import FilterGrid from '@/components/FilterGrid';

const MusicAPIs = () => {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen p-4 w-full max-w-screen">
			<div className="items-center justify-center lg:flex flex-col lg:pw-24 lg:m-10 mx-0 w-full max-w-screen min-h-screen">
				<div className="text-center text-white w-full">
					<h1 className="text-2xl lg:text-3xl leading-normal font-bold text-gradient">
						MUSIC API INDEX
					</h1>
				</div>
				<FilterGrid items={projectsGridData} />
			</div>
		</main>
	);
};

export default MusicAPIs;
