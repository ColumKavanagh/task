//Typescript Functional Component
import Link from "next/link";
//FUNCTIONAL COMPONENT
const Footer = (): JSX.Element => {
  //COMPONENT LOGIC
  //
  //RETURN this to the UI
  return (
    <footer className="fixed bottom-0 left-0 flex w-full items-center justify-between bg-blue-400 p-4 px-4">
      <ul className="flex flex-wrap text-sm font-medium text-white">
        <li className="rounded-full px-2 pb-1 hover:hover:bg-blue-500">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="rounded-full px-2 pb-1 hover:hover:bg-blue-500">
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
};
export default Footer;
