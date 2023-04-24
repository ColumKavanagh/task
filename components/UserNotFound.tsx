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
    }, 3000);
  });
  //RETURN this to UI
  return (
    <>
      <main>
        <h1 className="flex justify-center text-center mt-10">
          Sorry, there is no such user! <br />
          We are redirecting you back to the main user list.
        </h1>
        <LoadSpinner />
      </main>
    </>
  );
}
