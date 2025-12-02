'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, Gift, Sparkles, Heart, Star } from 'lucide-react'

export default function Chapter4({ onPrev, onNext }) {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-6 relative overflow-hidden">
      {/* Background Happy Birthday Text - Static di Tengah */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
        <div className="text-8xl md:text-9xl font-playfair font-bold text-accent/5">
          Happy Birthday
        </div>
      </div>
      
      {/* Floating Emojis Background - Samping Kiri & Kanan */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {Array.from({ length: 25 }, (_, i) => {
          const emojis = ['🎂', '🎉', '🎈', '🎁', '💝', '🌟', '✨', '💕', '🎊', '🌸', '🦋', '🌺', '💖', '🎀', '👑']
          const randomEmoji = emojis[i % emojis.length]
          // Posisi di samping kiri (0-20%) atau kanan (80-100%)
          const isLeft = i % 2 === 0
          const randomX = isLeft ? Math.random() * 20 : 80 + Math.random() * 20
          const randomY = Math.random() * 100
          const randomDelay = Math.random() * 8
          const randomDuration = 8 + Math.random() * 4
          return (
            <div
              key={i}
              className="absolute text-4xl opacity-20"
              style={{
                left: `${randomX}%`,
                top: `${randomY}%`,
                animation: `float-up ${randomDuration}s ease-in-out ${randomDelay}s infinite`,
              }}
            >
              {randomEmoji}
            </div>
          )
        })}
      </div>
      {/* Floating Icons */}
      <motion.div className="absolute top-12 left-12 opacity-20" animate={{ y: [0, -12, 0], scale: [1, 1.1, 1] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
        <Gift className="text-accent" size={32} />
      </motion.div>
      <motion.div className="absolute top-24 right-16 opacity-20" animate={{ rotate: [0, 15, 0], y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
        <Heart className="text-accent" size={28} fill="currentColor" />
      </motion.div>
      <motion.div className="absolute bottom-20 left-16 opacity-20" animate={{ x: [0, 10, 0], rotate: [0, -20, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
        <Star className="text-gold" size={26} fill="currentColor" />
      </motion.div>
      <motion.div className="absolute bottom-28 right-20 opacity-15" animate={{ y: [0, -10, 0], scale: [1, 1.15, 1] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}>
        <Sparkles className="text-accent" size={24} />
      </motion.div>
      <motion.div className="absolute top-1/2 right-12 opacity-15" animate={{ rotate: [0, 180, 360] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}>
        <Heart className="text-accent" size={22} fill="currentColor" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full relative z-10"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Photo */}
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <div className="relative group">
              {/* Ribbon di pojok kiri atas */}
              <motion.div
                className="absolute -top-4 -left-4 z-20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                <div className="relative">
                  <div className="w-16 h-20 bg-gradient-to-b from-accent to-primary rounded-b-full shadow-lg"></div>
                  <div className="absolute top-0 left-0 w-16 h-6 bg-accent/80 rounded-t-lg"></div>
                  <motion.div
                    className="absolute top-2 left-1/2 transform -translate-x-1/2"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Star Rating di pojok kanan atas */}
              <motion.div
                className="absolute -top-6 -right-6 z-20 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1, type: "spring" }}
              >
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star, i) => (
                    <motion.div
                      key={star}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.2 + (i * 0.1) }}
                    >
                      <Star className="w-4 h-4 text-gold fill-gold" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Stars */}
              {Array.from({ length: 6 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute z-20"
                  style={{
                    left: i % 2 === 0 ? '-8%' : '108%',
                    top: `${20 + (i * 12)}%`,
                  }}
                  animate={{
                    x: [0, i % 2 === 0 ? 10 : -10, 0],
                    rotate: [0, 360],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3 + Math.random(),
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                >
                  <Star className="w-6 h-6 text-gold fill-gold" />
                </motion.div>
              ))}

              <motion.div
                whileHover={{ scale: 1.02, rotate: 2 }}
                className="polaroid relative z-10"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-accent to-primary rounded-lg overflow-hidden">
                  <img
                    src="/photos/nau_berEmpatVer2.jpg"
                    alt="Naura 4"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="w-full h-full hidden items-center justify-center bg-gradient-to-br from-accent to-primary">
                    <div className="text-center p-8">
                      <Gift className="w-16 h-16 text-white/50 mx-auto mb-4" />
                      <p className="text-white/80 text-sm">Foto 4</p>
                    </div>
                  </div>
                </div>
                <p className="text-center mt-4 font-pacifico text-xl text-accent">
                  Naura & Fren 💕
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={itemVariants} className="order-1 md:order-2">
            {/* Title Icons */}
            <div className="flex justify-center md:justify-start gap-4 mb-6">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Gift className="w-12 h-12 text-accent" />
              </motion.div>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-12 h-12 text-gold" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-12 h-12 text-accent fill-accent" />
              </motion.div>
            </div>

            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6 text-center md:text-left">
              HADIAH BUAT PINOKIO MANJA
              <span className="emoji-bounce ml-2">😝</span>
            </h1>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl space-y-4">
              <motion.div
                className="bg-gradient-to-r from-primary/30 to-accent/30 rounded-xl p-5 mt-6 border-2 border-accent/30"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-center text-base md:text-lg text-gray-800 mb-3">
                  Sekarang, aku punya sesuatu kecil buat kamu...
                  <span className="emoji-bounce inline-block ml-1">🎁</span>
                </p>
                <p className="text-center text-lg md:text-xl font-bold text-accent font-playfair">
                  Anggap aja ini bentuk penghargaan buat sosok yang selalu hadir 
                  dalam bentuk apapunnn
                </p>
                <p className="text-center text-base md:text-xl text-gray-700 mt-2">
                  <span className="font-bold text-accent text-2xl md:text-3xl block mb-2">
                    DALAM BENTUK KUDA, KODOK, PINOKIO, PERI, MUSANG
                  </span>
                  <span className="text-lg md:text-2xl font-semibold">
                    WKWKWKKWKKW
                  </span>
                  <span className="emoji-bounce inline-block ml-1 text-2xl md:text-3xl">🦄🐸🤥🧚‍♀️🦊</span>
                </p>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center gap-4 mt-8">
              <motion.button
                onClick={onPrev}
                className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition flex items-center gap-2 text-gray-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Kembali</span>
              </motion.button>

              <motion.button
                onClick={onNext}
                className="btn-primary text-lg flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Gift className="w-5 h-5" />
                <span>Buka Hadiah</span>
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  🎁
                </motion.span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
