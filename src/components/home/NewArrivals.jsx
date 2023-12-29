import {FaArrowRightLong} from 'react-icons/fa6';
import { ProductCard } from '../shared/ProductCard';
import { Link } from 'react-router-dom';

// Remove this after dynamic data load from database
const product = {
    'thumbnail': 'https://i.ibb.co/Y3kVjnb/polo-shirt-1.png',
    'name': 'Polo Shirt 1',
    'price': 600,
    'rating': 5.00
}

export const NewArrivals = () => {
  return (
    <section className='mt-10'>
      <div className="container">
        <div className='flex justify-between items-center gap-4 mb-4'>
          <h2 className='flex items-center gap-3 text-2xl font-semibold uppercase'>New Arrivals <FaArrowRightLong /></h2>
          <Link className='text-primary font-semibold'>See All</Link>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
        </div>
      </div>
    </section>
  );
};