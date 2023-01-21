import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="absolute flex h-14 w-full items-center justify-between p-4 text-3xl font-normal">
      <div className="">
        <p>Ghostwriter</p>
      </div>
      <div className="flex gap-4">
        <Link href="/posts">Posts</Link>
        <Link href="/create">Create</Link>
      </div>
    </div>
  );
};
