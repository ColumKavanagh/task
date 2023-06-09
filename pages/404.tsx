//This page triggers when the browser gets a 404 from the applcation
import LoadSpinner from "@/components/LoadSpinner";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Message from "@/components/Message";
//
const Custom404 = (): JSX.Element => {
  console.log("Using Custom404");
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/users");
    }, 2500);
  });
  return (
    <main>
      <Message
        line1="Oops!"
        line2="That page does not exist so we are redirecting you."
      />
      <LoadSpinner />
    </main>
  );
};
export default Custom404;
