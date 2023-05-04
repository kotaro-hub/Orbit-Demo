type Props = {
  children: React.ReactNode
  isDotFlg?: boolean
}

export const MenuList: React.FC<Props> = (props) => {
  const { isDotFlg, children } = props

  return (
    <>
      <li><a href="#" className={`block h-full hover:opacity-50 duration-200 leading-14`}>{children}</a></li>
      {isDotFlg && (<span className="lg:hidden">・</span>)}
    </>
  )
}