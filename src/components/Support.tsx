import { SupportCard } from "./util/supportCard"

export const Support = () => {
  return (
    <section>
      <h2 className="font-bold text-h2">Support</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-8 lg:grid-cols-1">
        <SupportCard
          btnClassName="bg-githubIconBg w-56 group-hover:bg-hoverGithubBtnBg"
          btnContent="Report bug on GitHub"
          className="bg-githubBg lg:col-span-1"
          content="If you find any bugs in our components, report them on Github and we’ll fix them as soon as possible. It’s our highest priority to have Orbit working as expected."
          iconSrc="../../public/images/github-icon.svg"
          iconBg="bg-githubIconBg"
          title="Report a bug"
        />
        <SupportCard
          btnClassName="bg-figmaIconBg w-52 group-hover:bg-hoverFigmaBtnBg"
          btnContent="Get the Figma library"
          className="bg-figmaBg lg:col-span-1"
          content="Visit our community profile and download all of our libraries and resources for free."
          iconSrc="../../public/images/figma.svg"
          iconBg="bg-figmaIconBg"
          title="Get the Figma library"
        />
        <SupportCard
          btnClassName="bg-twitterIconBg w-56 group-hover:bg-hoverTwitterBtnBg"
          btnContent="Follow us on Twitter"
          className="bg-twitterBg lg:col-span-1"
          content="Twitter is one of our main platforms for sharing. Everything important that is happening around Orbit is published on Twitter."
          iconSrc="../../public/images/twitter.svg"
          iconBg="bg-twitterIconBg"
          title="Follow us on Twitter"
        />
        <SupportCard
          btnClassName="bg-tequliaIconBg w-17rem duration-200 group-hover:bg-hoverTequliaBtnBg"
          btnContent="Connect Orbit to Tequila"
          className="bg-secondary lg:col-span-1"
          content="Tequila is an online B2B platform powered by Kiwi.com that allows anyone to access our content, technology, and services."
          iconSrc="../../public/images/figma.svg"
          iconBg="bg-tequliaIconBg"
          title="Connect Orbit to Tequila"
        />
      </div>
    </section>
  )
}