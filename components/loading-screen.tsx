/* eslint-disable @next/next/no-img-element */
const siteLogo = "/brand/unishare-logo.svg";

export function LoadingScreen({ className = "" }: { className?: string }) {
  return (
    <div
      className={["loading-screen", className].filter(Boolean).join(" ")}
      role="status"
      aria-live="polite"
      aria-label="Loading Uni-Share"
    >
      <div className="loading-screen__mark" aria-hidden="true">
        <img src={siteLogo} alt="" width={146} height={48} />
      </div>
      <div className="loading-screen__indicator" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <p className="loading-screen__status">Loading</p>
    </div>
  );
}
