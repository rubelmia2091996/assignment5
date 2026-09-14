import Navbar from "./Component/Navbar.tsx";
import Hero from "./Component/Hero.tsx";
import Technology from "./Component/Technology.tsx";
import Footer from "./Component/Footer.tsx";
import type { ITechnology } from "./Type/TechnologyType.ts";
import { Suspense } from "react";

const technologyFetch = async (): Promise<ITechnology[]> => {
    const res = await fetch("/data/technologies.json");
    const data = await res.json();
    return data;
};

const technologyPromise = technologyFetch();

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Suspense fallback={<div className="text-center py-20 font-medium">Loading......</div>}>
                <Technology technologyPromise={technologyPromise} />
            </Suspense>
            <Footer />
        </div>
    );
}

export default App;