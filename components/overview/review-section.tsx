import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ReviewSection = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("data.json");
      const jsonData = await response.json();
      setUsers(jsonData);
    }
    fetchData();
  }, []);
  return (
    <div className="text-center">
      <h5 className="font-semibold text-primary-800">#HotifyReviews</h5>
      <h1 className="py-2 text-3xl font-bold">Hear What Our Guests Say</h1>
      <p className="mt-5 text-xl text-neutral-600">
        Real Experiences, Real Stories, Real Satisfaction
      </p>
      <div className="py-20">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="px-0"
        >
          <CarouselContent>
            {users.slice(0, 4).map((user, index) => (
              <CarouselItem key={index}>
                <div className="flex justify-center">
                  <Image
                    src={user.avatar}
                    width={100}
                    height={100}
                    className="my-24 h-28 w-28 rounded-full bg-BG"
                    alt={user.name}
                  />
                </div>
                <h1 className="text-xl font-bold">{user.name}</h1>
                <div className="flex justify-center">
                  <p className="text-md  mt-3 w-1/2 text-neutral-600">
                    {user.review}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default ReviewSection;
