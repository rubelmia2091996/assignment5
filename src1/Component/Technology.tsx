import React from 'react';
import type { ITechnology } from "../Type/TechnologyType.ts";
import TechnologyCard from "./TecnologyCard.tsx"; // Import the card component

interface TechnologyListProps {
    technologyPromise: Promise<ITechnology[]>;
}

export default async function TechnologyList({ technologyPromise }: TechnologyListProps) {
    const technologies = await technologyPromise;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {
                technologies.map((technology: ITechnology) => (
                    <TechnologyCard key={technology.id} technology={technology} />
                ))
            }
        </div>
    );
}