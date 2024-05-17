import {
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  HandThumbUpIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const ServiceSection = () => {
  return (
    <div className="flex items-center justify-between gap-24 my-24">
      <Image
        src={"/images/attribute-1.png"}
        alt="attribute"
        width={64}
        height={169}
        className="absolute left-10 mb-96"
      />
      <div className="w-1/2">
        <h5 className="text-primary-800 font-semibold">
          #ServiceBeyondExpectations
        </h5>
        <h1 className="font-bold text-3xl py-2">
          Your Easy Hotel Booking Solution with Hotify
        </h1>
        <p className="mt-10 text-xl text-neutral-600">
          We're here to ensure your booking experience is smooth, safe, and
          tailored to your needs. Here's how Hotify makes it happen:
        </p>
      </div>
      <div>
        <ul>
          <li className="flex gap-3 my-4">
            <HandThumbUpIcon
              width={24}
              height={24}
              className="py-2 px-2 bg-primary-300 text-primary-800 rounded-lg w-12 h-12"
            />
            <div>
              <h1 className="font-bold text-xl">
                Personalized Recommendations
              </h1>
              <p className="text-md text-neutral-600">
                Get tailored hotel suggestions based on your preferences and
                budget.
              </p>
            </div>
          </li>
          <li className="flex gap-3 my-4">
            <CheckCircleIcon
              width={24}
              height={24}
              className="py-2 px-2 bg-primary-300 text-primary-800 rounded-lg w-12 h-12"
            />
            <div>
              <h1 className="font-bold text-xl">Easy Booking</h1>
              <p className="text-md text-neutral-600">
                Book your hotel room effortlessly with just a few taps.
              </p>
            </div>
          </li>
          <li className="flex gap-3 my-4">
            <ChatBubbleLeftRightIcon
              width={24}
              height={24}
              className="py-2 px-2 bg-primary-300 text-primary-800 rounded-lg w-12 h-12"
            />
            <div>
              <h1 className="font-bold text-xl">24 Jam Support</h1>
              <p className="text-md text-neutral-600">
                Get assistance anytime, anywhere with our round-the-clock
                customer support.
              </p>
            </div>
          </li>
          <li className="flex gap-3 my-4">
            <ShieldCheckIcon
              width={24}
              height={24}
              className="py-2 px-2 bg-primary-300 text-primary-800 rounded-lg w-12 h-12"
            />
            <div>
              <h1 className="font-bold text-xl">Secure Payments</h1>
              <p className="text-md text-neutral-600">
                Pay for your bookings securely and worry-free.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceSection;
