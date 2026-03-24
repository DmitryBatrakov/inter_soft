"use client";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
};

export function AnimatedButton({ children, onClick, type = "button", className }: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`group flex items-center justify-center text-sm font-light px-3 py-2 rounded-sm uppercase relative overflow-hidden border-3 border-primary bg-primary text-primary-foreground transition-transform duration-200 ease-in-out hover:text-(--btn-hover-text) active:scale-97 active:text-white font-heading active:scale-95 ${className}`}
        >
            <span className="relative z-20">{children}</span>
            <span className="absolute left-0 top-0 h-full w-0 group-hover:w-1/2 transition-[width] duration-300 ease-in-out z-10 bg-(--btn-hover-fill)" />
            <span className="absolute right-0 top-0 h-full w-0 group-hover:w-1/2 transition-[width] duration-300 ease-in-out z-10 bg-(--btn-hover-fill)" />
        </button>
    );
}