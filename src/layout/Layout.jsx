import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { useEffect } from "react";

export const Layout = () => {
  const {pathname} = useLocation();

  useEffect(() => {
    scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "200822359775798");
    chatbox.setAttribute("attribution", "biz_inbox");

    // Your SDK code
    window.fbAsyncInit = function() {
      FB.init({
        xfbml            : true,
        version          : 'v18.0'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <div className="flex flex-col [&>*:nth-child(2)]:flex-1 h-auto min-h-screen">
      <Header />
      <Outlet />
      <Footer />

      {/* Messenger Chat Plugin Code */}
      <div id="fb-root"></div>
      {/* Your Chat Plugin code */}
      <div id="fb-customer-chat" className="fb-customerchat">
    </div>
    </div>
  );
};