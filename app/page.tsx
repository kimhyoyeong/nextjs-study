import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: '티셔츠',
    price: 29000,
    image: '/next.svg',
    tag: 'NEW',
  },
  {
    id: 2,
    name: '머그컵',
    price: 15000,
    image: '/vercel.svg',
    tag: 'HOT',
  },
  {
    id: 3,
    name: '스티커',
    price: 3000,
    image: '/globe.svg',
    tag: 'SALE',
  },
];

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex w-full max-w-3xl flex-col items-center gap-[32px] sm:items-start">
        <section className="w-full">
          <h2 className="mb-6 text-2xl font-bold">상품 리스트</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product) => (
              <Card key={product.id} className="justify-centet relative flex p-4">
                <button
                  className="absolute top-4 right-4 z-10 rounded-full p-1 transition-colors"
                  aria-label="좋아요"
                  type="button"
                >
                  <Heart size={24} className="fill-red-500" />
                </button>
                <CardHeader className="flex flex-col items-center gap-2">
                  {/*  <Image
                    src={product.image}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="mb-2 rounded"
                  /> */}
                  <CardTitle className="text-center text-lg font-semibold">
                    {product.name}
                  </CardTitle>
                  <Badge variant="secondary">{product.tag}</Badge>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-2">
                  <span className="text-xl font-bold">{product.price.toLocaleString()}원</span>
                  <Button className="mt-2 w-full">장바구니</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
