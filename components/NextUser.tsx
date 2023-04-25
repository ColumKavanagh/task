import Image from "next/image";
import { useRouter } from "next/router";

export default function NextUser(props: any) {
  //TYPE???
  //COMPONENT LOGIC
  const id: number = props.id;
  const router = useRouter();

  const nextUser = () => {
    router.push("/users/" + (id + 1));
  };
  //RETURN this to the UI
  return (
    <button
      className="bg-blue-400 hover:bg-blue-500 p-4 m-4 rounded-full"
      onClick={nextUser}
    >
      <Image
        className="rounded-full ml-2"
        src="/right-arrow.png"
        width={40}
        height={40}
        alt={`An image of an arrow pointing to the right`}
      />
    </button>
  );
}
