import React, { useEffect } from "react";
import { Milk, ArrowRight } from "lucide-react";
import BlueberryImage from "../images/bluebarry.png";
import MilkBackground from "../images/milkbackground.png";
import { motion, useAnimation, stagger } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HeroSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerVariants = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    },
    hidden: { opacity: 0 }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative bg-blue-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div ref={ref}>
          <motion.h1
            initial="hidden"
            animate={controls}
            variants={titleVariants}
            className="text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Savourez l’Authenticité du Lait Bio, Frais & Local
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.5, duration: 0.6 }
              }
            }}
            className="text-xl text-gray-600 mb-10 max-w-xl"
          >
            Nos produits laitiers sont élaborés avec soin, dans le respect du savoir-faire artisanal et de la nature. 
            Fraîcheur garantie, goût inégalé, livraison rapide à domicile.
          </motion.p>

          <motion.div
            className="flex gap-4 flex-wrap"
            initial="hidden"
            animate={controls}
            variants={staggerVariants}
          >
            <motion.button
              variants={childVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-all flex items-center"
            >
              Découvrir nos produits
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
            <motion.button
              variants={childVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition-all"
            >
              En savoir plus
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-3 gap-6 text-center"
            initial="hidden"
            animate={controls}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.8
                }
              }
            }}
          >
            {["100%", "24h", "5 000+"].map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { type: "spring", stiffness: 100 }
                  }
                }}
              >
                <h3 className="text-3xl font-bold text-blue-600">{stat}</h3>
                <p className="text-gray-600">
                  {["Bio & Local", "Livraison", "Clients Satisfaits"][index]}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Visual */}
        <div className="relative">
          <motion.img
            src={MilkBackground}
            alt="Produits laitiers bio"
            className="w-full max-w-lg mx-auto"
            animate={{
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
              times: [0, 0.3, 0.7, 1],
            }}
          />

          {/* Floating Badge */}
          <motion.div
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { delay: 1.2, type: "spring" }
            }}
          >
            <div className="flex items-center gap-3">
              <Milk className="h-12 w-12 text-blue-600" />
              <div>
                <motion.p
                  className="font-semibold text-gray-900"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut"
                  }}
                >
                  Qualité Premium
                </motion.p>
                <p className="text-sm text-gray-600">Certifié Bio</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}