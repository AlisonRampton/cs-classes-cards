"use client";

import Image from "next/image";
import Card from "@/app/card";
import TabbedQuotes from "./chatgpt";

export default function Home() {
  var tags = new Array("live", "laugh", "love");
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //     <Card quoteTxt="Hey a quote" source="me" tags={tags} />
    //   </div>
    // </main>
    <main className="flex flex-col items-center justify-between p-24">
      <TabbedQuotes />
    </main>
  );
}
