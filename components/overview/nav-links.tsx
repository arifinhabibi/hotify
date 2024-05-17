import Link from "next/link";

const NavLinks = () => {
  const links = [
    {
      name: "Home",
      href: "/",
      icon: "HomeIcon",
    },
    {
      name: "Discover",
      href: "/discover",
      icon: "HomeIcon",
    },
    {
      name: "Service",
      href: "/service",
      icon: "HomeIcon",
    },
    {
      name: "Benefit",
      href: "/benefit",
      icon: "HomeIcon",
    },
    {
      name: "Review",
      href: "/review",
      icon: "HomeIcon",
    },
  ];
  return (
    <div className="font-sans">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="px-6 text-neutral-1000 text-base font-semibold">
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
