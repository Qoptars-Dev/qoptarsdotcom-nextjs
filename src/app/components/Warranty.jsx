import Image from "next/image"
import warranty from "../../../public/images/warranty.png";

function Warranty() {
  return (
    <div className="max-w-7xl mx-auto mb-20 flex flex-col md:flex-row px-10 gap-28 items-center">
        <div className="text-sm xl:text-base">
            <h2 className="text-4xl font-medium mb-4">Warranty</h2>
            <p className="my-4">No fear of damage! We have your back!</p>
            <h3 className="text-lg font-semibold">2 Years of free service warranty. We don&apos;t charge for Any Repairs/Consultancy. Only replaceable parts are chargeable.</h3>
            <div className="my-4 flex">
                <p>1. Minor Repair:</p>
                <p className="xl:pl-[6px]">We ship the replacement item and help you to repair yourself with our expert guidance.</p>
            </div>
            <div className="flex">
                <p>2. Major Repair:</p>
                <p className="xl:pl-[6px]">We pickup your drone, repair it in our facility and ship it to your address.</p>
            </div>
        </div>
        <Image src={warranty} className="px-16 md:px-0" alt="2 Years Warranty" />
    </div>
  )
}

export default Warranty