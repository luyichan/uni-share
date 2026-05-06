/* eslint-disable @next/next/no-img-element */
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
            <p className="about-body-text" data-node-id="I139:655;139:492">
              {introText}
            </p>
          </div>
        </section>

        <section className="about-body" data-node-id="330:429" data-name="body 7">
          <div className="about-body__content" data-node-id="I330:429;330:421">
            <p className="about-body-text about-body-text--wide" data-node-id="I330:429;330:419">
              {bodyText}
            </p>
            <div className="about-body__logo" data-node-id="I330:429;330:422">
              <img src={siteLogo} alt="Uni-Share" width={146} height={48} />
            </div>
          </div>
        </section>

        <section className="about-image-block about-image-block--medium" data-node-id="139:611" data-name="Image Block 1">
          <div className="about-image about-image--medium">
            <img src={aboutEventImage} alt="" width={800} height={566} />
          </div>
        </section>

        <section className="about-image-block about-image-block--feature" data-node-id="139:661" data-name="Image Block 2">
          <div className="about-image about-image--feature">
            <img src={aboutMagazineImage} alt="" width={1178} height={654} />
          </div>
        </section>

        <section className="about-image-block about-image-block--feature" data-node-id="139:681" data-name="Image Block 2">
          <div className="about-image about-image--feature">
            <img src={aboutExhibitionImage} alt="" width={1178} height={654} />
          </div>
        </section>

        <NewsBlock />
      </main>
      <SiteFooter />
    </div>
  );
}
