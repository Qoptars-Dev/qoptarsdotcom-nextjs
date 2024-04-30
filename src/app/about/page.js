import Image from "next/image"

const page = () => {
  return (
    <div className="mt-[62px]">
      <div className="h-32 bg-[url('/images/gallery-2.webp')] bg-center bg-cover text-3xl text-white flex items-center justify-center">About Us</div>
      <div className="max-w-xs mx-auto my-4">
        <div className="text-justify">
          Qoptars is the forefront of India&apos;s drone revolution. With a
          foundation rooted in innovation and a Commitment to Excellence, we are
          shaping the Future of aerial technology.
        </div>
        <div className="text-xl mt-6">OUR EARLY STORY</div>
        <Image src='/images/team.png' width={1920} height={1080} alt=""/>
        <div className="text-justify">
          Qoptars was founded in 2020, By Manash & Pritam from their college
          hostel room. Qoptars was born purely out of a shared passion for
          advancing drone technology in India. Over the next 1 year, They
          developed the first product with nothing but a hunger to solve problems
          and little bit of pocket money ! Some of their friends joined them in
          their initiative who later became the founding members of the company.
          The small team of 4 people started offering their aerial services to
          bigger organisations to identify gaps in the earth. Over the past three
          years, They have served more than 500 people with their drones. Today we
          stand as a company who is dedicated to creating the most efficient and
          intelligent drones, driven by a vision to empower India&apos;s future
          with cutting-edge UAV solutions.
        </div>
        <div>
          Fun fact : The founders had to drop their studies mid B. Tech to take
          their startup to new heights.
        </div>
      </div>
    </div>
  );
};

export default page;
