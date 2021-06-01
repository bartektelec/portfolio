import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const POSTS_DIR = join(process.cwd(), "_posts");

export function getPostSlugs() {
	const except = [".git", "assets"];
	return fs
		.readdirSync(POSTS_DIR)
		.filter((filename) => !except.includes(filename));
}

export function getPostBySlug(
	slug: string,
	fields: Array<keyof IPost> = [
		"coverImage",
		"date",
		"excerpt",
		"ogImage",
		"tags",
		"title",
		"slug",
		"content",
	]
): Partial<IPost> {
	const realSlug = slug.replace(/\.md$/, "");

	const fullPath = join(POSTS_DIR, `${realSlug}.md`);

	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	const serializedData: Partial<IPost> = { ...data, slug: realSlug, content };

	// Ensure only the minimal needed data is exposed
	const items = fields.reduce(
		(acc, curr) => ({ ...acc, [curr]: serializedData[curr] }),
		{}
	);

	return items;
}

export function getAllPosts(
	fields: Array<keyof IPost> = [
		"coverImage",
		"date",
		"excerpt",
		"ogImage",
		"tags",
		"title",
		"slug",
		"content",
	]
) {
	const slugs = getPostSlugs();
	const assetsDir = join(process.cwd(), "_posts", "assets");
	const assetsOutDir = join(process.cwd(), "public", "assets");
	const assets = fs.readdirSync(assetsDir);
	assets.forEach((file) => {
		fs.copyFileSync(join(assetsDir, file), join(assetsOutDir, file));
	});
	const posts = slugs
		.map((slug) => getPostBySlug(slug, fields))
		// sort posts by date in descending order
		.sort((post1, post2) =>
			post1?.date && post2?.date
				? new Date(post1.date) > new Date(post2.date)
					? -1
					: 1
				: 0
		);
	return posts;
}
