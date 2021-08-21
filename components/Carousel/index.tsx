import Icon from "../Icon";
import Image from "next/image";
import cn from "classnames";

export interface CarouselProps {
	onPrev: () => void;
	onNext: () => void;
}

const Wrapper: React.FC<CarouselProps> = ({ children, onPrev, onNext }) => {
	return (
		<div className="grid grid-cols-6 sm:grid-cols-12 justify-items-center">
			<button onClick={onPrev} className="focus:outline-none hidden sm:block">
				<Icon
					name="arrow-ios-back-outline"
					data-eva-width="32"
					data-eva-height="32"
					data-eva-fill="#F7FAFC"
				/>
				<span className="sr-only">Previous project</span>
			</button>
			<div
				data-animate
				className="col-span-6 sm:col-span-8 sm:col-start-3 sm:grid grid-cols-1 grid-rows-1"
			>
				{children}
			</div>
			<button
				onClick={onNext}
				className="focus:outline-none sm:col-start-12 hidden sm:block"
			>
				<Icon
					name="arrow-ios-forward-outline"
					data-eva-width="32"
					data-eva-height="32"
					data-eva-fill="#F7FAFC"
				/>
				<span className="sr-only">Next project</span>
			</button>
		</div>
	);
};

export interface ItemProps {
	title: string;
	text: string;
	eyebrow: string;
	tags: string;
	imageURL: string;
	showing: boolean;
	ghURL?: string;
	liveURL?: string;
}

const Item: React.FC<ItemProps> = ({
	title,
	text,
	eyebrow,
	tags,
	imageURL,
	ghURL,
	liveURL,
	showing,
}) => {
	return (
		<div
			className={cn(
				"slow-fade grid grid-cols-8 col-start-1 row-start-1 relative transform",
				{
					"sm:opacity-0 sm:scale-90 sm:pointer-events-none": !showing,
				}
			)}
		>
			<a
				href={liveURL || ghURL}
				className="shadow-lg h-72 w-full bg-gray-500 bg-top bg-cover col-span-8 transform translate-y-8"
			>
				<Image
					layout="fill"
					objectFit="cover"
					objectPosition="top"
					src={imageURL}
					className="filter brightness-75 transition-all hover:brightness-100"
					alt={title}
				/>
			</a>
			<div className="shadow-md bg-gray-100 text-gray-800 p-8 col-span-8 md:col-span-6 md:col-start-2 transform -translate-y-8">
				<p className="tracking-ultra text-xs uppercase">{eyebrow}</p>
				<div className="flex justify-between items-center">
					<h3 className="font-bold text-2xl inline">{title}</h3>
					<div className="flex gap-4 ml-8">
						{ghURL ? (
							<a className="opacity-75 hover:opacity-100" href={ghURL}>
								<span>
									<Icon width="24" height="24" name="github-outline" />
									<span className="sr-only">Github Repository</span>
								</span>
							</a>
						) : null}
						{liveURL ? (
							<a className="opacity-75 hover:opacity-100" href={liveURL}>
								<span>
									<Icon width="24" height="24" name="external-link-outline" />
									<span className="sr-only">Live demo</span>
								</span>
							</a>
						) : null}
					</div>
				</div>
				<p className="max-w-md mt-4">{text}</p>
				<p className="text-xs mt-4">{tags}</p>
			</div>
		</div>
	);
};

export default {
	Wrapper,
	Item,
};
