import Layout from "../components/Layout";
import { getAllPosts } from "../utils/posts";

interface Props {
	allPosts: IPost[];
}

const IndexPage: React.FC<Props> = ({ allPosts }) => (
	<Layout allPosts={allPosts} />
);

export async function getStaticProps() {
	const allPosts = getAllPosts();
	return {
		props: {
			allPosts,
		},
	};
}

export default IndexPage;
