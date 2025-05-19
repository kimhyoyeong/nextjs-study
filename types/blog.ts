export interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  slug: string;
}

export interface BlogDetailProps {
  post: BlogPost;
}
