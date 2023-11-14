import React from "react";

const features = [
  "4K@25FPS Video",
  "3 Axis Gimbal",
  "HD Live Video Feed",
  "10+ Kms Range*",
  "Easy To Fly",
  "30 Mins Flight**",
];

function FeaturesCard() {
  return <div className="my-6 px-10">
    <div className="grid grid-cols-3">{features.map((feature, index) => <div className="p-8 mx-14 my-12 rounded-xl text-center text-2xl shadow-md bg-gray-800 shadow-gray-600 text-slate-200 font-medium font-Mont flex justify-center items-center" key={index}><div className="bg-gradient-to-r from-yellow-200 to-teal-300 inline-block text-transparent bg-clip-text">{feature}</div></div>)}</div>    
  </div>;
}

export default FeaturesCard;
