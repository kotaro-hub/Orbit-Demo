import { Button } from "./util/Button"
import { Card } from "./util/Card"

export const Content = () => {
  return (
    <section>
      <h2 className="font-bold text-h2">Content</h2>
      <div className="grid grid-cols-3 gap-4 mt-8 lg:grid-cols-1">
        <Card
          className="col-span-1 min-h-200px lg:min-h-0 sm:h-56"  
          content="How we write at Kiwi.com."
          imgSrc="../../public/images/person.svg"
          linkText="See our voice"
          title="Voice &amp; tone"
        />
        <Card
          className="col-span-1 min-h-200px lg:min-h-0 sm:h-56"
          content="Basic grammar guidelines for writing with Orbit."
          imgSrc="../../public/images/person.svg"
          linkText="See our standards"
          title="Grammer &amp; mechains"
        />
        <Card
          className="col-span-1 min-h-200px lg:min-h-0 sm:h-56"
          content="A list of commonly used words and phrases in Kiwi.com products."
          imgSrc="../../public/images/person.svg"
          linkText="See our spacing"
          title="See our terms"
        />
      </div>
      <div className="mt-8 text-right">
        <Button className="ml-auto text-center text-secondary w-9.5rem h-3.25rem bg-primary bg-opacity-10 hover:bg-hoverGreeenBg hover:text-hoverColor" linkClassName="leading-13">
          See all items
        </Button>
      </div>
    </section>
  )
}