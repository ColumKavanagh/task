//Typescript Functional Component
import Link from "next/link";
//FUNCTIONAL COMPONENT
const Navbar = (): JSX.Element => {
  //COMPONENT LOGIC
  //
  //RETURN this to the UI
  return (
    <header className="mb-3 mt-4 flex justify-center ">
      <nav className="flex w-1/4 min-w-fit justify-center rounded bg-blue-400 shadow-md">
        <Link
          href="http://localhost:3000/"
          className="m-3 rounded-full p-3 font-sans text-lg font-semibold text-white hover:hover:bg-blue-500"
        >
          Home
        </Link>
        <Link
          href="http://localhost:3000/users"
          className="m-3 rounded-full p-3 font-sans text-lg font-semibold text-white hover:hover:bg-blue-500"
        >
          Users
        </Link>
      </nav>
    </header>
  );
};
export default Navbar;
