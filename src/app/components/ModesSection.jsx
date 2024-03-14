const modes = [
    {
        title: "1 Tap Fly / Land",
        subtitle: "Fly or Land simply in just tap of a button.",
    },
    {
        title: "Orbit Mode",
        subtitle: "Circular movement around a subject autonomously.",
    },
    {
        title: "Hover & Stable Flight",
        subtitle: "Make your flights stable in GPS flight Mode in just a click. Hold or maneuver without shaking. ",
    },
    {
        title: "Waypoints / Mission mode",
        subtitle: "Do autonomous navigation and complicated flights using waypoints/Mission planning.",
    },
  ];

function ModesSection() {
    return (
      <div className="text-white bg-[url('/images/iit-overlay.webp')] bg-cover bg-center py-10 2xl:py-24">
        <div className="h-full md:max-w-5xl 2xl:max-w-6xl md:mx-auto">
            <h2 className="text-center py-4 2xl:pt-10 font-Mont font-bold text-2xl 2xl:text-[42px]">Flight Modes</h2>
            <div className="grid md:grid-cols-2 text-center pb-6 lg:py-8">
                {
                    modes.map((mode, index) => (
                        <div key={index} className="py-2 lg:py-6 2xl:py-10 px-14 lg:px-16">
                            <div className="font-Mont font-semibold 2xl:font-bold 2xl:text-2xl">{mode.title}</div>
                            <div className="font-Mont font-light text-sm 2xl:text-lg">{mode.subtitle}</div>
                        </div>
                    )
                    )
                }
            </div>
        </div>
      </div>
    );
  }
  
  export default ModesSection;
  