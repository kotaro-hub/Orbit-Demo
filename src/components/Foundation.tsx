import { Button } from "./util/Button"
import { Card } from "./util/Card"

export const Foundation = () => {
  return (
    <section className="lg:mt-21">
      <h2 className="font-bold text-h2">Foundation</h2>
      <div className="grid grid-cols-3 gap-4 mt-8 lg:grid-cols-1">
        <Card
          className="col-span-1 min-h-200px lg:min-h-0 sm:h-56"
          content="Color is used to signal structure, highlight importance, and display different states."
          imgSrc="../../public/images/person.svg"
          linkText="See our colors"
          title="Colors"
        />
        <Card
          className="col-span-1 min-h-200px lg:min-h-0 sm:h-56"
          content="Typography is critical for communicating the hierarchy of a page."
          imgSrc="../../public/images/person.svg"
          linkText="See our typography"
          title="Typography"
          />
        <Card
          className="col-span-1 min-h-200px lg:min-h-0 sm:h-56"
          content="Consistent spacing makes an interface more clear and easy to scan."
          imgSrc="../../public/images/person.svg"
          linkText="See our spacing"
          title="Spacing"
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