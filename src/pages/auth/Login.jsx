import React from "react";
import { Helmet } from "react-helmet-async";
import GroupImg from "../../sources/group.png";
import GoogleBtn from "../../sources/btn_google_signin_light_normal_web@2x.png";

const Login = () => {

    return (
        <section className="w-full h-screen bg-gradient-to-b from-indigo-500 to-violet-500 text-white">
            <Helmet>
                <title>저모이모 | 로그인</title>
            </Helmet>
            <article className="h-[80vh] pt-[10vh] px-2 flex flex-col items-center justify-evenly">
                <section className="flex flex-col items-center space-y-2 text-center">
                    <img className="w-12 h-12" src={GroupImg} alt="GroupImg" />
                    <p className="text-xl">저런 모임, 이런 모임!</p>
                    <p className="text-5xl font-bold border-b-2 pb-2">저모이모</p>
                    <p className="text-2xl font-bold">LOG IN</p>
                </section>
                <button>
                    <img className="w-3/4 mx-auto shadow-xl hover:shadow-none" src={GoogleBtn} alt="GoogleBtn" />
                </button>
                <section className="text-center leading-loose">
                    <p className="text-xs">현재 저모이모는 구글 소셜 로그인만을 지원하고 있습니다</p>
                    <a className="text-sm hover:text-violet-300 underline underline-offset-4" href="https://support.google.com/accounts/answer/27441?hl=ko">Google 계정 만들기</a>
                </section>
            </article>
        </section>
    );
}

export default Login;