/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/nOoRaRR9uAY
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Input } from "@/components/ui/input"

export function Inputs() {
  return (
    (<div
      className="flex items-center w-full max-w-md rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 border border-gray-200 dark:border-gray-800">
      <SearchIcon className="h-5 w-5 text-gray-400 ml-3" />
      <Input
        className="pl-10 pr-4 py-2 bg-transparent focus:outline-none w-full border-none"
        placeholder="Search"
        type="search" />
    </div>)
  );
}

function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}
