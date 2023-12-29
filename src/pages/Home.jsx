import { Banner } from "../components/home/Banner";
import { Categories } from "../components/home/Categories";
import { Contact } from "../components/home/Contact";
import { DealBanner } from "../components/home/DealBanner";
// import { FAQ } from "../components/home/FAQ";
import { NewArrivals } from "../components/home/NewArrivals";
import { Team } from "../components/home/Team";

export const Home = () => {
  return (
    <main>
      <Banner />
      <Categories />
      <DealBanner />
      <NewArrivals />
      <Team />
      {/* <FAQ /> */}
      <Contact />
    </main>
  );
};