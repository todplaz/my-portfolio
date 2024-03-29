'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">

        {/* Image Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image 
            src='/hand.png' 
            alt="" 
            fill 
            className="object-contain"
          />
        </div>

        {/* Text Container */}
        <div className="h-1/2 flex flex-col lg:h-full lg:w-1/2 gap-8 items-center justify-center">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold">
            Salut! <br />moi c&apos;est <span className="text-gray-500">Alex Balomog</span>, je développe des expériences numériques pour concevoir demain.
          </h1>
          {/* Desc */}
          <p className="md:text-xl">
          Développeur Front end Javascript et React js basé en <b className="text-gray-600">France</b>, et anciennement technicien en télécommunications, je me construis une solide expérience à travers l&apos;apprentissage pratique continu, personnelle et professionnelle, et la création d&apos;applications.
          </p>
          {/* Buttons */}
          <div className="w-full flex gap-4 pb-9">
            <Link href='/portfolio'>
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                Mes réalisations
              </button>
            </Link>
            <Link href='/contact'>
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contactez moi
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default Homepage;
