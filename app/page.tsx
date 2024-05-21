"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="absolute mb-16">
        <Link href={"/hotify"}>Go to Overview</Link>
      </div>
      <div className="">
        <Link href={"/dashboard"}>Go to Dashboard</Link>
      </div>
    </main>
  );
}
