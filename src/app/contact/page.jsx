'use client'

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactPage = () => {

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const text = 'Dites Bonjour'

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        },
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* Text container */}
        <div className='h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center lg:text-6xl md:text-3xl max-sm:text-2xl'>
          <div>
            {text.split('').map((letter,index) => (
              <motion.span 
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* Form container */}
        <form 
          onSubmit={sendEmail}
          ref={form} 
          className='h-1/2 md:h-full max-sm:h-full lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-5 justify-center p-24 mb-8'
        >
          <span>Mr Alex Balomog,</span>
          <textarea 
            rows={6} 
            className='bg-transparent border-b-2 border-b-black outline-none resize-none'
            name='message'
          />
          <span>Mon adresse email :</span>
          <input 
            type="text" 
            className='bg-transparent border-b-2 border-b-black outline-none'
            name='user_email'
          />
          <span>Cordialement.</span>
          <button className='bg-purple-200 rounded font-semibold text-gray-600 p-4'>
            Envoyer
          </button>
          {success && <span className='text-green-600 font-semibold'>Votre message a bien été envoyé!</span>}
          {error && <span className='text-red-600 font-semibold'>Oups, un problème est survenu!</span>}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;



