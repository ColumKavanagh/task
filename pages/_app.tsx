import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import LoadSpinner from "@/components/LoadSpinner";

export default function App({ Component, pageProps }: AppProps) {
  //LOGIC
  //Using the Loading Spinner throughou the App
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleStop = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  //RETURN this to the UI
  return (
    <main>
      {loading && <LoadSpinner />}
      {/*If loading is 'true', show the <Loader/>*/}
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
