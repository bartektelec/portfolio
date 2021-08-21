import { useState, useRef, useEffect } from "react";

import { debounce } from "../../utils/debounce";

export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
	const prevScrollPos = useRef(0);
	const navList = useRef<HTMLUListElement>(null);
	const [visible, setVisible] = useState(true);

	const handleScroll = debounce(() => {
		const currentScrollPos = window.pageYOffset;

		setVisible(
			prevScrollPos.current > currentScrollPos || currentScrollPos < 70
		);
		prevScrollPos.current = currentScrollPos;
	}, 50);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			data-testid="nav"
			className="px-4 fixed w-full bg-gray-800 bg-opacity-90 z-50 transition-all"
			style={{ top: visible ? "0" : "-72px" }}
		>
			<div className="flex justify-between items-center w-full max-w-screen-2xl py-5 mx-auto">
				<a className="hover:opacity-75 transition-opacity" href="/#">
					<img
						className="w-6 h-6"
						src="/assets/logo.png"
						alt="Bartek Telec logo"
					/>
				</a>
				<ul
					ref={navList}
					className="list-none flex gap-6 text-sm text-gray-100"
				>
					<li>
						<a
							className="opacity-75 hover:opacity-100 transition-opacity"
							href="/#about"
						>
							About
						</a>
					</li>
					<li>
						<a
							className="opacity-75 hover:opacity-100 transition-opacity"
							href="/#works"
						>
							Works
						</a>
					</li>
					<li>
						<a
							className="opacity-75 hover:opacity-100 transition-opacity"
							href="/#posts"
						>
							Blog
						</a>
					</li>
					<li>
						<a
							className="opacity-75 hover:opacity-100 transition-opacity"
							href="/#contact"
						>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default Navigation;
