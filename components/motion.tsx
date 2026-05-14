"use client";

/* eslint-disable @next/next/no-img-element */
import { Children, cloneElement, isValidElement, useEffect, useRef, useState } from "react";
import type { CSSProperties, ElementType, HTMLAttributes, ImgHTMLAttributes, ReactElement, ReactNode } from "react";
import { usePathname } from "next/navigation";

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: "div" | "section" | "span" | "header" | "footer";
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  style?: CSSProperties;
  y?: number;
};

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || isVisible) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      const frame = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible]);

  return { ref, isVisible };
}

export function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  duration = 0.86,
  style,
  y = 20,
  ...attributes
}: RevealProps) {
  const { ref, isVisible } = useInView<HTMLElement>();
  const Component = as as ElementType;

  return (
    <Component
      ref={ref}
      {...attributes}
      className={["motion-reveal", isVisible ? "is-visible" : "", className]
        .filter(Boolean)
        .join(" ")}
      style={
        {
          ...style,
          "--motion-delay": `${delay}ms`,
          "--motion-duration": `${duration}s`,
          "--motion-y": `${y}px`,
        } as CSSProperties
      }
    >
      {children}
    </Component>
  );
}

export function StaggerContainer({
  children,
  className,
  delay = 0,
  step = 88,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  step?: number;
}) {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={["motion-stagger", isVisible ? "is-visible" : "", className]
        .filter(Boolean)
        .join(" ")}
    >
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) {
          return child;
        }

        const element = child as ReactElement<{ style?: CSSProperties }>;

        return cloneElement(element, {
          style: {
            ...element.props.style,
            "--motion-delay": `${delay + index * step}ms`,
          } as CSSProperties,
        });
      })}
    </div>
  );
}

export function AnimatedImage({
  className,
  alt = "",
  revealClassName,
  delay: _delay,
  duration: _duration,
  ...props
}: ImgHTMLAttributes<HTMLImageElement> & {
  revealClassName?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <span className={["animated-image", revealClassName].filter(Boolean).join(" ")}>
      <span className="animated-image__mask">
        <img className={className} alt={alt} {...props} />
      </span>
    </span>
  );
}

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
}
