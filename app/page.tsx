'use client'; // Ceci est nécessaire pour activer le mode côté client dans Next.js

import { motion } from 'framer-motion';
import MovingImages from "./movingImages";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center px-6">
      <MovingImages />
      
      {/* Hero Section */}
      <div className="text-center flex flex-col items-center">
        <motion.img 
          src="/assets/2.png" 
          alt="" 
          className="w-2/3 max-w-sm mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1 
          className="font-bold text-5xl md:text-6xl mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Quizzer
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-gray-300 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Envie de tester tes connaissances sur différents animés ? Télécharge notre appli et lance-toi !
        </motion.p>
        <motion.a 
          href="/assets/quizzer.apk" 
          download 
          className="mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button className="px-8 py-4 bg-white text-black font-semibold text-lg rounded-xl shadow-lg hover:scale-105 transition flex items-center gap-2">
            Télécharger
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
            </svg>
          </button>
        </motion.a>
      </div>
    </div>
  );
}
