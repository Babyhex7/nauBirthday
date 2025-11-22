'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Music, Volume2, VolumeX } from 'lucide-react'

export default function MusicPlayer({ isPlaying, setIsPlaying }) {
  const [isMuted, setIsMuted] = useState(false)
  const [showControl, setShowControl] = useState(false)
  const audioRef = useRef(null)

  // You can add your music file to public/music/birthday-song.mp3
  // Recommended: "A Thousand Years" - Christina Perri or any romantic instrumental

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3 // Set volume to 30%
    }
  }, [])

  return (
    <>
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        {/* Add your music file path here */}
        <source src="/music/birthday-song.mp3" type="audio/mpeg" />
      </audio>

      {/* Music Player Control */}
      <motion.div
        className="music-player group"
        onMouseEnter={() => setShowControl(true)}
        onMouseLeave={() => setShowControl(false)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <motion.button
          onClick={togglePlay}
          className="relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={isPlaying ? { rotate: 360 } : {}}
            transition={isPlaying ? { duration: 3, repeat: Infinity, ease: "linear" } : {}}
          >
            {isPlaying ? (
              <Music className="w-8 h-8 text-accent" />
            ) : (
              <Play className="w-8 h-8 text-accent" />
            )}
          </motion.div>

          {/* Playing Animation */}
          {isPlaying && (
            <motion.div
              className="absolute -inset-2 border-2 border-accent rounded-full"
              animate={{ scale: [1, 1.3], opacity: [0.8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
        </motion.button>

        {/* Expanded Controls */}
        <AnimatePresence>
          {showControl && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-3"
            >
              <button
                onClick={toggleMute}
                className="hover:scale-110 transition"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-gray-600" />
                ) : (
                  <Volume2 className="w-5 h-5 text-accent" />
                )}
              </button>
              <span className="text-sm font-poppins text-gray-600">
                {isPlaying ? 'Playing' : 'Paused'}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Music Info Tooltip */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-20 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg"
          >
            <p className="text-sm font-poppins text-gray-700 flex items-center gap-2">
              <Music className="w-4 h-4 text-accent" />
              Nyalakan musik? 🎵
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
