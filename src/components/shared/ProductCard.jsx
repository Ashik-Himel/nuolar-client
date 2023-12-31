import PropTypes from 'prop-types';
import {FaPlus, FaMinus} from 'react-icons/fa6';
import {AiFillShopping} from 'react-icons/ai';
import { useState } from 'react';

export const ProductCard = ({product}) => {
  const {thumbnail, name, price} = product;
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = e => {
    e.preventDefault();
    setQuantity(1);
  }

  return (
    <div className='border border-gray-300 rounded-md p-4 flex flex-col items-start'>
      <div className='pb-4'>
        <img src={thumbnail} alt="Product Image" className='w-4/5 mx-auto' />
      </div>
      <h3 className='text-xl font-medium mb-1'>{name}</h3>
      <span className='text-primary block font-semibold mb-3 flex-1'>&#2547; {price}</span>
      <form onSubmit={handleAddToCart}>
        <div className='flex items-center gap-2 mb-3'>
          <FaMinus className='cursor-pointer select-none' onClick={() => quantity > 1 && setQuantity(quantity-1)} />
          <input className='w-[35px] px-2 py-[2px] border border-gray-300 rounded text-center text-sm' type="text" name="quantity" id="quantity" value={quantity} disabled />
          <FaPlus className='cursor-pointer select-none' onClick={() => setQuantity(quantity+1)} />
        </div>
        <button type="submit" className='btn btn-secondary'><AiFillShopping /> Cart</button>
      </form>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object
}