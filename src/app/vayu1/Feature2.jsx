import Pills from "../components/Pills"

function Feature2() {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row`}>
      {/* <!-- Image Section --> */}
      <div className="md:w-1/2 p-6">
      <img src="images/vision.webp" alt="" className="w-full h-auto md:h-full md:w-auto mx-auto rounded-sm object-cover" />
      </div>
    
      {/* <!-- Text Description Section --> */}
      <div className="md:w-1/2 p-6">
        <h2 className="text-3xl font-Mont font-medium text-gray-100 mb-3">Smooth Transmission System & Experience</h2>
        <p className="text-gray-300 mb-3 text-base md:text-xl">Vayu is equpped with digital Transmission system, which supports dual-channel 1080p HD live feeds, and a max transmission distance of 15 km.  Equipped with a 5.5 inch high-bright screen for live-video & complete Drone + Payload control.</p>
        <div className="flex flex-wrap gap-2">
            <Pills text="5.5 Inch Display" />
            <Pills text="15 Hours Battery Life" />
            <Pills text="HDMI Video Output" />
            <Pills text="15 KMs Distance" />
        </div>
      </div>
    </div>
  )
}

export default Feature2