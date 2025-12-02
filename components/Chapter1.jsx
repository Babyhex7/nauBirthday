'use client'

import { motion } from 'framer-motion'
import { Sparkles, Heart, Star } from 'lucide-react'

export default function Chapter1({ onNext }) {
  const confettiItems = Array.from({ length: 30 }, (_, i) => i)

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
      {/* Confetti Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {confettiItems.map((i) => (
          <div
            key={i}
            className="confetti absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${12 + Math.random() * 16}px`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {['🎉', '🎊', '✨', '💕', '🎂', '🎈'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      {/* Floating Decorative Icons */}
      <motion.div className="absolute top-10 left-10 opacity-20" animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
        <Heart className="text-accent" size={30} fill="currentColor" />
      </motion.div>
      <motion.div className="absolute top-20 right-16 opacity-20" animate={{ y: [0, 12, 0], rotate: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
        <Star className="text-gold" size={28} fill="currentColor" />
      </motion.div>
      <motion.div className="absolute bottom-24 left-16 opacity-20" animate={{ x: [0, 10, 0], rotate: [0, 20, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
        <Sparkles className="text-accent" size={26} />
      </motion.div>
      <motion.div className="absolute bottom-32 right-20 opacity-20" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}>
        <Heart className="text-accent" size={24} fill="currentColor" />
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
              <motion.div
                whileHover={{ scale: 1.02, rotate: 2 }}
                className="polaroid"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-primary to-accent rounded-lg overflow-hidden">
                  <img
                    src="/photos/nau_cantik1.jpg"
                    alt="Naura 1"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="w-full h-full hidden items-center justify-center bg-gradient-to-br from-lightPink to-primary">
                    <div className="text-center p-8">
                      <Sparkles className="w-16 h-16 text-white/50 mx-auto mb-4" />
                      <p className="text-white/80 text-sm">Foto 1</p>
                    </div>
                  </div>
                </div>
                <p className="text-center mt-4 font-pacifico text-xl text-accent">
                  💕 Nau Nauu 💕
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={itemVariants} className="order-1 md:order-2">
            {/* Header Icons */}
            <div className="flex justify-center md:justify-start gap-4 mb-6">
              <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <Sparkles className="w-10 h-10 text-accent" />
              </motion.div>
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <Heart className="w-10 h-10 text-accent fill-accent" />
              </motion.div>
              <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <Star className="w-10 h-10 text-gold fill-gold" />
              </motion.div>
            </div>

            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6 text-center md:text-left">
              Si CLINGY YANG LUCU
            </h1> 


            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl space-y-4">
              <p className="text-base md:text-lg leading-relaxed text-gray-800">
                 <b>HARII INII</b> gatau kenapa kerasa happy and senangg bangett bukan karena dapet duit banyak kwkw apalagi kaena dapet projek gede BUTTT karena ada seseorang 
                yang sekarangg lagi punya momen <span className="font-bold text-accent">SUPER DUPERR SPESIALL (bukan mie ayam yaa wkwkw)</span>. 
                Dan yapp itu adalah hari iniii <span className="emoji-bounce inline-block">😎</span>
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-800">
                Dia itu adalah sosok perempuan yang <span className="font-bold text-accent">kocak wkkw</span>, 
                <span className="font-bold text-accent"> cantikkk sekalii</span>, 
                <span className="font-bold text-accent"> baikk</span> serta sosok yang udah kek 
                <span className="font-bold text-accent"> keibuann bangett anjay</span>, 
                yaapp orang itu adalahh...
              </p>

              <p className="font-playfair text-2xl md:text-3xl font-bold gradient-text text-center py-2">
                Naura Rasendrya Rega
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-800">
                Naura yang mungkin sering bilang dirinya biasa aja, padahal ya nggak gitu juga wkkw. 
                Ada sesuatu dari cara Naura ngomong, jalan, ketawa, bahkan cara Naura diem ajaa tuhh 
                kek apaa yaa kayak yang bikin aku (dan mungkin orang lain juga) merhatiin Itu tuh kayak 
                <span className="font-bold text-accent"> aura yang nggak bisa dijelasin sebenrnyaa</span>, 
                tapi kayak seolah olah <span className="font-bold text-accent">kerasa amann dan hangatt banget</span>. 
                <span className="emoji-bounce inline-block ml-1">💕</span>
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-800">
                Jadi ya wajar kalau hari ini aku ngerasa lebih hangat n calming bangett dari biasanya 
                anjay calming gak tuh wkwk. Bukan karena ada acara apa-apa, tapi karena 
                <span className="font-bold text-accent"> sosokk kamuu Nauu </span>. <span>HUU UDAH TUAA KWKWK</span>
                <span className="emoji-bounce inline-block ml-1">✨</span>
              </p>
            </div>

            <motion.button
              onClick={onNext}
              className="mt-8 w-full md:w-auto btn-primary text-lg flex items-center justify-center gap-3 mx-auto md:mx-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Lanjut Ceritanya Yuk!
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
