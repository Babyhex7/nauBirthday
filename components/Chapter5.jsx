'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, Gift, Sparkles, Trophy, Download } from 'lucide-react'

export default function Chapter5({ onPrev }) {
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
        className="max-w-2xl mx-auto w-full relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-8">
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, -10, 10, -10, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center mb-6"
          >
            <div className="bg-gradient-to-br from-gold to-accent p-8 rounded-full shadow-2xl">
              <Gift className="w-20 h-20 text-white" />
            </div>
          </motion.div>

          <h1 className="font-playfair text-5xl md:text-7xl font-bold gradient-text mb-4">
            Hadiah Spesial Untukmu
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-pacifico">
            Klik kotak hadiah di bawah untuk membuka kejutan
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
                  <Trophy className="w-16 h-16 text-gold fill-gold" />
                </motion.div>
              </div>

              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-center text-accent mb-8">
                Hadiah Spesial Untukmu
              </h3>

              {/* QRIS Code */}
              <div className="bg-white rounded-2xl p-8 mb-6 shadow-inner">
                <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center overflow-hidden">
                  <img
                    src="/qris-50k.png"
                    alt="QRIS 50k"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="hidden flex-col items-center justify-center text-center p-8">
                    <Sparkles className="w-24 h-24 text-accent mx-auto mb-4" />
                    <p className="text-gray-600 font-poppins text-xl mb-2">QRIS Code</p>
                    <p className="text-4xl font-bold text-accent mt-2">IDR 50.000</p>
                    <p className="text-sm text-gray-500 mt-4">💳 Taruh QRIS di: public/qris-50k.png</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl p-6 mb-6 border-2 border-accent/30">
                <p className="text-center text-2xl font-bold text-accent">Nominal: Rp 50.000</p>
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
