import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import BoardSkeleton from "../../components/skeleton/BoardSkeleton";
import PlusButton from "../../components/button/PlusButton";
import MyGroupBoard from "../../components/board/mygroupboard";

const skeletonCount = Array(15).fill(<BoardSkeleton />);
const recommendGroupsCount = Array(15).fill(<MyGroupBoard />);

const MyGroup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [joinedGroups, setJoinedGroups] = useState([]);

  return (
    <section>
      <Helmet>
        <title>저모이모 | 내모임</title>
      </Helmet>
      <article>
        <section
          className="
            text-indigo-500 text-base flex basis-full items-center mt-4
            
            before:grow
            before:bg-indigo-500
            before:h-px
            before:mr-4

            after:grow
            after:bg-indigo-500
            after:h-px
            after:ml-4
          ">
          가입한 모임
        </section>
        {joinedGroups.length === 0 ?
          <section
            className="min-h-[10vh] py-8 text-slate-400 text-sm text-center">
              가입하신 모임이 없습니다.
          </section>
        :
        null
        }
      </article>
      <article>
        <section className="pl-4 pt-1 pb-1 mb-4 bg-slate-200 text-slate-600 text-sm">
          추천 모임
        </section>
        <section>
          {isLoading ? 
          skeletonCount.map((skeleton, index) => (
            <li className="list-none mb-4" key={index}>
              {skeleton}
            </li>
          ))
          :
          recommendGroupsCount.map((skeleton, index) => (
            <li className="list-none" key={index}>
              {skeleton}
            </li>
          ))}
        </section>        
      </article>
      <PlusButton/>
    </section>
  );
};

export default MyGroup;
