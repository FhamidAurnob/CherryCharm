// app/product/[id]/page.tsx
import { use } from 'react';

interface Props {
  params: { id: string };
}

export default function ProductPage({ params }: Props) {
  return <div>Product ID: {params.id}</div>;
}
