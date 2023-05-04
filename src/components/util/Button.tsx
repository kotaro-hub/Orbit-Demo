type Props = {
  children: React.ReactNode
  className: string
  linkClassName: string
}

export const Button: React.FC<Props> = (props) => {
  const { className, children, linkClassName } = props

  return (
    <button className={`rounded-button duration-200 ${className}`}>
      <a href="#" className={`block h-full w-full ${linkClassName}`}>
        {children}
      </a>
    </button>
  )
}