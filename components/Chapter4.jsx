'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, Gift, Sparkles, Heart } from 'lucide-react'

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
                Tau gak sihh? Di dunia ini ada banyak orang yang datang dan pergi, 
                tapi nggak semua orang ninggalin{' '}
                <span className="font-bold text-accent">kesan yang bikin kangen</span>.
                <span className="emoji-bounce inline-block ml-1">💭</span>
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-800">
                Nauu, kamu termasuk yang susah dilupain lho. Bukan karena Naura ribet 
                atau gimana yaa, tapi karena{' '}
                <span className="font-bold text-accent">cara Naura ada</span> itu beda. 
                Kayak ada <span className="font-bold text-accent">kehangatan khusus</span> yang 
                ngebuat orang di sekitar Naura merasa… nyaman aja gitu.
                <span className="emoji-bounce inline-block ml-1">☀️</span>
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-800">
                Dan aku mau bilang terima kasih, Nau. Buat semua momen-momen kecil yang 
                mungkin kamu nggak sadar tapi sangat{' '}
                <span className="font-bold text-accent">berarti banget</span>. 
                Buat semua tawa, cerita, bahkan hening yang kadang lebih bercerita dari 
                seribu kata wkwk.
                <span className="emoji-bounce inline-block ml-1">💕</span>
              </p>

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
                <p className="text-center text-sm md:text-base text-gray-700 mt-2">
                  <span className="font-bold text-accent">
                    DALAM BENTUK KUDA, KODOK, PINOKIO, PERI, MUSANG
                  </span>{' '}
                  WKWKWKKWKKW
                  <span className="emoji-bounce inline-block ml-1">🦄🐸🤥🧚‍♀️🦊</span>
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
