import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="overflow-x-hidden">
      <Head />
      <body className="w-screen bg-slate-200">
        {/* "overflow-x-hidden" in the Html element and "w-screen" making the 'body' element width=100vw ("w-screen) in Tailwind") actually
        solves the problem of the scrollbar shunting things to the left AND a horizontal scroll bar appearing (after the 'w-screen' solution).*/}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
