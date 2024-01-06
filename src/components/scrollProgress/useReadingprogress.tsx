"use client";
import { useEffect, useState } from "react";

const useReadingprogress = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const scrollProgress =
                document.documentElement.scrollTop /
                (document.documentElement.scrollHeight -
                    document.documentElement.clientHeight);
            setCompletion(scrollProgress * 100);
        };
        window.addEventListener("scroll", updateScrollCompletion);

        return () => {
            window.removeEventListener("scroll", updateScrollCompletion);
        };
    }, []);

    return completion;
};

export default useReadingprogress;
