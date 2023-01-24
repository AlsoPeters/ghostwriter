import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="absolute flex h-14 w-full items-center justify-between px-12 py-14 text-3xl">
      <div className="">
        <Link className="font-serif" href="/">
          <p className="text-5xl">Ghostwriter</p>
        </Link>
      </div>
      <div className="flex gap-12 text-xl">
        <Link className="" href="/thoughts">
          Thoughts
        </Link>
        <Link href="/create-thought">Create</Link>
      </div>
    </div>
  );
};
