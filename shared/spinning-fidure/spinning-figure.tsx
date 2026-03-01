import { cn } from "@/lib/utils";

type SpinningFigureProps = {
    className?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    border?: string;
    rounded?: string;
    w?: string;
    h?: string;
};

export function SpinningFigure({
    className,
    top,
    left,
    right,
    bottom,
    border,
    rounded,
    w,
    h,
}: SpinningFigureProps) {
    return (
        <span
            className={cn(
                "absolute pointer-events-none rotate-45 animate-spin animation-duration-[25s] border border-secondary z-0",
                top,
                left,
                right,
                bottom,
                border,
                rounded,
                w,
                h,
                className
            )}
        />
    );
}
