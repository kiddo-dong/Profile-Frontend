'use client'

import { motion } from 'motion/react'
import { Github, Mail, User } from 'lucide-react'

export function ContactFooter() {
  const contactInfo = [
    {
      icon: <User className="w-10 h-10" />,
      label: "Name",
      value: "최동현",
      href: null
    },
    {
      icon: <Mail className="w-10 h-10" />,
      label: "E-mail",
      value: "dh655933@gmail.com",
      href: "mailto:dh655933@gmail.com"
    },
    {
      icon: <Github className="w-10 h-10" />,
      label: "GitHub",
      value: "github.com/kiddo-dong",
      href: "https://github.com/kiddo-dong"
    }
  ]

  return (
    <footer id="contact" className="relative z-20 bg-background">
      <div className="py-24 md:py-32 px-6 min-h-screen flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl mb-6">Contact.</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                {item.href ? (
                  <motion.a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block p-8 md:p-12 min-h-[220px] md:min-h-[320px] rounded-2xl bg-card border border-border hover:border-foreground/50 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="mb-8 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl mb-3 text-muted-foreground">{item.label}</h3>
                    <p className="text-xl md:text-2xl break-words">
                      {item.value}
                    </p>
                  </motion.a>
                ) : (
                  <div className="p-8 md:p-12 min-h-[220px] md:min-h-[320px] rounded-2xl bg-card border border-border">
                    <div className="mb-8">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl mb-3 text-muted-foreground">{item.label}</h3>
                    <p className="text-xl md:text-2xl break-words">{item.value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}