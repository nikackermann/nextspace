interface Post {
    title: string;
    content: string;
    slug: string;
}

interface Props {
    params: { slug: string };
}

export default async function BlogPostPage({ params }: Props) {}
