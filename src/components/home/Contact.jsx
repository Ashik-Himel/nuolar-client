import {BiSolidContact} from 'react-icons/bi';
import {FaArrowRightLong} from 'react-icons/fa6';

export const Contact = () => {
  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
  }

  return (
    <section className="mt-12 lg:mt-16">
      <div className="container">
        <h2 className="text-center text-2xl font-semibold uppercase mb-4"><span className="text-primary">Contact</span> Us</h2>

        <div className='flex flex-col md:flex-row justify-center items-center gap-6 [&>*]:flex-1'>
          <div className='w-full'>
            <div className='bg-primary bg-opacity-10 p-4 border border-primary rounded-lg w-full max-w-[400px] mx-auto'>
              <BiSolidContact className='text-6xl text-primary mb-4' />
              <span className='block mb-1'><span className='font-medium'>Facebook Page:</span> <a className='text-primary underline underline-offset-[3px]' href="https://www.facebook.com/nuolar" target="_blank" rel="noopener noreferrer">Nuolar</a></span>
              <span className='block mb-1'><span className='font-medium'>Facebook Group:</span> <a className='text-primary underline underline-offset-[3px]' href="https://www.facebook.com/groups/nuolar" target="_blank" rel="noopener noreferrer">Nuolar Family</a></span>
              <span className='block mb-1'><span className='font-medium'>Instagram:</span> <a className='text-primary underline underline-offset-[3px]' href="https://www.instagram.com/nuo.lar" target="_blank" rel="noopener noreferrer">nuo.lar</a></span>
              <span className='block mb-1'><span className='font-medium'>WhatsApp:</span> <a className='text-primary underline underline-offset-[3px]' href="https://wa.me/message/OFKY4OFQJXPPG1" target="_blank" rel="noopener noreferrer">+8801315779906</a></span>
              <span className='block mb-1'><span className='font-medium'>Email:</span> <a className='text-primary underline underline-offset-[3px]' href="mailto:nuolar.brand@gmail.com" target="_blank" rel="noopener noreferrer">nuolar.brand@gmail.com</a></span>
            </div>
          </div>
          <form className='w-full' onSubmit={handleSubmit}>
            <label htmlFor="name" className='block font-medium mb-2'>Name</label>
            <input className='block input border border-gray-300 w-full max-w-[500px] mb-4' type="text" name="name" id="name" placeholder='Write your name' required />

            <label htmlFor="email" className='block font-medium mb-2'>Email</label>
            <input className='block input border border-gray-300 w-full max-w-[500px] mb-4' type="email" name="email" id="email" placeholder='Write your email' required />

            <label htmlFor="subject" className='block font-medium mb-2'>Subject</label>
            <input className='block input border border-gray-300 w-full max-w-[500px] mb-4' type="text" name="subject" id="subject" placeholder='Write your subject' required />

            <label htmlFor="message" className='block font-medium mb-2'>Message</label>
            <textarea className='block textarea resize-none border border-gray-300 w-full max-w-[500px] h-[100px] text-base mb-4' name="message" id="message" placeholder='Write your message' required></textarea>

            <button className='btn btn-primary' type="submit">Send <FaArrowRightLong /></button>
          </form>
        </div>
      </div>
    </section>
  );
};