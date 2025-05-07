import { useEffect, useState } from "react";
import { Outlet, useNavigation, useLocation } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { ToastContainer } from "react-toastify";
import LoadingBar from "../Component/LoadingBar";

const Layout = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    let tId;
    if (navigation.state === "loading") {
      tId = setTimeout(() => setShowSpinner(true), 300);
    } else {
      setShowSpinner(true);
      tId = setTimeout(() => setShowSpinner(false), 300);
    }

    return () => clearTimeout(tId);
  }, [location, navigation.state]);

  return (
    <>
      {showSpinner && <LoadingBar />}
      <div className="bg-[#EFEFEF]">
        <div className="max-w-[1440px] mx-auto">
          <Navbar />
          <div className="min-h-[calc(100vh-73px-260px)]">
            <Outlet />
          </div>
          <ToastContainer />
        </div>
          <Footer />
      </div>
    </>
  );
};

export default Layout;
