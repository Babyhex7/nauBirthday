"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { Sparkles, Heart, Gift, Star } from "lucide-react";

export default function LandingPage({ onStart }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Trigger confetti saat halaman dimuat
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // Petasan dari bawah kiri
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ff69b4', '#ff1493', '#ff85c0', '#ffc0cb', '#fff'],
      });

      // Petasan dari bawah kanan
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ff69b4', '#ff1493', '#ff85c0', '#ffc0cb', '#fff'],
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    // Confetti burst saat klik tombol
    const count = 200;
    const defaults = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
        colors: ['#ff69b4', '#ff1493', '#ff85c0', '#ffc0cb', '#fff', '#ffd700'],
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });

    setTimeout(() => onStart(), 1000);
  };

  // Animasi sparkles yang mengambang
  const SparkleEffect = () => {
    if (!mounted) return null;
    
    const sparkles = Array.from({ length: 20 }, (_, i) => i);
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {sparkles.map((i) => {
          const randomX = Math.random() * 100;
          const randomDelay = Math.random() * 3;
          const randomSize = 12 + Math.random() * 20;
          const randomDuration = 3 + Math.random() * 2;
          
          return (
            <motion.div
              key={i}
              className="absolute"
              initial={{ 
                opacity: 0,
                scale: 0
              }}
              animate={{ 
                y: [0, -100],
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 1, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: "easeInOut"
              }}
              style={{
                left: `${randomX}%`,
                bottom: '-50px',
              }}
            >
              <Star 
                className="text-pink-300" 
                size={randomSize} 
                fill="currentColor"
              />
            </motion.div>
          );
        })}
      </div>
    );
  };

  // Floating decorative elements
  const FloatingElements = () => {
    return (
      <>
        <motion.div
          className="absolute top-10 left-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Heart className="text-pink-300" size={40} fill="currentColor" />
        </motion.div>

        <motion.div
          className="absolute top-20 right-20"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <Gift className="text-pink-400" size={45} />
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-20"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Sparkles className="text-pink-300" size={35} />
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-16"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -20, 20, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <Star className="text-pink-200" size={38} fill="currentColor" />
        </motion.div>
      </>
    );
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 flex items-center justify-center overflow-hidden">
      <SparkleEffect />
      <FloatingElements />

      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Main sparkle icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2
          }}
          className="mb-8 flex justify-center"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="text-white drop-shadow-lg" size={80} />
          </motion.div>
        </motion.div>

        {/* Happy Birthday Text - animated letter by letter */}
        <div className="text-7xl md:text-8xl font-bold text-white mb-4 drop-shadow-2xl"
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {"Happy Birthday".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: -50, rotateX: -90 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                rotateX: 0,
                scale: [1, 1.1, 1],
              }}
              transition={{
                opacity: { duration: 0.5, delay: 0.3 + index * 0.05 },
                y: { 
                  duration: 0.5,
                  delay: 0.3 + index * 0.05,
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                },
                rotateX: {
                  duration: 0.5,
                  delay: 0.3 + index * 0.05,
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                },
                scale: {
                  duration: 1.5,
                  delay: 2.5 + index * 0.1, // Mulai setelah teks diam
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut"
                }
              }}
              className="inline-block"
              style={{
                textShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}
            >
              <motion.span
                animate={{
                  filter: [
                    'drop-shadow(0 0 0px rgba(255,182,193,0)) brightness(1)',
                    'drop-shadow(0 0 20px rgba(255,182,193,0.8)) brightness(1.2)',
                    'drop-shadow(0 0 0px rgba(255,182,193,0)) brightness(1)',
                  ],
                  textShadow: [
                    '0 4px 20px rgba(0,0,0,0.3)',
                    '0 0 25px rgba(255,182,193,0.8), 0 4px 20px rgba(0,0,0,0.3)',
                    '0 4px 20px rgba(0,0,0,0.3)',
                  ]
                }}
                transition={{
                  duration: 1.5,
                  delay: 2.5 + index * 0.1, // Mulai setelah teks diam
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut"
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </motion.span>
          ))}
        </div>

        {/* Name - animated letter by letter with glow effect */}
        <div className="text-8xl md:text-9xl font-bold mb-6 drop-shadow-2xl"
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {"Naura".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0, rotateY: -180 }}
              animate={{ 
                opacity: 1, 
                scale: [1, 1.2, 1],
                rotateY: 0,
                y: [0, -12, 0],
              }}
              transition={{
                opacity: { duration: 0.6, delay: 1.2 + index * 0.1 },
                scale: { 
                  duration: 1.8,
                  delay: 3.5 + index * 0.15, // Mulai setelah Happy Birthday selesai + teks diam
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut"
                },
                rotateY: {
                  duration: 0.6,
                  delay: 1.2 + index * 0.1,
                  type: "spring",
                  stiffness: 150,
                  damping: 12
                },
                y: {
                  duration: 1.8,
                  delay: 3.5 + index * 0.15, // Mulai setelah Happy Birthday selesai + teks diam
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut"
                }
              }}
              whileHover={{
                scale: 1.4,
                y: -15,
                transition: { 
                  type: "spring",
                  stiffness: 300,
                  damping: 10
                }
              }}
              className="inline-block cursor-pointer text-white"
              style={{
                textShadow: '0 6px 30px rgba(0,0,0,0.3)',
              }}
            >
              <motion.span
                animate={{
                  filter: [
                    'drop-shadow(0 0 0px rgba(255,215,0,0)) brightness(1)',
                    'drop-shadow(0 0 30px rgba(255,215,0,1)) brightness(1.4)',
                    'drop-shadow(0 0 0px rgba(255,215,0,0)) brightness(1)',
                  ],
                  color: [
                    '#ffffff',
                    '#ffd700',
                    '#ffffff',
                  ]
                }}
                transition={{
                  duration: 1.8,
                  delay: 3.5 + index * 0.15, // Mulai setelah Happy Birthday selesai + teks diam
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut"
                }}
              >
                {char}
              </motion.span>
            </motion.span>
          ))}
        </div>

        {/* Date with hearts */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            delay: 1.8,
            duration: 0.5,
            type: "spring",
            stiffness: 150
          }}
          className="text-3xl md:text-4xl text-white mb-8 flex items-center justify-center gap-3"
        >
          <motion.span
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 2, type: "spring", stiffness: 200 }}
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block"
            >
              💗
            </motion.span>
          </motion.span>
          <motion.span 
            className="font-semibold drop-shadow-lg"
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "normal" }}
            transition={{ delay: 2.1, duration: 0.6 }}
          >
            3 Desember 2025
          </motion.span>
          <motion.span
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 2.2, type: "spring", stiffness: 200 }}
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.75
              }}
              className="inline-block"
            >
              💗
            </motion.span>
          </motion.span>
        </motion.div>

        {/* Subtitle - typed effect */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 2.4,
            duration: 0.5
          }}
          className="text-xl md:text-2xl text-white/90 mb-10 drop-shadow-lg font-light"
        >
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ delay: 2.6, duration: 1.5 }}
            className="inline-block overflow-hidden"
          >
            Ada cerita spesial yang aku siapin buat kamu hari ini... 💕
          </motion.span>
        </motion.p>

        {/* Start Button */}
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 2.8
          }}
        >
          <motion.button
            whileHover={{ 
              scale: 1.15,
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStart}
            className="group relative bg-white text-pink-500 px-12 py-5 rounded-full text-2xl font-bold shadow-2xl overflow-hidden transition-all duration-300"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600"
              initial={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 100 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3 }}
              >
                Mulai Ceritanya
              </motion.span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                →
              </motion.span>
            </span>
            
            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                boxShadow: "0 0 30px 10px rgba(255,105,180,0.6), 0 0 60px 20px rgba(255,20,147,0.4)"
              }}
            />
          </motion.button>
        </motion.div>

        {/* Helper text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.5 }}
          className="text-white/70 mt-6 text-lg flex items-center justify-center gap-2"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.4 }}
          >
            Swipe atau klik untuk navigasi
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3.6, type: "spring" }}
          >
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block"
            >
              ✨
            </motion.span>
          </motion.span>
        </motion.p>
      </div>

      {/* Decorative circles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
