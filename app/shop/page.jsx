import Link from 'next/link';

const products = [
  { id: '1', name: 'Product 1', description: 'Description of Product 1', price: 100 },
  { id: '2', name: 'Product 2', description: 'Description of Product 2', price: 200 },
  { id: '3', name: 'Product 3', description: 'Description of Product 3', price: 300 },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center p-4">
      <header className="text-4xl font-bold mb-6">Shop</header>
      
      <div className="w-full md:w-3/4 lg:w-1/2">
        {products.map(product => (
          <Link
            key={product.id}
            href={`/shop/${product.id}`}
            className="block mb-4 bg-gray-800 hover:bg-gray-700 p-4 rounded-md transition-colors duration-200"
          >
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="text-xl font-bold">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
