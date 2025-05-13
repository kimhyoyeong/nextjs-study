'use client';

import { useState } from 'react';
import { ProductList } from '@/app/_components/cart/ProductList';
import { Cart } from '@/app/_components/cart/Cart';
import { Product } from '@/types/cart';

const products: Product[] = [
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

export default function CartPage() {
  // 장바구니 상태 관리
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // 장바구니에 상품 추가
  const addToCart = (product: Product) => {
    const isInCart = cartItems.some((item) => item.id === product.id);
    if (isInCart) return;

    setCartItems([...cartItems, product]);
  };

  // 장바구니에서 상품 제거
  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // 총 금액 계산
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="p-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
        {/* 상품 목록 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">상품 리스트</h2>
          <ProductList products={products} onAddToCart={addToCart} />
        </section>

        {/* 장바구니 */}
        <aside>
          <Cart items={cartItems} onRemoveItem={removeFromCart} totalPrice={totalPrice} />
        </aside>
      </div>
    </main>
  );
}
