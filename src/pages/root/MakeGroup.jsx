import React from "react";
import { Helmet } from "react-helmet-async";

const MakeGroup = () => {
    return(
        <div className="h-[90vh]">
            <Helmet>
                <title>저모이모 | 모임만들기</title>
            </Helmet>
            <header className="border-b-2 py-2 grid grid-cols-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative left-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span className="font-semibold justify-self-center">모임 만들기</span>
            </header>
            <form className="h-[80vh] flex flex-col justify-between pt-8">
                <section className="space-y-8 p-2 text-slate-400 font-semibold">
                    <article className="flex">
                        <section className="w-1/4">관심사</section>
                        <input className="w-3/4 focus:outline-none py-1 border-b-2" placeholder="선택"></input>
                    </article>
                    <article className="flex">
                        <section className="w-1/4">활동지역</section >
                        <input className="w-3/4 focus:outline-none py-1 border-b-2" placeholder="선택"></input>
                    </article>
                    <article className="flex">
                        <section className="w-1/4">모임명</section >
                        <input className="w-3/4 focus:outline-none py-1 border-b-2" placeholder="모임 이름 입력"></input>             
                    </article>
                    <article className="">
                        <article className="w-1/4">모임설명</article>
                        <textarea className="resize-none focus:outline-none w-full h-96 p-4 my-2 border rounded-lg" placeholder="모임에 대해 설명해주세요. (500자 이내)"></textarea>
                    </article>
                </section>
                <button className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white rounded-md">모임 만들기</button>
            </form>
        </div>
    )
}; 

export default MakeGroup;