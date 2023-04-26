import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import LoadSpinner from "@/components/LoadSpinner";
import Footer from "@/components/Footer";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  //Using the Loading Spinner throughout the App
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
    <main className="mb-20">
      {/*This margin at the bottom ensures I don't cover content with the sticky footer*/}
      {loading && <LoadSpinner />}
      {/*If loading is 'true', show the <Loader/>*/}
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
};
export default App;
