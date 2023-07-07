import { useEffect, useState, useRef } from "react";

export function onScreen(ref: any) {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef<any>();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) =>
      setIsOnScreen(entry.isIntersecting)
    );
  }, []);

  useEffect(() => {
    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}
