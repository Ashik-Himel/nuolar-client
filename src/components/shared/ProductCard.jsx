import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {FaRegStar, FaStar} from 'react-icons/fa';
import {FaArrowRightLong} from 'react-icons/fa6';

export const ProductCard = ({product}) => {
  const {thumbnail, name, price, rating} = product;
  let ratingArray = [];

  const ratingInt = Math.ceil(rating);
  for (let i = 1; i <= 5; i++) {
    if (i <= ratingInt) ratingArray.push(1);
    else ratingArray.push(0);
  }

  return (
    <div className='border border-gray-300 rounded-md p-4 flex flex-col items-start'>
      <div className='pb-4'>
        <img src={thumbnail} alt="Product Image" className='w-4/5 mx-auto' />
      </div>
      <h3 className='text-xl font-medium mb-1'>{name}</h3>
      <div className='flex gap-1 text-yellow-600 mb-2'>
        {
          ratingArray?.map(item => item === 1 ? <FaStar key={item} /> : <FaRegStar key={item} />)
        }
      </div>
      <span className='block font-semibold mb-3 flex-1'>&#2547; {price}</span>
      <Link className='btn btn-secondary'>View <FaArrowRightLong /></Link>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object
}