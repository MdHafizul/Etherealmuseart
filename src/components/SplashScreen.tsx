import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TypingAnimation } from "@/components/magicui/typing-animation";

const text = "etherealmuseart";

export default function SplashScreen() {
  const [phase, setPhase] = useState<"typing" | "holding" | "exiting" | "done">("typing");

  // Total typing time: text length * 80ms per char + 200ms delay ≈ 1.2s
  // After typing done + 600ms hold → fade out
  useEffect(() => {
    const totalTypingMs = 200 + text.length * 80;
    const holdTimer = setTimeout(() => setPhase("holding"), totalTypingMs + 600);
    const exitTimer = setTimeout(() => setPhase("exiting"), totalTypingMs + 1400);
    const doneTimer = setTimeout(() => setPhase("done"), totalTypingMs + 2000);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <AnimatePresence>
      {phase !== "done" && (
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
      )}
    </AnimatePresence>
  );
}
