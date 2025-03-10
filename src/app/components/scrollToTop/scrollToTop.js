"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]); // Runs when path changes

    return null;
}

export default ScrollToTop;
