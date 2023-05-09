import { Button } from "./Button"

type Props = {
  btnClassName: string
  btnContent: string
  className: string
  content: string
  iconSrc: string
  iconBg: string
  title: string
}

export const SupportCard: React.FC<Props> = (props) => {
  const { btnClassName, btnContent, className, content, iconSrc, iconBg, title } = props

  return (
    <a href="#" className={`block p-8 text-white rounded-2xl group duration-200 hover:shadow-lg sm:h-auto ${className}`}>
      <div className="flex flex-col h-full gap-y-6">
        <h3 className="flex items-center basis-full gap-x-4 text-h3">
          <div className={`w-8 h-8 flex justify-center items-center rounded-full sm:hidden ${iconBg}`}>
            <span className="material-symbols-outlined">diversity_2</span>
          </div>
          {title}
        </h3>
        <p className="h-20 basis-full sm:h-auto">{content}</p>
        <div className="flex justify-between basis-full sm:items-center sm:flex-col">
          <Button className={`h-3.25rem text-center leading-13 ${btnClassName}`}>{btnContent}</Button>
          <img src={iconSrc} alt="#" height="32" width="32" className="sm:mt-4" />
        </div>
      </div>
    </a>
  )
}

