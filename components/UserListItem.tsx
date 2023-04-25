import Link from "next/link";

export default function UserListItem(props: any) {
  //TYPE???
  //COMPONENT LOGIC

  //RETURN this to the UI
  return (
    <section className="flex justify-between min-w-fit w-1/3 bg-sky-200 shadow-lg p-3 m-2 rounded-lg">
      <p className="font-sans font-bold text-lg text-black mt-1 ml-12">
        {props.first_name}&nbsp;{props.last_name}&nbsp;&nbsp;
      </p>
      <div>
        <Link href={`/users/${props.id}`}>
          <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 mr-8 rounded-full">
            More Info
          </button>
        </Link>
      </div>
    </section>
  );
}
