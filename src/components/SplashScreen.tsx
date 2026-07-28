import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TypingAnimation } from "@/components/magicui/typing-animation";

const text = "etherealmuseart";

export default function SplashScreen() {
  const [phase, setPhase] = useState<"typing" | "exiting" | "done">("typing");
  const startedAt = useRef(Date.now());

  // Robust timing — use a single ref to track elapsed time
  useEffect(() => {
    const totalTypingMs = 200 + text.length * 80; // ~1.4s

    const check = setInterval(() => {
      const elapsed = Date.now() - startedAt.current;

      if (elapsed >= totalTypingMs + 2000) {
        // Total animation complete — 2s after typing finishes
        setPhase("done");
        clearInterval(check);
      } else if (elapsed >= totalTypingMs + 1400) {
        // Start fading out 1.4s after typing done
        setPhase("exiting");
      }
    }, 100);

    return () => clearInterval(check);
  }, []);

  // Safety fallback — force done after 5 seconds no matter what
  useEffect(() => {
    const safety = setTimeout(() => setPhase("done"), 5000);
    return () => clearTimeout(safety);
  }, []);

  if (phase === "done") return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === "exiting" ? 0 : 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[200] bg-cream flex items-center justify-center"
      >
        <TypingAnimation
          duration={80}
          delay={200}
          className="font-heading text-4xl md:text-7xl lg:text-8xl font-light text-navy tracking-wide"
        >
          {text}
        </TypingAnimation>
      </motion.div>
    </AnimatePresence>
  );
}
