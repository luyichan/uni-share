/* eslint-disable @next/next/no-img-element */
import { AnimatedImage, Reveal } from "@/components/motion";
import { NewsBlock, SiteFooter, SiteHeader } from "@/components/site-shell";

const siteLogo = "/brand/unishare-logo.svg";
const aboutEventImage = "/site-assets/about/about1.png";
const aboutMagazineImage = "/site-assets/about/about2.png";
const aboutExhibitionImage = "/site-assets/about/about3.png";

const introText =
  "Uni-Shareは学生たちによって運営されるクリエイティブ・コレクティブであり、ファッションフリーマガジンの出版活動や、その他の多岐に渡る表現活動を通じて新しい視点や声に出会うための場所です。";

const bodyText =
  "ファッションを入り口として写真、スタイリング、デザイン、文章、そして映像など多様な表現を横断するUni-Shareの雑誌は、読み終えて完結するものではなく、音楽イベントや展示、ストックを通じて別の出会いへとひらかれていくものでもあります。 Uni-Shareは、ファッションを通して、深める、繋げる、広げる世界を探り続けています。";

export default function AboutPage() {
  return (
    <div className="about-page" data-node-id="139:608">
      <SiteHeader currentPath="/about" />
      <main className="about-main">
        <section className="about-intro" data-node-id="139:655" data-name="big body JP">
          <div className="about-intro__copy" data-node-id="I139:655;139:490">
            <Reveal delay={80} duration={1} y={18}>
              <p className="about-body-text" data-node-id="I139:655;139:492">
                {introText}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="about-body" data-node-id="330:429" data-name="body 7">
          <div className="about-body__content" data-node-id="I330:429;330:421">
            <Reveal className="about-body-text--wide" delay={80} duration={1} y={18}>
              <p className="about-body-text" data-node-id="I330:429;330:419">
                {bodyText}
              </p>
            </Reveal>
            <Reveal className="about-body__logo" data-node-id="I330:429;330:422" delay={220} duration={0.86} y={14}>
              <img src={siteLogo} alt="Uni-Share" width={146} height={48} />
            </Reveal>
          </div>
        </section>

        <section className="about-image-block about-image-block--medium" data-node-id="139:611" data-name="Image Block 1">
          <AnimatedImage revealClassName="about-image about-image--medium" src={aboutEventImage} alt="" width={800} height={566} delay={160} />
        </section>

        <section className="about-image-block about-image-block--feature" data-node-id="139:661" data-name="Image Block 2">
          <AnimatedImage revealClassName="about-image about-image--feature" src={aboutMagazineImage} alt="" width={1178} height={654} delay={160} />
        </section>

        <section className="about-image-block about-image-block--feature" data-node-id="139:681" data-name="Image Block 2">
          <AnimatedImage revealClassName="about-image about-image--feature" src={aboutExhibitionImage} alt="" width={1178} height={654} delay={160} />
        </section>

        <NewsBlock />
      </main>
      <SiteFooter />
    </div>
  );
}
