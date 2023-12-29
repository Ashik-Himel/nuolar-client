import soayeb from '../../assets/images/soayeb.jpg';
import tonmoy from '../../assets/images/tonmoy.jpg';
import himel from '../../assets/images/himel.jpg';
import facebookIcon from '../../assets/images/facebook.png';
import whatsappIcon from '../../assets/images/whatsapp.png';
import telephoneIcon from '../../assets/images/telephone.png';

export const Team = () => {
  return (
    <section className="mt-10">
      <div className="container">
        <h2 className="text-center text-2xl font-semibold uppercase mb-4">Our <span className="text-primary">Team</span></h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div className='bg-primary bg-opacity-10 p-4 rounded-lg border border-primary'>
            <img src={soayeb} alt="Soayeb's Photo" className='w-full max-w-[120px] mx-auto rounded-full mb-3' />
            <h3 className='text-center text-xl font-medium'>Soayeb Khan</h3>
            <span className='text-center block text-primary mb-3'>Founder</span>
            <div className='flex justify-center items-center gap-4'>
              <a href="https://www.facebook.com/soayeb.khan.940" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook Icon" className='w-[30px]' />
              </a>
              <a href="https://wa.me/+8801706008401" target="_blank" rel="noopener noreferrer">
                <img src={whatsappIcon} alt="WhatsApp Icon" className='w-[35px]' />
              </a>
              <a href="tel:+8801706008401" target="_blank" rel="noopener noreferrer">
                <img src={telephoneIcon} alt="Telephone Icon" className='w-[30px]' />
              </a>
            </div>
          </div>
          <div className='bg-primary bg-opacity-10 p-4 rounded-lg border border-primary'>
            <img src={tonmoy} alt="Tonmoy's Photo" className='w-full max-w-[120px] mx-auto rounded-full mb-3' />
            <h3 className='text-center text-xl font-medium'>Arfin Khan Tonmoy</h3>
            <span className='text-center block text-primary mb-3'>Founder</span>
            <div className='flex justify-center items-center gap-4'>
              <a href="https://www.facebook.com/tonmoy.khan.1999" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook Icon" className='w-[30px]' />
              </a>
              <a href="https://wa.me/+8801753486844" target="_blank" rel="noopener noreferrer">
                <img src={whatsappIcon} alt="WhatsApp Icon" className='w-[35px]' />
              </a>
              <a href="tel:+8801753486844" target="_blank" rel="noopener noreferrer">
                <img src={telephoneIcon} alt="Telephone Icon" className='w-[30px]' />
              </a>
            </div>
          </div>
          <div className='bg-primary bg-opacity-10 p-4 rounded-lg border border-primary'>
            <img src={himel} alt="Himel's Photo" className='w-full max-w-[120px] mx-auto rounded-full mb-3' />
            <h3 className='text-center text-xl font-medium'>Ashikujjaman Himel</h3>
            <span className='text-center block text-primary mb-3'>Founder</span>
            <div className='flex justify-center items-center gap-4'>
              <a href="https://www.facebook.com/ashikujjaman.himel" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook Icon" className='w-[30px]' />
              </a>
              <a href="https://wa.me/+8801770473899" target="_blank" rel="noopener noreferrer">
                <img src={whatsappIcon} alt="WhatsApp Icon" className='w-[35px]' />
              </a>
              <a href="tel:+8801770473899" target="_blank" rel="noopener noreferrer">
                <img src={telephoneIcon} alt="Telephone Icon" className='w-[30px]' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};