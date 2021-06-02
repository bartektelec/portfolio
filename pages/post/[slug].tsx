import * as React from "react";
import Head from "next/head";
import { getAllPosts, getPostBySlug } from "../../utils/posts";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import remark from "remark";
import html from "remark-html";
import styles from "../../components/Hero/hero.module.css";
import Socialbar from "../../components/Socialbar";

export interface BlogPageProps {
	post: IPost;
}

const BlogPage: React.FC<BlogPageProps> = ({ post }) => {
	return (
		<>
			<Head>
				<title>{post.title} - Bartek Telec</title>
			</Head>
			<div className="min-h-screen flex flex-col">
				<Navigation />
				<Socialbar />
				<main className="container max-w-prose mx-auto mt-20 flex-1">
					{[...Array(9)].map((_, index) => (
						<div
							data-confetti
							key={`confetti-${index}`}
							className={styles.confetti}
						/>
					))}
					<div className="flex flex-col rounded-md gap-4">
						<div
							style={{ backgroundImage: `url(${post.coverImage})` }}
							className="h-32 bg-center bg-cover rounded-lg opacity-75"
						></div>
						<h1 className="font-marker text-4xl my-8">
							<span className="accented">{post.title}</span>
						</h1>
						<div className="flex flex-col items-end">
							<p>{post.date}</p>
							<p className="text-sm text-gray-400">{post.tags}</p>
						</div>
						<article
							className="blogpost"
							dangerouslySetInnerHTML={{ __html: post.content }}
						></article>
					</div>
				</main>
				<Footer />
			</div>
		</>
	);
};

export async function getStaticProps({ params }: { params: { slug: string } }) {
	const post = getPostBySlug(params.slug, [
		"title",
		"date",
		"slug",
		"content",
		"ogImage",
		"coverImage",
		"tags",
	]);

	const content = await (
		await remark()
			.use(html)
			.process(post.content || "")
	).toString();

	return {
		props: {
			post: {
				...post,
				content,
			},
		},
	};
}

export async function getStaticPaths() {
	const posts = getAllPosts(["slug"]);

	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug,
				},
			};
		}),
		fallback: false,
	};
}

export default BlogPage;
