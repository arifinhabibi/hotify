import {
  ArrowDownTrayIcon,
  CalendarIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("data.json");
      console.log(response);
      const jsonData = await response.json();
      setUsers(jsonData);
    }
    fetchData();
  }, []);

  return (
    <div>
      {/* hero section - slug */}
      <div className="flex justify-between items-center">
        <div className="slug">
          <h1 className="text-4xl font-sans font-bold">
            Explore Your Dream <br /> Destinations with{" "}
            <span className="text-primary-800">Hotify</span>
          </h1>
          <p className="text-xl py-5 text-neutral-600">
            Your Journey Starts Here: Hotify's Premier Hotel <br /> Booking
            Service
          </p>
          <div className="flex items-center gap-10">
            <button className="flex items-center gap-2 bg-primary-800 p-4 text-white rounded-full">
              <ArrowDownTrayIcon width={24} />
              Download App
            </button>
            <div className="flex -space-x-5 overflow-hidden">
              {users.slice(0, 4).map((user, index) => (
                <Image
                  key={index}
                  src={user.avatar}
                  width={40}
                  height={40}
                  className="inline-block w-10 h-10 rounded-full"
                  alt={user.name}
                />
              ))}
              <div className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center text-white">
                <p>
                  {users.length}
                  {users.length > 999 ? "K" : ""}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-center py-20">
            <div>
              <span className="font-bold text-4xl text-primary-800">2k</span>{" "}
              <br />
              <span className="text-neutral-600 dark:text-white">Rooms</span>
            </div>
            <div>
              <span className="font-bold text-4xl text-primary-800">4k</span>{" "}
              <br />
              <span className="text-neutral-600 dark:text-white">
                Happy Guest
              </span>
            </div>
            <div>
              <span className="font-bold text-4xl text-primary-800">10k</span>{" "}
              <br />
              <span className="text-neutral-600 dark:text-white">
                Memoriable Stays
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src={"/images/gallery.png"}
            width={481}
            height={667}
            alt="gallery"
          />
        </div>
      </div>
      {/* hero section - search feature */}
      <div className="flex items-center justify-between bg-BG rounded-3xl dark:text-dark-background mb-10">
        <div className="font-semibold px-8">
          <label
            htmlFor="location"
            className="flex gap-3 items-center cursor-pointer">
            <MapPinIcon className="text-primary-800" width={24} /> Location
          </label>
          <select id="location" className="bg-BG text-center mt-2">
            <option defaultValue={""}>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <span className="text-3xl text-neutral-600">|</span>
        <div className="font-semibold px-8">
          <label
            htmlFor="checkin"
            className="flex gap-3 items-center cursor-pointer">
            <CalendarIcon className="text-primary-800" width={24} /> Check In
          </label>
          <input
            type="date"
            name=""
            className="bg-BG text-center mt-2"
            id="checkin"
          />
        </div>
        <span className="text-3xl text-neutral-600">|</span>
        <div className="font-semibold px-8">
          <label
            htmlFor="checkout"
            className="flex gap-3 items-center cursor-pointer">
            <CalendarIcon className="text-primary-800" width={24} /> Check out
          </label>
          <input
            type="date"
            name=""
            className="bg-BG text-center mt-2"
            id="checkout"
          />
        </div>
        <span className="text-3xl text-neutral-600">|</span>
        <div className="font-semibold">
          <label
            htmlFor="person"
            className="flex gap-3 items-center cursor-pointer">
            <UserIcon className="text-primary-800" width={24} /> Person
          </label>
          <select id="person" className="bg-BG text-center mt-2">
            <option defaultValue={""}>Choose a Person</option>
            <option value="US">1</option>
            <option value="CA">2</option>
            <option value="FR">3</option>
            <option value="DE">4</option>
          </select>
        </div>
        <div className="font-semibold rounded-r-3xl bg-primary-800 text-white">
          <button className="flex gap-3 items-center py-6 px-8">
            <MagnifyingGlassIcon width={24} />
            Search
          </button>
        </div>
        <Image
          src={"/images/arrow.png"}
          width={113}
          height={113}
          alt="arrow"
          className="absolute right-0 mb-24"
        />
      </div>
    </div>
  );
};

export default HeroSection;
