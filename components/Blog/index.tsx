import { useState } from "react";
import Container from "../Container/";
import BlogCard from "../BlogCard/";
import Icon from "../Icon/";

export interface BlogProps {
	allPosts: Pick<IPost, "excerpt" | "title" | "slug">[];
}

const Blog: React.FC<BlogProps> = ({ allPosts }) => {
	const [expanded, setExpanded] = useState<boolean>(false);
	return (
		<section id="posts" className="mb-16">
			<Container>
				<h2 className="font-marker text-4xl my-16">
					<span className="accented">Latest blog posts</span>
				</h2>
				<div className={`grid grid-cols-1 md:grid-cols-3 gap-8`}>
					{allPosts
						?.filter((_, idx) => (expanded ? true : idx < 3))
						.map((post) => (
							<BlogCard
								key={post.slug}
								title={post.title}
								short={post.excerpt}
								url={`/post/${post.slug}`}
							/>
						))}
				</div>
				<button
					className="flex gap-4 mt-16 opacity-75 hover:opacity-100 focus:outline-none"
					onClick={() => setExpanded(!expanded)}
				>
					{expanded ? "Hide posts" : "See all my posts"}
					<span
						className={
							expanded ? "transform -rotate-90" : "transform rotate-90"
						}
					>
						<Icon name="arrow-forward-outline" data-eva-fill="#ffffff" />
					</span>
				</button>
			</Container>
		</section>
	);
};

export default Blog;
