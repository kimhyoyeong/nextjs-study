'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cart } from './components/Cart';
import { CartProvider, useCart } from './context/CartContext';

// 샘플 상품 데이터
const products = [
  {
    id: 1,
    name: '티셔츠',
    price: 29000,
  },
  {
    id: 2,
    name: '머그컵',
    price: 15000,
  },
  {
    id: 3,
    name: '스티커',
    price: 3000,
  },
];

// 상품 목록 컴포넌트
function ProductList() {
  const { addToCart } = useCart();

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
      {products.map((product) => (
        <Card key={product.id} className="py-8 px-4">
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-lg">
              {product.price.toLocaleString()}원
            </span>
            <Button 
              className="w-full mt-2"
              onClick={() => addToCart(product)}
            >
              장바구니
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// 메인 페이지 컴포넌트
export default function Home() {
  return (
    <CartProvider>
      <main className="p-8">
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-[1fr_300px]">
          <section>
            <h2 className="mb-4 text-2xl font-bold">상품 리스트</h2>
            <ProductList />
          </section>
          <aside>
            <Cart />
          </aside>
        </div>
      </main>
    </CartProvider>
  );
}
