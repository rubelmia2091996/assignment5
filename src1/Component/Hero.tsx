export default function Hero() {
    return (
        <section className="hero min-h-screen bg-base-200 px-6">
            <div className="hero-content w-full max-w-7xl flex-col gap-12 lg:flex-row-reverse lg:gap-20">

                {/* Image */}
                <div className="relative w-full max-w-lg">
                    <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />

                    <img
                        src="/image1.png"
                        alt="Development technologies"
                        className="relative w-full rounded-3xl object-cover shadow-2xl"
                    />
                </div>

                {/* Content */}
                <div className="w-full max-w-2xl text-center lg:text-left">
                    {/* Heading */}
                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                        Build Your Ideal{" "}
                        <span className="text-primary">
                            Development Stack
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-xl text-base leading-7 text-base-content/70 sm:text-lg">
                        Explore frontend, backend, database, and tooling
                        technologies. Compare them side by side and create
                        the perfect stack for your next project.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                        <button className="btn btn-primary btn-lg shadow-lg shadow-primary/20">
                            Explore Technologies
                            <span>→</span>
                        </button>

                        <button className="btn btn-outline btn-lg">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
