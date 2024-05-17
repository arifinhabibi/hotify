"use client";

import Link from "next/link";
import Image from "next/image";
import NavLinks from "../components/overview/nav-links";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="absolute mb-16">
        <Link href={"/overview"}>Go to Overview</Link>
      </div>
      <div className="">
        <Link href={"/dashboard"}>Go to Dashboard</Link>
      </div>
    </main>
  );
}
