import React from "react";
import Head from "next/head";
import { api } from "../utils/api";

import { faker } from "@faker-js/faker";

const randomName = faker.name.fullName();

export default function thoughts() {
  const thoughts = api.thoughts.getThoughts.useQuery();

  return (
    <div className="flex h-full w-full flex-col items-center gap-6 bg-black pt-40">
      <div className="m-6 w-1/2 text-4xl">Recent Thoughts</div>
      <div className="flex w-full flex-col items-center gap-10">
        {thoughts.data?.map((thought) => (
          <div className="w-1/2" key={thought.id}>
            <div className="rounded-md border-2 border-slate-800 pb-4">
              <div className="relative bottom-3 left-4 w-max bg-black px-1 text-xl font-bold">
                {thought.ghostwriter}
              </div>
              <div className="border-b-2 border-b-slate-800 px-4 pb-2">
                {thought.thoughtTitle}
              </div>

              <div className=" overflow-hidden text-ellipsis px-4 pt-4">
                {thought.thought}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
