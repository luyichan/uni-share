"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LoadingScreen } from "@/components/loading-screen";

function shouldShowLoading(link: HTMLAnchorElement) {
  const target = link.getAttribute("target");

  if (target && target !== "_self") {
    return false;
  }

  const href = link.getAttribute("href");

  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return false;
  }

  const url = new URL(href, window.location.href);

  if (url.origin !== window.location.origin) {
    return false;
  }

  return url.pathname !== window.location.pathname || url.search !== window.location.search;
}

export function RouteLoading() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const link = (event.target as Element | null)?.closest("a");

      if (link instanceof HTMLAnchorElement && shouldShowLoading(link)) {
        setIsVisible(true);
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const timer = window.setTimeout(() => setIsVisible(false), 560);

    return () => window.clearTimeout(timer);
  }, [isVisible, pathname]);

  if (!isVisible) {
    return null;
  }

  return <LoadingScreen className="loading-screen--overlay" />;
}
