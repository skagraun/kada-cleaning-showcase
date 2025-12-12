import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import type { SectionName } from "./types";
import { useActiveSectionContext } from "@/context/active-section-context";

export function useSectionInView(sectionName: SectionName, threshold = 0.3) {
  const { ref, inView } = useInView({
    threshold,
    rootMargin: "-80px 0px -40% 0px",
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
}
