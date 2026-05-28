"use client";

import { motion } from "framer-motion";

export default function Hero() {

  return (

    <section className="text-center py-28">

      <motion.h1
        initial={{ opacity:0, y:50 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.8 }}
        className="text-8xl font-black"
      >
        PDHLE HARISH
      </motion.h1>

      <motion.h2
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:0.3 }}
        className="text-4xl mt-6 text-blue-500 font-bold"
      >
        AB IS BAAR FATEH KRO 🚀
      </motion.h2>

      <motion.p
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:0.6 }}
        className="mt-8 text-slate-400 text-xl max-w-3xl mx-auto"
      >
        Premium UP TGT Art Mock Test Platform
      </motion.p>

    </section>

  );
}