import React from "react";
import Head from "next/head";
import { api } from "../utils/api";

export default function thoughts() {
  const thoughts = api.thoughts.getThoughts.useQuery();

  return (
    <div className="flex h-screen w-full flex-col items-center bg-black pt-40">
      <div className="m-6 w-2/3 border-b-2 border-b-slate-800 text-2xl">
        Recent Thoughts
      </div>
      <div className="flex w-full flex-col items-center gap-10">
        {thoughts.data?.map((thought) => (
          <div className="w-2/3" key={thought.id}>
            <div className="mb-4 text-xl font-bold">Random Name</div>
            <div className="rounded-md border-2 border-slate-800 px-4 pb-4">
              <div className="relative bottom-3 w-max bg-black px-2">
                {thought.thoughtTitle}
              </div>
              <div className=" overflow-hidden text-ellipsis px-2">
                {thought.thought}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
