export default function Button({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  // const pathname = usePathname
  // const { replace } = useRouter();
  // const clickButton = useDebouncedCallback((term) => {
  //   replace(`${pathname}?${}`)
  // })
  return (
    <div
      className={`rounded-xl min-w-1/3 basis-1/2 p-2 m-1 text-white font-sans hover:shadow-sm shadow-md 
    transition-all text-nowrap shadow-slate-800 hover:shadow-slate-900 ${className}`}
    >
      {text}
    </div>
  );
}
