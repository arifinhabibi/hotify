import Link from "next/link";
import Image from "next/image";
import NavLinks from "@/components/overview/nav-links";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav className="pt-8 flex items-center justify-between">
      <Link href={"/overview"}>
        <Image src="/images/logo.png" alt="Logo" width={164} height={81} />
      </Link>
      <div className="flex items-center">
        <NavLinks />
        <button className="flex gap-2 text-primary-800 border-4 border-primary-800 p-2 rounded-full">
          <EnvelopeIcon width={24} />
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
