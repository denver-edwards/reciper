import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MazeYourself</title>
        <meta httpEquiv="Content-Type" content="text/html" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="application-name" content="Recipe Scraper" />
        <meta name="author" content="Denver Edwards" />
        <meta name="description" content="Simple. Clean. Recipe." />
        <meta name="keywords" content="recipe,recipe scraper" />
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
