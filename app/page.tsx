/* eslint-disable @next/next/no-img-element */
import { AnimatedImage, Reveal, StaggerContainer } from "@/components/motion";
import { NewsBlock, SiteFooter, SiteHeader } from "@/components/site-shell";

const siteLogo = "/brand/unishare-logo.svg";
const homeEventImage = "/site-assets/home/home1.png";
const homeMainImage = "/site-assets/home/home2.png";
const homeSideTopImage = "/site-assets/home/home3.png";
const homeSideBottomImage = "/site-assets/home/home4.png";

export default function Home() {
  return (
    <div className="home-page" data-node-id="122:378">
      <SiteHeader currentPath="/" />
      <main className="home-main">
        <section className="home-collage-block" data-node-id="122:380" data-name="Image Block 3">
          <StaggerContainer className="home-collage" delay={160} step={130}>
            <AnimatedImage
              revealClassName="home-collage__main"
              data-node-id="I122:380;584:756"
                src={homeMainImage}
                alt=""
                width={995}
                height={932}
              duration={1.58}
            />
            <StaggerContainer className="home-collage__side" delay={320} step={120}>
              <AnimatedImage
                revealClassName="home-collage__side-image"
                data-node-id="I122:380;38:1395"
                  src={homeSideTopImage}
                  alt=""
                  width={361}
                  height={454}
                duration={1.43}
              />
              <AnimatedImage
                revealClassName="home-collage__side-image"
                data-node-id="I122:380;584:763"
                  src={homeSideBottomImage}
                  alt=""
                  width={361}
                  height={454}
                duration={1.43}
              />
            </StaggerContainer>
          </StaggerContainer>
        </section>

        <section className="home-bio" data-node-id="122:381" data-name="Personal Bio">
          <div className="home-hero">
            <Reveal className="home-hero__logo" delay={120} duration={0.86} y={16}>
              <img
                src={siteLogo}
                alt="Uni-Share"
                width={146}
                height={48}
              />
            </Reveal>
            <div className="home-hero__text">
              <Reveal className="home-title-line" delay={260} duration={1.02} y={22}>
                <h1 className="home-title">「ファッションで深める、繋げる、広げるセカイ」</h1>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="home-event-block" data-node-id="433:572" data-name="Image Block 2">
          <AnimatedImage
            revealClassName="home-event-image"
            data-node-id="433:573"
              src={homeEventImage}
              alt=""
              width={1220}
              height={976}
            delay={80}
            duration={1.56}
          />
        </section>

        <NewsBlock />

        <SiteFooter />
      </main>
    </div>
  );
}
