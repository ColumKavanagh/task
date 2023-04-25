import { useRouter } from "next/router";
import Image from "next/image";

export default function PreviousUser(props: any) {
  //TYPE???
  //COMPONENT LOGIC
  const id: number = props.id;
  const router = useRouter();

  const previousUser = () => {
    router.push("/users/" + (id - 1));
  };
  //RETURN this to the UI
  return (
    <button
      className="bg-blue-400 hover:bg-blue-500 p-4 m-4 rounded-full"
      onClick={previousUser}
    >
      <Image
        className="rounded-full mr-2"
        src="/left-arrow.png"
        width={40}
        height={40}
        alt={`An image of an arrow pointing to the left`}
      />
    </button>
  );
}
