import Image from "next/image";

function Remote() {
  return (
    <div className="my-5 font-light grid grid-cols-2 gap-0 justify-around">
      <div className="flex flex-col justify-center text-xl mx-4 pr-10">
        <div className="">
          Vayu offers a sleek, ergonomically designed remote control that fits
          perfectly in your hand. This controller includes all essential
          buttons, a built-in display for monitoring drone functions, and the
          flexibility to install custom Android apps for further development.
        </div>
      </div>
      <div className="">
        <Image
          src="/images/siyi-removebg.webp"
          alt="Vayu Camera Closeup"
          width={800}
          height={700}
          className="w-full"
        />
      </div>
    </div>
  );
}

export default Remote;
