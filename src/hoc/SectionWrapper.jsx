import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

// This Higher Order Component is used as a layout for all the important components AND to auto-scroll when clicking things
// We get the idName here from export defaults at the end of files. example : export default SectionWrapper(About, 'about')
const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        // this variants animates the section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        // true, to have animations repeat when you scroll back to them
        // amount is the duration in seconds
        viewport={{ once: true, amount: 0.25 }}
        // this classname lays out each section with some padding, centering and limiting width
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* the hash-span is a custom classname in index.css */}
        {/* this span makes the auto-scroll work */}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
