import Image from "next/image"
import caution from "../../../public/images/caution-96.png";
import click from "../../../public/images/click-96.png";
import battery from "../../../public/images/warning-battery-94.png";

function Feature5() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row py-10 xl:py-16 2xl:py-24">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-4xl">Safety and Failsafe</h2>
        <div className="flex flex-col md:flex-row">
          {/* <!-- Image Section --> */}
          <div className="md:w-1/2 p-6">
          <img src="images/vision.webp" alt="" className="w-full h-auto md:h-full md:w-auto mx-auto rounded-sm object-cover" />
          </div>
          {/* <!-- Text Description Section --> */}
          <div className="md:w-1/2 p-6">
            <p className="text-gray-700 text-justify md:text-left mb-3 text-base md:text-lg xl:text-xl font-Mont font-normal md:mb-8">
            While performing a tremendous job, our main focus is always yours and the drone&apos;s safety. Vayu Drone has 3 levels of safety features that keeps you safe from losing control while the drone is in the air or crashing your drone due to low battery or any kind of internal error. Keep yourself, others and the drone safe while flying without any extra care.
            </p>
            <div className="flex flex-col gap-3 py-6 md:py-0 md:text-lg">
              <div className="flex items-center gap-4">
                <div className="w-10">
                <Image src={caution} alt="Loss Of Link Failsafe" />
                </div>
                <p>Loss Link Return</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10">
              <Image src={click} alt="Loss Of Link Failsafe" />
                </div>
              <p>One Key Return</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10">
              <Image src={battery} alt="Loss Of Link Failsafe" />
                </div>
              <p>Low Battery Return</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature5