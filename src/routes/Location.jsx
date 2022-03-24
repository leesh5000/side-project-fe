import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Rotating from "../components/loading/Rotating";

const Root = lazy(() => import("../pages/root/Root"));
const NotFound = lazy(() => import("../pages/common/404"));
const Meetup = lazy(() => import("../pages/root/Meetup"));
const MyGroup = lazy(() => import("../pages/root/MyGroup"));
const Setting = lazy(() => import("../pages/root/Setting"));
const MakeGroup = lazy(() => import("../pages/root/MakeGroup"));

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
    path: "/my-group",
    element: <MyGroup />,
  },
  {
    path: "/setting",
    element: <Setting />,
  },
  {
    path: "/make-group",
    element: <MakeGroup />,
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
