import { Helmet } from "react-helmet-async";

export const ErrorPage = () => {
  return (
    <main>
      <Helmet>
        <title>Page Not Found - Nuolar</title>
      </Helmet>
      
      <p>ErrorPage component.</p>
    </main>
  );
};