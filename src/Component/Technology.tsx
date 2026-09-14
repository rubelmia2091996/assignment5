
import { use, useState } from 'react';
import type { ITechnology } from "../Type/TechnologyType.ts";
import TechnologyCard from "./TecnologyCard.tsx";

interface TechnologyProps {
    technologyPromise: Promise<ITechnology[]>;
}

export default function Technology({ technologyPromise }: TechnologyProps) {
    const technologies = use(technologyPromise);
    const [stack, setStack] = useState<ITechnology[]>([]);

    const handleAddToStack = (tech: ITechnology) => {
        if (!stack.some((item) => item.id === tech.id)) {
            setStack([...stack, tech]);
        }
    };

    const handleRemoveFromStack = (id: number) => {
        setStack(stack.filter((item) => item.id !== id));
    };

    const handleRemoveAll = () => {
        setStack([]);
    };

    return (
        <div>
            <div className="max-w-7xl mx-auto">

            <h1 className="mb-4 text-3xl font-bold text-heading md:text-5xl lg:text-6xl">Explore the<span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-pink-400">Technologies</span></h1>
            <p className="text-lg font-normal text-body lg:text-xl">Pick one technology per category to build your ideal stack.</p>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.map((technology: ITechnology) => (
                        <TechnologyCard
                            key={technology.id}
                            technology={technology}
                            onAddToStack={handleAddToStack}
                            isAdded={stack.some((item) => item.id === technology.id)}
                        />
                    ))}
                </div>
                <div className="lg:col-span-1 bg-base-100 border border-base-200 shadow-sm p-6 rounded-3xl h-fit sticky top-6">
                    <h2 className="text-xl font-bold text-neutral mb-1">Your Stack</h2>
                    <p className="text-xs text-neutral/60 mb-6">{stack.length} Technology Selected</p>

                    <div className="flex flex-col gap-3 mb-6">
                        {stack.length === 0 ? (
                            <p className="text-sm text-neutral/40 text-center py-4">Your stack is empty</p>
                        ) : (
                            stack.map((item) => (
                                <div key={item.id} className="flex items-center justify-between p-3 border border-base-200 rounded-2xl bg-base-50">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">{item.icon}</span>
                                        <div>
                                            <h4 className="font-bold text-sm text-neutral">{item.name}</h4>
                                            <p className="text-xs text-neutral/50">{item.category}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleRemoveFromStack(item.id)}
                                        className="text-neutral/40 hover:text-error transition-colors p-1"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    {stack.length > 0 && (
                        <button
                            onClick={handleRemoveAll}
                            className="w-full btn btn-outline border-error text-error hover:bg-error hover:text-white hover:border-error rounded-xl font-medium"
                        >
                            Remove All
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}