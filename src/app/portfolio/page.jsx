'use client'

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';


const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Application météorologique",
    desc: "L’application comporte des fonctionnalités qui fournissent des informations sur le temps actuel et prévu, des prévisions météorologiques sur 10 jours,des précipitations prévues,de la qualité de l'air, direction du vent et bien plus encore.",
    img: "/weatherland.png",
    link: "https://weatherland.vercel.app/#/weather?lat=14.7380399&lon=-60.9645707",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Application e-commerce",
    desc: "L'application de vente en ligne shoppify vous permettra de faire vos achats en ligne, de conserver vos achats dans votre panier après vous etre préalablement identifié, de valider vos commandes et de payer de facon securisé via la plateforme stripe.",
    img: "/shoppyland.png",
    link: "https://shoppylandnext.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Application de gestion des tâches",
    desc: "L'application de gestion de tache vous aidera a planifier vos taches de facon simple afin de rester toujours organisé sur vos activités, peu importe leur nature. Ayant des problèmes avec les fonctions firebase en deploiement sur vercel, il est à noter qu'il sera preférable de cloner le projet depuis ma page github, puis d'executer successivement : <npm init> puis <npm run dev> et enfin <npm run fb-emulators>.",
    img: "/homeboard.png",
    link: "https://homeboard-woad.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "3D-Portfolio",
    desc: "Je vous présente un de mes portfolios en ligne, celui ci étant en 3D pour une immersion rare et différente de ce que vous avez l'habitude de consulter.",
    img: "/portfolio-3D.png",
    link: "https://my-3-d-portfolio-omega.vercel.app/",
  },
];


const PortfolioPage = () => {

  const ref = useRef();

  const {scrollYProgress} = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

  return (
    <motion.div
    className="h-full"
    initial={{ y: '-200vh' }}
    animate={{ y: '0%' }}
    transition={{ duration: 1 }}
  >
    <div className='h-[600vh] relative' ref={ref}>
      <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center'>
        Mes réalisations
      </div>
      <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
        <motion.div style={{ x }} className='flex'>
          <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300' />
          {items.map((item) => (
            <div 
              className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} 
              key={item.id}
            >
              <div className='flex flex-col gap-8 text-white'>
                <h1 className='text-xl font-bold md:text-4xl lg:text-5xl xl:text-6xl'>
                  {item.title}
                </h1>
                <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]'>
                  <Image src={item.img} alt='' fill />
                </div>
                <p className='w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]'>
                  {item.desc}
                </p>
                <Link href={item.link} className='flex justify-end' target='_blank'>
                  <button className='p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded'>visitez le site</button>
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
        <div className='w-screen h-screen flex flex-col gap-16 items-center justify-center text-center'>
          <h1 className='sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl'>Avez-vous un projet?</h1>
          <div className='relative'>
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              viewBox="0 0 300 300"
              className="w-64 h-64 md:w-[500px] md:h-[500px] "
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                />
              </defs>
              <text fill="#000">
                <textPath xlinkHref="#circlePath" className="text-xl">
                Développeur Front-end  
                </textPath>
              </text>
            </motion.svg>
            <Link href='/contact' className='w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 m-auto bottom-0 bg-black text-white rounded-full flex items-center justify-center'>
              Recrutez moi
            </Link>
          </div>
        </div>
  </motion.div>
  );
};

export default PortfolioPage;