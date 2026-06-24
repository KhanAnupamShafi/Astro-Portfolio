import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const SESSION_KEY = "portfolio-preloader-complete";

type PagePreloaderProps = {
  brandLabel?: string;
};

const hasCompletedPreloader = (): boolean => {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "true";
  } catch {
    return false;
  }
};

const PagePreloader = ({ brandLabel = "" }: PagePreloaderProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(() => !hasCompletedPreloader());
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      document.documentElement.classList.remove("is-preloading");
      return;
    }

    document.documentElement.classList.add("is-preloading");

    let intervalId: ReturnType<typeof setInterval> | undefined;
    let exitTimeoutId: ReturnType<typeof setTimeout> | undefined;
    let readyTimeoutId: ReturnType<typeof setTimeout> | undefined;

    const finish = () => {
      setProgress(100);
      sessionStorage.setItem(SESSION_KEY, "true");

      exitTimeoutId = setTimeout(
        () => {
          setIsVisible(false);
          document.documentElement.classList.remove("is-preloading");
        },
        shouldReduceMotion ? 0 : 400,
      );
    };

    intervalId = setInterval(() => {
      setProgress((previousProgress) => {
        if (previousProgress >= 92) {
          return previousProgress;
        }

        const step =
          previousProgress < 60 ? 8 + Math.random() * 10 : 2 + Math.random() * 5;

        return Math.min(92, previousProgress + step);
      });
    }, 85);

    const onLoad = () => {
      readyTimeoutId = setTimeout(finish, shouldReduceMotion ? 0 : 180);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }

      if (exitTimeoutId) {
        clearTimeout(exitTimeoutId);
      }

      if (readyTimeoutId) {
        clearTimeout(readyTimeoutId);
      }

      window.removeEventListener("load", onLoad);
    };
  }, [isVisible, shouldReduceMotion]);

  if (!isVisible) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="page-preloader"
        role="status"
        aria-live="polite"
        aria-label="Loading page"
        initial={shouldReduceMotion ? false : { opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={
          shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: "-100%" }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0.15 }
            : { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
        }
      >
        {brandLabel ? (
          <p className="page-preloader__brand font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-text-muted">
            {brandLabel}
          </p>
        ) : null}

        <div className="page-preloader__counter">
          <motion.span
            key={Math.round(progress)}
            className="font-mono text-[clamp(3rem,12vw,5.5rem)] font-medium leading-none tracking-[-0.04em] text-text-primary tabular-nums"
            initial={shouldReduceMotion ? false : { opacity: 0.4, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {Math.round(progress)}
          </motion.span>
        </div>

        <div className="page-preloader__track" aria-hidden="true">
          <motion.div
            className="page-preloader__bar bg-accent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PagePreloader;
