import Link from "next/link";
import Image from "next/image";
import NavLinks from "@/components/overview/nav-links";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 tab:py-8">
      <Link href={"/overview"}>
        <Image src="/images/logo.png" alt="Logo" width={164} height={81} />
      </Link>
      <NavLinks />
    </nav>
  );
};

export default Navbar;
