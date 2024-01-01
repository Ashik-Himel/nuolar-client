import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {FaArrowLeftLong} from 'react-icons/fa6';
import { Header } from "../components/header/Header";

export const ErrorPage = () => {
  return (
    <main>
      <Helmet>
        <title>Page Not Found - Nuolar</title>
      </Helmet>
      
      <Header />
      <section className="mt-[70.4px] md:mt-[70.8px]">
        <div className="container">
          <div className="max-w-[650px] mx-auto pt-10 md:pt-16 text-center">
            <h1 className="mb-4 text-7xl sm:text-9xl tracking-tight font-bold text-primary">404</h1>
            <p className="mb-4 text-3xl sm:text-4xl font-bold text-secondary">Page Not Found</p>
            <p className="mb-6 sm:text-lg text-gray-500">The page you are looking for is maybe broken or not exist. Go back to homepage by clicking the button below.</p>
            <Link to='/' className="btn btn-secondary py-3">
              <FaArrowLeftLong /> Return Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};