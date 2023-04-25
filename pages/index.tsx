import { NextPage } from "next";
import Image from "next/image";
//Using NextPage from next.js as the Type for Typscript type-checking
const HomePage: NextPage = () => {
  return (
    <main>
      <h1 className="flex justify-center font-sans font-semibold text-4xl m-10">
        Next.js Task
      </h1>
      <h1 className="flex justify-center font-sans text-2xl -mt-5 mb-16">
        Colum Kavanagh
      </h1>
      <section className="flex justify-center">
        <Image
          className="rounded-full"
          src="/prim-ed-logo.png"
          width={500}
          height={200}
          alt={`An image of an X indicating that the user's email is not verified`}
        />
      </section>
    </main>
  );
};

export default HomePage;
