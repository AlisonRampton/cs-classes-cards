export default function Button({ text }: { text: string }) {
  return (
    <div
      className="rounded-full basis-1/2 p-2 m-1 bg-teal-600 
    hover:bg-teal-500 text-white font-sans hover:shadow-inner shadow-md 
    transition-all"
    >
      {text}
    </div>
  );
}
