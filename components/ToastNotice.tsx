'use client';

import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useUI } from '@/context/UIContext';

export default function ToastNotice() {
  const { toastMessage } = useUI();
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          key="toast"
          className="toast-notice show"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 50, x: '-50%' }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, x: '-50%' }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, x: '-50%' }}
          transition={{ duration: 0.25 }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a3e635"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <span>{toastMessage}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

