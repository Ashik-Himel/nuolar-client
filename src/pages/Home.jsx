import { Banner } from "../components/home/Banner";
import { Categories } from "../components/home/Categories";
import { DealBanner } from "../components/home/DealBanner";
import { NewArrivals } from "../components/home/NewArrivals";

export const Home = () => {
  return (
    <main>
      <Banner />
      <Categories />
      <DealBanner />
      <NewArrivals />
    </main>
  );
};