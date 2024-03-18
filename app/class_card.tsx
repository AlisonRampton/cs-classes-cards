import { type Class } from "./definitions";

export default function ClassCard({ classObj }: { classObj: Class }) {
  return (
    <div
      className="w-full mt-10 h-auto bg-sky-900 
      hover:bg-sky-800 focus:bg-sky-700 rounded-md shadow-md hover:shadow-lg 
      transition-all duration-1000 ease-in-out flex-col group"
      tabIndex={-2}
    >
      <h1 className="text-left text-white text-xl font-semibold font-sans pl-4 pt-2 pr-2">
        {classObj.code} : {classObj.name}
      </h1>
      <h2 className="text-left text-slate-200 text-lg font-medium font-sans pl-4 pt-2 pr-2">
        {classObj.credits.creditHours.value} credit hours
      </h2>
      {classObj.description ? (
        <p className="transition-all delay-0 duration-0 group-hover:delay-75 group-hover:duration-200 group-focus:delay-75 group-focus:duration-200 ease-in-out h-0 opacity-0 group-hover:opacity-100 group-hover:h-auto group-focus:opacity-100 group-focus:h-auto text-left text-white font-sans pl-4 p-2">
          {classObj.description}
        </p>
      ) : (
        <p className="text-left text-slate-300 font-sans pl-4 p-2">
          No description found.
        </p>
      )}
      {/* <div>
        {classObj.courseDependents.map((courseDep, index) => (
          <div key={index}>
            <p>{courseDep.code}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}
