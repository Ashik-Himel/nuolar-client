import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <section className="bg-primary bg-opacity-10 py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 text-center">
      <div className="container">
        <h1 className="text-4xl font-semibold mb-2">Welcome to <span className="text-primary">Nuolar</span></h1>
        <p className="max-w-[700px] mx-auto mb-6">Nuolar is a clothing brand located in Gazipur, Dhaka, Bangladesh. We are providing special quality products in anywhere in Bangladesh.</p>
        <div className="flex flex-wrap justify-center items-center gap-2">
          <Link to='/shop' className="btn btn-secondary">Shop Now</Link>
          <Link to='/about' className="btn btn-secondary btn-outline">About Us</Link>
        </div>
      </div>
    </section>
  );
};