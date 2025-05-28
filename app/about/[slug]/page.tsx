interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  return (
    <article className="prose lg:prose-xl mx-auto p-4">
      <h1>{slug} 페이지</h1>
      <div className="text-gray-600">현재 {slug} 페이지를 보고 계십니다.</div>
    </article>
  );
}
