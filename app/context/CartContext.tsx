'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

// 상품 정보를 정의하는 인터페이스
interface Product {
  id: number;      // 상품 고유 식별자
  name: string;    // 상품명
  price: number;   // 가격
}

// Context에서 제공할 값들의 타입 정의
interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  totalPrice: number;
}

// Context 생성 (초기값은 undefined)
const CartContext = createContext<CartContextType | undefined>(undefined);

// Context Provider 컴포넌트
export function CartProvider({ children }: { children: ReactNode }) {
  // 장바구니 상태 관리
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // 장바구니에 상품 추가 함수
  const addToCart = (product: Product) => {
    // 이미 장바구니에 있는 상품인지 확인
    const isInCart = cartItems.some(item => item.id === product.id);
    if (isInCart) return; // 이미 있으면 추가하지 않음
    
    setCartItems([...cartItems, product]);
  };

  // 장바구니에서 상품 제거 함수
  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  // 전체 금액 계산 (가격의 합)
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  // Context Provider 반환
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

// Context 사용을 위한 커스텀 훅
export function useCart() {
  const context = useContext(CartContext);
  // Provider 외부에서 사용 시 에러 발생
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 