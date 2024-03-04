import React from 'react'

function FeatureLowLight() {
  return (
    <section className="text-white bg-black">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row-reverse`}>
        {/* <!-- Image Section --> */}
            <div className="md:w-1/2 p-6">
            <img src="images/vision.webp" alt="" className="w-full h-auto md:h-full md:w-auto mx-auto rounded-sm object-cover" />
            </div>
        
            {/* <!-- Text Description Section --> */}
            <div className="md:w-1/2 p-6">
                <h2 className="text-3xl font-Mont font-medium text-gray-100 mb-3">Improved Low Light Performance</h2>
                <p className="text-gray-300 mb-3 text-base md:text-xl">VAYU camera has a starlight night vision that, together with intelligent low-light mode, Keeps images bright even  in dim conditions.</p>
            </div>
        </div>
    </section>
  )
}

export default FeatureLowLight