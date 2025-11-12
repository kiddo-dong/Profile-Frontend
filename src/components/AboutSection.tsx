'use client'

import { motion } from 'motion/react'
import { Code, Database, Server, Cloud } from 'lucide-react'

export function AboutSection() {
  const skills = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description: "Spring Boot, JPA, ORM, MySql 서버 개발"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database",
      description: "MySQL, PostgreSQL, Redis를 활용한 데이터 관리"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      description: "AWS, Docker, Kubernetes를 활용한 인프라 구축"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "API Design",
      description: "RESTful API 및 GraphQL 설계와 최적화"
    }
  ]

  return (
    <section id="about" className="relative z-20 bg-background">
      <div className="py-32 px-6 rounded-t-[3rem] bg-background shadow-2xl min-h-screen flex flex-col justify-center">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl lg:text-8xl mb-6">About.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-chart-4/20 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-chart-4 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl mb-3">{skill.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 p-12 rounded-3xl bg-gradient-to-br from-secondary/50 to-chart-4/10 border border-border"
          >
            <h3 className="text-3xl mb-6">Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Java", "Spring Boot", "Node.js", "Python",
                "MySQL", "PostgreSQL", "Redis", "MongoDB",
                "AWS", "Docker", "Git", "Linux"
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-background rounded-full text-center border border-border hover:border-chart-4/50 transition-colors duration-200"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}