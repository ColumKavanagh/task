//The 'Home' page of the application
import Image from "next/image";
const HomePage = (): JSX.Element => {
  return (
    <main>
      <h1 className="flex justify-center text-center font-sans font-semibold text-4xl m-10">
        Next.js task
      </h1>
      <h1 className="flex justify-center font-sans text-3xl -mt-5 mb-16">
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
