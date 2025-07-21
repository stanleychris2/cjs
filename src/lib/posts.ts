import fs from 'fs/promises';
import path from 'path';
import { marked } from 'marked';

const postsDirectory = path.join(process.cwd(), 'src', 'posts');

// Configure marked for better output
marked.setOptions({
  gfm: true,
  breaks: true,
  pedantic: false
});

export async function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  try {
    const markdown = await fs.readFile(filePath, 'utf-8');
    const content = await marked(markdown);
    return {
      slug,
      content,
    };
  } catch (error) {
    return null;
  }
}

export async function getAllPosts() {
  const files = await fs.readdir(postsDirectory);
  
  const posts = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(/\.md$/, '');
      return await getPostBySlug(slug);
    })
  );

  return posts.filter(Boolean);
} 