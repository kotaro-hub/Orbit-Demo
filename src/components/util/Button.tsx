type Props = {
  children: React.ReactNode
  className: string
}

export const Button: React.FC<Props> = (props) => {
  const { className, children } = props

  return (
    <a href="#" role="button" className={`block rounded-button duration-200 ${className}`}>
      {children}
    </a>
  )
}