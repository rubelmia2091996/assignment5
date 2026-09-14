import type { ITechnology } from "../Type/TechnologyType.ts";

interface TechnologyCardProps {
    technology: ITechnology;
    onAddToStack: (technology: ITechnology) => void;
    isAdded: boolean;
}

export default function TechnologyCard({ technology, onAddToStack, isAdded }: TechnologyCardProps) {
    return (
        <div className="card bg-base-100 border border-base-200 shadow-sm p-6 rounded-3xl flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">{technology.icon}</span>
                <span className="badge badge-info badge-outline px-4 py-3 font-medium text-info">
                    {technology.badge}
                </span>
            </div>

            <h2 className="text-2xl font-bold mb-2 text-neutral">{technology.name}</h2>
            <p className="text-neutral/60 text-sm leading-relaxed mb-6">
                {technology.description}
            </p>
          </div>

          <div>
            <div className="divider my-0 mb-4"></div>

            <div className="flex items-center justify-between text-sm mb-6">
                <span className="badge badge-ghost px-3 py-2 font-medium text-neutral/70">
                    {technology.category}
                </span>
                <span className="text-neutral/60 font-medium">
                    {technology.level}
                </span>
                <span className="flex items-center gap-1 font-semibold text-neutral">
                    ⭐ {technology.rating}
                </span>
            </div>

            <button 
                onClick={() => onAddToStack(technology)}
                disabled={isAdded}
                className="w-full btn bg-neutral text-neutral-content hover:bg-neutral/90 rounded-xl font-medium border-none disabled:bg-neutral/40"
            >
                {isAdded ? "Added to Stack" : "Add to Stack"}
            </button>
          </div>
        </div>
    );
}