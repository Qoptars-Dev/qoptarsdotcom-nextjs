import Pills from "./Pills"

function Feature4() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row py-6 xl:py-16 2xl:py-24">
      {/* <!-- Image Section --> */}
      <div className="md:w-1/2 p-6">
      <img src="images/endurance.webp" alt="" className="w-full h-auto md:h-full md:w-auto mx-auto rounded-sm object-cover" />
      </div>
    
      {/* <!-- Text Description Section --> */}
      <div className="md:w-1/2 p-6">
        <h2 className="text-xl font-Mont font-medium mb-3">Batteries Optimized For Endurance</h2>
        <h2 className="text-3xl font-Mont font-bold mb-3">Exceptional Operational Efficiency</h2>
        <p className="text-gray-700 mb-3 text-base md:text-xl font-Mont font-normal">
        30-mins flight duration let you cover more ground in each fight, for surveying of up to 2 KM in one go. With 3 batteries,
        you get upto 5 KM.
        </p>
        <div className="flex flex-wrap gap-2">
            <Pills text="30 Minutes Flight Time" />
            <Pills text="Charge-In-Car Option" />
            <Pills text="250 Charge Cycles" />
            <Pills text="Full Charge In 45 Mins" />
        </div>
      </div>
    </div>
  )
}

export default Feature4