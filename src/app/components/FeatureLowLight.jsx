import SmallCarousel from "./SmallCarousel"

function FeatureLowLight() {
  return (
    <section className="text-white bg-black py-10 2xl:py-24">
        <div className={`max-w-[1320px] 2xl:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row-reverse`}>
        {/* <!-- Image Section --> */}
            <div className="md:w-1/2 p-6 -mt-6 sm:-mt-0">
              <SmallCarousel />
            </div>
        
            {/* <!-- Text Description Section --> */}
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <h2 className="text-3xl font-Mont font-medium text-gray-100 mb-3">Improved Low Light Performance</h2>
                <p className="text-gray-300 mb-3 text-base md:text-xl font-Mont font-normal">VAYU camera has a starlight night vision that, together with intelligent low-light mode, Keeps images bright even  in dim conditions.</p>
            </div>
        </div>
    </section>
  )
}

export default FeatureLowLight