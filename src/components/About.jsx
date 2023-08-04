import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      {/* 'direction', 'type', delay, duration of the animation */}
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="object-contain w-16 h-16" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn('', '', 0.5, 2)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30x]">
        I just graduated from{' '}
        <a
          href="https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react"
          className="hover:underline text-[#219ebc] cursor-pointer"
        >
          OpenClassRoom&apos;s front-end javascript react course&nbsp;
        </a>
        and I am now looking for a job.
      </motion.p>
      <div className="flex flex-wrap gap-10 mt-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
