import { BlogPost } from '@/types/blog';

interface ListProps {
  posts: BlogPost[];
  onSelectPost: (postId: number | null) => void;
  selectedPostId: number | null;
}

export default function List({ posts, onSelectPost, selectedPostId }: ListProps) {
  return (
    <div className="space-y-2">
      {posts.map((post) => (
        <button
          key={post.id}
          onClick={() => onSelectPost(selectedPostId === post.id ? null : post.id)}
          className={`w-full rounded-lg border p-4 text-left transition-colors hover:bg-gray-50 ${
            selectedPostId === post.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
          }`}
        >
          <h3 className="font-medium text-gray-900">{post.title}</h3>
          <p className="mt-1 text-sm text-gray-500">{post.date}</p>
        </button>
      ))}
    </div>
  );
}
