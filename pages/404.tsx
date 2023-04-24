//This page triggers when the browser gets a 4040 from the applcation
import LoadSpinner from "@/components/LoadSpinner";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  console.log("Using Custom404");
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/users");
    }, 2500);
  });
  return (
    <main>
      <h1 className="flex justify-center mt-10">
        That page does not exist so we are redirecting you!
      </h1>
      <LoadSpinner />
    </main>
  );
}