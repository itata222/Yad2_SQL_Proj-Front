import { useEffect } from "react";

export const useClose = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) return;
            handler(event);
        };

        document.addEventListener("click", listener);
        document.addEventListener("ontouchstart", listener);

        return () => {
            document.removeEventListener("click", listener);
            document.removeEventListener("ontouchstart", listener);
        };
    }, []);
};