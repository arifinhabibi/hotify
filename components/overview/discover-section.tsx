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
        className="laptop:block hidden"
      />
      <div className="px-10 text-start">
        <h5 className="font-semibold text-primary-800">#DiscoverYourStay</h5>
        <h1 className="py-2 text-3xl font-bold">
          Discover Your Perfect Stay with Hotify
        </h1>
        <p className="mt-5 text-xl text-neutral-600">
          Hotify is a hotel booking application dedicated to providing
          unparalleled travel experiences for travelers worldwide. With Hotify,
          you can easily discover and book your dream accommodations, ranging
          from luxury hotels to budget-friendly stays, all within seconds.
        </p>
        <button className="mt-10 flex gap-3 rounded-full bg-primary-800 px-8 py-3 text-white">
          <PlayCircleIcon width={24} />
          Watch Video
        </button>
      </div>
    </div>
  );
};

export default DiscoverSection;
