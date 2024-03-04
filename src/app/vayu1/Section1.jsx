import world from "../../../public/images/world.png";

const features = [
    {
        icon: "/images/world.png",
        text: "4K Camera Resolution",
    },
    {
        icon: "/images/world.png",
        text: "HD Live Video",
    },
    {
        icon: "/images/world.png",
        text: "15 Kms Range",
    },
    {
        icon: "/images/world.png",
        text: "30 Minutes Flight",
    },
    {
        icon: "/images/world.png",
        text: "Operable By Single Person",
    },
    {
        icon: "/images/world.png",
        text: "Compact & Rugged",
    },
  ];
  
function Section1() {
    return <div className="my-6 px-10 md:max-w-5xl md:mx-auto">
      <div className="grid md:grid-cols-3 ">{features.map((feature, index) => <div className="px-8 py-1 lg:px-24 lg:py-2 my-2 lg:my-0 text-xl text-slate-200 text-center font-medium font-Mont flex justify-center" key={index}><div className=""><img className="w-full p-6 mb-2 bg-slate-300" src={feature.icon} alt={feature.text}/><div>{feature.text}</div></div></div>)}</div>
        <div className="text-white flex flex-col justify-center items-center text-center mt-10 gap-5">
            <div className="bg-teal-500 p-3 rounded-md hover:bg-teal-600 transition ease-in-out hover:-translate-y-0.5 hover:scale-102 duration-300">Download Brochure</div>
            <div className="border border-teal-400 p-3 rounded-md hover:bg-teal-300 hover:text-slate-800 transition ease-in-out hover:-translate-y-0.5 hover:scale-102 duration-300">Download Technical Information</div>
        </div>
    </div>;
}
  
export default Section1