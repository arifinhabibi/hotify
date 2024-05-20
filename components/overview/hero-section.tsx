"use client";

import {
  ArrowDownTrayIcon,
  // CalendarIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const HeroSection = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [date, setDate] = useState<Date>();
  const [checkOut, setCheckout] = useState<Date>();

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
      <div className="flex items-center justify-between py-10">
        <div className="bg-hero-section rounded-none bg-cover bg-fixed bg-center bg-no-repeat px-12 py-10 mobile:px-2 tab:rounded-br-full">
          <h1 className="font-sans text-4xl font-bold">
            Explore Your Dream <br /> Destinations with{" "}
            <span className="text-primary-800">Hotify</span>
          </h1>
          <p className="py-5 text-xl text-neutral-600">
            Your Journey Starts Here: Hotify{"'"}s Premier Hotel <br /> Booking
            Service
          </p>
          <div className="flex items-center gap-10">
            <button className="mobile:text-md flex items-center gap-2 rounded-full bg-primary-800 p-4 text-xs text-white">
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
                  className="inline-block h-10 w-10 rounded-full"
                  alt={user.name}
                />
              ))}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-800 text-white">
                <p>
                  {users.length}
                  {users.length > 999 ? "K" : ""}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between py-20 text-center">
            <div>
              <span className="text-4xl font-bold text-primary-800">2k</span>{" "}
              <br />
              <span className="text-neutral-600 dark:text-white">Rooms</span>
            </div>
            <div>
              <span className="text-4xl font-bold text-primary-800">4k</span>{" "}
              <br />
              <span className="text-neutral-600 dark:text-white">
                Happy Guest
              </span>
            </div>
            <div>
              <span className="text-4xl font-bold text-primary-800">10k</span>{" "}
              <br />
              <span className="text-neutral-600 dark:text-white">
                Memoriable Stays
              </span>
            </div>
          </div>
        </div>
        <div className="hidden mobile:block">
          <Image
            src={"/images/gallery.png"}
            width={481}
            height={667}
            alt="gallery"
          />
        </div>
      </div>
      {/* hero section - search feature */}
      <div className="mb-10 block items-center justify-between rounded-3xl bg-BG dark:text-dark-background tab:flex tab:text-center">
        <div className="block items-center justify-between py-10 tab:flex tab:py-0">
          <div className="px-8 py-4 font-semibold tab:py-0">
            <label
              htmlFor="location"
              className="flex cursor-pointer items-center gap-3"
            >
              <MapPinIcon className="text-primary-800" width={24} /> Location
            </label>
            <Select>
              <SelectTrigger className=" border-none bg-BG text-center outline-none focus:ring-BG">
                <SelectValue placeholder="Choose a country" />
              </SelectTrigger>
              <SelectContent className="bg-BG">
                <SelectGroup>
                  <SelectLabel>Indonesia</SelectLabel>
                  <SelectItem value="singapore">Singapore</SelectItem>
                  <SelectItem value="thai">Thailand</SelectItem>
                  <SelectItem value="malaysia">Malaysia</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <span className="hidden text-3xl text-neutral-600 tab:block">|</span>
          <div className="px-8 py-4 font-semibold tab:py-0">
            <label
              htmlFor="checkin"
              className="flex cursor-pointer items-center gap-3"
            >
              <CalendarIcon className="text-primary-800" width={24} /> Check In
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "justify-start border-none bg-BG text-left font-normal",
                    !date && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto bg-BG p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="bg-BG"
                />
              </PopoverContent>
            </Popover>
          </div>
          <span className="hidden text-3xl text-neutral-600 tab:block">|</span>
          <div className="px-8 py-4 font-semibold tab:py-0">
            <label
              htmlFor="checkout"
              className="flex cursor-pointer items-center gap-3"
            >
              <CalendarIcon className="text-primary-800" width={24} /> Check out
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "justify-start border-none bg-BG text-left font-normal",
                    !checkOut && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOut ? (
                    format(checkOut, "PPP")
                  ) : (
                    <span>Pick a checkOut</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckout}
                  initialFocus
                  className="bg-BG"
                />
              </PopoverContent>
            </Popover>
          </div>
          <span className="hidden text-3xl text-neutral-600 tab:block">|</span>
          <div className="px-8 py-4 font-semibold tab:py-0">
            <label
              htmlFor="person"
              className="flex cursor-pointer items-center gap-3"
            >
              <UserIcon className="text-primary-800" width={24} /> Person
            </label>
            <Select>
              <SelectTrigger className=" border-none bg-BG text-center outline-none focus:ring-BG">
                <SelectValue placeholder="Choose how much" />
              </SelectTrigger>
              <SelectContent className="bg-BG">
                <SelectGroup>
                  <SelectLabel>1</SelectLabel>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="rounded-3xl bg-primary-800 font-semibold text-white tab:rounded-l-none tab:rounded-r-3xl">
          <button className="flex items-center gap-3 px-8 py-6">
            <MagnifyingGlassIcon width={24} />
            Search
          </button>
        </div>
        <Image
          src={"/images/arrow.png"}
          width={113}
          height={113}
          alt="arrow"
          className="absolute right-0 mb-24 hidden mobile:block"
        />
      </div>
    </div>
  );
};

export default HeroSection;
