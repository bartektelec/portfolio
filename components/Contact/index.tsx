import Container from "../Container";
import Icon from "../Icon";

const Contact = () => {
	return (
		<section id="contact">
			<Container>
				<h2 className="font-marker text-4xl my-16">
					<span className="accented">Get in touch</span>
				</h2>
				<div className="flex flex-col items-center">
					<p data-animate className="max-w-lg text-center">
						If you like my previous works and are looking for someone to help
						you out with <strong>creating a website</strong>, or just want to
						chat - feel free to contact me!
					</p>
					<p data-animate>
						or visit my <strong>profiles</strong> on social media
					</p>
					<div data-animate className="flex flex-col items-center my-8 gap-4">
						<a
							className="flex gap-2 opacity-70 hover:opacity-100"
							href="https://github.com/bartektelec"
						>
							<Icon name="github-outline" data-eva-fill="#ffffff" />
							GitHub
						</a>
						<a
							className="flex gap-2 opacity-70 hover:opacity-100"
							href="https://www.linkedin.com/in/bart-telec"
						>
							<Icon name="linkedin-outline" data-eva-fill="#ffffff" />
							LinkedIn
						</a>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Contact;
