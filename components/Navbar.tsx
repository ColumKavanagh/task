import Link from "next/link";

export default function Navbar() {
  //TYPE???
  //COMPONENT LOGIC

  //RETURN this to the UI
  return (
    <header className="flex justify-center mt-4 mb-3">
      <nav className="flex justify-center flex-wrap w-1/4 rounded shadow-md bg-blue-400">
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
}
