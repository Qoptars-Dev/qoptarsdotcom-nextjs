import Image from "next/image";

function Header() {
  return (
    <header className="">
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
          <div className="absolute top-1/2 md:top-3/4 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2 text-gray-200 text-3xl font-bold text-center font-Mont">
            <p className="text-5xl md:text-7xl 2xl:text-8xl 2xl:font-black">VAYU</p>
            <p className="text-gray-300 font-medium text-xl md:text-5xl">
              Made For Performance
            </p>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
