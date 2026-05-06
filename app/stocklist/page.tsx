/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";
import { NewsBlock, SiteFooter, SiteHeader } from "@/components/site-shell";

const siteLogo = "/brand/unishare-logo.svg";
const stocklistImage = "/site-assets/stocklist/stocklist-new.png";

type StocklistItem = {
  name: ReactNode;
  handle?: string;
  href?: string;
  jp?: boolean;
};

const koreaRows: StocklistItem[][] = [
  [
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
      name: "CUCO",
      handle: "@cuco.gogo",
      href: "https://www.instagram.com/cuco.gogo/",
    },
    {
      name: "For.U.seoul",
      handle: "@for.u.seoul",
      href: "https://www.instagram.com/for.u.seoul/",
    },
  ],
  [
    {
      name: "共有",
      handle: "@kyou_yuu_",
      href: "https://www.instagram.com/kyou_yuu_/",
      jp: true,
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
  ],
];

const japanRows: StocklistItem[][] = [
  [
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
    {
      name: "渋谷藝術",
      handle: "@428art_jinnan_g",
      href: "https://www.instagram.com/428art_jinnan_g/",
      jp: true,
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
  ],
  [
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
      name: "百年",
      handle: "@100hyakunen",
      href: "https://www.instagram.com/100hyakunen/",
      jp: true,
    },
    {
      name: "BEAMS JAPAN",
      handle: "@beams_japan",
      href: "https://www.instagram.com/beams_japan/",
    },
    {
      name: "chapter1.",
      handle: "@chapter1_gallery",
      href: "https://www.instagram.com/chapter1_gallery/",
    },
  ],
  [
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
  ],
  [
    {
      name: "stacks bookstore",
      handle: "@stacks_bookstore",
      href: "https://www.instagram.com/stacks_bookstore/",
    },
    {
      name: "k's cinema",
    },
    {
      name: "新宿武蔵野館",
      jp: true,
    },
    {
      name: "only free paper",
      handle: "@only_free_paper",
      href: "https://www.instagram.com/only_free_paper/",
    },
    {
      name: "THE FOUR-EYED",
      handle: "@the_foureyed",
      href: "https://www.instagram.com/the_foureyed/",
    },
  ],
];

function StocklistEntry({ item }: { item: StocklistItem }) {
  return (
    <div className="stocklist-entry">
      <p className={["stocklist-entry__name", item.jp ? "stocklist-entry__name--jp" : ""].filter(Boolean).join(" ")}>
        {item.name}
      </p>
      {item.handle && item.href ? (
        <a className="stocklist-entry__handle" href={item.href} target="_blank" rel="noreferrer">
          {item.handle}
        </a>
      ) : null}
    </div>
  );
}

function StocklistGroup({ title, rows }: { title: string; rows: StocklistItem[][] }) {
  return (
    <section className="stocklist-group" data-name={`${title} shoplist`}>
      <h2 className="stocklist-group__title">{title}</h2>
      <div className="stocklist-group__rows">
        {rows.map((row, rowIndex) => (
          <div className="stocklist-group__row" key={`${title}-${rowIndex}`}>
            {row.map((item, index) => (
              <StocklistEntry item={item} key={`${item.handle ?? title}-${rowIndex}-${index}`} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function StocklistPage() {
  return (
    <div className="stocklist-page" data-node-id="110:214">
      <SiteHeader currentPath="/stocklist" />
      <main className="stocklist-main">
        <section className="stocklist-hero" data-node-id="110:216">
          <div className="stocklist-hero__logo">
            <img src={siteLogo} alt="Uni-Share" width={146} height={48} />
          </div>
          <div className="stocklist-hero__text">
            <h1 className="stocklist-hero__title">STOCKLIST</h1>
          </div>
        </section>

        <div className="stocklist-directory">
          <StocklistGroup title="KOREA" rows={koreaRows} />
          <StocklistGroup title="JAPAN" rows={japanRows} />
        </div>

        <NewsBlock className="stocklist-news" />

        <section className="stocklist-image-block" data-node-id="622:576" data-name="Image Block 2">
          <div className="stocklist-image-block__image" data-node-id="I622:576;38:1348">
            <img src={stocklistImage} alt="" width={1178} height={654} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
