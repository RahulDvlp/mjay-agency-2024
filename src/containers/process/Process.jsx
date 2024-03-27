import React, { useState, useRef, useLayoutEffect } from "react";
import "./process.css";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ProcessData } from "../../components";

const Process = () => {
  const scrollRef = useRef(null);
  const ghostRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  const { scrollYProgress } = useScroll({ target: scrollRef });

  const transformMobile = useTransform(scrollYProgress, [0, 1], [40, -3000]);
  const transformDesktop = useTransform(scrollYProgress, [0, 1], [40, -4700]);

  const physics = { stiffness: 100, damping: 30, restDelta: 0.001 };

  const springMobile = useSpring(transformMobile, physics);
  const springDesktop = useSpring(transformDesktop, physics);

  return (
    <div className="process ">
      <div className="title" data-aos="fade-right">
        <h2>Process</h2>
        <div className="bar"></div>
      </div>
      <div ref={scrollRef} className="hrScroll ">
        <div className="purpleBox ">
          <motion.div
            style={{
              x: springDesktop,
            }}
            className="pCards_desktop"
          >
            <ProcessData />
          </motion.div>
          <motion.div
            style={{
              x: springMobile,
            }}
            className="pCards_mobile"
          >
            <ProcessData />
          </motion.div>
          <div
            ref={ghostRef}
            style={{ height: scrollRange }}
            className="ghost"
          />
        </div>
      </div>
    </div>
  );
};

export default Process;
