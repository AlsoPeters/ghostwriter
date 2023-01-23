import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="absolute flex h-14 w-full items-center justify-between px-4 py-10 text-3xl">
      <div className="">
        <Link className="font-serif" href="/">
          <p>Ghostwriter</p>
        </Link>
      </div>
      <div className="flex gap-4 font-light">
        <Link href="/thoughts">Thoughts</Link>
        <Link href="/create-thought">Create</Link>
      </div>
    </div>
  );
};
