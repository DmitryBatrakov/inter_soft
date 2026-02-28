"use client";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
};

export function AnimatedButton({ children, onClick, type = "button" }: ButtonProps) {
    return (
        <button type={type} onClick={onClick} className="animated-split-btn font-(--russo-one)">
            <span>{children}</span>
        </button>
    );
}