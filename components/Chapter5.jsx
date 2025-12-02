'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, Gift, Sparkles, Heart, Star } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function Chapter5({ onPrev }) {
  const [showQRIS, setShowQRIS] = useState(false)

  const handleGiftClick = () => {
    setShowQRIS(true)
    
    // Confetti colorful yang meriah tapi tidak berlebihan
    const duration = 2.5 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 40 * (timeLeft / duration)
      
      // Confetti shapes campuran
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#FFD700', '#FF69B4', '#87CEEB', '#98FB98', '#DDA0DD', '#F0E68C'],
        shapes: ['circle', 'square']
      })
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#FFD700', '#FF69B4', '#87CEEB', '#98FB98', '#DDA0DD', '#F0E68C'],
        shapes: ['circle', 'square']
      })
    }, 250)

    // Emoji confetti (lebih sedikit, tidak berlebihan)
    const scalar = 2
    const emojis = ['🎉', '🎊', '🎁', '💝', '✨', '💕', '🎈']
    
    const emojiInterval = setInterval(function() {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(emojiInterval)
      }

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FFD700', '#FF69B4'],
        shapes: emojis,
        scalar
      })
      
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FFD700', '#FF69B4'],
        shapes: emojis,
        scalar
      })
    }, 400)
  }

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

  const giftVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
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
      <motion.div className="absolute top-16 left-12 opacity-20" animate={{ y: [0, -15, 0], rotate: [0, 20, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
        <Gift className="text-gold" size={34} />
      </motion.div>
      <motion.div className="absolute top-20 right-16 opacity-20" animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
        <Gift className="text-accent" size={30} />
      </motion.div>
      <motion.div className="absolute bottom-24 left-16 opacity-20" animate={{ x: [0, 12, 0], y: [0, -8, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
        <Heart className="text-accent" size={28} fill="currentColor" />
      </motion.div>
      <motion.div className="absolute bottom-28 right-20 opacity-20" animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
        <Star className="text-gold" size={26} fill="currentColor" />
      </motion.div>
      <motion.div className="absolute top-1/3 left-16 opacity-15" animate={{ y: [0, 10, 0], rotate: [0, -25, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}>
        <Sparkles className="text-accent" size={24} />
      </motion.div>


      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl mx-auto w-full relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-8">
          <h1 className="font-playfair text-3xl md:text-5xl font-bold gradient-text mb-4 whitespace-nowrap">
            🎉 Selamat Naurawrr! 🎉
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-pacifico">
            Dapet ShopeePay 30K
          </p>
        </motion.div>

        {/* Gift Reveal */}
        {!showQRIS ? (
          <motion.div
            key="gift"
            variants={giftVariants}
            className="flex justify-center py-8"
          >
            <motion.button
              onClick={handleGiftClick}
              className="group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, -5, 5, -5, 0],
                  y: [0, -10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-gradient-to-br from-accent to-primary p-16 rounded-3xl shadow-2xl"
              >
                <Gift className="w-32 h-32 text-white" />
              </motion.div>
              <motion.p 
                className="text-2xl font-bold text-accent mt-6 text-center"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Klik untuk Buka Hadiah
              </motion.p>
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="qris"
            initial={{ scale: 0, opacity: 0, rotate: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="space-y-6"
          >
            {/* QRIS Card */}
            <motion.div
              style={{ rotate: 0 }}
              className="bg-gradient-to-br from-white to-lightPink rounded-3xl p-8 md:p-12 border-4 border-gold shadow-2xl"
              animate={{ 
                boxShadow: [
                  '0 0 30px rgba(255, 215, 0, 0.3)',
                  '0 0 60px rgba(255, 215, 0, 0.6)',
                  '0 0 30px rgba(255, 215, 0, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex justify-center mb-6">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Gift className="w-16 h-16 text-gold fill-gold" />
                </motion.div>
              </div>

              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-center text-accent mb-8">
                🎉 BUAT NAURAA JAJAN YA🥳
              </h3>

              {/* ShopeePay Link Button */}
              <div className="bg-white rounded-2xl p-8 mb-6 shadow-inner">
                <div className="max-w-md mx-auto">
                  <a 
                    href="https://app.shopeepay.co.id/u/5LnustmkvxDaiEpMCVBHE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-center cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="text-white mb-4">
                        <Gift className="w-20 h-20 mx-auto mb-4" />
                        <p className="text-2xl font-bold mb-2">Klaim ShopeePay 30K</p>
                        <p className="text-lg opacity-90">Tap untuk buka link ShopeePay</p>
                      </div>
                    </motion.div>
                  </a>
                </div>
              </div>

              {/* Final Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl p-6 text-center"
              >
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-4">
                  Semoga hari Tuan Putri Naura jadi lebih semangat lagi hari-hari kedepannya 
                  dan jadi powerfull YAAAAA
                </p>

                <p className="text-2xl md:text-3xl font-playfair font-bold text-accent mb-4">
                  Dan selamat ulang tahun, Naura
                </p>

                <p className="text-lg md:text-xl leading-relaxed text-gray-800">
                  Semoga juga cerita Naura ke depan dipenuhi hal-hal baik, 
                  dikelilingin orang hebat, dan yang paling penting
                  HARUS BAHAGIA N HAPPY SELALU YA NAU NAU UNYU
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {/* Navigation Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex justify-between items-center gap-4 mt-8"
        >
          <motion.button
            onClick={onPrev}
            className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition flex items-center gap-2 text-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Kembali</span>
          </motion.button>


        </motion.div>
      </motion.div>
    </div>
  )
}
