import Pills from "../components/Pills"

function Feature1() {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row-reverse`}>
    {/* <!-- Image Section --> */}
    <div className="md:w-1/2 p-6">
    <img src="images/vision.webp" alt="" className="w-full h-auto md:h-full md:w-auto mx-auto rounded-sm object-cover" />
    </div>
    
    {/* <!-- Text Description Section --> */}
    <div className="md:w-1/2 p-6">
    <h2 className="text-3xl font-Mont font-medium text-gray-100 mb-3">Effortlessly Powerful Flight Performance</h2>
    <p className="text-gray-300 mb-3 text-base md:text-xl">Built tough, VAYU drone features powerful propulsion, enhanced protection rating, and excellent flight performance, allowing it to effortlessly tackle a wide variety of challenges.</p>
    <div className="flex flex-wrap gap-2">
        <Pills text="Fully Carbon Fibre Body" />
        <Pills text="1000m Flight Altitude" />
        <Pills text="Water And Dust Resistant" />
        <Pills text="15 Knots Wind Resistant" />
    </div>
    </div>
</div>
  )
}

export default Feature1