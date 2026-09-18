"use client";

import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const tousLesProjets = {
  "jeux-video": [
    { 
      id: 1, 
      titre: "Pixels", 
      desc: "Prototype VR sur Unity 6. Style néon synthwave et gestion dynamique de la gravité. (Juin 2025)",
      details: "Réalisé en équipe de 6 en 1 mois, ce jeu VR propose 4 niveaux (Tutoriel, Terre, Ciel, Espace) avec chacun une gravité différente. L'objectif est d'éliminer des créatures en leur lançant des balles en temps limité. Je me suis chargé du développement en C# de ces mécaniques de gameplay en réalité virtuelle.",
      competences: ["Unity 6", "Réalité Virtuelle (VR)", "C#", "GitHub", "Travail en équipe"],
      image: "/Pixels.png" 
    },
    { 
      id: 2, 
      titre: "Just A Scopa Game", 
      desc: "Jeu de cartes traditionnel italien en 3D avec une IA adverse sur Unreal Engine. (Juin 2026)",
      details: "Projet solo de 3 semaines sur le thème de 'l'automatisation'. Le joueur affronte une intelligence artificielle dans des parties de Scopa. Le défi principal a été de concevoir toute la logique du jeu de cartes et le processus de décision de l'IA entièrement via le système de Blueprints.",
      competences: ["Unreal Engine", "Blueprints", "IA"],
      image: "/JustScopaGameMenu.png" 
    },
    { 
      id: 3, 
      titre: "Make The Shoot", 
      desc: "Jeu de basket en Réalité Augmentée (AR) sur mobile avec Unity et Vuforia. (Mars 2026)",
      details: "Projet en groupe de 3 réalisé en 4 semaines. Le joueur ancre un panier virtuel sur un poster réel et utilise des gestes tactiles (swipe) pour marquer un maximum de points. J'ai contribué au développement des mécaniques et réalisé toute la modélisation 3D du panier et de la balle.",
      competences: ["Unity", "Vuforia (AR)", "Modélisation 3D", "Mobile", "GitHub"],
      image: "/MakeTheShoot.jpg" 
    },
    { 
      id: 4, 
      titre: "No Time To Spare", 
      desc: "Escape game 3D immersif intégrant une conception sonore avancée avec FMOD. (Déc. 2025)",
      details: "Projet solo d'un mois sur le thème 'Escape Game'. J'ai pris en charge la création complète du jeu : de la modélisation 3D personnalisée de tous les environnements jusqu'à l'intégration de FMOD pour créer une ambiance sonore spatiale et hautement immersive.",
      competences: ["Unity 3D", "FMOD (Audio)", "Modélisation 3D", "Level Design"],
      image: "/NoTimeToSpare.gif" 
    },
    { 
      id: 5, 
      titre: "Brain Breaker", 
      desc: "Serious game 2D de type 'Ice breaker' axé sur des quiz interactifs. (Janvier 2026)",
      details: "Conçu en équipe de 6, ce jeu a pour but de briser la glace entre les participants via une série de questions (ouvertes, vrai/faux) pour cumuler des points. Je me suis occupé d'une partie du développement sur Unity, en assurant la fluidité de la logique du quiz et du système de score.",
      competences: ["Unity 2D", "Serious Game", "C#", "GitHub", "Travail en équipe"],
      image: "/BrainBreaker.gif" 
    },
    { 
      id: 6, 
      titre: "Musée VR", 
      desc: "Visite muséale en Réalité Virtuelle axée sur la recherche UX. (Avril 2026)",
      details: "Projet d'un mois en équipe de 8 sur Unity 6. L'objectif était centré sur l'Expérience Utilisateur (UX). Nous avons conçu deux parcours : une visite libre et un mode gamifié en temps limité. Le projet a été itéré grâce à des entretiens et des sessions de playtests pour évaluer les préférences des joueurs.",
      competences: ["Unity 6 VR", "UX Research", "Playtests", "C#", "GitHub"],
      image: "/MuseeVR.png" 
    },
    { 
      id: 7, 
      titre: "Captain Too Tipsy", 
      desc: "Jeu d'arcade 2D axé sur l'intégration sonore FMOD et l'architecture des ScriptableObjects. (Sept. 2025)",
      details: "Réalisé en équipe de 3 en 1 mois. Le joueur incarne un pirate devant attraper de la malbouffe (qui le ralentit) tout en évitant les légumes. Mon but principal sur ce projet était d'apprendre la conception sonore avec FMOD et l'optimisation des données via les ScriptableObjects.",
      competences: ["Unity 2D", "FMOD", "ScriptableObjects", "C#", "GitHub"],
      image: "/CaptainTooTipsy.gif" 
    },
    { 
      id: 8, 
      titre: "Drifted", 
      desc: "Jeu d'adresse 2D réalisé lors de la Global Game Jam 2025 (Thème : Bulle). (Janvier 2025)",
      details: "Créé en seulement 48 heures en équipe de 6. Le joueur incarne le dernier souffle (une bulle) d'un pirate coincé dans un navire englouti, devant remonter à la surface sans éclater. J'ai participé au développement technique des mécaniques de jeu en C#.",
      competences: ["Unity 2D", "Game Jam (48h)", "C#", "Travail en équipe"],
      image: "/Drifted.gif" 
    },
    { 
      id: 9, 
      titre: "LostSenses", 
      desc: "Jeu d'horreur 3D basé sur la privation sensorielle lors de la Global Game Jam 2026 (Thème : Masque). (Janvier 2026)",
      details: "Projet de 48h en équipe de 8. Poursuivi par un monstre aveugle à l'ouïe fine, le joueur utilise des masques modifiant ses sens (ex: muet pour la furtivité, aveugle mais avec sonar). J'ai programmé l'IA du monstre, le masque Muet, et réalisé toute l'intégration audio sur FMOD.",
      competences: ["Unity 3D", "FMOD", "IA (Comportement)", "Game Jam", "GitHub"],
      image: "/LostSenses.png" 
    },
    { 
      id: 10, 
      titre: "Angry BasketBall", 
      desc: "Clone 2D reprenant les mécaniques d'Angry Birds avec un canon et des ballons de basket. (Sept. 2025)",
      details: "Projet solo de 3 semaines sur Unity. L'objectif technique était de maîtriser le système de physique 2D, la gravitation et le calcul de trajectoires balistiques pour rendre les tirs du canon fluides et satisfaisants.",
      competences: ["Unity 2D", "Physique 2D", "Balistique", "C#"],
      image: "/AngryBasketBall.jpg" 
    },
    { 
      id: 11, 
      titre: "Lock&Shoot", 
      desc: "Stand de tir à la première personne (FPS) avec création de sound design personnalisé. (Fév. 2025)",
      details: "Projet solo de 3 semaines. J'ai développé un contrôleur FPS pour un stand de tir original où les cibles sont des paniers et les munitions des ballons. J'ai également enregistré et intégré moi-même tous les bruitages (Sound Design) du jeu.",
      competences: ["Unity 3D", "FPS Controller", "Sound Design", "C#"],
      image: "/Lock&Shoot.gif" 
    }
  ],
  "web-mobile": [
    { 
      id: 20, 
      titre: "Portfolio Interactif", 
      desc: "Mon portfolio personnel développé avec Next.js 15, Tailwind CSS v4 et Framer Motion. (Sept. 2026)",
      details: "Conception et développement de A à Z de ce portfolio pour présenter mes projets. L'objectif était de créer une interface moderne (Dark mode), fluide et entièrement responsive. J'ai intégré des animations avancées avec Framer Motion et utilisé le routage dynamique de Next.js pour gérer l'affichage des catégories et des modales de détails.",
      competences: ["Next.js 15", "Tailwind CSS", "Framer Motion", "React", "UX/UI Design"],
      image: "/MonPortfolio.jpg" 
    },
    { 
      id: 21, 
      titre: "GameStart", 
      desc: "Application mobile de gestion de stock et clientèle pour magasin de jeux vidéo. (Mars 2026)",
      details: "Développée en binôme sur 1 mois. Il s'agit d'une application complète permettant à un gérant de suivre et modifier ses stocks, voir les commandes et gérer les contacts clients. J'ai utilisé React Native pour le front-end mobile, connecté à une API REST développée en Node.js avec l'ORM Sequelize pour la base de données.",
      competences: ["React Native", "Node.js", "Sequelize (API)", "Git", "Travail en équipe"],
      image: "/GameStart.gif" 
    },
    { 
      id: 22, 
      titre: "Quiz Interactif Full-Stack", 
      desc: "Application web de quiz avec espace utilisateur et panel d'administration (CRUD). (Mars 2026)",
      details: "Projet d'une semaine mettant en place une architecture complète avec base de données SQL. L'utilisateur peut jouer et obtenir un récapitulatif détaillé de ses erreurs. J'ai également développé un espace administrateur sécurisé par mot de passe permettant d'ajouter, modifier ou supprimer des questions dynamiquement.",
      competences: ["PHP", "SQL", "HTML/CSS", "Authentification", "UWAMP"],
      image: "/Quiz.gif" 
    },
    { 
      id: 23, 
      titre: "Calculateur Géométrique (POO)", 
      desc: "Application web exploitant la Programmation Orientée Objet pour le calcul et le dessin. (Fév. 2026)",
      details: "Projet technique d'une semaine centré sur la POO en PHP. Chaque forme (cercle, rectangle...) est une classe avec ses propres attributs et méthodes. L'utilisateur saisit les dimensions (rayon, hauteur) et l'algorithme calcule la surface et le périmètre avant de dessiner la forme en HTML/CSS sur la page web.",
      competences: ["PHP (POO)", "HTML/CSS", "Algorithmique", "UWAMP"],
      image: "/TpObjet.gif" 
    },
    { 
      id: 24, 
      titre: "Bouch'Alal", 
      desc: "Site vitrine (Projet concept) pour une boucherie en ligne. (Février 2026)",
      details: "Conçu lors d'un défi d'une journée. L'objectif était de créer rapidement une interface web claire et responsive pour présenter un commerce local. Le projet a été réalisé en utilisant la librairie Bootstrap couplée à des scripts personnalisés.",
      competences: ["HTML/CSS", "JavaScript", "Bootstrap", "Design Responsive"],
      image: "/BouchAlal.gif" 
    }
  ],
  "logiciels": [
    { 
      id: 30, 
      titre: "Gestionnaire d'Employés (Table de Hachage)", 
      desc: "Simulateur de gestion d'entreprise en Java optimisé via un algorithme de hachage. (Mars 2026)",
      details: "Projet de 2 semaines sur Eclipse. Contrairement aux listes classiques, ce programme stocke les employés (CRUD) en utilisant une Table de hachage (Hash Table) développée sur mesure. J'ai créé un algorithme calculant l'index mémoire via les codes ASCII (modulo 1000). Le projet respecte une architecture modulaire en 3 fichiers distincts (déclaration des classes, logique des méthodes, et main).",
      competences: ["Java", "Algorithmique (Hachage)", "Architecture Modulaire", "Eclipse"],
      image: "/JavaHash.gif" 
    },
    { 
      id: 31, 
      titre: "Gestionnaire d'Employés (Listes Chaînées)", 
      desc: "Logiciel Java avec interface graphique AWT reposant sur des listes doublement chaînées. (Mars 2026)",
      details: "Développé en 2 semaines. L'objectif était de concevoir une application visuelle permettant de gérer une liste d'employés (ajout, modification, suppression). Le défi technique principal a été d'implémenter manuellement la structure de 'liste doublement chaînée' pour la gestion des données en temps réel, couplée à une gestion rigoureuse des erreurs de saisie utilisateur.",
      competences: ["Java", "Java.awt (UI)", "Structures de Données", "Gestion d'erreurs"],
      image: "/JavaLC.gif" 
    },
    { 
      id: 32, 
      titre: "Simulateur de Distributeur Automatique", 
      desc: "Programme Python (Spyder) gérant les stocks, la monnaie et les achats avec panel administrateur. (Déc. 2024)",
      details: "Projet de 3 semaines. L'algorithme gère de manière autonome le rendu de monnaie et la mise à jour des stocks de boissons selon les achats des clients. J'ai intégré un système robuste pour prévenir les erreurs de saisie (crashs) et un menu administrateur, sécurisé par mot de passe, permettant d'auditer les stocks et d'éteindre la machine.",
      competences: ["Python", "Spyder", "Logique Métier", "Sécurité (Admin)"],
      image: "/ProjetPython.gif" 
    },
    { 
      id: 33, 
      titre: "Simulateur de Gestion d'Entreprise (C)", 
      desc: "Application console en C pour l'administration et le suivi du personnel. (Nov. 2024)",
      details: "Projet de 2 semaines sur Code::Blocks. Ce programme permet à un utilisateur de gérer le personnel de son entreprise via des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer). Chaque employé possède des attributs stricts (immatriculation, poste, salaire). L'accent a été mis sur la gestion propre de la mémoire en C.",
      competences: ["C", "Code::Blocks", "Algorithmique", "Gestion Mémoire"],
      image: "/ProjetC.gif" 
    }
  ]
};

