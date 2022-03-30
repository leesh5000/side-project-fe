import React, { useEffect, useState } from "react";
import Location from "./routes/Location";

import { useRecoilValue } from "recoil";
import { yesHeaderState } from "./state";
import RootLayout from "./layouts/root/RootLayout";
import Login from "./pages/root/Login";

const App = () => {
  const yesHeader = useRecoilValue(yesHeaderState);
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    console.log(
      `React start environment server ${process.env.REACT_APP_SERVER_URI}`
    );
  }, []);

  const viewTrigger = () => {
    if (!isLogin) {
      return (
        <div className="bg-white max-w-md w-full h-full">
          <Login />
        </div>
      );
    }
    if (yesHeader) {
      return (
        <div className="bg-white max-w-md w-full h-full p-2">
          <RootLayout>
            <Location />
          </RootLayout>
        </div>
      );
    }
    return (
      <div className="bg-white max-w-md w-full h-full p-2">
        <main>
          <section className="w-full mt-5">{<Location />}</section>
        </main>
      </div>
    );
  };

  return (
    <section className="bg-black opacity-80 w-full h-full flex justify-center">
      {viewTrigger()}
    </section>
  );
};

export default App;
