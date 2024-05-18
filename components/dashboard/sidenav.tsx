import Link from "next/link";
import NavLinks from "@/components/dashboard/nav-links";
import {
  Cog6ToothIcon,
  PowerIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col">
      <Link
        className="mb-2 flex h-20 items-end justify-start bg-blue-600 dark:bg-dark-background p-4 md:h-30"
        href="/">
        <div className="w-32 text-white md:w-40"></div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <Cog6ToothIcon className="w-6" />
            <div className="hidden md:block">Settings</div>
          </button>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <QuestionMarkCircleIcon className="w-6" />
            <div className="hidden md:block">Get Help</div>
          </button>
        </form>
      </div>
    </div>
  );
}
