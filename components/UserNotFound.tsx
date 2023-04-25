import { useEffect } from "react";
import { useRouter } from "next/router";
import LoadSpinner from "./LoadSpinner";
export default function UserNotFound(props: any) {
  //TYPE???
  //COMPONENT LOGIC
  console.log("User not found");
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/users");
    }, 3400);
  });
  //RETURN this to UI
  return (
    <main>
      <h1 className="flex justify-center font-sans font-semibold text-2xl mt-5">
        Sorry, there is no such user!
      </h1>
      <h1 className="flex justify-center font-sans text-2xl mb-16">
        We are redirecting you back to the main user list.
      </h1>
      <LoadSpinner />
    </main>
  );
}
