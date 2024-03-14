import Link from 'next/link'

const features = [
    {
        icon: "/images/features/4k-bk.png",
        text: "4K Camera Resolution",
    },
    {
        icon: "/images/features/hd-96.png",
        text: "HD Live Video",
    },
    {
        icon: "/images/features/distance-b.png",
        text: "15 Kms Range",
    },
    {
        icon: "/images/features/quick-response.png",
        text: "30 Minutes Flight",
    },
    {
        icon: "/images/features/pilot-b.png",
        text: "Operable By Single Person",
    },
    {
        icon: "/images/features/hammer-b.png",
        text: "Compact & Rugged",
    },
  ];
  
function Section1() {
    return <div className="my-6 p-10 md:max-w-5xl md:mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 ">{features.map((feature, index) => <div className="lg:py-2 text-xl text-slate-700 text-center font-medium font-Mont flex justify-center" key={index}><div className=""><img className="px-12 lg:px-24 my-6" src={feature.icon} alt={feature.text}/><div>{feature.text}</div></div></div>)}</div>
        <div className="flex flex-col justify-center items-center text-center mt-10 gap-5">
            <Link href="/files/VAYU-Brochure.pdf"  target="_blank"  rel="noopener noreferrer" locale={false} download className="bg-teal-500 p-3 rounded-md hover:bg-teal-600 transition ease-in-out hover:-translate-y-0.5 hover:scale-102 duration-300 cursor-pointer text-white">Download Brochure</Link>
            <Link href="/files/VAYU-Technical-Specs.pdf"  target="_blank"  rel="noopener noreferrer" locale={false} download className="border border-teal-400 p-3 rounded-md hover:bg-teal-300 hover:text-slate-800 transition ease-in-out hover:-translate-y-0.5 hover:scale-102 duration-300 cursor-pointer">Download Technical Information</Link>
        </div>
    </div>;
}
  
export default Section1