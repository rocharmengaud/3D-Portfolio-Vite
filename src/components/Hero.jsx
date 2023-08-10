import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="sm:h-80 violet-gradient w-1 h-40" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915eff]">Roch</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a web developer, front end specialist, looking for a company with a work-study program.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      {/* MOUSE WITH SCROLL DOWN ANIMATION USING FRAMER MOTION*/}
      <div className="xs:bottom-10 bottom-32 absolute flex items-center justify-center w-full">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="bg-secondary w-3 h-3 mb-1 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
