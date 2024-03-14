const modes = [
    {
        title: "1 X Drone With Camera",
    },
    {
        title: "2 X Propeller Set",
    },
    {
        title: "1 X Cables & Mountings",
    },
    {
        title: "1 X Remote",
    },
    {
        title: "1 X Field Repair Kit",
    },
    {
        title: "1 X User, Technical & Maintenance Manual",
    },
    {
        title: "3 X Battery",
    },
    {
        title: "1 X Charger",
    },
    {
        title: "1 X Waterproof Hardcase",
    },
    // {
    //     title: "1 X Accessories & Warranty Card",
    // },
  ];

function KitSection() {
    return (
      <div className="text-white bg-[url('/images/kitsection.webp')] bg-cover bg-center py-10 2xl:py-24">
        <div className="h-full md:max-w-5xl 2xl:max-w-6xl md:mx-auto">
            <h2 className="text-center pb-10 font-Mont font-bold text-2xl 2xl:text-[38px]">In The Kit</h2>
            <div className="grid md:grid-cols-3 text-center">
                {
                    modes.map((mode, index) => (
                        <div key={index} className="py-2 lg:py-6 2xl:py-6">
                            <div className="font-Mont font-light text-sm 2xl:font-regular 2xl:text-lg">{mode.title}</div>
                        </div>
                    )
                    )
                }
            </div>
        </div>
      </div>
    );
  }
  
  export default KitSection;
  