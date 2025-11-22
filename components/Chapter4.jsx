'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, Gift, Sparkles, Heart, Trophy } from 'lucide-react'

export default function Chapter4({ onPrev, onQuiz }) {
  const [showQRIS, setShowQRIS] = useState(false)

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

  // Confetti burst
  const confettiItems = Array.from({ length: 50 }, (_, i) => i)

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-6 relative overflow-hidden">
      {/* Confetti Celebration */}
      {showQRIS && (
        <div className="absolute inset-0 pointer-events-none">
          {confettiItems.map((i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ 
                x: '50vw', 
                y: '50vh',
                scale: 0
              }}
              animate={{ 
                x: `${Math.random() * 100}vw`,
                y: `${Math.random() * 100}vh`,
                scale: 1,
                rotate: Math.random() * 720
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
                delay: Math.random() * 0.3
              }}
              style={{ fontSize: `${16 + Math.random() * 16}px` }}
            >
              {['🎉', '🎊', '✨', '💕', '🎁', '💖'][Math.floor(Math.random() * 6)]}
            </motion.div>
          ))}
        </div>
      )}

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
              <motion.div
                whileHover={{ scale: 1.02, rotate: 2 }}
                className="polaroid"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-accent to-primary rounded-lg overflow-hidden">
                  <img
                    src="/photos/naura-4.jpg"
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
                  Pinokio Manja 🎁💕
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
              <p className="text-base md:text-lg leading-relaxed text-gray-800">
                Di halaman ini, ada satu kejutan kecil buat kamuu kwkwk sesuatu yang aku siapin biar 
                Naura senyum sambil bilang,{' '}
                <span className="font-bold text-accent">"apaan sih ini… ngakak anjirr😭💗"</span> wkwk.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-800">
                Anggap aja ini bentuk penghargaan kecil buat sosok yang selalu hadir dalam bentuk apapunnn{' '}
                <span className="font-bold text-accent">
                  DALAM BENTUK KUDA, KODOK, PINOKIO, PERI, MUSANG
                </span>{' '}
                WKWKWKKWKKW
                <span className="emoji-bounce ml-2">🦄🐸🤥🧚‍♀️🦊</span>
              </p>

              {/* Gift Reveal Button */}
              {!showQRIS ? (
                <motion.div
                  variants={giftVariants}
                  className="flex justify-center py-4"
                >
                  <motion.button
                    onClick={() => setShowQRIS(true)}
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
                      className="bg-gradient-to-br from-accent to-primary p-10 rounded-3xl shadow-2xl"
                    >
                      <Gift className="w-24 h-24 text-white" />
                    </motion.div>
                    <p className="text-lg font-bold text-accent mt-4 text-center">
                      Klik untuk Buka Hadiah! 🎁
                    </p>
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="space-y-4"
                >
                  {/* QRIS Card */}
                  <div className="bg-gradient-to-br from-white to-lightPink rounded-2xl p-6 border-4 border-gold shadow-xl">
                    <div className="flex justify-center mb-3">
                      <Trophy className="w-10 h-10 text-gold fill-gold" />
                    </div>

                    <h3 className="text-xl md:text-2xl font-playfair font-bold text-center text-accent mb-4">
                      Hadiah Spesial Untukmu! 🎁
                    </h3>

                    {/* QRIS Code */}
                    <div className="bg-white rounded-xl p-4 mb-3 shadow-inner">
                      <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center overflow-hidden">
                        <img
                          src="/qris-50k.png"
                          alt="QRIS 50k"
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'flex'
                          }}
                        />
                        <div className="hidden flex-col items-center justify-center text-center p-6">
                          <Sparkles className="w-16 h-16 text-accent mx-auto mb-3" />
                          <p className="text-gray-600 font-poppins">QRIS Code</p>
                          <p className="text-2xl font-bold text-accent mt-2">IDR 50.000</p>
                          <p className="text-xs text-gray-500 mt-3">💳 Taruh QRIS di: public/qris-50k.png</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-accent/10 rounded-lg p-3 mb-3">
                      <p className="text-center text-base font-semibold text-accent">💰 Nominal: Rp 50.000</p>
                    </div>

                    <p className="text-sm md:text-base leading-relaxed text-gray-800 text-center">
                      Semoga hari Tuan Putri Naura jadi lebih{' '}
                      <span className="font-bold text-accent">semangatt lagii</span> dan jadii{' '}
                      <span className="font-bold text-accent">powerfull</span> YAAAAA
                      <span className="emoji-bounce ml-1">💪✨</span>
                    </p>

                    <p className="text-base md:text-lg font-playfair font-bold text-accent text-center mt-3">
                      Dan… selamat ulang tahun, Naura! 🎂
                    </p>
                  </div>
                </motion.div>
              )}
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
                onClick={onQuiz}
                className="btn-primary text-lg flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Trophy className="w-5 h-5" />
                <span>Quiz Time!</span>
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  🎯
                </motion.span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
