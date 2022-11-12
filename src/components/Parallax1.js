import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useLayoutEffect, useRef, useState } from "react";

export default function ParallaxItem({ children }) {
  const { scrollY } = useScroll();
  const ref = useRef();
  const [offsetTop, setOffsetTop] = useState(0);

  useLayoutEffect(() => {
    if (!ref.current) return null;
    setOffsetTop(ref.current.offsetTop);
  }, [ref]);

  const y = useSpring(
    useTransform(scrollY, [offsetTop - 500, offsetTop + 500], ["0%", "20%"])
  );

  return (
    <div>
      <motion.div ref={ref} initial={{ y: 0 }} style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
