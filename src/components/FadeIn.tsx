"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

export default function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 600,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const slideClass = {
    up: "slide-in-from-bottom-5",
    down: "slide-in-from-top-5",
    left: "slide-in-from-right-5",
    right: "slide-in-from-left-5",
    none: "",
  }[direction];

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms`, animationDuration: `${duration}ms` }}
      className={cn(
        "fill-mode-both",
        visible ? `animate-in fade-in ${slideClass}` : "opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}
