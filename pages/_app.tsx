import * as React from "react";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../styles/global.css";

interface MyAppProps {
	Component: React.FC<any>;
	pageProps: any;
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta
					prefix="og: http://ogp.me/ns#"
					property="og:title"
					content="Bartek Telec - Portfolio"
				/>
				<meta
					prefix="og: http://ogp.me/ns#"
					property="og:url"
					content="https://btelec.no"
				/>
				<meta
					prefix="og: http://ogp.me/ns#"
					property="og:description"
					content="I’m a frontend developer based in Oslo, that means I write code to align boxes on the screen and make them interactive."
				/>
				<meta
					prefix="og: http://ogp.me/ns#"
					property="og:type"
					content="website"
				/>
				<meta
					prefix="og: http://ogp.me/ns#"
					property="og:image"
					content="https://btelec.no/assets/portfolio.jpg"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="assets/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="assets/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="assets/favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="assets/favicon/site.webmanifest" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />

				<meta
					name="description"
					content="Bartek Telec personal portfolio. I’m a frontend developer based in Oslo, that means I write code to align boxes on the screen and make them interactive."
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
