"use client";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface Props {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  stagger = false,
  delay = 0,
}: Props) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`${stagger ? "anim-stagger" : "anim-hidden"} ${
        isVisible ? "anim-visible" : ""
      } ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
