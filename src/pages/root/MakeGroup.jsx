import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { yesHeaderState } from "../../state";

const MakeGroup = ({ history }) => {
    const navigate = useNavigate();
    const [yesHeader, setYesHeader] = useRecoilState(yesHeaderState);

    useEffect(() => {
        setYesHeader(false);
    }, []);

    const goBack = () => {
        navigate(-1);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }
    return(
        <div className="h-screen">
            <Helmet>
                <title>저모이모 | 모임만들기</title>
            </Helmet>
            <header className="border-b-2 pb-2 grid grid-cols-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative left-1 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={goBack}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span className="font-semibold justify-self-center">모임 만들기</span>
            </header>
            <form className="h-[85vh] mt-2 flex flex-col justify-between" onSubmit={onSubmitHandler}>
                <section className="space-y-4 p-2 text-slate-400 font-semibold">
                    <article className="flex">
                        <section className="w-1/4 text-sm py-1 font-medium">관심사</section>
                        <input className="w-3/4 text-sm focus:outline-none py-1 border-b-2" placeholder="선택"></input>
                    </article>
                    <article className="flex">
                        <section className="w-1/4 text-sm py-1 font-medium">활동지역</section >
                        <input className="w-3/4 text-sm focus:outline-none py-1 border-b-2" placeholder="선택"></input>
                    </article>
                    <article className="flex">
                        <section className="w-1/4 text-sm py-1 font-medium">모임명</section >
                        <input className="w-3/4 text-sm focus:outline-none py-1 border-b-2" placeholder="모임 이름 입력"></input>             
                    </article>
                    <article className="">
                        <article className="w-1/4 text-sm font-medium">모임설명</article>
                        <textarea className="text-sm resize-none focus:outline-none w-full h-[40vh] p-4 my-2 border rounded-lg" placeholder="모임에 대해 설명해주세요. (500자 이내)"></textarea>
                    </article>
                </section>
                <button className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white rounded-md">모임 만들기</button>
            </form>
        </div>
    )
}; 

export default MakeGroup;