import { PRELOADER_SESSION_KEY } from "@/lib/motion";
import { lazy, Suspense, useState } from "react";

const PagePreloader = lazy(() => import("@/components/layout/PagePreloader"));

type PreloaderGateProps = {
  brandLabel?: string;
};

const shouldLoadPreloader = (): boolean => {
  try {
    return sessionStorage.getItem(PRELOADER_SESSION_KEY) !== "true";
  } catch {
    return true;
  }
};

const PreloaderGate = ({ brandLabel = "" }: PreloaderGateProps) => {
  const [isPreloaderNeeded] = useState(shouldLoadPreloader);

  if (!isPreloaderNeeded) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <PagePreloader brandLabel={brandLabel} />
    </Suspense>
  );
};

export default PreloaderGate;
