import fs from 'fs/promises';
import path from 'path';
import { marked } from 'marked';
import matter from 'gray-matter';
import { Post } from './types';

const postsDirectory = path.join(process.cwd(), 'src', 'posts');

// Configure marked for better output
marked.setOptions({
  gfm: true,
  breaks: true,
  pedantic: false
});

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  try {
    const fileContents = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContents);
    const htmlContent = await marked(content);
    return {
      slug,
      title: data.title,
      date: data.date,
      content: htmlContent,
    };
  } catch (error) {
    return null;
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const files = await fs.readdir(postsDirectory);
  
  const posts = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(/\.md$/, '');
      return await getPostBySlug(slug);
    })
  );

  return posts.filter((post): post is Post => post !== null);
} 