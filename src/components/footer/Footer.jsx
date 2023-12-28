import brandLogo from '../../assets/images/nuolar.png';
import facebookIcon from '../../assets/images/facebook.png';
import instagramIcon from '../../assets/images/instagram.png';
import whatsappIcon from '../../assets/images/whatsapp.png';

export const Footer = () => {
  return (
    <footer className='bg-primary bg-opacity-10'>
      <div className="container">
        <div className='py-10 grid grid-cols-[auto] sm:grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto] gap-8 justify-between items-center'>
          <div className='sm:col-span-2 lg:col-span-1'>
            <img src={brandLogo} alt="Brand Logo" className='w-[120px] block mb-4' />
            <span className='block mb-2 max-w-[350px]'><span className='font-semibold'>Address:</span> East of Kewa, Kewa Bazar, Sreepur, Gazipur-1740, Dhaka, Bangladesh.</span>
            <span className='block mb-6'><span className='font-semibold'>Mobile:</span> <a href="tel:+8801315779906" className='text-primary'>+8801315-779906</a></span>
            <div className='flex items-center gap-6'>
              <a href="https://www.facebook.com/nuolar" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook Icon" className='w-[35px]' />
              </a>
              <a href="https://www.instagram.com/nuo.lar" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram Icon" className='w-[35px]' />
              </a>
              <a href="https://wa.me/message/OFKY4OFQJXPPG1" target="_blank" rel="noopener noreferrer">
                <img src={whatsappIcon} alt="WhatsApp Icon" className='w-[35px]' />
              </a>
            </div>
          </div>
          <div>
            <h4 className='text-2xl font-semibold text-primary mb-3'>Social</h4>
            <div className='flex flex-col gap-2 font-medium'>
              <a href="https://www.facebook.com/nuolar" target="_blank" rel="noopener noreferrer">Facebook Page</a>
              <a href="https://www.facebook.com/groups/nuolar" target="_blank" rel="noopener noreferrer">Facebook Group</a>
              <a href="https://www.instagram.com/nuo.lar" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
          <div>
            <h4 className='text-2xl font-semibold text-primary mb-3'>Contact</h4>
            <div className='flex flex-col gap-2 font-medium'>
              <a href="https://wa.me/message/OFKY4OFQJXPPG1" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href="https://m.me/nuolar" target="_blank" rel="noopener noreferrer">Messenger</a>
              <a href="mailto:nuolar.brand@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-primary text-white py-5 text-center">
        <div className="container">
          <p>Copyright&copy;{new Date().getFullYear()} - Nuolar. All rights reserved. Developed by <a className="font-semibold" href="https://www.facebook.com/ashikujjaman.himel" target="_blank" rel="noopener noreferrer">Ashik-Himel</a>.</p>
        </div>
      </div>
    </footer>
  );
};