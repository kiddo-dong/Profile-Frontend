'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const titleText = 'Hi, I\'m DongHyun' 
  const subtitleText = 'Backend Developer'

  const [typedTitle, setTypedTitle] = useState('')
  const [typedSubtitle, setTypedSubtitle] = useState('')
  const [isTypingTitle, setIsTypingTitle] = useState(true)
  const [isTypingSubtitle, setIsTypingSubtitle] = useState(false)

  useEffect(() => {
    let titleIndex = 0
    let subtitleIndex = 0
    const titleSpeed = 100
    const subtitleSpeed = 60
    const afterTitleDelayMs = 300

    const typeTitle = () => {
      const id = setInterval(() => {
        titleIndex += 1
        setTypedTitle(titleText.slice(0, titleIndex))
        if (titleIndex >= titleText.length) {
          clearInterval(id)
          setIsTypingTitle(false)
          setTimeout(() => {
            setIsTypingSubtitle(true)
            typeSubtitle()
          }, afterTitleDelayMs)
        }
      }, titleSpeed)
    }

    const typeSubtitle = () => {
      const id = setInterval(() => {
        subtitleIndex += 1
        setTypedSubtitle(subtitleText.slice(0, subtitleIndex))
        if (subtitleIndex >= subtitleText.length) {
          clearInterval(id)
          setIsTypingSubtitle(false)
        }
      }, subtitleSpeed)
    }

    typeTitle()
    return () => {
      setIsTypingTitle(false)
      setIsTypingSubtitle(false)
    }
  }, [])

  return (
    <section className="h-screen flex items-center justify-center relative sticky top-0 z-10">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 max-w-6xl mx-auto px-6 w-full">
        <motion.div 
          className="flex-shrink-0"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/hi-dong.png"
            alt="DongHyun"
            width={480}
            height={480}
            priority
            className="w-44 md:w-auto h-auto object-contain"
          />
        </motion.div>
        <div className="text-center flex-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-4 md:mb-6 tracking-tight">
            {typedTitle}
          </h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8 whitespace-pre-line"
          >
            {typedSubtitle}
            <span className="inline-block w-[1ch] animate-caret-blink">|</span>
          </motion.h2>
          </motion.div>
        </div>
      </div>
      
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        onClick={() => scrollToSection('about')}
        aria-label="About 섹션으로 이동"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full hover:bg-foreground/5 border border-foreground/20 transition-colors duration-300"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronUp className="w-6 h-6 text-foreground" />
        </motion.div>
      </motion.button>
    </section>
  )
}