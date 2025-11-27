'use client'

import { motion } from 'framer-motion'
import { Sparkles, Heart, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function LandingPage({ onStart }) {
  const floatingHearts = Array.from({ length: 10 }, (_, i) => i)
  const [confetti, setConfetti] = useState([])

  // Generate confetti on mount
  useEffect(() => {
    const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      rotation: Math.random() * 360,
      color: ['#FFB6C1', '#FF69B4', '#FFD700', '#FF1493', '#FFC0CB'][Math.floor(Math.random() * 5)]
    }))
    setConfetti(confettiPieces)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-lightPink via-primary to-accent">
      {/* Confetti Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {confetti.map((piece) => (
          <motion.div
            key={piece.id}
            className="absolute w-3 h-3 rounded-sm"
            style={{
              left: `${piece.x}%`,
              top: '-5%',
              backgroundColor: piece.color,
              rotate: piece.rotation
            }}
            animate={{
              y: ['0vh', '110vh'],
              x: [0, (Math.random() - 0.5) * 100],
              rotate: [piece.rotation, piece.rotation + 360 * 3],
              opacity: [1, 1, 0]
            }}
            transition={{
              duration: piece.duration,
              delay: piece.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingHearts.map((i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            initial={{ 
              x: `${Math.random() * 100}%`,
              y: '100%',
              scale: 0 
            }}
            animate={{ 
              y: '-20%',
              scale: [0, 1, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            💕
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ 
          duration: 1, 
          ease: "easeOut",
          type: "spring",
          bounce: 0.4
        }}
        className="relative z-10 text-center px-6"
      >
        {/* Birthday Frame Border */}
        <motion.div
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute inset-0 pointer-events-none"
        >
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <motion.rect
              x="10"
              y="10"
              width="380"
              height="380"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeDasharray="10 5"
              rx="20"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: 0.6,
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                pathLength: { duration: 2, delay: 0.5 },
                opacity: { duration: 1, delay: 0.5 },
                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </svg>
        </motion.div>

        {/* Corner Decorations */}
        {[
          { top: -10, left: -10, rotate: 0 },
          { top: -10, right: -10, rotate: 90 },
          { bottom: -10, left: -10, rotate: -90 },
          { bottom: -10, right: -10, rotate: 180 }
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl"
            style={pos}
            initial={{ scale: 0, rotate: pos.rotate }}
            animate={{ scale: 1, rotate: pos.rotate }}
            transition={{ delay: 1 + i * 0.1, type: "spring", bounce: 0.6 }}
          >
            🎉
          </motion.div>
        ))}
        {/* Sparkle Icon */}
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="flex justify-center mb-6"
        >
          <Sparkles className="w-20 h-20 text-white drop-shadow-lg" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-playfair text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl"
        >
          Happy Birthday
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-8"
        >
          <p className="font-playfair text-6xl md:text-8xl font-bold text-white drop-shadow-2xl">
            Naura
          </p>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center justify-center gap-2 mt-4"
          >
            <Heart className="w-8 h-8 text-white fill-white" />
            <p className="text-2xl md:text-3xl text-white font-poppins">
              3 Desember 2025
            </p>
            <Heart className="w-8 h-8 text-white fill-white" />
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-xl md:text-2xl text-white/90 mb-8 font-poppins max-w-2xl mx-auto"
        >
          Ada cerita spesial yang aku siapin buat kamu hari ini... 💕
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          onClick={onStart}
          className="group bg-white text-accent px-10 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="flex items-center gap-3">
            Mulai Ceritanya
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-6 h-6" />
            </motion.span>
          </span>
        </motion.button>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-white/70 text-sm mt-6 font-poppins"
        >
          Swipe atau klik untuk navigasi ✨
        </motion.p>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
      />
    </div>
  )
}
