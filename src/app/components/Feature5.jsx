import Pills from "./Pills"

function Feature5() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row 2xl:py-24">
      {/* <!-- Image Section --> */}
      <div className="md:w-1/2 p-6">
      <img src="images/vision.webp" alt="" className="w-full h-auto md:h-full md:w-auto mx-auto rounded-sm object-cover" />
      </div>
    
      {/* <!-- Text Description Section --> */}
      <div className="md:w-1/2 p-6">
        <h2 className="text-3xl font-Mont font-medium mb-3">Safety And Failsafe</h2>
        <p className="text-gray-700 mb-3 text-base md:text-xl font-Mont font-normal">
        While performing a tremendous job, our main focus is always yours and the drone&apos;s safety. Vayu Drone has 3 levels of safety features that keeps you safe from losing control while the drone is in the air or crashing your drone due to low battery or any kind of internal error. Keep yourself, others and the drone safe while flying without any extra care.
        </p>
        <div className="flex flex-wrap gap-2">
            <Pills text="One Key Return" />
            <Pills text="Transmission Lost Return" />
            <Pills text="Low Battery Return" />
        </div>
      </div>
    </div>
  )
}

export default Feature5