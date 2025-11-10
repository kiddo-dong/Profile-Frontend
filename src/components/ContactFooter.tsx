'use client'

import { motion } from 'motion/react'
import { Github, Mail, ExternalLink, User } from 'lucide-react'

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
      href: "https://gmail.com"
    },
    {
      icon: <Github className="w-10 h-10" />,
      label: "GitHub",
      value: "github.com/kiddo-dong",
      href: "https://github.com/kiddo-dong"
    },
    {
      icon: <ExternalLink className="w-10 h-10" />,
      label: "Tistory",
      value: "Hyundong.tistory.com",
      href: "https://github.com/kiddo-dong"
    }
  ]

  return (
    <footer id="contact" className="relative z-20 bg-background">
      <div className="py-32 px-6 min-h-screen flex flex-col justify-center">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl lg:text-8xl mb-6">Contact.</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12"
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
                    className="block p-20 md:p-24 min-h-[420px] md:min-h-[500px] rounded-2xl bg-card border border-border hover:border-chart-4/50 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="text-chart-4 mb-8 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl mb-4 text-muted-foreground">{item.label}</h3>
                    <p className="text-3xl md:text-4xl break-words group-hover:text-chart-4 transition-colors duration-300">
                      {item.value}
                    </p>
                  </motion.a>
                ) : (
                  <div className="p-20 md:p-24 min-h-[420px] md:min-h-[500px] rounded-2xl bg-card border border-border">
                    <div className="text-chart-4 mb-8">
                      {item.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl mb-4 text-muted-foreground">{item.label}</h3>
                    <p className="text-3xl md:text-4xl break-words">{item.value}</p>
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