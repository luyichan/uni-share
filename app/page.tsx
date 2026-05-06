/* eslint-disable @next/next/no-img-element */
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
          <div className="home-collage" data-node-id="I122:380;38:1397">
            <div className="home-collage__main" data-node-id="I122:380;584:756">
              <img
                src={homeMainImage}
                alt=""
                width={995}
                height={932}
              />
            </div>
            <div className="home-collage__side">
              <div className="home-collage__side-image" data-node-id="I122:380;38:1395">
                <img
                  src={homeSideTopImage}
                  alt=""
                  width={361}
                  height={454}
                />
              </div>
              <div className="home-collage__side-image" data-node-id="I122:380;584:763">
                <img
                  src={homeSideBottomImage}
                  alt=""
                  width={361}
                  height={454}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="home-bio" data-node-id="122:381" data-name="Personal Bio">
          <div className="home-hero">
            <div className="home-hero__logo">
              <img
                src={siteLogo}
                alt="Uni-Share"
                width={146}
                height={48}
              />
            </div>
            <div className="home-hero__text">
              <h1 className="home-title">「ファッションで深める、繋げる、広げるセカイ」</h1>
            </div>
          </div>
        </section>

        <section className="home-event-block" data-node-id="433:572" data-name="Image Block 2">
          <div className="home-event-image" data-node-id="433:573">
            <img
              src={homeEventImage}
              alt=""
              width={1220}
              height={976}
            />
          </div>
        </section>

        <NewsBlock />

        <SiteFooter />
      </main>
    </div>
  );
}
