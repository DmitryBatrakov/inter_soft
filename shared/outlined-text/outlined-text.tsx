"use client";

import { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

type OutlinedTextProps = {
    children: ReactNode;
    className?: string;
    strokeColor?: string;
    fillColor?: string;
    strokeWidth?: number;
};

export function OutlinedText({
  children,
  className,
  strokeColor = "white",
  fillColor,
  strokeWidth = 2,
}: OutlinedTextProps) {
  return (
      <span
          className={cn(
              "[-webkit-text-stroke-width:var(--sw)] [-webkit-text-stroke-color:var(--sc)]",
              !fillColor && "text-transparent",
              className,
          )}
          style={
              {
                  "--sw": `${strokeWidth}px`,
                  "--sc": strokeColor,
                  ...(fillColor && { color: fillColor }),
              } as CSSProperties
          }
      >
          {children}
      </span>
  );
}
