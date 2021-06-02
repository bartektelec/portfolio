interface IPost {
    slug: string,
    content: string,
    title: string,
    excerpt: string,
    coverImage: string,
    date: string,
    tags: string,
    ogImage: {
        url: string
    }
}