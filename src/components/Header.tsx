import { useState } from "react";
import { MenuList } from "./util/MenuList";

export const Header = () => {
  const [count, setCount] = useState<number>(1000)
  const [isClickedBtn, setIsClickedBtn] = useState<boolean>(false);

  const onClickFavoriteCount = (): void => {
    if (!isClickedBtn) {
      setCount(count + 1)
      setIsClickedBtn(true)
    } else {
      setCount(count - 1)
      setIsClickedBtn(false)
    }
  }

  return (
    <header className="px-8 py-6 mx-auto max-w-90rem lg:py-4">
      <div className="flex justify-between w-full h-14">
        <div className="flex items-center">
          <img src="../../public/images/heart.png" alt="ハートのロゴ" height="44" width="44" className="mr-2" />
          <a className="mr-2 text-3xl font-bold tracking-wide sm:hidden">ORBIT<span className="text-sm font-thin">by kiwi.com</span></a>
          <span className="sm:hidden">・</span>
          <div className="h-5 border border-gray-200 rounded-sm sm:hidden">
            <button className="flex items-center w-16 h-full text-xs" onClick={onClickFavoriteCount}>
              <div className="flex items-center justify-center w-6 h-5 bg-gray-300 rounded-sm">
                <img src="../../public/images/star.svg" alt="" height="14" width="14" />
              </div>
              <p className="w-10 h-5 ml-2 leading-5 text-black">{count}</p>
            </button>
          </div>
        </div>
        <nav className="lg:hidden">
          <ul className="flex items-center gap-4 font-medium text-black">
            <MenuList isDotFlg={true}>Foundation</MenuList>
            <MenuList isDotFlg={true}>Components</MenuList>
            <MenuList isDotFlg={true}>Tokens</MenuList>
            <MenuList isDotFlg={true}>Guides</MenuList>
            <MenuList>Accessibility</MenuList>
          </ul>
        </nav>
        <button className="hidden lg:block"><span className="material-symbols-outlined">menu</span></button>
      </div>
    </header>
  );
};
