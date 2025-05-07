import React, { useEffect, useState } from "react";
import Error from "./Error";
import { useLocation, useNavigation } from "react-router";
import LoadingBar from "../Component/LoadingBar";

const ContactUs = () => {
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
    <div>
      {showSpinner && <LoadingBar />}
      <Error></Error>
    </div>
  );
};

export default ContactUs;
