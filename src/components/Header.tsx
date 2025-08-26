'use client'

import { motion } from 'motion/react'
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export function Header() {
  const [activeSection, setActiveSection] = useState('hero')
  const { theme, setTheme } = useTheme()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight

      // Hero 섹션 (첫 화면)
      if (scrollY < viewportHeight * 0.8) {
        setActiveSection('hero')
        return
      }

      // 각 섹션들을 확인
      const sections = ['about', 'work', 'contact']
      
      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i])
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + scrollY
          const elementHeight = rect.height
          
          // 현재 스크롤 위치가 해당 섹션 영역에 있는지 확인
          if (scrollY >= elementTop - viewportHeight * 0.3 && 
              scrollY < elementTop + elementHeight - viewportHeight * 0.3) {
            setActiveSection(sections[i])
            return
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 초기 실행
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { id: 'about', label: 'About.' },
    { id: 'work', label: 'Work.' },
    { id: 'contact', label: 'Contact.' }
  ]

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <nav className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="relative pl-4"
            >
                <img
                  src="/images/My-icon.png"
                  className="h-12 w-auto object-contain shrink-0"
                />
            </div>
            
          </motion.div>
          
          <div className="flex gap-8 md:gap-12">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-6 py-3 rounded-full text-2xl md:text-3xl transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-chart-4' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-chart-4/10 border border-chart-4/20 rounded-full"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full hover:bg-secondary transition-colors duration-300"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'dark' ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'dark' ? (
                <Sun className="w-6 h-6" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </nav>
    </motion.header>
  )
}