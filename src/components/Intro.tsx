import { Button } from "./util/Button"
import { Card } from "./util/Card"

export const Intro = () => {
  return (
    <section>
      <div className="relative bg-gray-100 rounded-3xl h-33.125rem lg:contents">
        <div className="absolute top-0 z-10 flex flex-col h-full p-16 lg:p-0 lg:static">
          <h1 className="text-5xl font-bold leading-tight">Open source design system<br className="md:hidden" /> for your next travel project.</h1>
          <div className="flex gap-4 mt-15 sm:flex-col">
            <Button className="relative w-40 h-16 text-white bg-primary hover:bg-hoverPrimary" linkClassName="leading-16 pl-7 text-left">
              <span className={`material-symbols-outlined absolute top-5 right-2`}>arrow_right_alt</span>
              Get started
            </Button>
            <Button className="relative w-56 h-16 bg-primary bg-opacity-10 text-primary hover:bg-hoverGreeenBg hover:text-hoverColor" linkClassName="leading-16 pl-7 text-center">
              <span className={`material-symbols-outlined absolute top-5 left-6 font-bold text-secondary`}>search</span>
              <span className="font-medium text-secondary">Search</span> + Shift + K
            </Button>
          </div>
        </div>
        <picture className='absolute bottom-0 right-0 pointer-events-none lg:hidden'>
          <img src="../../public/images/rocket.png" alt="ロケットの画像" width="600px" height="630px" />
        </picture>
      </div>
      <div className="relative h-12.5rem lg:mt-21 lg:h-15.5rem sm:min-h-510px">
        <div className="absolute flex justify-center w-full gap-4 bottom-24 lg:static sm:flex-col">
          <Card
            imgSrc="../../public/images/person.svg"
            title="Components"
            content="Our components are a collection of interface elements that can be reused across the Orbit design system."
            linkText="See our components"
            className="h-12.5rem max-w-39.5rem lg:h-15.5rem"
          />
          <Card
            imgSrc="../../public/images/person.svg"
            title="Patterns"
            content="Make the most of our components by using our design patterns to address common design problems."
            linkText="See our components"
            className="h-12.5rem max-w-39.5rem lg:h-15.5rem"
          />
        </div>
      </div>
    </section>
  )
}