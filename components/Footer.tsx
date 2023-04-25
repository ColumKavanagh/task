import Link from "next/link";

export default function Footer() {
  //COMPONENT LOGIC
  //RETURN this to the UI
  return (
    <footer className="fixed flex bottom-0 left-0 w-full justify-between px-4 bg-blue-400 items-center p-4">
      <ul className="flex flex-wrap text-sm font-medium text-white">
        <li className="hover:hover:bg-blue-500 rounded-full px-2 pb-1">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:hover:bg-blue-500 rounded-full px-2 pb-1">
          <Link href={"/users"}>Users</Link>
        </li>
      </ul>
      <span className="text-sm text-white sm:text-center">
        © 2023{" "}
        <span className="hover:underline">
          <Link href={"https://www.prim-ed.ie/"} target={"_blank"}>
            Prim-Ed Publishing
          </Link>
        </span>
      </span>
    </footer>
  );
}
