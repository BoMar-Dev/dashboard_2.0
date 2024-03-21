import { useState } from "react";

const Slider = () => {
  const imgs = [
    {
      url: "https://plus.unsplash.com/premium_photo-1675827055620-24d540e0892a?q=80&w=2772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="w-[1200px] h-[1200px]  m-auto py-16 px-4 relative bg-black">
      <div
        style={{ backgroundImage: `url(${imgs[0].url})` }}
        className="w-[1000px] h-[1000px] rounden-2xl bg-center bg-cover duration-500"
      ></div>
    </div>
  );
};

export default Slider;
