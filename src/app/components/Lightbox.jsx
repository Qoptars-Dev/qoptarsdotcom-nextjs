"use client";
import { useEffect } from "react";

const Lightbox = () => {
  useEffect(() => {
    const init = async () => {
      const { Lightbox, initTE } = await import("tw-elements");
      initTE({ Lightbox });
    };
    init();
  }, []);

  return (
    <div
  data-te-lightbox-init
  className="h-[300px] flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
  <div className="h-full w-full">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp"
      data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
      alt="Table Full of Spices"
      className="w-full h-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto object-cover" />
  </div>
  <div className="h-full w-full">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/2.webp"
      data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/2.webp"
      alt="Winter Landscape"
      className="w-full h-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto object-cover" />
  </div>
  <div className="h-full w-full">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp"
      data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/3.webp"
      alt="View of the City in the Mountains"
      className="w-full h-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto object-cover" />
  </div>
</div>
  );
};

export default Lightbox;