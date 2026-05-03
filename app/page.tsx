/* eslint-disable @next/next/no-img-element */
import { NewsBlock, SiteFooter, SiteHeader } from "@/components/site-shell";

const siteLogo = "/brand/unishare-logo.svg";
const homeLeftImage = "/site-assets/home/image-1.png";
const homeRightImage = "/site-assets/home/image-2.png";
const homeWideImage = "/site-assets/home/image.png";

const manifesto = [
  "「人生を楽しむためのツールとしてファッションを掲げ、生活を豊かにしたい！」",
  "そんな思いから、この団体は生まれました。",
  "では、“セカイ”を広げるためにはどうすればいいのか。",
  "私たちは、ファッションのもつ2つの力に着目しました。",
  "",
  "1つ目は、「内向きの力」。",
  "それは、ファッションを通して個性が“深まる”こと。",
  "「一番大事な自分」を追求することで、自分らしさが培われます。",
  "",
  "2つ目は、「外向きの力」。",
  "それは、ファッションによって人と人とが“繋がる”こと。",
  "ファッションという共通項を介して、コミュニケーションの輪が育まれます。",
  "",
  "私たちはこの2つの力を借りて、皆さんの“セカイ”が広がるような活動をしていきます。",
  "",
  "「深める × 繋げる = 広げる」",
];

export default function Home() {
  return (
    <div className="home-page" data-node-id="122:378">
      <SiteHeader currentPath="/" />
      <main className="home-main">
        <section className="home-image-block" data-node-id="122:380">
          <div className="home-image-grid">
            <div className="home-image-cell">
              <img
                src={homeLeftImage}
                alt=""
                width={684}
                height={932}
              />
            </div>
            <div className="home-image-cell">
              <img
                src={homeRightImage}
                alt=""
                width={684}
                height={932}
              />
            </div>
          </div>
        </section>

        <section className="home-bio" data-node-id="122:381">
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
              <div className="home-manifesto" aria-label="Manifesto">
                {manifesto.map((line, index) =>
                  line ? (
                    <p key={`${line}-${index}`} className="home-manifesto__line">
                      {line}
                    </p>
                  ) : (
                    <p key={`spacer-${index}`} className="home-manifesto__line home-manifesto__line--blank" aria-hidden="true">
                      {"\u200B"}
                    </p>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="home-wide-image-block" data-node-id="122:382">
          <div className="home-wide-image">
            <img
              src={homeWideImage}
              alt=""
              width={1392}
              height={773}
            />
          </div>
        </section>

        <NewsBlock />

        <SiteFooter />
      </main>
    </div>
  );
}
