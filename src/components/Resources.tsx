import { Card } from "./util/Card"

export const Resources = () => {
  return (
    <section className="mb-16 mt-21">
      <h2 className="font-bold text-h2">Resources</h2>
      <div className="flex gap-4 mt-8 sm:flex-wrap">
        <Card
          imgSrc="../../public/images/figma.svg"
          title="Figma Library"
          className="basis-1/2 sm:basis-full"
        />
        <Card
          imgSrc="../../public/images/github-icon.svg"
          title="Orbit repository"
          className="basis-1/2 sm:basis-full"
        />
      </div>
    </section>
  )
}