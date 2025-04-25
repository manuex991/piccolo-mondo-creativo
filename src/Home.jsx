// src/Home.jsx
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden min-h-[80vh]"
    >
      {/* Sfondo sartoriale */}
      <div className="absolute inset-0 bg-[url('/assets/bg-pattern.png')] opacity-20" />

      {/* Contenuto centrale */}
      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        <h1 className="text-4xl md:text-5xl font-script font-bold mb-6">
          Scopri il nostro magico mondo di cucito creativo!
        </h1>
        <p className="max-w-xl mx-auto text-lg">
          Ogni creazione è fatta a mano e personalizzabile con tessuti e frasi uniche.
        </p>
      </div>
    </motion.section>
  );
}

