import { Link } from "react-router-dom";

export const DealBanner = () => {
  return (
    <section className="mt-10 bg-primary bg-opacity-10 py-8">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row gap-6">
          <div>
            <h2>Get The <span className="text-primary">Best Deal</span>!</h2>
            <p>Get 150 taka off in a package of two polo shirt. In this package, a white polo shirt and a navy blue polo shirt included.</p>
            <Link className="btn btn-primary">Get Now</Link>
          </div>
          <div>
            <img src="https://i.ibb.co/SxvnhWt/two-polo-shirt.png" alt="Polo Shirt Image" className="max-w-[400px] mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};