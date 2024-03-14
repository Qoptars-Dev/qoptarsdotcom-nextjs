
function PriceSection() {
  return (
    <section className="max-w-2xl md:max-w-4xl 2xl:max-w-6xl md:mx-auto 2xl:py-20">
        <div className="flex flex-col justify-center items-center py-10 gap-4">
            <div className="uppercase text-3xl">get it now</div>
            <div className="line-through md:text-lg">Price: Rs 3,80,000</div>
            <div className="border-2 border-teal-300 p-4 rounded-2xl md:text-lg">Offer Price: Rs 2,79,000 (inc. GST)</div>
            <a className="bg-teal-500 p-4 rounded-lg md:text-lg hover:bg-teal-600 transition ease-in-out hover:-translate-y-0.5 hover:scale-102 duration-300 cursor-pointer text-white" href="https://calendly.com/qoptars/vayu-product-booking" target='_blank'>Book Now</a>
        </div>
    </section>
  )
}

export default PriceSection