import { type Class } from "./definitions";

export default function ClassCard({ classObj }: { classObj: Class }) {
  return (
    <div
      className="w-full mt-10 h-auto bg-blue-900 
      hover:bg-blue-950 rounded-md shadow-md hover:shadow-lg 
      transition-all flex-col"
    >
      <h1 className="text-left text-white text-xl font-semibold font-sans pl-4 pt-2 pr-2">
        {classObj.code} : {classObj.name}
      </h1>
      <h2 className="text-left text-slate-200 text-lg font-medium font-sans pl-4 pt-2 pr-2">
        {classObj.credits.creditHours.value} credit hours
      </h2>
      <p className="text-left text-white font-sans pl-4 p-2">
        {classObj.description}
      </p>
      <div>
        {classObj.courseDependents.map((courseDep, index) => (
          <div key={index}>
            <p>{courseDep.code}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
