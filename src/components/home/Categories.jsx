import {FaArrowRightLong} from 'react-icons/fa6';

export const Categories = () => {
  return (
    <section className='mt-10 mb-10'>
      <div className="container">
        <h2 className='flex items-center gap-3 text-2xl font-semibold uppercase mb-4'>Categories <FaArrowRightLong /></h2>

        <div className='flex flex-wrap justify-start lg:justify-between items-center gap-2'>
          <div className='border-2 border-primary rounded-lg w-[150px] h-[150px] relative'>
            <div className='absolute inset-0 bg-secondary rounded-md flex justify-center items-center'>
              <div className='absolute inset-0 bg-black bg-opacity-60 rounded-md'></div>
              <img className='w-4/5' src="https://i.ibb.co/QNcnVQX/t-shirt.png" alt="T-Shirt Icon" />
            </div>
            <div className='absolute bottom-[10px] left-0 right-0 text-white flex flex-col justify-center items-center'>
              <span className='text-xl font-semibold'>T-Shirt</span>
              <span className='text-sm'>0 Item</span>
            </div>
          </div>
          <div className='border-2 border-primary rounded-lg w-[150px] h-[150px] relative'>
            <div className='absolute inset-0 bg-secondary rounded-md flex justify-center items-center'>
              <div className='absolute inset-0 bg-black bg-opacity-60 rounded-md'></div>
              <img className='w-4/5' src="https://i.ibb.co/yFTKncB/polo-shirt.png" alt="Polo Shirt Icon" />
            </div>
            <div className='absolute bottom-[10px] left-0 right-0 text-white flex flex-col justify-center items-center'>
              <span className='text-xl font-semibold'>Polo Shirt</span>
              <span className='text-sm'>0 Item</span>
            </div>
          </div>
          <div className='border-2 border-primary rounded-lg w-[150px] h-[150px] relative'>
            <div className='absolute inset-0 bg-secondary rounded-md flex justify-center items-center'>
              <div className='absolute inset-0 bg-black bg-opacity-60 rounded-md'></div>
              <img className='w-4/5' src="https://i.ibb.co/K6KHDG2/hudy.png" alt="Hudy Icon" />
            </div>
            <div className='absolute bottom-[10px] left-0 right-0 text-white flex flex-col justify-center items-center'>
              <span className='text-xl font-semibold'>Hudy</span>
              <span className='text-sm'>0 Item</span>
            </div>
          </div>
          <div className='border-2 border-primary rounded-lg w-[150px] h-[150px] relative'>
            <div className='absolute inset-0 bg-secondary rounded-md flex justify-center items-center'>
              <div className='absolute inset-0 bg-black bg-opacity-60 rounded-md'></div>
              <img className='w-4/5' src="https://i.ibb.co/3pYW0S1/shirt.png" alt="Shirt Icon" />
            </div>
            <div className='absolute bottom-[10px] left-0 right-0 text-white flex flex-col justify-center items-center'>
              <span className='text-xl font-semibold'>Shirt</span>
              <span className='text-sm'>0 Item</span>
            </div>
          </div>
          <div className='border-2 border-primary rounded-lg w-[150px] h-[150px] relative'>
            <div className='absolute inset-0 bg-secondary rounded-md flex justify-center items-center'>
              <div className='absolute inset-0 bg-black bg-opacity-60 rounded-md'></div>
              <img className='w-4/5' src="https://i.ibb.co/8MHmkpF/panjabi.png" alt="Panjabi Icon" />
            </div>
            <div className='absolute bottom-[10px] left-0 right-0 text-white flex flex-col justify-center items-center'>
              <span className='text-xl font-semibold'>Panjabi</span>
              <span className='text-sm'>0 Item</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};