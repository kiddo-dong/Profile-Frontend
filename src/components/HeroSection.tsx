'use client'

import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
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
      <div className="text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
            {typedTitle}
            {isTypingTitle && (
              <span className="inline-block w-[1ch] animate-caret-blink">|</span>
            )}
          </h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8 whitespace-pre-line"
          >
            {typedSubtitle}
            {isTypingSubtitle && (
              <span className="inline-block w-[1ch] animate-caret-blink">|</span>
            )}
          </motion.h2>
          {/*
          부가적 내용 추가(할까말까??)
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            서버 아키텍처 설계와 API 개발에 열정을 가지고 있는 주니어 개발자입니다. 
            확장 가능하고 안정적인 시스템을 구축하는 것을 목표로 합니다.
          </motion.p>
          */}
        </motion.div>
      </div>
      
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full hover:bg-chart-4/10 border border-chart-4/20 transition-colors duration-300"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-chart-4" />
        </motion.div>
      </motion.button>
    </section>
  )
}