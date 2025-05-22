import List from './_components/List.client';
import { getPublishedPosts } from '@/lib/notion';
import React from 'react';

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
  const posts = await getPublishedPosts();

  return (
    <div className="flex min-h-screen">
      <aside className="w-1/3 border-r p-4">
        <List posts={posts} />
      </aside>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
