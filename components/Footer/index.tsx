import Container from "../Container/";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
	return (
		<footer className="mt-48 bg-gray-100 text-gray-800 py-4">
			<Container className="gap-2 flex flex-col justify-center items-center text-center">
				<p className="text-xs">
					This site is built with 💙 using TypeScript, Next.js, TailwindCSS and
					GSAP.
				</p>
				<p>2021 © btelec.no</p>
			</Container>
		</footer>
	);
};

export default Footer;
