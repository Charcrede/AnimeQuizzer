'use client'; // Ceci est nécessaire pour activer le mode côté client dans Next.js

import MovingImages from "./movingImages";

export default function Home() {
  return (
    <div className="relative">
      <MovingImages></MovingImages>
      {/* <img src="/assets/s5.png" alt="" className="absolute top-1/2 right-0 -z-10 lg:w-48 lg:h-48 xs:w-24 xs:h-24" />
        <img src="/assets/s6.png" alt="" className="absolute -bottom-3/4 left-1/2 -z-10  lg:w-24 lg:h-24 xs:w-16 xs:h-16 bounce" /> */}
      {/* Hero Section */}
      <div className="m-auto w-1/3 text-center h-screen w-full px-8 items-center flex flex-col">
        <img src="/assets/1.png" alt="" className="w-2/3" />
        <h1 className="font-bold text-[4rem] text-black">Quizzer</h1>
        <p>Envie de tester tes connaissance sur différents animés ? Télécharge notre appli et lance toi</p>
        <a href="/assets/quizzer.apk" download>
        <button className="px-6 py-4 bg-black text-white rounded-xl flex gap-2 mt-8">
          Télécharger
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
          </svg>
        </button>
        </a>
      </div>
      {/* Features Section */}




    </div>
  );
}
