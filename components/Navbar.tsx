//Typescript Functional Component
import Link from "next/link";
//FUNCTIONAL COMPONENT
const Navbar = (): JSX.Element => {
  //COMPONENT LOGIC
  //
  //RETURN this to the UI
  return (
    <header className="flex justify-center mt-4 mb-3 ">
      <nav className="flex justify-center w-1/4 min-w-fit rounded shadow-md bg-blue-400">
        <Link
          href="http://localhost:3000/"
          className="font-sans text-white text-lg font-semibold hover:hover:bg-blue-500 rounded-full p-3 m-3"
        >
          Home
        </Link>
        <Link
          href="http://localhost:3000/users"
          className="font-sans text-white text-lg font-semibold hover:hover:bg-blue-500 rounded-full p-3 m-3"
        >
          Users
        </Link>
      </nav>
    </header>
  );
};
export default Navbar;
