"use client";

import { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

type OutlinedTextProps = {
    children: ReactNode;
    className?: string;
    /** Цвет контура (stroke). Можно var(--color) или hex. */
    strokeColor?: string;
    /** Цвет заливки нормального текста. */
    fillColor?: string;
    /** Толщина контура в px. */
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
              !fillColor && "text-transparent", // дефолт — прозрачная заливка
              className,
          )}
          style={
              {
                  "--sw": `${strokeWidth}px`,
                  "--sc": strokeColor,
                  ...(fillColor && { color: fillColor }), // только если явно передан
              } as CSSProperties
          }
      >
          {children}
      </span>
  );
}
