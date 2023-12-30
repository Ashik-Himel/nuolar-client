import {FaArrowRightLong} from 'react-icons/fa6';

export const Categories = () => {
  return (
    <section className='mt-12 lg:mt-16'>
      <div className="container">
        <h2 className='flex items-center gap-3 text-2xl font-semibold uppercase mb-4'>Categories <FaArrowRightLong /></h2>

        <div className='grid grid-cols-2 xsm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 lg:gap-4'>
          <div className='border-2 border-primary rounded-lg aspect-square relative'>
            <div className='absolute inset-0 bg-secondary rounded-md flex justify-center items-center'>
              <div className='absolute inset-0 bg-black bg-opacity-60 rounded-md'></div>
              <img className='w-4/5' src="https://i.ibb.co/fFQbY6f/polo-shirt.png" alt="Polo Shirt Icon" />
            </div>
            <div className='absolute bottom-[10px] left-0 right-0 text-white flex flex-col justify-center items-center'>
              <span className='text-xl font-semibold'>Polo Shirt</span>
              <span className='text-sm'>0 Item</span>
            </div>
          </div>
          <div className='border-2 border-primary rounded-lg aspect-square relative'>
            <div className='absolute inset-0 bg-secondary rounded-md flex justify-center items-center'>
              <div className='absolute inset-0 bg-black bg-opacity-60 rounded-md'></div>
              <img className='w-4/5' src="https://i.ibb.co/5jLt3nM/t-shirt.png" alt="T-Shirt Icon" />
            </div>
            <div className='absolute bottom-[10px] left-0 right-0 text-white flex flex-col justify-center items-center'>
              <span className='text-xl font-semibold'>T-Shirt</span>
              <span className='text-sm'>0 Item</span>
            </div>
          </div>
          <div className='border-2 border-primary rounded-lg aspect-square relative'>
            <div className='absolute inset-0 bg-secondary rounded-md flex justify-center items-center'>
              <div className='absolute inset-0 bg-black bg-opacity-60 rounded-md'></div>
              <img className='w-4/5' src="https://i.ibb.co/6bmTMzH/hudy.png" alt="Hudy Icon" />
            </div>
            <div className='absolute bottom-[10px] left-0 right-0 text-white flex flex-col justify-center items-center'>
              <span className='text-xl font-semibold'>Hudy</span>
              <span className='text-sm'>0 Item</span>
            </div>
          </div>
          <div className='border-2 border-primary rounded-lg aspect-square relative'>
            <div className='absolute inset-0 bg-secondary rounded-md flex justify-center items-center'>
              <div className='absolute inset-0 bg-black bg-opacity-60 rounded-md'></div>
              <img className='w-4/5' src="https://i.ibb.co/4PVkFGV/shirt.png" alt="Shirt Icon" />
            </div>
            <div className='absolute bottom-[10px] left-0 right-0 text-white flex flex-col justify-center items-center'>
              <span className='text-xl font-semibold'>Shirt</span>
              <span className='text-sm'>0 Item</span>
            </div>
          </div>
          <div className='border-2 border-primary rounded-lg aspect-square relative'>
            <div className='absolute inset-0 bg-secondary rounded-md flex justify-center items-center'>
              <div className='absolute inset-0 bg-black bg-opacity-60 rounded-md'></div>
              <img className='w-4/5' src="https://i.ibb.co/30TMqqj/panjabi.png" alt="Panjabi Icon" />
            </div>
            <div className='absolute bottom-[10px] left-0 right-0 text-white flex flex-col justify-center items-center'>
              <span className='text-xl font-semibold'>Panjabi</span>
              <span className='text-sm'>0 Item</span>
            </div>
          </div>
          <div className='border-2 border-primary rounded-lg aspect-square relative'>
            <div className='absolute inset-0 bg-secondary rounded-md flex justify-center items-center'>
              <div className='absolute inset-0 bg-black bg-opacity-60 rounded-md'></div>
              <img className='w-4/5' src="https://i.ibb.co/D8YBySq/pant.png" alt="Pant Icon" />
            </div>
            <div className='absolute bottom-[10px] left-0 right-0 text-white flex flex-col justify-center items-center'>
              <span className='text-xl font-semibold'>Pants</span>
              <span className='text-sm'>0 Item</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};