import React from "react";
import { Helmet } from "react-helmet-async";

const Meetup = () => {
  return (
    <>
      <section>
        <Helmet>
          <title>저모이모 | 정모</title>
        </Helmet>
      </section>
      <section className="flex">
        <article className="basis-1/4 mr-3 border-2 border-indigo-500 rounded-xl text-indigo-500 text-center">
          <p>목요일</p>
          <hr className="border-indigo-500" />
          <div className="py-2 px-2">
            <p className="text-xl font-semibold">오늘</p>
            <span className="font-medium">19:40</span>
          </div>
        </article>
        <article className="basis-3/4">
          <div className="flex mb-2">
            <div className="flex items-center mr-2 border rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-current text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </div>
            <div className="flex items-center">
              <p className="mr-1 shrink-0 text-sm text-gray-500 after:content-['|'] after:ml-0.5 ">
                서울특별시
              </p>
              <p className="text-ellipsis whitespace-nowrap overflow-hidden text-xl font-semibold">
                🚀 가벼운 힐링 산책하실분!!
              </p>
            </div>
          </div>
          <p className="mb-2 text-gray-400 text-sm">
            🌿목요일엔 선유도공원 힐링산책🌿
          </p>
          <div className="flex items-center">
            <div className="flex text-sm mr-auto">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 27 27"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p>합정역 8번출구</p>
            </div>
            <p className="text-xs text-gray-400">39명</p>
          </div>
        </article>
      </section>
    </>
  );
};

export default Meetup;
