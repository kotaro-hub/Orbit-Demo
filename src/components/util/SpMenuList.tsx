type Props = {
  children: React.ReactNode
}

export const SpMenuList: React.FC<Props> = (props) => {
  const { children } = props

  return (
    <li>
      <a href="#" className="block w-full h-full">
        <img src="../../../public/images/person.svg" alt="" height="20" width="20" className="inline-block" />
        {children}
      </a>
    </li>
  )
}