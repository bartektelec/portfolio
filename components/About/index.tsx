import Container from "../Container/";
import SkillCard from "../SkillCard/";

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
	return (
		<section id="about" className="mb-16">
			<Container>
				<h2 className="font-marker text-4xl my-16">
					<span className="accented">About me</span>
				</h2>
				<div className="mx-auto flex flex-col gap-8 text-center md:w-1/2">
					<h1 data-animate className="text-4xl">
						Hello, I'm Bartlomiej, a <strong>frontend developer</strong> based
						in Oslo, Norway.
					</h1>
					<p data-animate>
						I enjoy creating interactive, <strong>good-looking</strong> things
						such as websites and applications, as well as I’m always learning
						new stuff in my spare time.
					</p>
					<p data-animate>
						I am currently working as a <strong>Software Developer</strong> in
						Hurtigruten AS.
					</p>
					<p data-animate>
						I graduated <strong>Noroff Vocational School</strong> in Oslo with
						an associate degree in Frontend development.
					</p>
				</div>
				<div className="grid grid-cols-4 gap-12 sm:grid-cols-12 mt-16">
					<SkillCard
						icon="code-outline"
						title="Web development"
						text="I specialize in converting graphical interface projects to code that results as fast, responsive, and accessible website or web app. "
						tags="React, Svelte, Vue.js, Next.js, JavaScript, TypeScript, Jest, GSAP"
					/>
					<SkillCard
						icon="brush-outline"
						title="UI Design"
						text="I always take care that my projects are designed with care and accessibiliy in mind for the best user experience. "
						tags="WCAG, ARIA, A11y, Figma, Adobe XD, Photoshop"
					/>
					<SkillCard
						icon="smartphone-outline"
						title="Other"
						text="There are many ways to create an application, I enjoy picking up new tech and am able to do frontend and backend, as well as mobile development. "
						tags="PWA, C#.NET, WebSockets, React Native, RWD, Node.js, Express, MongoDB"
					/>
				</div>
			</Container>
		</section>
	);
};

export default About;
