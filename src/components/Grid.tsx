'use client'
import React from "react";
import Image from "next/image";
import { GridItemData } from "@/types/grid";
import { useSpring, animated } from '@react-spring/web';
const defaultImgPath = '/img/projects/default.webp';

export const Grid: React.FC<{items: GridItemData[]}> = ({items}) => {
  return(
    <div className="grid grid-cols-4 gap-4 overflow-auto max-h-[80vh]">
      {/* SPECIAL GRID ITEM */}
      <a href="mailto:everyonesradio@gmail.com" target="_blank" className="col-span-1">
        <div className="bg-white shadow-lg rounded-lg p-4 m-2">
          <p>Want to add your API to the index?</p>
        </div>
      </a>
      {/* END SPECIAL GRID ITEM */}
      {items.map((itemData, i) => <GridItem key={i} data={itemData} index={items.length - (i)}/>)}
    </div>              
  );
};

export const GridItem: React.FC<{ data: GridItemData, index: number }> = ({ data, index }) => {
  const gridAreaStyles = index % 2 === 0 ? 'span 2 / span 1' : 'span 2 / span 2';

  const [props] = useSpring(() => ({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 300, friction: 10 },
  }));

  const animatedStyles = {
    ...props,
    gridArea: gridAreaStyles,
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-2" >
      <div className="image-container">
        <Image src={data.imageUrl ? data.imageUrl : defaultImgPath} alt={data.title + " Preview"} width={100} height={100} className="rounded-lg"/>
      </div>
      <div className="mt-4">
        <div>
          <h3 className="text-xl font-semibold">{data.title}</h3>
          <p className="text-gray-600">{data.tech.join(", ")}</p>
        </div>
        <div className="mt-4">
          <div>
            <p className="text-gray-700">
              {data.description}
            </p>
            <div className="mt-4">
              {data.liveUrl && <a target="_blank" href={data.liveUrl} className="text-blue-500 hover:text-blue-700">Live</a>}
              {data.repoUrl && <a target="_blank" href={data.repoUrl} className="text-blue-500 hover:text-blue-700">Repo</a>}
              {data.previewUrl && <a target="_blank" href={data.previewUrl} className="text-blue-500 hover:text-blue-700">Preview</a>}
            </div>
          </div>
        </div>
      </div>
    </div>
 );
}