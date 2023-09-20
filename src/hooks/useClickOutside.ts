import { useEffect, RefObject } from "react";

type ClickOutsideCallback = () => void;

export const useClickOutside = (ref : RefObject<HTMLElement> , callback: ClickOutsideCallback) => {
    const handleClick = (e : any) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };
    useEffect(() => {
                document.addEventListener("mousedown", handleClick);
                return () => {
                    document.removeEventListener("mousedown", handleClick);
                };
            });
    }