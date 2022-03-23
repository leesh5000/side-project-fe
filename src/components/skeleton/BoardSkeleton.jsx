import React from "react";

const BoardSkeleton = (props) => {
  return (
    <section className="border-2 border-gray-700 shadow rounded-md p-4 w-full mx-auto">
      <article className="animate-pulse flex space-x-4 items-center">
        <section className="bg-slate-700 h-12 w-12"></section>
        <section className="flex-1 space-y-6 py-1">
          <article className="h-2 bg-slate-700 rounded"></article>
          <article className="space-y-3">
            <section className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </section>
            <section className="h-2 bg-slate-700 rounded"></section>
          </article>
        </section>
      </article>
    </section>
  );
};

export default BoardSkeleton;
