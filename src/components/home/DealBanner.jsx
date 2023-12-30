import { Link } from "react-router-dom";
import {FaArrowRightLong} from 'react-icons/fa6';

export const DealBanner = () => {
  return (
    <section className="mt-12 lg:mt-16 bg-primary bg-opacity-10 py-8">
      <div className="container">
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-x-6 gap-y-4 [&>*]:flex-1">
          <div>
            <span className="text-primary font-semibold block mb-2">Best Deal</span>
            <h2 className="text-3xl font-medium mb-2">Get 150 Taka Off!!!</h2>
            <p className="max-w-[500px] mb-6">Get 150 taka off in a package of two polo shirt. In this package, a white polo shirt and a navy blue polo shirt included.</p>
            <Link className="btn btn-primary">Get It Now <FaArrowRightLong /></Link>
          </div>
          <div>
            <img src="https://i.ibb.co/SxvnhWt/two-polo-shirt.png" alt="Polo Shirt Image" className="w-full max-w-[400px] mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};