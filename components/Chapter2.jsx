'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSwipeable } from 'react-swipeable'
import { ChevronLeft, ChevronRight, Camera, Smile, Heart } from 'lucide-react'

export default function Chapter2({ onNext, onPrev }) {
  const [currentPhoto, setCurrentPhoto] = useState(0)

  // Placeholder photos - user should replace with actual photos
  const photos = [
    { id: 1, caption: "Naura 💕" },
    { id: 2, caption: "Naura 💕" },
    { id: 3, caption: "Naura 💕" },
    { id: 4, caption: "Naura 💕" }
  ]

  const handlers = useSwipeable({
    onSwipedLeft: () => nextPhoto(),
    onSwipedRight: () => prevPhoto(),
    trackMouse: true
  })

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length)
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
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <Camera className="w-24 h-24 text-accent" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <Smile className="w-24 h-24 text-accent" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto"
      >
        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="font-playfair text-4xl md:text-6xl font-bold text-center mb-4 gradient-text"
        >
          JUST A LITTLE THING
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-center text-lg text-gray-700 mb-8 font-poppins"
        >
   
        </motion.p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Text Content */}
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
          >
            <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-800">
              Kalau mikir soal Nauraa, yang paling kek{' '}
              <span className="font-bold text-accent">memorable kwkw</span> itu justru hal-hal kecil tauu. 
              Kayak gaya kamu yang pasrah kalau minta tolong (udah kek orang mau di bom aja anjay
              <span className="emoji-bounce">😭😭</span>), 
              yang entah kenapa yaa bikin aku gampang inget terus wkwk{' '}
              <span className="text-sm">(JANGAN GE ER HUUU<span className="emoji-bounce">😝</span>)</span>.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-800">
              Atau momen pas km malu, pipinya merah dikit udah kek{' '}
              <span className="font-bold text-accent">termos mendidih kwkwkwk</span> ngakak{' '}
              <span className="emoji-bounce">🤣</span>
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-800">
              Terus ada sisi dewasa kamu yang aku suka kayak gak semua cewe jaman sekarang punya 
              pola pikir gini anjay, kayak kamu bisa serius kalau lagi bahas hal penting kayak 
              kedewasaan dll (kek{' '}
              <span className="font-bold text-accent">otak nya sung kek konekk gituu anjayy aowkaowkoakw</span>
              <span className="emoji-bounce">😭🤣</span>), 
              bisa dengerin tanpa motong pembicaraan, bisa ngasih pandangan yang bener bener mantapp 
              pas aku lagi bingung jadi kek{' '}
              <span className="font-bold text-accent">enak ajaa gituu</span> ngobrol sama kamu 
              dan sering bikin aku sadar, &ldquo;oh, gini ya rasanya ngobrol sama orang yang dewasaa pemikiran nyaa...&rdquo; 
              <span className="emoji-bounce">💭</span>
            </p>

            {/* Emoji Row */}
            <motion.div
              className="flex justify-center gap-4 mt-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
            >
              <motion.span
                className="text-3xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💕
              </motion.span>
              <motion.span
                className="text-3xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ✨
              </motion.span>
              <motion.span
                className="text-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              >
                😊
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Photo Slideshow */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
              <div {...handlers} className="relative">
                {/* Photo Container */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-primary to-accent rounded-2xl overflow-hidden mb-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPhoto}
                      initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <img
                        src={`/photos/naura-${currentPhoto + 1}.jpg`}
                        alt={photos[currentPhoto].caption}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                      <div className="w-full h-full hidden items-center justify-center bg-gradient-to-br from-lightPink to-primary">
                        <div className="text-center p-8">
                          <Camera className="w-20 h-20 text-white/50 mx-auto mb-4" />
                          <p className="text-white font-poppins text-lg">
                            Foto {currentPhoto + 1}
                          </p>
                          <p className="text-sm text-white/80 mt-2">
                            {photos[currentPhoto].caption}
                          </p>
                          <p className="text-xs text-white/60 mt-4">
                            📸 Taruh foto di: public/photos/naura-{currentPhoto + 1}.jpg
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevPhoto}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition"
                  >
                    <ChevronLeft className="w-6 h-6 text-accent" />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition"
                  >
                    <ChevronRight className="w-6 h-6 text-accent" />
                  </button>
                </div>

                {/* Photo Caption */}
                <motion.p
                  key={currentPhoto}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center font-pacifico text-xl text-accent mb-4"
                >
                  {photos[currentPhoto].caption}
                </motion.p>

                {/* Photo Indicators */}
                <div className="flex justify-center gap-2">
                  {photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPhoto(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentPhoto
                          ? 'bg-accent w-8'
                          : 'bg-primary/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Swipe Hint */}
                <p className="text-center text-sm text-gray-500 mt-4">
                  👆 Swipe atau klik panah untuk lihat foto lainnya
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex justify-between items-center mt-8 gap-4"
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

          <motion.button
            onClick={onNext}
            className="btn-primary text-lg flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Bab Berikutnya</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}
