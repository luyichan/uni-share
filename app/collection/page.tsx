/* eslint-disable @next/next/no-img-element */
import { NewsBlock, SiteFooter, SiteHeader } from "@/components/site-shell";

const thumbnails = [
  { src: "/site-assets/collection/unishare-vol.29-press8-1.png", height: 149.643 },
  { src: "/site-assets/collection/unishare-vol.29-press4.png", height: 149.643 },
  { src: "/site-assets/collection/unishare-vol.29-press11.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press6.png", height: 149.643 },
  { src: "/site-assets/collection/unishare-vol.29-press7.png", height: 149.643 },
  { src: "/site-assets/collection/unishare-vol.29-press9.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press10.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press5.png", height: 149.643 },
  { src: "/site-assets/collection/unishare-vol.29-press12.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press13.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press14.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press15.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press19.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press17.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press18.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press16.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press21.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press32.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press22.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press23.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press24.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press25.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press27.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press26.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press28.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press29.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press31.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press30.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press33.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press20.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press35.png", height: 150 },
  { src: "/site-assets/collection/unishare-vol.29-press34.png", height: 150 },
];

const collectionVideo = "/site-assets/collection/vol-30-shinkan.mp4";

export default function CollectionPage() {
  return (
    <div className="collection-page">
      <SiteHeader currentPath="/collection" />
      <main className="collection-main">
        <section className="collection-wall" data-node-id="110:141">
          <div className="collection-wall__inner">
            <div className="collection-wall__grid">
              {thumbnails.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className="collection-wall__item"
                  style={{ aspectRatio: `212 / ${image.height}` }}
                >
                  <img src={image.src} alt="" />
                </div>
              ))}
            </div>
            <div className="collection-video-block" data-node-id="597:815" data-name="Image Block5">
              <video
                className="collection-video-block__video"
                src={collectionVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Uni-Share collection video"
              />
            </div>
          </div>
        </section>

        <NewsBlock />
      </main>
      <SiteFooter />
    </div>
  );
}
