import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';
import { Section } from './Section';

const Contact = () => {
  const formRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && message) {
      e.target.submit();
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <Section idName="contact">
      <div className="xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden">
        {/* flex 0.75 means taking 3/4 of the screen */}
        <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <form
            ref={formRef}
            method="POST"
            action="https://getform.io/f/62705f5e-1a70-4374-b0bb-bbdf52735b5e"
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 mt-12"
          >
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your name</span>
              <input
                type="text"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="What is your name ?"
                className="bg-tertiary placeholder:text-secondary px-6 py-4 font-medium text-white border-none rounded-lg outline-none"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your email</span>
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="What is your email ?"
                className="bg-tertiary placeholder:text-secondary px-6 py-4 font-medium text-white border-none rounded-lg outline-none"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your message</span>
              <textarea
                rows="6"
                name="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask me anything ..."
                className="bg-tertiary placeholder:text-secondary px-6 py-4 font-medium text-white border-none rounded-lg outline-none"
              />
            </label>
            <button type="submit" className="bg-tertiary w-fit shadow-primary rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none">
              Send
            </button>
          </form>
        </motion.div>

        {/* flex 1 because the earth 3d Model and the contact form takes up 1 space in the project each */}
        <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <EarthCanvas />
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
