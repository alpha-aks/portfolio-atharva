import React, { useState, useEffect, useRef } from 'react';

const DUNE_GLYPHS = '0123456789ABCDEF∆ΨΩ§ØλµΞΣΘ_//><*&^%$#@!+=';

export default function ScrambleText({
  text = '',
  className = ''
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isDecrypting, setIsDecrypting] = useState(false);
  const animFrameRef = useRef(null);

  useEffect(() => {
    let iteration = 0;
    const targetText = text;
    // Fast millisecond execution: resolves in ~160-200ms total
    const maxIterations = 14;
    setIsDecrypting(true);

    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }

    let lastTime = performance.now();
    const interval = 12; // Fast 12ms scramble cycle

    const step = (now) => {
      if (now - lastTime >= interval) {
        lastTime = now;
        iteration += 1;

        const scrambled = targetText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            // Smooth fast cascade across the string
            const lockThreshold = (index / targetText.length) * 10;
            if (iteration > lockThreshold) {
              return targetText[index];
            }
            return DUNE_GLYPHS[Math.floor(Math.random() * DUNE_GLYPHS.length)];
          })
          .join('');

        setDisplayText(scrambled);

        if (iteration >= maxIterations) {
          setDisplayText(targetText);
          setIsDecrypting(false);
          return;
        }
      }

      animFrameRef.current = requestAnimationFrame(step);
    };

    animFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [text]);

  return (
    <span className={`scramble-text-wrapper ${className} ${isDecrypting ? 'decrypting' : ''}`}>
      <span className="scramble-content">{displayText}</span>
      {isDecrypting && <span className="scramble-caret" aria-hidden="true">_</span>}
    </span>
  );
}
