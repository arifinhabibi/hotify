"use client";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const DiscoverSection = () => {
  return (
    <div className="flex py-10">
      <Image
        src={"/images/artis-1.png"}
        width={460}
        height={422}
        alt="artist-1"
        className=""
      />
      <div className="text-start px-10">
        <h5 className="text-primary-800 font-semibold">#DiscoverYourStay</h5>
        <h1 className="py-2 font-bold text-3xl">
          Discover Your Perfect Stay with Hotify
        </h1>
        <p className="mt-5 text-neutral-600 text-xl">
          Hotify is a hotel booking application dedicated to providing
          unparalleled travel experiences for travelers worldwide. With Hotify,
          you can easily discover and book your dream accommodations, ranging
          from luxury hotels to budget-friendly stays, all within seconds.
        </p>
        <button className="flex gap-3 bg-primary-800 rounded-full text-white px-8 py-3 mt-10">
          <PlayCircleIcon width={24} />
          Watch Video
        </button>
      </div>
    </div>
  );
};

export default DiscoverSection;
