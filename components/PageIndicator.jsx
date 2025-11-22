'use client'

import { motion } from 'framer-motion'

export default function PageIndicator({ currentPage, totalPages }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i)

  return (
    <div className="page-indicator">
      {pages.map((page) => (
        <motion.div
          key={page}
          className={`page-dot ${currentPage === page ? 'active' : ''}`}
          initial={false}
          animate={{
            width: currentPage === page ? 32 : 12,
            backgroundColor: currentPage === page ? '#E54F7F' : 'rgba(247, 198, 216, 0.5)'
          }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  )
}
