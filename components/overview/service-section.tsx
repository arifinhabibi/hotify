import {
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  HandThumbUpIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const ServiceSection = () => {
  return (
    <div className="my-24 flex items-center justify-between gap-24">
      <Image
        src={"/images/attribute-1.png"}
        alt="attribute"
        width={54}
        height={169}
        className="absolute left-10 mb-96"
      />
      <div className="w-1/2">
        <h5 className="font-semibold text-primary-800">
          #ServiceBeyondExpectations
        </h5>
        <h1 className="py-2 text-3xl font-bold">
          Your Easy Hotel Booking Solution with Hotify
        </h1>
        <p className="mt-10 text-xl text-neutral-600">
          We{"'"}re here to ensure your booking experience is smooth, safe, and
          tailored to your needs. Here{"'"}s how Hotify makes it happen:
        </p>
      </div>
      <div>
        <ul>
          <li className="my-4 flex gap-3">
            <HandThumbUpIcon
              width={24}
              height={24}
              className="h-12 w-12 rounded-lg bg-primary-300 px-2 py-2 text-primary-800"
            />
            <div>
              <h1 className="text-xl font-bold">
                Personalized Recommendations
              </h1>
              <p className="text-md text-neutral-600">
                Get tailored hotel suggestions based on your preferences and
                budget.
              </p>
            </div>
          </li>
          <li className="my-4 flex gap-3">
            <CheckCircleIcon
              width={24}
              height={24}
              className="h-12 w-12 rounded-lg bg-primary-300 px-2 py-2 text-primary-800"
            />
            <div>
              <h1 className="text-xl font-bold">Easy Booking</h1>
              <p className="text-md text-neutral-600">
                Book your hotel room effortlessly with just a few taps.
              </p>
            </div>
          </li>
          <li className="my-4 flex gap-3">
            <ChatBubbleLeftRightIcon
              width={24}
              height={24}
              className="h-12 w-12 rounded-lg bg-primary-300 px-2 py-2 text-primary-800"
            />
            <div>
              <h1 className="text-xl font-bold">24 Jam Support</h1>
              <p className="text-md text-neutral-600">
                Get assistance anytime, anywhere with our round-the-clock
                customer support.
              </p>
            </div>
          </li>
          <li className="my-4 flex gap-3">
            <ShieldCheckIcon
              width={24}
              height={24}
              className="h-12 w-12 rounded-lg bg-primary-300 px-2 py-2 text-primary-800"
            />
            <div>
              <h1 className="text-xl font-bold">Secure Payments</h1>
              <p className="text-md text-neutral-600">
                Pay for your bookings securely and worry-free.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <Image
        src={"/images/attribute-3.png"}
        alt="attribute-3"
        width={153}
        height={48}
        className="absolute right-0 mt-96"
      />
    </div>
  );
};

export default ServiceSection;
