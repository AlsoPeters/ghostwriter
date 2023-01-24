import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { api } from "../utils/api";

import { faker } from "@faker-js/faker";

export default function create() {
  const createThoughtMutation = api.thoughts.createThought.useMutation();

  const [thought, setThought] = useState("");
  const [thoughtTitle, setThoughtTitle] = useState("");
  const [ghostwriter, setGhostwriter] = useState("");
  const router = useRouter();

  async function handleSubmitWriting(e: React.FormEvent) {
    e.preventDefault();

    await createThoughtMutation.mutateAsync({
      ghostwriter,
      thoughtTitle,
      thought,
    });
    router.push("/thoughts");
  }

  useEffect(() => {
    const randomName = faker.name.fullName();

    setGhostwriter(randomName);
  }, []);

  return (
    <>
      <Head>
        <title>Create</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen w-full items-center justify-center gap-10 bg-black">
        <form
          onSubmit={handleSubmitWriting}
          className="flex w-1/2 flex-col gap-10 px-10 text-2xl"
        >
          <h1>Hello, {ghostwriter}</h1>
          <div className="flex flex-col">
            <label className="" htmlFor="subject">
              What will you name this?
            </label>
            <input
              onChange={(e) => setThoughtTitle(e.target.value)}
              value={thoughtTitle}
              required
              id="subject"
              className="w-1/2 rounded-md bg-slate-400  px-2 py-1 text-black"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="text-area">What are you thinking?</label>
            <textarea
              required
              id="text-area"
              value={thought}
              onChange={(e) => setThought(e.target.value)}
              className="w-full rounded-md bg-slate-400 px-2 py-1 text-black"
            />
          </div>
          <button className="m-auto rounded-md bg-slate-800 px-4 pt-1">
            Send
          </button>
        </form>
      </main>
    </>
  );
}
