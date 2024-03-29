'use client'

import React, { useRef } from 'react';
import { motion, useInView, useScroll } from 'framer-motion';
import Brain from '@/components/brain';

const AboutPage = () => {

  const containerRef = useRef();

  const {scrollYProgress} = useScroll({ container: containerRef })
  
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, {margin: '-100px'})
  
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, {margin: '-100px'})

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className='h-full overflow-scroll lg:flex' ref={containerRef}>
        {/* Text container */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 w-2/3 lg:pr-0 xl:1/2'>
          {/* Biography container */}
          <div className='flex flex-col gap-12 justify-center'>
            {/* Biography title */}
            <h1 className='font-bold text-2xl'>BIOGRAPHIE</h1>
            {/* Biography desc */}
            <p className='text-lg'>
              Anciennement technicien réseau, je suis aujourd&apos;hui développeur React.js motivé et soucieux du détail, avec une base solide en développement web front-end et une passion pour la création d’applications web conviviales et réactives. Je suis à la recherche d’une opportunité en CDI ou CDD et j’ai hâte d’apporter mes compétences à une équipe de développement dynamique et d’acquérir une expérience pratique dans la création de solutions Web innovantes et engageantes.
            </p>
            {/* Biography quote */}
            <span className='italic'>
              Laissez vous guider.
            </span>
            {/* Biography sign svg*/}
            <div className='self-end'>
              <svg 
                width="185" 
                height="77" 
                viewBox="0 0 635 341" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
              <path d="M2 194C125.459 176.322 248.227 155.013 372.111 140.111C440.766 131.853 509.706 125.86 578.222 116.444C588.586 115.02 598.925 113.398 609.222 111.556C615.079 110.508 620.924 109.333 626.667 107.778C628.749 107.214 631.216 106.867 632.611 105.222C633.267 104.449 630.791 104.07 629.778 104.111C617.839 104.595 589.965 109.592 581.444 111.111C537.972 118.864 494.6 127.404 451.222 135.667C351.783 154.607 252.4 174.782 153.611 196.889C98.8721 209.138 132.651 201.836 85.1111 212.389C78.2283 213.917 71.3388 215.414 64.4444 216.889C60.6905 217.692 56.9368 218.499 53.1667 219.222C51.5281 219.536 49.5424 221.02 48.2222 220C47.1404 219.164 50.6682 218.768 51.9444 218.278C62.7722 214.119 75.651 210.126 86.3333 206.944C122.995 196.027 160.1 186.637 197.111 177C253.577 162.297 310.195 148.242 367.667 138C388.054 134.367 326.915 145.436 306.667 149.778C250.823 161.751 194.333 175.733 136.778 173.056C114.457 172.017 91.9881 169.21 71.2222 160.444C66.6548 158.517 51.329 152.262 53.2778 144.167C56.1092 132.405 75.4644 119.121 83.3333 112.556C102.568 96.5067 122.857 81.6294 143.833 67.9445C167.173 52.7177 191.369 38.1677 216.111 25.3333C236.292 14.8649 257.055 5.7387 279.833 3C291.657 1.57838 301.242 1.27827 312.444 5.33334C325.055 9.89823 330.777 20.711 334.222 33C341.646 59.4825 343.41 88.598 344.722 115.833C346.552 153.813 346.158 192.109 342.778 230C339.671 264.829 331.112 299.284 314.222 330.111C311.828 334.48 309.874 338.025 305 339" 
                stroke="black" 
                stroke-width="3" 
                stroke-linecap="round"
              />
              </svg>
            
              {/* BIOGRAPHY SCROLL SVG */}
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
          </div>
          {/* Skills container */}
          <div className='flex flex-col gap-12 justify-center' ref={skillRef}>
            {/* Skill title */}
            <motion.h1 
              className='font-bold text-2xl'
              initial={{ x: '-300px'}}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              COMPETENCES
            </motion.h1>
            {/* Skill list */}
            <motion.div 
              className='flex  flex-wrap gap-4'
              initial={{ x: '-300px'}}
              animate={isSkillRefInView ? { x: 0 } : {}}
            >
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Javascript
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                ReactJS
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                CSS3
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                HTML5
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Redux
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Redux toolkit
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                React Router
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Axios
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Webpack
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Postman
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Jest
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Ruby
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Ruby On Rails
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                NodeJS
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                NextJS
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                ExpressJS
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                MongoDB
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                PosgreSGL
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Tailwind
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Git / Github
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                API Restfull
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Methodologie Agile / Scrum
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Administration Système
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Support Technique 
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Infrastructure réseau
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Résolution de problèmes matériels et logiciels
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Protocoles réseaux
              </div>
            </motion.div>
            {/* Skill scroll svg */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* Experience container */}
          <div className='flex flex-col gap-12 justify-center pb-48' ref={experienceRef}>
            {/* Experience title */}
            <motion.h1 
              className='font-bold text-2xl'
              initial={{ x: '-300px'}}
              animate={isExperienceRefInView ? { x: '0' } : {}}
              transition={{ delay: 0.2 }}
            >
              EXPERIENCE
            </motion.h1>
            {/* Experience list */}
            <motion.div
              initial={{ x: '-300px'}}
              animate={isExperienceRefInView ? { x: '0' } : {}}
              className=''
            >
              {/* Experience list item */}
              <div className='flex justify-between h-68'>
                {/* Left */}
                <div className='w-1/3'>
                  {/* Job title */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                    Développeur Junior front-end React
                  </div>
                  {/* Job desc */}
                  <div className='p-3 text-sm italic'>
                    • Aide au développement d’interfaces utilisateur pour des applications web utilisant React.js. <br /><br />
                    • Collaboration avec l’équipe de développement pour diagnostiquer et résoudre les problèmes présents. <br /><br />
                    • Participer aux revues de code, en fournissant des commentaires constructifs pour améliorer la qualité du code. <br /><br />
                    • Aide à la maintenance et à la mise à jour des applications web existantes.
                  </div>
                  {/* Job date */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>Juillet 2022 – Novembre 2023</div>
                  {/* Job Company name */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Nyne Corp – Cergy France</div>
                </div>
                {/* Center */}
                <div className='w-1/6'>
                  {/* Line */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* Line circle */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* Right */}
                <div className='w-1/3'></div>
              </div>

              
              {/* Experience list item */}
              <div className='flex justify-between h-68'>
                {/* Left */}
                <div className='w-1/3'>
                  
                </div>
                {/* Center */}
                <div className='w-1/6'>
                  {/* Line */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* Line circle */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* Right */}
                <div className='w-1/3'>
                  {/* Job title */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                    Application e-commerce (Next.js – React.js – Prisma – PostgresSQL – Zustand - Tailwind )
                  </div>
                  {/* Job desc */}
                  <div className='p-3 text-sm italic'>
                    • Développement d’un site e-commerce responsive utilisant React.js, présentant des produits, un panier d’achat, la gestion de panier et l’authentification des utilisateurs. <br /><br />
                    • Intégration avec une API RESTful pour récupérer les données produit. <br /><br />
                    • Utilisation de Zustand pour la gestion des states et amélioration de l’expérience utilisateur en optimisant les temps de chargement. <br /><br />
                    • Mise en oeuvre de fonctionnalités telles que le filtrage des produits, le tri et les mises à jours dynamiques à l’aide des composants React et de la gestion des states.
                  </div>
                  {/* Job date */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>Juin 2023 – Decembre 2023</div>
                  {/* Job Company name */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Projet personnel</div>
                </div>
              </div>

              {/* Experience list item */}
              <div className='flex justify-between h-68'>
                {/* Left */}
                <div className='w-1/3'>
                  {/* Job title */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                    Application de prévisions météorologiques (HTML – Tailwind – Javascript - API OpenWeather )
                  </div>
                  {/* Job desc */}
                  <div className='p-3 text-sm italic'>
                    • Création d’une application de prévisions météorologiques à l’aide de vanilla javascript qui récupère les données d’une API météo publique (OpenWeather) et affiche les prévisions météo en temps réel en fonction de l’entrée de l’utilisateur. <br /><br />
                    • Gestion et intégration d’API tierces pour les données météorologiques. <br /><br />
                    • Amélioration des performances du site web en optimisant les images grâce à lazy loading.
                  </div>
                  {/* Job date */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>Juin 2023 – Decembre 2023</div>
                  {/* Job Company name */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Projet personnel</div>
                </div>
                {/* Center */}
                <div className='w-1/6'>
                  {/* Line */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* Line circle */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* Right */}
                <div className='w-1/3'></div>
              </div>

              {/* Experience list item */}
              <div className='flex justify-between h-68'>
                {/* Left */}
                <div className='w-1/3'>
                  
                </div>
                {/* Center */}
                <div className='w-1/6'>
                  {/* Line */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* Line circle */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* Right */}
                <div className='w-1/3'>
                  {/* Job title */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                    Application de gestion des tâches - Kanban (React.js, Firebase, Drag & Drop, MUI v5, Zustand)
                  </div>
                  {/* Job desc */}
                  <div className='p-3 text-sm italic'>
                    • Création d’une application de gestion des tâches utilisant React.js et Zustand pour gérer et suivre les tâches quotidiennes. <br /><br />
                    • Mise en place de l’authentification et de l’autorisation à l’aide de JWT pour un accès sécurisé. <br /><br />
                    • Conception et développement de l’application, permettant aux utilisateurs de créer, modifier et supprimer des taches de leur board. <br /><br />
                    • Mise en place de fonctionnalités d’authentification et d’autorisation pour le contrôle d’accès des utilisateurs.
                  </div>
                  {/* Job date */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>Juin 2023 – Decembre 2023</div>
                  {/* Job Company name */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Projet personnel</div>
                </div>
              </div>

              {/* Experience list item */}
              <div className='flex justify-between h-68'>
                {/* Left */}
                <div className='w-1/3'>
                  {/* Job title */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                    Technicien Réseaux Informatiques
                  </div>
                  {/* Job desc */}
                  <div className='p-3 text-sm italic'>
                    • Montage/assemblage des équipements de télécommunication <br /><br />
                    • Effectuer des audits de sécurité et des évaluations de vulnérabilité réguliers pour assurer la conformité aux normes de l’entreprise et à sa politique. <br /><br />
                    • Gestion des processus d’approvisionnement en IT, en veillant à la rentabilité et à l’alignement avec les besoins organisationnels. <br /><br />
                    • Effectuer des tests et des validations approfondis pour assurer une transition en douceur et une perturbation minimale des opérations quotidiennes.
                  </div>
                  {/* Job date */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>Octobre 2015 - Mars 2019</div>
                  {/* Job Company name */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>ERICSSON – Tallinn Estonie</div>
                </div>
                {/* Center */}
                <div className='w-1/6'>
                  {/* Line */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* Line circle */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* Right */}
                <div className='w-1/3'></div>
              </div>

              {/* Experience list item */}
              <div className='flex justify-between h-68'>
                {/* Left */}
                <div className='w-1/3'>
                  
                </div>
                {/* Center */}
                <div className='w-1/6'>
                  {/* Line */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* Line circle */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* Right */}
                <div className='w-1/3'>
                  {/* Job title */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                    Technicien Réseaux Informatiques
                  </div>
                  {/* Job desc */}
                  <div className='p-3 text-sm italic'>
                    • Mise en place, organisation et gestion des incidents réseaux ainsi que l ouverture de paquets sur les plateformes NAGIOS et SOLARWINDS . <br /><br />
                    • Fournir un soutien technique aux employés, résoudre les problèmes matériels et logiciels et mettre en oeuvre des solutions pour optimiser la productivité. <br /><br />
                    • Configurer et administrer les périphériques réseaux, garantissant un flux de données sécurisé et efficace. <br /><br />
                    • Mise en place de mesures de sécurités informatiques pour protéger les données et les systèmes, en assurant la conformité aux normes et réglementations de l’entreprise.
                  </div>
                  {/* Job date */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>Octobre 2011 - Avril 2013</div>
                  {/* Job Company name */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>AES SONEL – Douala Cameroun</div>
                </div>
              </div>

              {/* Experience list item */}
              <div className='flex justify-between h-68'>
                {/* Left */}
                <div className='w-1/3'>
                  {/* Job title */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                    Technicien en maintenance informatique
                  </div>
                  {/* Job desc */}
                  <div className='p-3 text-sm italic'>
                    • Fournir un support d’assistance informatique, résoudre les problèmes matériels et logiciels. <br /><br />
                    • Installer et configurer des systèmes d’exploitation, des applications logicielles et des périphériques réseau. <br /><br />
                    • Tenir à jour l’inventaire des actifs informatiques et gérer l’approvisionnement en équipements. <br /><br />
                    • Aide à la planification et à l’exécution des mises à niveau et des migrations du système, minimisant ainsi les temps d’arrêt et les perturbations.
                  </div>
                  {/* Job date */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>Aout 2010 - Janvier 2011</div>
                  {/* Job Company name */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>AES SONEL – Douala Cameroun</div>
                </div>
                {/* Center */}
                <div className='w-1/6'>
                  {/* Line */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* Line circle */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* Right */}
                <div className='w-1/3'></div>
              </div>
             
            </motion.div>
          </div>
        </div>
        {/* Svg container */}
        <div className='hidden lg:block w-1/3 sticky top-0 z-30 xl:1/2'>
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;