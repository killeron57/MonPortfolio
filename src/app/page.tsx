"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const mesCategories = [
  {
    id: "jeux-video",
    titre: "Jeux Vidéo & 3D",
    description: "Mes créations interactives sur Unity et Unreal Engine (C#, C++).",
    couleur: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    image: "/UnityUnreal.jpg" 
  },
  {
    id: "web-mobile",
    titre: "Web & Mobile",
    description: "Applications mobiles et sites web modernes (React, Next.js, Tailwind).",
    couleur: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    image: "/WebMobile.jpg"
  },
  {
    id: "logiciels",
    titre: "Logiciels & Console",
    description: "Simulateurs, algorithmes et programmes systèmes (C, Java, Python).",
    couleur: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    image: "/Algo.jpg"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans scroll-smooth selection:bg-cyan-500/30">
      
      {/* Barre de navigation */}
      <motion.nav 
        initial={{ y: -100 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-white/10"
      >
        <div className="flex justify-between items-center p-6 max-w-5xl mx-auto">
          <a href="#" className="font-extrabold text-xl tracking-tighter text-white hover:opacity-80 transition-opacity cursor-pointer">
            MonPortfolio<span className="text-cyan-400">.</span>
          </a>
          <div className="hidden md:flex gap-8 font-medium text-sm text-slate-400">
            <a href="#projets" className="hover:text-white transition-colors">Projets</a>
            <a href="#a-propos" className="hover:text-white transition-colors">À propos</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <main className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-32 max-w-4xl mx-auto overflow-hidden">
        
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] -z-10"
        />

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-white"
        >
          Bonjour, je suis <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Kylian BENZINEB
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto"
        >
          Étudiant en informatique passionné par la création d'expériences interactives. 
          De la conception <strong className="text-white">Web & Mobile</strong> au développement de <strong className="text-white whitespace-nowrap">Jeux Vidéo</strong>.<br/>
          Et actuellement à la recherche d'une <strong className="text-white">alternance</strong> ou d'un <strong className="text-white">stage</strong> pour valider mon diplôme.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-5"
        >
          <a href="#projets" className="bg-white text-slate-950 px-8 py-3 rounded-full font-bold hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105">
            Voir mes projets
          </a>
          <a href="https://github.com/killeron57" target="_blank" rel="noopener noreferrer" className="p-3 text-slate-400 hover:text-white bg-white/5 rounded-full hover:bg-white/10 border border-white/10 transition-all hover:scale-110">
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/kylian-benzineb-730082410/" target="_blank" rel="noopener noreferrer" className="p-3 text-slate-400 hover:text-cyan-400 bg-white/5 rounded-full hover:bg-white/10 border border-white/10 transition-all hover:scale-110">
            <FaLinkedin size={22} />
          </a>
        </motion.div>
      </main>

      {/* Section : Catégories de Projets */}
      <section id="projets" className="py-24 bg-slate-900 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
          >
            Mes Projets
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mesCategories.map((cat, index) => (
              <motion.div 
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-slate-950/50 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-colors group flex flex-col"
            >
              {/* Le lien englobe maintenant toute la carte */}
              <Link href={`/projets/${cat.id}`} className="flex flex-col h-full p-6 cursor-pointer">
                
                <div className="relative w-full h-48 rounded-xl mb-6 overflow-hidden border border-white/5 group-hover:border-white/10 transition-colors">
                  <Image 
                    src={cat.image} 
                    alt={cat.titre}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">{cat.titre}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {cat.description}
                </p>
                {/* L'ancien lien devient un simple texte stylisé */}
                <span className="mt-auto text-sm text-cyan-400 font-bold uppercase tracking-wider group-hover:text-cyan-300 transition-colors inline-flex items-center gap-2">
                  Voir les projets <span>→</span>
                </span>
                
              </Link>
            </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section : À propos */}
      <section id="a-propos" className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
          >
            À propos de moi
          </motion.h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Bonjour, je m'appelle Kylian. Je suis étudiant en développement de système numerique et immersif a l'ISEN. Passionné par la création d'expériences interactives à travers les <strong className="text-cyan-400 font-medium">jeux vidéo, le web et le mobile</strong>. J'aime transformer des problèmes complexes en solutions élégantes et performantes.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                En dehors du code, je suis un grand amateur de <strong className="text-white">jeux vidéo</strong> et un joueur régulier de <strong className="text-white">basketball</strong>. Ces passions m'ont appris la persévérance, le dépassement de soi et l'importance de l'esprit d'équipe — des qualités que j'applique au quotidien dans mes projets informatiques.
              </p>
              
              <a href="/CV.pdf" target="_blank" className="inline-flex items-center gap-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-6 py-3 rounded-full font-bold hover:bg-cyan-500/20 transition-all hover:scale-105">
                📄 Télécharger mon CV
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 w-full"
            >
              <h3 className="text-xl font-bold text-white mb-6">Mes Compétences</h3>
              <div className="flex flex-wrap gap-3">
                {['Unity', 'Unreal Engine', 'C#', 'C++', 'C', 'Python', 'JAVA', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'PHP', 'MySQL/SQL', 'React', 'ReactNative', 'Node.js', 'Next.js', 'Tailwind CSS', 'Sequelize', 'Vuforia', 'FMOD', 'Git'].map((skill, index) => (
                  <motion.span 
                    key={skill}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-900 border border-slate-800 text-slate-300 px-4 py-2 rounded-lg text-sm font-medium hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section : Contact */}
      <section id="contact" className="py-24 bg-slate-900 border-t border-white/5">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Prêt à collaborer ?</h2>
          <p className="text-slate-400 text-lg mb-10">
          Je suis actuellement à la recherche active d'un stage ou d'une alternance en développement. Si mon profil correspond à vos besoins ou si vous souhaitez simplement échanger, n'hésitez pas à me contacter !
          </p>
          <a 
            href="https://www.linkedin.com/in/kylian-benzineb-730082410/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 bg-cyan-500 text-slate-950 font-bold px-8 py-4 rounded-full hover:bg-cyan-400 transition-all hover:scale-105"
          >
            Contactez-moi sur LinkedIn
          </a>
        </motion.div>
      </section>

      <footer className="py-8 text-center text-slate-600 text-sm bg-slate-950 border-t border-white/5">
        <p>© {new Date().getFullYear()} BENZINEB Kylian. Fait avec Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}