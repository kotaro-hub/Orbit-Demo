type Props = {
  className?: string
  content?: string;
  imgSrc: string;
  linkText?: string;
  title: string;
}

export const Card: React.FC<Props> = (props) => {
  const { className, content, imgSrc, linkText, title } = props;

  return (
    <a href="#" className={`block p-8 duration-200 bg-white shadow-card rounded-2xl hover:shadow-hoverCard group ${className}`}>
      <div className="flex justify-between h-full">
        <div className="flex items-center justify-center w-full h-8 rounded-full max-w-32px bg-grayBg sm:hidden">
          <img src={imgSrc} alt="アイコン" height="20" width="20" className="inline-block w-5 h-5" />
        </div>
        <div className="relative w-full ml-3">
          <h3 className="font-medium text-h3">{title}</h3>
          {content && <p className="mt-3 mb-6">{content}</p>}
          {linkText && (
            <div className="absolute bottom-0 flex justify-end w-full h-6">
              <p className="underline text-secondary group-hover:no-underline">{linkText}</p>
              <span className={`material-symbols-outlined text-primary text-xl no-underline`}>arrow_right_alt</span>
            </div>
          )}
        </div>
      </div>
    </a>
  )
}