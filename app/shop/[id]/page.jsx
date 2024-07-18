'use client'

import { useParams } from 'next/navigation';

const products = [
  { id: '1', name: 'Product 1', description: 'Description of Product 1', price: 100 },
  { id: '2', name: 'Product 2', description: 'Description of Product 2', price: 200 },
  { id: '3', name: 'Product 3', description: 'Description of Product 3', price: 300 },
];

export default function ProductPage() {
  const { id } = useParams();

  let productArray = [];
  if (Array.isArray(id)) {
    productArray = id.map(idItem => products.find(product => product.id === idItem)).filter(Boolean);
  } else {
    const product = products.find(product => product.id === id);
    if (product) {
      productArray = [product];
    }
  }

  if (productArray.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center p-4">
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center p-4">
      {productArray.map(product => (
        <div key={product.id} className="mb-6 w-full md:w-3/4 lg:w-1/2">
          <header className="text-4xl font-bold mb-4">{product.name}</header>
          <div className="p-4 bg-gray-900 rounded-md">
            <p className="mb-4">{product.description}</p>
            <p className="text-xl font-semibold">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
