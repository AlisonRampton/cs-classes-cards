import Button from "./button";

export default function Card({
  quoteTxt,
  source,
}: {
  quoteTxt: string;
  source: string;
}) {
  return (
    <div
      className="w-full mt-10 h-auto bg-blue-900 
      hover:bg-blue-950 rounded-md shadow-md hover:shadow-lg 
      transition-all flex-col"
    >
      <p className="text-left text-white font-sans pl-4 pt-2 pr-2">
        "{quoteTxt}"
      </p>
      <p className="text-right text-slate-400 font-mono pr-4 pb-2">
        ~ {source}
      </p>
    </div>
  );
}
