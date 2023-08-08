import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formLoading, setFormLoading] = useState(false);

  const handleChange = (event) => {};
  const handleSubmit = (event) => {};

  return (
    <div className="xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden">
      {/* flex 0.75 means taking 3/4 of the screen */}
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8 mt-12">
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What is your name ?"
              className="bg-tertiary placeholder:text-secondary px-6 py-4 font-medium text-white border-none rounded-lg outline-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What is your email ?"
              className="bg-tertiary placeholder:text-secondary px-6 py-4 font-medium text-white border-none rounded-lg outline-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Feel free to ask me anything !"
              className="bg-tertiary placeholder:text-secondary px-6 py-4 font-medium text-white border-none rounded-lg outline-none"
            />
          </label>
          <button type="submit" className="bg-tertiary w-fit shadow-primary rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none">
            {formLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      {/* flex 1 because the earth 3d Model and the contact form takes up 1 space in the project each */}
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
