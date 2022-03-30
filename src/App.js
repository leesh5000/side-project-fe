import React, { useEffect, useState } from "react";
import Search from "./components/input/Search";
import Location from "./routes/Location";
import BasicButton from "./components/button/BasicButton";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { yesHeaderState } from "./state";

const rootButtons = [
  {
    subject: "모임",
    path: "/",
  },
  {
    subject: "정모",
    path: "/meetup",
  },
  {
    subject: "내모임",
    path: "/my-group",
  },
  {
    subject: "설정",
    path: "/setting",
  },
];

const App = () => {
  const [yesHeader, setYesHeader] = useRecoilState(yesHeaderState);
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    console.log(
      `React start environment server ${process.env.REACT_APP_SERVER_URI}`
    );
  }, []);

  const viewTrigger = () => {
    if (!isLogin) {
      return "Login screen";
    }
    if (yesHeader) {
      return (
        <div className="bg-white max-w-md w-full h-full p-2">
          <header className="flex justify-between">
            <section>
              <svg
                className="h-8 w-8 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </section>
            <section>
              <Search
                name="search"
                placeholder="모임검색"
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 absolute top-1 right-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                }
              />
            </section>
          </header>
          <main>
            <section className="mt-5 grid grid-cols-4 gap-4">
              {rootButtons.map((button, index) => (
                <BasicButton
                  key={index}
                  subject={button.subject}
                  path={button.path}
                />
              ))}
            </section>
            <section className="w-full mt-5">{<Location />}</section>
          </main>
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
