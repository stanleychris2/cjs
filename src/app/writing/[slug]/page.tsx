import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/posts';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => {
    if (!post) return { slug: '' };
    return { slug: post.slug };
  }).filter(p => p.slug);
}

export default async function WritingPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug) as any;

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      <div className="w-full max-w-2xl mx-auto px-8 py-12">
        <header className="mb-12">
          <Link href="/" className="text-gray-600 hover:text-black transition-colors">
            &larr; Back to home
          </Link>
          <h1 className="text-4xl font-bold mt-4">{post.title}</h1>
          <p className="text-gray-500 mt-2">{post.date}</p>
        </header>
        <main>
          <article 
            className="prose prose-lg max-w-none" 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </main>
      </div>
    </div>
  );
} 