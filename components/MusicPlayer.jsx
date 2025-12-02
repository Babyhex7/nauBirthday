'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Music } from 'lucide-react'

export default function MusicPlayer({ isPlaying, setIsPlaying }) {
  const audioRef = useRef(null)

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause()
          setIsPlaying(false)
        } else {
          await audioRef.current.play()
          setIsPlaying(true)
        }
      } catch (error) {
        console.log('Audio play error:', error)
        setIsPlaying(false)
      }
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = 0.4 // Set volume to 40%
      
      // Auto-play musik setelah component mount
      const playMusic = async () => {
        try {
          await audio.play()
          setIsPlaying(true)
        } catch (error) {
          console.log('Auto-play blocked, user interaction needed:', error)
          setIsPlaying(false)
        }
      }

      // Delay sedikit biar smooth
      const timer = setTimeout(playMusic, 500)
      
      // Handle audio events
      const handleEnded = () => setIsPlaying(false)
      const handlePause = () => setIsPlaying(false)
      const handlePlay = () => setIsPlaying(true)
      
      audio.addEventListener('ended', handleEnded)
      audio.addEventListener('pause', handlePause)
      audio.addEventListener('play', handlePlay)
      
      return () => {
        clearTimeout(timer)
        audio.removeEventListener('ended', handleEnded)
        audio.removeEventListener('pause', handlePause)
        audio.removeEventListener('play', handlePlay)
      }
    }
  }, [setIsPlaying])

  return (
    <>
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/music/happy-birthday-254480.mp3" type="audio/mpeg" />
      </audio>

      {/* Simple Floating Music Control - Pojok Kanan Atas */}
      <motion.div
        className="fixed top-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
      >
        <motion.button
          onClick={togglePlay}
          className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={isPlaying ? { rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] } : {}}
            transition={isPlaying ? { duration: 0.5, repeat: Infinity } : {}}
          >
            <Music className="w-6 h-6 text-accent" />
          </motion.div>

          {/* Playing Animation Ring */}
          {isPlaying && (
            <motion.div
              className="absolute inset-0 border-2 border-accent rounded-full"
              animate={{ scale: [1, 1.2], opacity: [0.6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
        </motion.button>
      </motion.div>
    </>
  )
}
