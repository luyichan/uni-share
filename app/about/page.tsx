/* eslint-disable @next/next/no-img-element */
import { NewsBlock, SiteFooter, SiteHeader } from "@/components/site-shell";

const siteLogo = "/brand/unishare-logo.svg";
const aboutWideImage = "/site-assets/about/image.png";
const aboutMediumImage = "/site-assets/about/image-1.png";
const aboutClosingImage = "/site-assets/about/image-2.png";

const introText =
  "Uni-Shareは、学生たちによって運営されるファッションフリーマガジンであり、出版・表現・協働を通じて、新しい視点や声に出会うためのクリエイティブ・コレクティブです。ファッションを入り口に、写真、スタイリング、デザイン、文章、映像、イベントなど多様な表現を横断しながら、毎号ごとに異なるテーマとともにその世界をかたちにしてきました。複数の大学や専門領域にまたがるメンバー、そして外部のクリエイターたちとの協働によって育まれるUni-Shareの活動は、雑誌制作にとどまらず、展示やリリースイベント、ストックを通じた街との接点へと広がっています。誌面も活動も、ひとつの完成形として閉じるのではなく、見る人、読む人、関わる人によって何度でも解釈され、ひらかれていくものとしてつくられています。Uni-Shareは東京を拠点に、ファッションを通して、深める、繋げる、広げる世界を探り続けています。";

const sectionTitle = "「ファッションで深める、繋げる、広げるセカイ」";

const firstColumnText =
  "Uni-Shareは、学生たちによって運営されるファッションフリーマガジンであり、ファッションを通して人や視点、表現を深め、つなぎ、広げていくためのクリエイティブ・コレクティブです。複数の大学や専門領域にまたがるメンバーを中心に、企画、撮影、編集、デザイン、発信、配布までを一つの流れとして重ねながら、毎号ごとに異なるテーマと向き合い、その時々の関心や感覚を誌面や活動に落とし込んできました。";

const secondColumnText =
  "その時々の関心や感覚を誌面や活動に落とし込んできました。誌面づくりにとどまらず、外部のクリエイターや街、読者との関係を育てながら、新しい出会いや対話が生まれる場をひらいていくことも、Uni-Shareにとって大切な活動のひとつです。読む人にとっても、つくる人にとっても、Uni-Shareがそれぞれの“セカイ”を少しずつ広げていく入口でありたいと考えています。";

const thirdColumnText =
  "Uni-Shareは、その活動を価値観と結びつけながら続けていくために、ひとつひとつの制作過程や関係性を大切にしています。テーマの設定から誌面制作、撮影、編集、発信、配布に至るまで、誰とどのように作るのかを丁寧に考え、学生メンバーと外部クリエイター、そして街や読者とのあいだに生まれる対話を重ねながら活動を育ててきました。";

const fourthColumnText =
  "雑誌は読み終えて閉じるものではなく、イベントや展示、ストックを通じて別の出会いへとひらかれていくものでもあります。Uni-Shareは、表現の背景にある人やプロセスにも目を向けながら、ファッションを通して持続的な関係と新しい文化の接点をつくっていきます。";

export default function AboutPage() {
  return (
    <div className="about-page">
      <SiteHeader currentPath="/about" />
      <main className="about-main">
        <section className="about-intro" data-node-id="139:655">
          <div className="about-intro__inner">
            <div className="about-intro__copy">
              <p className="about-intro__text">{introText}</p>
            </div>
          </div>
        </section>

        <section className="about-image-block about-image-block--wide" data-node-id="139:661">
          <div className="about-image-block__inner about-image-block__inner--wide">
            <div className="about-image about-image--wide">
              <img src={aboutWideImage} alt="" />
            </div>
          </div>
        </section>

        <section className="about-story" data-node-id="330:428">
          <div className="about-story__inner">
            <div className="about-story__lead">
              <h1 className="about-story__title">{sectionTitle}</h1>
              <div className="about-story__logo">
                <img src={siteLogo} alt="Uni-Share" width={146} height={48} />
              </div>
            </div>
            <div className="about-story__columns">
              <p className="about-story__text about-story__text--small">{firstColumnText}</p>
              <div className="about-story__column">
                <p className="about-story__text about-story__text--small about-story__text--stacked-small">
                  {secondColumnText}
                </p>
                <p className="about-story__text about-story__text--small about-story__text--blank" aria-hidden="true">
                  {"\u200B"}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-image-block about-image-block--medium" data-node-id="139:611">
          <div className="about-image-block__inner about-image-block__inner--medium">
            <div className="about-image about-image--medium">
              <img src={aboutMediumImage} alt="" />
            </div>
          </div>
        </section>

        <section className="about-image-block about-image-block--wide" data-node-id="139:681">
          <div className="about-image-block__inner about-image-block__inner--wide">
            <div className="about-image about-image--wide">
              <img src={aboutClosingImage} alt="" />
            </div>
          </div>
        </section>

        <section className="about-closing" data-node-id="139:691">
          <div className="about-closing__inner">
            <p className="about-story__text about-story__text--fixed">{thirdColumnText}</p>
            <div className="about-story__column">
              <p className="about-story__text about-story__text--stacked">{fourthColumnText}</p>
              <p className="about-story__text about-story__text--blank" aria-hidden="true">
                {"\u200B"}
              </p>
            </div>
          </div>
        </section>

        <NewsBlock />
      </main>
      <SiteFooter />
    </div>
  );
}
