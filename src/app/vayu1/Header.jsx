import Image from "next/image";

function Header() {
  return (
    <header>
      <section className="">
        <div className="h-[70vh] md:h-screen overflow-hidden bg-cover bg-blend-darken">
          <Image
            className="w-full h-full object-cover brightness-75"
            src="/images/vayu-header-new.webp"
            alt="vayu drone"
            width={1100}
            height={800}
            sizes="(max-width: 768px) 100vw"
            priority={true}
          />
        </div>
        <div className="w-full">
          <div className="absolute top-1/2 md:top-3/4 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2 text-gray-200 text-5xl font-bold md:text-7xl 2xl:text-9xl 2xl:font-black text-center font-Mont">
            <p>VAYU</p>
            <p className="text-gray-300 font-medium text-xl md:text-5xl 2xl:text-6xl">
              Made For Performance
            </p>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="relative inline-block text-base md:text-xl 2xl:text-4xl px-4 2xl:px-8 py-2 2xl:py-6 font-light 2xl:font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0 "></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 2xl:border-4 border-black group-hover:bg-black group-hover:border-white"></span>
              <span className="relative text-black group-hover:text-white">
                Book Now
              </span>
            </a>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
