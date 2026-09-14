import Navbar  from "./Component/Navbar.tsx";
import Hero  from "./Component/Hero.tsx";
import Technology  from "./Component/Technology.tsx";
import type { ITechnology } from "./Type/TechnologyType.ts";
import { Suspense } from "react";

function App() {
  const technologyFetch = async ():Promise<ITechnology[]> => {
    const res = await fetch("/data/technologies.json");
    const data = await res.json();
    return data;
  };
  const technologyPromise = technologyFetch();
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
        
      <Suspense fallback="Loading......">
      <Technology technologyPromise={technologyPromise}></Technology>
      </Suspense>
    </div>
  );
}

export default App;