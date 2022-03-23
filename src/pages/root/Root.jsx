import React from "react";
import { Helmet } from "react-helmet-async";
import BoardSkeleton from "../../components/skeleton/BoardSkeleton";
import Slick from "../../components/slick/Slick";

const skeletonCount = Array(15).fill(<BoardSkeleton />);

const Root = () => {
  return (
    <section>
      <Helmet>
        <title>저모이모 | 모임</title>
      </Helmet>
      <article className="mb-10">
        <Slick />
      </article>
      <article>
        {skeletonCount.map((skeletion, index) => (
          <li className="list-none mb-4" key={index}>
            {skeletion}
          </li>
        ))}
      </article>
    </section>
  );
};

export default Root;