const nomsCategories = {
  "jeux-video": "Jeux Vidéo & 3D",
  "web-mobile": "Web & Mobile",
  "logiciels": "Logiciels & Console"
};

type Projet = typeof tousLesProjets["jeux-video"][0];

export default function PageCategorie({ params }: { params: Promise<{ categorie: string }> }) {
  const resolvedParams = use(params);
  const categorieSlug = resolvedParams.categorie as keyof typeof tousLesProjets;
  const projetsDeLaCat = tousLesProjets[categorieSlug] || [];
  const nomDeLaCat = nomsCategories[categorieSlug] || "Catégorie inconnue";

  const [projetSelectionne, setProjetSelectionne] = useState<Projet | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans p-6 md:p-12 relative">
      <div className="max-w-5xl mx-auto">
        
        <Link href="/#projets" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium mb-12 transition-colors">
          <span>←</span> Retour à l'accueil
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">{nomDeLaCat}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projetsDeLaCat.map((projet) => (
            <div 
              key={projet.id} 
              onClick={() => setProjetSelectionne(projet)}
              className="bg-slate-900 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-colors group cursor-pointer"
            >
              <div className="relative w-full h-64 rounded-xl mb-6 overflow-hidden border border-white/5">
                <Image 
                  src={projet.image} 
                  alt={projet.titre} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{projet.titre}</h2>
              <p className="text-slate-400 leading-relaxed mb-4">{projet.desc}</p>
              <span className="text-sm font-bold text-cyan-400 uppercase tracking-wider">Voir les détails →</span>
            </div>
          ))}
        </div>

      </div>

      <AnimatePresence>
        {projetSelectionne && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setProjetSelectionne(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm cursor-pointer"
            />

            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-3xl bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/10 z-10 flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={() => setProjetSelectionne(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
              >
                ✕
              </button>

              <div className="relative w-full h-64 sm:h-80 shrink-0">
                <Image 
                  src={projetSelectionne.image} 
                  alt={projetSelectionne.titre} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 800px" 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
              </div>

              <div className="p-8 overflow-y-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">{projetSelectionne.titre}</h2>
                <p className="text-cyan-400 font-medium mb-8 text-lg">{projetSelectionne.desc}</p>
                
                <h3 className="text-xl font-bold text-white mb-4">À propos de ce projet</h3>
                <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                  {projetSelectionne.details}
                </p>

                <h3 className="text-xl font-bold text-white mb-4">Outils & Compétences</h3>
                <div className="flex flex-wrap gap-3">
                  {projetSelectionne.competences.map((comp) => (
                    <span key={comp} className="bg-slate-800 border border-slate-700 text-cyan-100 px-4 py-2 rounded-lg text-sm font-medium">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}