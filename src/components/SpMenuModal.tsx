import { SpMenuList } from "./util/SpMenuList"

export const SpMenuModal = () => {
  return (
    <div className="fixed bottom-0 z-50 hidden w-screen bg-white">
      <nav className="h-56 rounded-sm shadow-xl">
        <ul className="p-4">
          <SpMenuList>Foundation</SpMenuList>
          <SpMenuList>Components</SpMenuList>
          <SpMenuList>Tokens</SpMenuList>
          <SpMenuList>Guides</SpMenuList>
          <SpMenuList>Accessibility</SpMenuList>
        </ul>
      </nav>
      <button>Close</button>
    </div>
  )
}