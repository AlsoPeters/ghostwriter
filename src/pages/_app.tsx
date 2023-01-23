import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { Josefin_Sans, Josefin_Slab } from "@next/font/google";

import { api } from "../utils/api";

import "../styles/globals.css";
import { Navbar } from "../components/Navbar";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefinSans",
});

const josefinSlab = Josefin_Slab({
  subsets: ["latin"],
  variable: "--font-josefinSlab",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main
        className={`${josefinSlab.variable} font-sans ${josefinSans.variable} text-slate-400`}
      >
        <Navbar />
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
