//Typescript Functional Component
import { useEffect } from "react";
import { useRouter } from "next/router";
import Message from "@/components/Message";
import LoadSpinner from "./LoadSpinner";
//FUNCTIONAL COMPONENT
const UserNotFound = (): JSX.Element => {
  //COMPONENT LOGIC
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/users");
    }, 3500);
  });
  //RETURN this to UI
  return (
    <main>
      <Message
        line1="Sorry, there is no such user!"
        line2="We are redirecting you back to the main user list."
      />
      <LoadSpinner />
    </main>
  );
};
export default UserNotFound;
