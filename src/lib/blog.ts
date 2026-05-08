import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  readTime: string;
  locale: string;
  content: string;
}

const BLOG_PATH = path.join(process.cwd(), 'content/blog');

export function getAllPosts(locale: string): BlogPost[] {
  const localePath = path.join(BLOG_PATH, locale);
  
  if (!fs.existsSync(localePath)) {
    return [];
  }

  const files = fs.readdirSync(localePath).filter(file => file.endsWith('.mdx'));

  const posts = files.map(filename => {
    const slug = filename.replace('.mdx', '');
    const filePath = path.join(localePath, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      author: data.author || 'Abades Ocean Deck House',
      category: data.category || 'General',
      tags: data.tags || [],
      image: data.image || '',
      readTime: data.readTime || '5 min read',
      locale,
      content,
    } as BlogPost;
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(locale: string, slug: string): BlogPost | null {
  try {
    const filePath = path.join(BLOG_PATH, locale, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      author: data.author || 'Abades Ocean Deck House',
      category: data.category || 'General',
      tags: data.tags || [],
      image: data.image || '',
      readTime: data.readTime || '5 min read',
      locale,
      content,
    } as BlogPost;
  } catch (error) {
    return null;
  }
}

export function getPostsByCategory(locale: string, category: string): BlogPost[] {
  const allPosts = getAllPosts(locale);
  return allPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getAllCategories(locale: string): string[] {
  const posts = getAllPosts(locale);
  const categories = posts.map(post => post.category);
  return Array.from(new Set(categories));
}

export function getRelatedPosts(locale: string, currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(locale, currentSlug);
  if (!currentPost) return [];

  const allPosts = getAllPosts(locale);
  
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentSlug)
    .filter(post => post.category === currentPost.category)
    .slice(0, limit);

  if (relatedPosts.length < limit) {
    const recentPosts = allPosts
      .filter(post => post.slug !== currentSlug)
      .filter(post => !relatedPosts.includes(post))
      .slice(0, limit - relatedPosts.length);
    
    return [...relatedPosts, ...recentPosts];
  }

  return relatedPosts;
}
