import React from "react";
import "./assets/Paper.scss";

export const Paper: React.FC<PaperProps> = (
    {showHoverEffect, onClick, children}) => {
    const className = () => {
        return showHoverEffect ? "muncher-paper muncher-paper-hover" : "muncher-paper";
    }
    return (
        <section className={className()} onClick={onClick}>
            {children}
        </section>
    );
};

export interface PaperProps {
    showHoverEffect?: boolean;
    onClick?: () => void;
}
