import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Rotating from "../components/loading/Rotating";

const Root = lazy(() => import("../pages/Root"));
const NotFound = lazy(() => import("../pages/404"));
const Meetup = lazy(() => import("../pages/Meetup"));
const Setting = lazy(() => import("../pages/Setting"));

const routes = [
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/meetup",
    element: <Meetup />,
  },
  {
    path: "/setting",
    element: <Setting />,
  },
];

const Location = () => {
  return (
    <Suspense
      fallback={
        <section>
          <Rotating
            width="100"
            strokeColor="#6495ED"
            strokeWidth="1"
            animationDuration="1"
          />
        </section>
      }
    >
      <Routes>
        {routes.map((route) => (
          <Route key={Date.now()} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default Location;
