import React from "react";

const MyGroupBoard = ({ image, category, area, groupName, memberCount }) => {
    return (
      <section className="border-b-2 border-slate-400 p-4 w-full mx-auto">
        <article className="flex space-x-4 items-center">
            <section className="rounded-lg bg-slate-700 h-24 w-24"></section>
            <section className="flex-1 space-y-2 py-1">
                <article className="flex space-x-2 items-center">
                    <section className="rounded-full border-2 border-slate-400 w-6 h-6 text-slate-400 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                    </section>
                    <section className="text-sm text-slate-400">{area}</section>
                </article>
                <article className="text-lg font-semibold">{groupName}</article>
                <article className="text-xs text-slate-400 text-right">{memberCount}명</article>
            </section>
        </article>
      </section>
    );
};

export default MyGroupBoard;