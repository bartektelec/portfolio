import cn from "classnames";

export interface ContainerProps {
	className?: string;
}

const Container: React.FC<ContainerProps> = (props) => {
	return (
		<div className={cn("px-4 gap-4 mx-auto max-w-[1400px]", props.className)}>
			{props.children}
		</div>
	);
};

export default Container;
