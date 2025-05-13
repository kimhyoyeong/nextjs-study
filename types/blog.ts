export interface BlogPost {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  author: string;
}

export interface BlogListProps {
  posts: BlogPost[];
  //숫자 또는 null을 받아서, 아무 것도 반환하지 않는 함수
  onSelectPost: (postId: number | null) => void;
  selectedPostId: number | null;
}

export interface BlogDetailProps {
  post: BlogPost;
}
