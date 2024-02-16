import Button from "./button";

export default function Card({
  quoteTxt,
  source,
  tags,
}: {
  quoteTxt: string;
  source: string;
  tags?: string[];
}) {
  return (
    <div
      className="w-full md:w-1/2 xl:w-1/4 h-auto bg-blue-900 
      hover:bg-blue-950 rounded-md shadow-md hover:shadow-lg 
      transition-all flex-col"
    >
      <p className="text-left text-white font-sans pl-4 pt-2">"{quoteTxt}"</p>
      <p className="text-right text-slate-400 font-mono pr-4 pb-2">
        ~ {source}
      </p>
      <div className="flex flex-row p-2">
        {tags?.map((tag) => (
          <Button text={tag} />
        ))}
      </div>
    </div>
  );
}
