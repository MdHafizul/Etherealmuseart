import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: "span" | "h1" | "h2" | "p";
}

export function TypingAnimation({
  children,
  className,
  duration = 80,
  delay = 0,
  as: Component = "h1",
}: TypingAnimationProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    setDisplayed("");
    let i = 0;
    const chars = children.split("");
    const interval = setInterval(() => {
      setDisplayed(chars.slice(0, i + 1).join(""));
      i++;
      if (i >= chars.length) clearInterval(interval);
    }, duration);
    return () => clearInterval(interval);
  }, [children, duration, started]);

  return (
    <Component className={cn("whitespace-pre-wrap", className)}>
      {displayed}
      {displayed.length < children.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="text-gold"
        >
          |
        </motion.span>
      )}
    </Component>
  );
}
