import { useEffect, useState, useCallback, useMemo } from "react";

const MOBILE_QUERY = "(max-width: 640px)";
const TABLET_QUERY = "(min-width: 641px) and (max-width: 1024px)";

export default function useMediaQuery() {
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop" | null>(
    null
  );
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  const checkDevice = useCallback(() => {
    if (window.matchMedia(MOBILE_QUERY).matches) {
      setDevice("mobile");
    } else if (window.matchMedia(TABLET_QUERY).matches) {
      setDevice("tablet");
    } else {
      setDevice("desktop");
    }
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const debouncedCheckDevice = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(checkDevice, 200);
    };

    checkDevice();
    window.addEventListener("resize", debouncedCheckDevice);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener("resize", debouncedCheckDevice);
    };
  }, [checkDevice]);

  return useMemo(
    () => ({
      device,
      width: dimensions?.width,
      height: dimensions?.height,
      isMobile: device === "mobile",
      isTablet: device === "tablet",
      isDesktop: device === "desktop",
    }),
    [device, dimensions]
  );
}