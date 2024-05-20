"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const BenefitSection = () => {
  const contents = [
    {
      title: "Extensive Selection of Hotels Worldwide",
      content:
        "Hotify offers a wide range of hotel options from all around the globe, catering to various preferences and budgets.",
    },
    {
      title: "Price Match Guarantee",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima velit vero, ullam temporibus qui deleniti.",
    },
    {
      title: "Loyalty Points for Every Booking",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima velit vero, ullam temporibus qui deleniti.",
    },
    {
      title: "Flexible Booking Options",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima velit vero, ullam temporibus qui deleniti.",
    },
  ];
  return (
    <div className="my-24 flex justify-between gap-24">
      <Image
        src={"/images/attribute-2.png"}
        alt="attribute-2"
        width={463}
        height={609}
        className="hidden tab:block"
      />
      <div>
        <h5 className="font-semibold text-primary-800">
          #ServiceBeyondExpectations
        </h5>
        <h1 className="py-2 text-3xl font-bold">Why Book with Hotify?</h1>
        <p className="mt-5 text-xl text-neutral-600">
          Enjoy Incredible Benefits and Rewards Every Time You Book Through
          Hotify Benefit List:
        </p>
        <Accordion className="my-10 w-full text-white" isCompact>
          {contents.map((content, index) => (
            <AccordionItem
              key={index}
              className="rounded-xl px-5 py-4 text-xl text-neutral-600 hover:bg-primary-800 hover:text-white"
              title={
                <div className="text-2xl font-semibold text-neutral-900  outline-none selection:text-white">
                  {content.title}
                </div>
              }
            >
              {content.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default BenefitSection;
