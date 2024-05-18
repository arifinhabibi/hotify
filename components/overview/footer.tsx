import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-10 flex justify-between gap-20 bg-primary-800 px-36 py-24">
      <div className="w-1/2">
        <Image
          src="/images/logo-light.png"
          alt="logo"
          width={164}
          height={100}
        />
        <p className="mt-10 font-sans text-white">
          Hotify is a hotel booking application dedicated to providing
          unparalleled travel experiences for travelers worldwide.
        </p>
      </div>
      <div className="flex w-full justify-between capitalize text-white">
        <div>
          <h4 className="my-3 text-lg font-semibold">Navigation</h4>
          <ul className="">
            <li>home</li>
            <li>discover hotel</li>
            <li>service</li>
            <li>benefit</li>
            <li>review</li>
          </ul>
        </div>
        <div>
          <h4 className="my-3 text-lg font-semibold">Contact</h4>
          <p>
            Hotify Inc. <br /> Address: 123 Main Street, City <br /> Email:
            info@hotify.com <br /> Phone: 1-800-HOTIFY
          </p>
        </div>
        <div>
          <h4 className="my-3 text-lg font-semibold">Download Hotify App</h4>
          <Image
            src="/images/play-store.png"
            alt="google-play-store"
            width={193}
            height={57}
            className="my-2"
          />
          <Image
            src="/images/app-store.png"
            alt="app-store"
            width={193}
            height={57}
            className="my-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
