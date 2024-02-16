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
      className={`rounded-xl min-w-1/3 basis-1/2 p-2 m-1  text-white font-sans hover:shadow-inner shadow-md 
    transition-all text-center focus:ring-2 ${className}`}
    >
      {text}
    </div>
  );
}
