'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Trophy, Star, Heart, CheckCircle2, XCircle } from 'lucide-react'

export default function QuizModal({ isOpen, onClose }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)

  // Customize these questions based on your memories with Naura
  const questions = [
    {
      question: "Apa yang paling sering bikin Naura ketawa?",
      options: [
        "Joke random yang garing",
        "Momen awkward orang lain",
        "Video lucu di social media",
        "Kelakuan lucu temen-temen"
      ],
      correct: 0,
      emoji: "😂"
    },
    {
      question: "Ekspresi Naura saat minta tolong itu kayak gimana?",
      options: [
        "Santai aja",
        "Pasrah total sambil puppy eyes",
        "Agresif demanding",
        "Malu-malu tapi nekat"
      ],
      correct: 1,
      emoji: "🥺"
    },
    {
      question: "Warna yang paling cocok buat Naura?",
      options: [
        "Pink (obviously!)",
        "Biru menenangkan",
        "Merah berani",
        "Kuning ceria"
      ],
      correct: 0,
      emoji: "💕"
    },
    {
      question: "Topik obrolan favorit sama Naura?",
      options: [
        "Gossip terbaru",
        "Masa depan dan kehidupan",
        "Kuliner enak",
        "Drama series"
      ],
      correct: 1,
      emoji: "💭"
    },
    {
      question: "Reaksi Naura kalau dapat pujian?",
      options: [
        "Langsung GR maksimal",
        "Malu-malu dan pipinya merah",
        "Cuek aja",
        "Bales dengan joke"
      ],
      correct: 1,
      emoji: "😊"
    }
  ]

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex)
    setShowResult(true)

    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1)
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setShowResult(false)
      } else {
        setQuizComplete(true)
      }
    }, 1500)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setQuizComplete(false)
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage === 100) return "PERFECT! Kamu emang paling ngerti Naura! 🏆"
    if (percentage >= 80) return "HEBAT! Kamu kenal Naura dengan baik! 🌟"
    if (percentage >= 60) return "BAGUS! Masih banyak yang bisa dipelajari! 💕"
    return "EITSS! Kayaknya perlu lebih banyak quality time nih! 😄"
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="quiz-modal fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl relative overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>

          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary to-accent opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent to-primary opacity-10 rounded-full translate-y-1/2 -translate-x-1/2" />

          {!quizComplete ? (
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  animate={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-6xl mb-4"
                >
                  {questions[currentQuestion].emoji}
                </motion.div>
                <h2 className="font-playfair text-3xl font-bold text-accent mb-2">
                  Quiz Kenangan
                </h2>
                <p className="text-gray-600">
                  Pertanyaan {currentQuestion + 1} dari {questions.length}
                </p>
                <div className="flex gap-2 justify-center mt-3">
                  {questions.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 rounded-full transition-all ${
                        index === currentQuestion
                          ? 'w-8 bg-accent'
                          : index < currentQuestion
                          ? 'w-2 bg-green-400'
                          : 'w-2 bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Question */}
              <motion.div
                key={currentQuestion}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="mb-6"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 text-center mb-6">
                  {questions[currentQuestion].question}
                </h3>

                {/* Options */}
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => !showResult && handleAnswer(index)}
                      disabled={showResult}
                      whileHover={!showResult ? { scale: 1.02 } : {}}
                      whileTap={!showResult ? { scale: 0.98 } : {}}
                      className={`w-full p-4 rounded-xl text-left font-poppins transition-all ${
                        showResult
                          ? index === questions[currentQuestion].correct
                            ? 'bg-green-100 border-2 border-green-500 text-green-800'
                            : index === selectedAnswer
                            ? 'bg-red-100 border-2 border-red-500 text-red-800'
                            : 'bg-gray-100 text-gray-600'
                          : 'bg-gray-50 hover:bg-primary/30 border-2 border-transparent hover:border-accent'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {showResult && index === questions[currentQuestion].correct && (
                          <CheckCircle2 className="w-6 h-6 text-green-600" />
                        )}
                        {showResult && index === selectedAnswer && index !== questions[currentQuestion].correct && (
                          <XCircle className="w-6 h-6 text-red-600" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Score */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full">
                  <Star className="w-5 h-5 fill-white" />
                  <span className="font-semibold">Skor: {score}</span>
                </div>
              </div>
            </div>
          ) : (
            // Quiz Complete
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-center relative z-10"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-8xl mb-6"
              >
                🎉
              </motion.div>

              <h2 className="font-playfair text-4xl font-bold text-accent mb-4">
                Quiz Selesai!
              </h2>

              <div className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-8 mb-6">
                <Trophy className="w-16 h-16 mx-auto mb-4" />
                <p className="text-5xl font-bold mb-2">
                  {score}/{questions.length}
                </p>
                <p className="text-xl">{getScoreMessage()}</p>
              </div>

              <div className="flex gap-4 justify-center">
                <motion.button
                  onClick={resetQuiz}
                  className="bg-gradient-to-r from-accent to-primary text-white px-8 py-3 rounded-full font-semibold shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Main Lagi! 🔄
                </motion.button>
                <motion.button
                  onClick={onClose}
                  className="bg-white border-2 border-accent text-accent px-8 py-3 rounded-full font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Tutup
                </motion.button>
              </div>

              {/* Confetti */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 30 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-2xl"
                    initial={{ y: 0, x: '50%', opacity: 1 }}
                    animate={{
                      y: [0, -300],
                      x: `${Math.random() * 100}%`,
                      opacity: [1, 0],
                      rotate: Math.random() * 360
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                  >
                    {['🎉', '🎊', '✨', '💕', '🎁'][Math.floor(Math.random() * 5)]}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
