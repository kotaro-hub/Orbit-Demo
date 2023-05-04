import { MenuList } from "./util/MenuList"

export const Footer = () => {
  return(
    <footer>
      <div className="flex justify-between h-20 px-8 py-3 bg-footerBg bg-opacity-30 sm:h-full">
        <ul className="flex items-center gap-x-10 sm:flex-col sm:items-start">
          <MenuList isDotFlg={true}>Component status</MenuList>
          <MenuList isDotFlg={true}>Stroybook</MenuList>
          <MenuList isDotFlg={true}>Changelog</MenuList>
          <MenuList>Theme</MenuList>          
        </ul>
        <div className="flex gap-x-4">
          <img src="../../public/images/github-icon.svg" alt="githubを開く" height="32" width="32" />
          <img src="../../public/images/twitter.svg" alt="twitterを開く" height="32" width="32" />
        </div>
      </div>
      <div className="flex flex-wrap justify-between px-8 py-7 gap-y-4 bg-footerBg bg-opacity-70">
        <ul className="flex items-center gap-x-10 sm:flex-col sm:items-start sm:gap-y-4">
          <li className="font-bold cursor-text">
            Design tokens<span className="block font-normal">v3.2.1</span>
          </li>
          <span className="lg:hidden">・</span>
          <li className="font-bold cursor-text">
            React components<span className="block font-normal">v6.3.1</span>
          </li>
          <span className="lg:hidden">・</span>
          <li className="font-bold cursor-text">
            Developer mode<span className="block font-normal">Opens components on the React tab by default.</span>
          </li>
        </ul>
        <div>
          <p className="font-bold">Built &amp; maintained by Kiwi.com</p>
          <p className="flex">Open sourced with <img src="../../public/images/heart.png" alt="" height="20" width="20" /> for travel</p>
        </div>
      </div>
    </footer>
  )
}