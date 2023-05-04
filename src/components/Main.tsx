import { Intro } from "./Intro"
import { Foundation } from "./Foundation"
import { Content } from "./Content"
import { Support } from "./Support"
import { Resources } from "./Resources"

export const Main = () => {
  return (
    <main className="h-full p-8 mx-auto max-w-90rem">
      <Intro />
      <Foundation />
      <Content />
      <Support/>
      <Resources />
    </main>
  )
}