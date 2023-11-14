import Image from "next/image";
import dynamic from "next/dynamic";
import FeaturesCard from "@/app/components/FeaturesCard";

const LightBox = dynamic(() => import("@/app/components/Lightbox"), {
  ssr: false,
});

function vayu() {
  return (
    <section>
      <div className="max-w-[1100px] mx-auto text-white">
        <Image
          src="/images/vayu-header.webp"
          alt="vayu drone"
          width={1100}
          height={800}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
        />
        {/* <div className="text-5xl text-center my-5 font-Mont font-medium
        "><div className="bg-gradient-to-r from-yellow-200 to-teal-300 inline-block text-transparent bg-clip-text">VAYU</div></div> */}
        <p className="mx-6 text-lg text-center">
          <span className="-ml-3 text-5xl font-Mont font-medium bg-gradient-to-r from-yellow-200 to-teal-300 inline-block text-transparent bg-clip-text">
            Capture
          </span>{" "}
          the highest quality photos & and videos with Vayu. It promises
          Stunning detail, Hypersmooth video, Stability, and reliability. A
          highly stable drone with a rigid body and a 4K camera with a Sony CMOS
          sensor attached makes aerial video making and photography a smooth and
          easy process. Adding to that, learning how to fly is as easy as
          learning 1-2-3.
        </p>
        <FeaturesCard />
      </div>
      <div className="text-center bg-slate-950 text-slate-100">
        <div className="px-28 pt-10">
          <span className="-ml-3 text-5xl font-Mont font-medium bg-gradient-to-r from-yellow-200 to-teal-300 inline-block text-transparent bg-clip-text">
            Camera
          </span>{" "}
          that gives you the best quality when it comes to Aerial Videography.
          The Vayu drone comes with a 1/1.7” sensor with 4k quality and 6X
          digital zoom. The camera with 3 3-axis mechanical gimbal makes it even
          better when there is a windy situation or camera movement. Your videos
          are not just the highest quality but also highly stabilized
        </div>
        <div className="font-Mont my-5 font-light grid grid-cols-2 gap-0 justify-around bg-gradient-to-b from-slate-950 via-slate-900 to-transparent">
          <div className="">
            <Image
              src="/images/vayu-camera.webp"
              alt="Vayu Camera Closeup"
              width={800}
              height={700}
              className="w-full"
            />
          </div>
          <div className="text-4xl flex flex-col place-items-start justify-center">
            <div className="text-left">4K@25FPS</div>
            <div>1080P@60FPS</div>
            <div>SONY 1/1.7 Inch</div>
          </div>
        </div>
      </div>
      <LightBox />
      <div className="max-w-[1100px] mx-auto text-white">
        <div>Safety</div>
        <div>
          While performing a tremendous job, Our main focus is always yours and
          the drone’s safety. Vayu Drone has 3 levels of safety features that
          keeps you safe from losing control while the drone is in the air or
          crashing your drone due to low battery or any kind of internal error.
          Keep yourself, Others and the drone safe while flying without any
          extra care.
        </div>
      </div>
    </section>
  );
}

export default vayu;
