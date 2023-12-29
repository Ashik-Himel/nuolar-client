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
          <h2 className='flex items-center gap-3 text-2xl font-semibold uppercase'>New Arrivals</h2>
          <Link className='text-primary font-semibold flex justify-center items-center gap-2'>See All <FaArrowRightLong /></Link>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />

          <Link className='bg-primary bg-opacity-10 border border-primary rounded-md p-4 flex justify-center items-center xl:hidden'>
            <div className='text-primary font-medium flex flex-col justify-center items-center gap-2'>
              <span>See All</span>
              <div className='p-3 bg-primary bg-opacity-10 rounded-full'>
                <FaArrowRightLong />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};