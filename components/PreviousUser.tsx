import { useRouter } from "next/router";

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
      className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 mr-8 rounded-full"
      onClick={previousUser}
    >
      PREVIOUS
    </button>
  );
}
