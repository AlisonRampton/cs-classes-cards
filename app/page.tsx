"use client";
import CSClassesComponent from "./CSClassesComponent";

import TabbedQuotes from "./chatgpt";
import TabbedClasses from "./display_classes";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //     <Card quoteTxt="Hey a quote" source="me" tags={tags} />
    //   </div>
    // </main>
    <main className="flex flex-col items-center justify-between p-24">
      {/* <CSClassesComponent /> */}
      <TabbedClasses />
    </main>
  );
}
