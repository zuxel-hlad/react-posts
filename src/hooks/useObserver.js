import {useRef, useEffect} from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef()
    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        const startObserve = (entries, observer) => {
            if (entries[0].isIntersecting && canLoad) {
                callback();
            }
        };
        observer.current = new IntersectionObserver(startObserve);
        observer.current.observe(ref.current);
    }, [isLoading]);
}