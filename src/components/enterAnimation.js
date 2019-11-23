// This component fades in whatever child component it wraps.
// It uses framer-motion for the animation.
// Documentation here https://www.framer.com/api/motion/

import React, { Component } from "react"
import { motion } from "framer-motion"

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
}

const EnterAnimation = ({ children }) => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ delay: 0.15 }}
    >
      {children}
    </motion.section>
  )
}

export default EnterAnimation
