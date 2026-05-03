/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const siteLogo = "/brand/unishare-logo-nav.png";

const primaryLinks = [
  { href: "/about", label: "About" },
  { href: "/collection", label: "Collection" },
  { href: "/stocklist", label: "Stocklist" },
];

const secondaryLinks = [
  { href: "https://www.instagram.com/uni_share/", label: "Instagram" },
  { href: "https://unisharesite.thebase.in", label: "BASE" },
];

export function SiteHeader({ currentPath }: { currentPath: string }) {
  return (
    <header className="site-header">
      <div className="shell-wide site-header__inner">
        <Link href="/" className="site-logo" aria-label="Uni-Share home">
          <img src={siteLogo} alt="Uni-Share" width={146} height={48} />
        </Link>
        <div className="site-nav">
          <nav className="site-nav__group" aria-label="Primary navigation">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "site-nav__link",
                  currentPath === link.href ? "is-active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
          </nav>
          <nav className="site-nav__group" aria-label="Social navigation">
            {secondaryLinks.map((link) => (
              <a
                key={link.href}
                className="site-nav__link"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export function NewsBlock({ className }: { className?: string }) {
  return (
    <section
      className={["site-news", className].filter(Boolean).join(" ")}
      data-node-id="41:73"
      data-name="News Block"
    >
      <div className="site-news__inner" data-node-id="2009:453">
        <div className="site-news__content" data-node-id="2009:454">
          <div className="site-news__copy" data-node-id="2009:457">
            <p className="site-news__title" data-node-id="2009:458">
              今年もUni-Shareでは、新規メンバーを募集します。
            </p>
            <p className="site-news__text" data-node-id="2009:459">
              ファッションが好きな人、雑誌づくりに興味がある人、何か新しいことを始めてみたい人も大歓迎です。
              <br />
              {" まずは気軽に新歓に遊びに来てください。"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const footerLinks = [...primaryLinks, ...secondaryLinks];

  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <nav className="site-footer__links" aria-label="Footer navigation">
          {footerLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link key={link.href} href={link.href}>
                {link.label.toUpperCase()}
              </Link>
            ) : (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label.toUpperCase()}
              </a>
            ),
          )}
        </nav>
        <div className="site-footer__logo-row">
          <div className="site-footer__logo">
            <img src={siteLogo} alt="Uni-Share" width={146} height={48} />
          </div>
        </div>
      </div>
    </footer>
  );
}
