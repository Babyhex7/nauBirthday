"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LandingPage from "@/components/LandingPage";
import Chapter1 from "@/components/Chapter1";
import Chapter2 from "@/components/Chapter2";
import Chapter3 from "@/components/Chapter3";
import Chapter4 from "@/components/Chapter4";
import MusicPlayer from "@/components/MusicPlayer";
import PageIndicator from "@/components/PageIndicator";
import QuizModal from "@/components/QuizModal";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(-1); // Start at landing
  const [direction, setDirection] = useState(1);
  const [showQuiz, setShowQuiz] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const chapters = [
    <Chapter1 key="chapter1" onNext={() => handlePageChange(1)} />,
    <Chapter2
      key="chapter2"
      onNext={() => handlePageChange(2)}
      onPrev={() => handlePageChange(0)}
    />,
    <Chapter3
      key="chapter3"
      onNext={() => handlePageChange(3)}
      onPrev={() => handlePageChange(1)}
    />,
    <Chapter4
      key="chapter4"
      onPrev={() => handlePageChange(2)}
      onQuiz={() => setShowQuiz(true)}
    />,
  ];

  const handlePageChange = (newPage) => {
    setDirection(newPage > currentPage ? 1 : -1);
    setCurrentPage(newPage);
  };

  const pageVariants = {
    enter: (direction) => ({
      rotateY: direction > 0 ? -90 : 90,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const transition = {
    duration: 0.8,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  // Floating hearts background
  const FloatingHearts = () => {
    const hearts = Array.from({ length: 15 }, (_, i) => i);
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {hearts.map((i) => (
          <div
            key={i}
            className="heart-float absolute text-2xl opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            💗
          </div>
        ))}
      </div>
    );
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      {currentPage >= 0 && <FloatingHearts />}

      {currentPage >= 0 && (
        <PageIndicator currentPage={currentPage} totalPages={4} />
      )}

      <MusicPlayer
        isPlaying={isMusicPlaying}
        setIsPlaying={setIsMusicPlaying}
      />

      <AnimatePresence initial={false} custom={direction} mode="wait">
        {currentPage === -1 ? (
          <LandingPage key="landing" onStart={() => setCurrentPage(0)} />
        ) : (
          <motion.div
            key={currentPage}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            className="relative z-10"
            style={{ perspective: 1000 }}
          >
            {chapters[currentPage]}
          </motion.div>
        )}
      </AnimatePresence>

      <QuizModal isOpen={showQuiz} onClose={() => setShowQuiz(false)} />
    </main>
  );
}
