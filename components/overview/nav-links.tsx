import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bars3Icon, EnvelopeIcon } from "@heroicons/react/24/outline";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    <div>
      <div className="hidden items-center tab:flex">
        <div className="font-sans">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="px-6 text-base font-semibold text-neutral-1000 dark:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button className="flex gap-2 rounded-full border-4 border-primary-800 p-2 text-primary-800">
          <EnvelopeIcon width={24} />
          Contact Us
        </button>
      </div>
      {/* mobile navigation */}
      <div className="flex tab:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Bars3Icon width={24} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-8 w-56 bg-BG dark:text-dark-background">
            <DropdownMenuLabel>Navigation</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {links.map((link, index) => (
                <DropdownMenuItem className="cursor-pointer">
                  <Link key={index} href={link.href} className="">
                    {link.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default NavLinks;
