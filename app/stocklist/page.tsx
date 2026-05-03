/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";
import { NewsBlock, SiteFooter, SiteHeader } from "@/components/site-shell";

const siteLogo = "/brand/unishare-logo.svg";
const stocklistImage = "/site-assets/stocklist/image.png";

type StocklistItem = {
  name: ReactNode;
  handle?: string;
  href?: string;
};

const leftColumn: StocklistItem[] = [
  {
    name: "typicallife.curation",
    handle: "@typicallife.curation",
    href: "https://www.instagram.com/typicallife.curation/",
  },
  {
    name: "huganbooks",
    handle: "@huganbooks",
    href: "https://www.instagram.com/huganbooks/",
  },
  {
    name: "4orrestgump",
    handle: "@444orrestgumpppp",
    href: "https://www.instagram.com/444orrestgumpppp/",
  },
  {
    name: "For.U.seoul",
    handle: "@for.u.seoul",
    href: "https://www.instagram.com/for.u.seoul/",
  },
  {
    name: "CUCO",
    handle: "@cuco.gogo",
    href: "https://www.instagram.com/cuco.gogo/",
  },
  {
    name: (
      <>
        <span className="stocklist-entry__name--jp">共有</span>
        <span>KYOUYUU</span>
      </>
    ),
    handle: "@kyo_yuu_",
    href: "https://www.instagram.com/kyou_yuu_/",
  },
  {
    name: "TLW",
    handle: "@treelikeswater",
    href: "https://www.instagram.com/treelikeswater/",
  },
  {
    name: "내용성",
    handle: "@ndeemsung",
    href: "https://www.instagram.com/ndeemsung/",
  },
  {
    name: "pisache",
    handle: "@pisache.co.kr",
    href: "https://www.instagram.com/pisache.co.kr/",
  },
  {
    name: <span className="stocklist-entry__name--jp">渋谷藝術</span>,
    handle: "@428art_jinnan_g",
    href: "https://www.instagram.com/428art_jinnan_g/",
  },
  {
    name: "Dotopda",
    handle: "@_dotopda",
    href: "https://www.instagram.com/_dotopda/",
  },
  {
    name: "magnif",
    handle: "@magnif_zinebocho",
    href: "https://www.instagram.com/magnif_zinebocho/",
  },
  {
    name: "JANNU-2",
    handle: "@jannu2_official",
    href: "https://www.instagram.com/jannu2_official/",
  },
  {
    name: "vase",
    handle: "@vase_tokyo",
    href: "https://www.instagram.com/vase_tokyo/",
  },
];

const rightColumn: StocklistItem[] = [
  {
    name: "only free paper",
    handle: "@only_free_paper",
    href: "https://www.instagram.com/only_free_paper/",
  },
  {
    name: "garden730",
    handle: "@garden730",
    href: "https://www.instagram.com/garden730/",
  },
  {
    name: "uplink",
    handle: "@uplink_film",
    href: "https://www.instagram.com/uplink_film/",
  },
  {
    name: <span className="stocklist-entry__name--jp">百年</span>,
    handle: "@100hyakunen",
    href: "https://www.instagram.com/100hyakunen/",
  },
  {
    name: "chapter1.",
    handle: "@chapter1_gallery",
    href: "https://www.instagram.com/chapter1_gallery/",
  },
  {
    name: "BEAMS JAPAN",
    handle: "@beams_japan",
    href: "https://www.instagram.com/beams_japan/",
  },
  {
    name: "THE FOUR-EYED",
    handle: "@the_foureyed",
    href: "https://www.instagram.com/the_foureyed/",
  },
  {
    name: "neova",
    handle: "@_neova_",
    href: "https://www.instagram.com/_neova_/",
  },
  {
    name: (
      <>
        <span>WEGO VINTAGE </span>
        <span className="stocklist-entry__name--jp">下北沢店</span>
      </>
    ),
    handle: "@wego_shimokita",
    href: "https://www.instagram.com/wego_shimokita/",
  },
  {
    name: "NEW YORK JOE EXCHANGE",
    handle: "@newyorkjoeexchange",
    href: "https://www.instagram.com/newyorkjoeexchange/",
  },
  {
    name: "dugonic",
    handle: "@dugonic_clothing",
    href: "https://www.instagram.com/dugonic_clothing/",
  },
  {
    name: "stacks bookstore",
    handle: "@stacks_bookstore",
    href: "https://www.instagram.com/stacks_bookstore/",
  },
  {
    name: "k's cinema",
  },
  {
    name: <span className="stocklist-entry__name--jp">新宿武蔵野館</span>,
  },
];

function StocklistColumn({ items }: { items: StocklistItem[] }) {
  return (
    <div className="stocklist-column">
      {items.map((item, index) => (
        <div key={`${item.handle ?? "entry"}-${index}`} className="stocklist-entry">
          <p className="stocklist-entry__name">{item.name}</p>
          {item.handle && item.href ? (
            <a className="stocklist-entry__handle" href={item.href} target="_blank" rel="noreferrer">
              {item.handle}
            </a>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default function StocklistPage() {
  return (
    <div className="stocklist-page">
      <SiteHeader currentPath="/stocklist" />
      <main className="stocklist-main">
        <section className="stocklist-hero" data-node-id="110:216">
          <div className="stocklist-hero__inner">
            <div className="stocklist-hero__logo">
              <img src={siteLogo} alt="Uni-Share" width={146} height={48} />
            </div>
            <div className="stocklist-hero__copy">
              <h1 className="stocklist-hero__title">STOCKLIST</h1>
              <p className="stocklist-hero__subtitle">ストックリスト</p>
            </div>
          </div>
        </section>

        <section className="stocklist-listings" data-node-id="110:217">
          <div className="stocklist-listings__inner">
            <div className="stocklist-listings__columns">
              <StocklistColumn items={leftColumn} />
              <StocklistColumn items={rightColumn} />
            </div>
          </div>
        </section>

        <section className="stocklist-image-block" data-node-id="110:218">
          <div className="stocklist-image-block__image" data-node-id="I110:218;38:1348">
            <img src={stocklistImage} alt="" width={1392} height={773} />
          </div>
        </section>

        <NewsBlock />
      </main>
      <SiteFooter />
    </div>
  );
}
