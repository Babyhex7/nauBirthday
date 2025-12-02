'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, Cake, Sparkles, Crown, Star, Heart } from 'lucide-react'

export default function Chapter3({ onNext, onPrev }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  // Birthday candles animation
  const candles = Array.from({ length: 5 }, (_, i) => i)

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
      {/* Sparkle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="sparkle absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${12 + Math.random() * 12}px`
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>
      
      {/* Floating Icons */}
      <motion.div className="absolute top-16 left-12 opacity-20" animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
        <Crown className="text-gold" size={32} />
      </motion.div>
      <motion.div className="absolute top-20 right-16 opacity-20" animate={{ scale: [1, 1.15, 1], rotate: [0, -10, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
        <Heart className="text-accent" size={28} fill="currentColor" />
      </motion.div>
      <motion.div className="absolute bottom-24 left-16 opacity-20" animate={{ y: [0, 12, 0], x: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
        <Star className="text-gold" size={26} fill="currentColor" />
      </motion.div>
      <motion.div className="absolute bottom-32 right-20 opacity-15" animate={{ rotate: [0, 20, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}>
        <Sparkles className="text-accent" size={24} />
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
              {/* Crown Sticker di pojok kanan atas */}
              <motion.div
                className="absolute -top-6 -right-6 z-20"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, type: "spring", bounce: 0.6 }}
              >
                <div className="relative">
                  <Crown className="w-16 h-16 text-gold fill-gold drop-shadow-lg" />
                  <motion.div
                    className="absolute inset-0"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Crown className="w-16 h-16 text-gold fill-gold blur-sm" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Sparkle Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-lg z-10"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(255, 215, 0, 0.3)',
                    '0 0 40px rgba(255, 215, 0, 0.5)',
                    '0 0 20px rgba(255, 215, 0, 0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Floating Sparkles */}
              {Array.from({ length: 8 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-2xl z-20"
                  style={{
                    left: `${10 + (i * 15)}%`,
                    top: i % 2 === 0 ? '-5%' : '105%',
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.6, 1, 0.6],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2 + Math.random(),
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  ✨
                </motion.div>
              ))}

              <motion.div
                whileHover={{ scale: 1.02, rotate: -2 }}
                className="polaroid relative z-10"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-gold/20 to-accent rounded-lg overflow-hidden">
                  <img
                    src="/photos/nau_rajin.jpg"
                    alt="Naura 3"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="w-full h-full hidden items-center justify-center bg-gradient-to-br from-gold/20 to-accent">
                    <div className="text-center p-8">
                      <Crown className="w-16 h-16 text-white/50 mx-auto mb-4" />
                      <p className="text-white/80 text-sm">Foto 3</p>
                    </div>
                  </div>
                </div>
                <p className="text-center mt-4 font-pacifico text-xl text-accent">
                  Nauu Si Deadlinerr 😝😜😜
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={itemVariants} className="order-1 md:order-2">
            {/* Crown Icon */}
            <div className="flex justify-center md:justify-start mb-6">
              <motion.div
                animate={{ 
                  rotate: [0, -5, 5, -5, 0],
                  y: [0, -10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Crown className="w-16 h-16 text-gold fill-gold" />
              </motion.div>
            </div>

            {/* Title */}
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6 text-center md:text-left">
              THE STRONGER WOMAN
            </h1>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl space-y-4">
              <p className="text-base md:text-lg leading-relaxed text-gray-800">
                Dan yapp tepat pada hari inii{' '}
                <span className="font-bold text-accent text-xl">3 Desember 2025</span>{' '}
                sesosok hebat ituu sekarang bertambah umur untuk terus menuju{' '}
                <span className="font-bold text-accent">kedewasaaan nya</span>{' '}
                <span className="emoji-bounce inline-block">😇</span> dan buat aku, ini bukan cuma soal umur atau angkaa, tpi
                Ini soal sejauh apa nauraa udah berkembang jadi sosok yang sekarangg sosok yang memiliki{' '}
                <span className="font-bold text-accent">jiwa kemanusiaan yang memang jarang ditemui</span>{' '}
                di orang orang jaman sekarang nauu <span className="text-sm">(SUMPAH KWKW)</span>
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-800">
                Banyak orang mungkin nggak sadar, tapi sebenrnya kamu itu tipe orang yang sebenrnya yaa{' '}
                <span className="font-bold text-accent">kehadirannya bisa bikin suasana jadi kayakk lebih baik gituu</span>{' '}
                tanpa harus ngomong panjang lebar, kayak punya energi positif ajaa gitu{' '}
                <span className="text-sm">(WALAU KADANG NYEBELIN YA)</span>{' '}
                <span className="emoji-bounce inline-block">😝</span>
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-800">
                Yaa Aku harap langkah-langkah Naura ke depan{' '}
                <span className="font-bold text-accent">makin mantapp dehh cihuyy</span>. 
                Semoga makin percaya diri, makin ketemu hal-hal yang bikin kamu happy, dan makin jarang 
                ngerasa capek sendirian (karena ada bagas<span className="emoji-bounce inline-block">😎</span> ANJAYY, 
                BECANDAA,beneran gpp cii kwkw<span className="emoji-bounce inline-block">🤣</span>).
              </p>

              <motion.div
                className="bg-gradient-to-r from-primary/30 to-accent/30 rounded-xl p-4 mt-6 border-2 border-accent/30"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <p className="text-center text-sm md:text-base text-gray-800 mb-2">
                  Dan aku mau titip harapan buat si tuan putri kecill nihh <span className="emoji-bounce inline-block">😌</span>
                </p>
                <p className="text-center text-lg md:text-xl font-bold text-accent font-playfair">
                  Semoga Tuan Putri Manja Yang Palingg CANTIKK satu iniii 
                  MAKINN GIATT BELAJARRRR YAAA WKKWKWKW
                </p>
                <p className="text-center text-base md:text-lg font-bold mt-2 gradient-text">
                  BE YOURSELF N BE YOUR OWN 😎😎🔥
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
                <Sparkles className="w-5 h-5" />
                <span>Dikitt lagii yukk</span>
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
