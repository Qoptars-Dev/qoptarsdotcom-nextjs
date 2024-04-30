
function AddonSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row">
      {/* <!-- Image Section --> */}
      <div className="md:w-1/2 p-6">
      <img src="images/training.jpg" alt="" className="w-full h-auto md:h-full md:w-auto mx-auto rounded-sm object-cover" />
      </div>
    
      {/* <!-- Text Description Section --> */}
      <div className="md:w-1/2 p-6">
        <h2 className="text-3xl font-Mont font-medium text-gray-900 mb-3">Addons</h2>
        <div className="text-gray-700 mb-3">
            <p><span className="font-bold">1.</span> 05 days DGCA pilot training for upto 04 pilots.</p>
            <p><span className="font-bold">Location:</span> Delhi</p>
            <p><span className="font-bold">Price:</span> 35400 per Pilot (Accommodation and Food Included)</p>
        </div>
        <div className="text-gray-700 mb-3">
            <p><span className="font-bold">2.</span> Physical Demo</p>
            <p><span className="font-bold">Mode: </span> Physical Onsite</p>
            <p><span className="font-bold">Location:</span> Qoptars Office (Hyderabad), Or your location</p>
            <p><span className="font-bold">Price: </span></p>
            <p>Qoptars Office(Hyderabad): Free</p>
            <p>Your Location: Chargeable (includes - expenses of 2 person)</p>
        </div>
      </div>
    </div>
  )
}

export default AddonSection