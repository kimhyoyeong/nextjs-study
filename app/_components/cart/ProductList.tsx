'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product } from '../../../types/cart';

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export function ProductList({ products, onAddToCart }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {products.map((product) => (
        <Card key={product.id} className="px-4 py-8">
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-lg">{product.price.toLocaleString()}원</span>
            <Button className="mt-2 w-full" onClick={() => onAddToCart(product)}>
              장바구니
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
