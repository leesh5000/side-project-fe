import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";

const yesHeaderState = atom({
    key: "yesHeaderState",
    default: true,
})

export { yesHeaderState };