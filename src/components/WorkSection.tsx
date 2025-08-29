'use client'

import { motion } from 'motion/react'
import { ExternalLink, Github } from 'lucide-react'

export function WorkSection() {
  const projects = [
    {
      title: "Spring-Framework",
      description: "Spring Boot 및 JPA, 배포 환경",
      tech: ["Spring Boot", "JPA", "MySQL", "Redis", "AWS"],
      github: "https://github.com/kiddo-dong/Spring-Framework-anatomy",
      demo: "#",
      image: "/images/Spring-boot.jpg"
    },
    {
      title: "Project",
      description: "preparing...",
      tech: ["Node.js", "Socket.io", "MongoDB", "Docker"],
      github: "#",
      demo: "#",
      image: ""
    },
    {
      title: "마이크로서비스 아키텍처",
      description: "Docker와 Kubernetes를 활용한 마이크로서비스 기반 플랫폼. API Gateway, 서비스 디스커버리, 분산 데이터베이스 설계.",
      tech: ["Spring Cloud", "Docker", "Kubernetes", "PostgreSQL"],
      github: "#",
      demo: "#",
      image: ""
    }
  ]

  return (
    <section id="work" className="relative z-20 bg-background">
      <div className="py-32 px-6 min-h-screen flex flex-col justify-center">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl lg:text-8xl mb-6">Work.</h2>
            {/*
            내용 추가 하고 싶으면 주석 해제 할까??
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              개발한 프로젝트
              다양한 토이 프로젝트 및 사이드 프로젝트
            </p>
            */}
          </motion.div>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative group overflow-hidden rounded-2xl"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>

                <div className="lg:w-1/2 space-y-6">
                  <h3 className="text-3xl md:text-4xl">{project.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-chart-4/10 text-chart-4 rounded-full border border-chart-4/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-chart-4 text-background rounded-full hover:bg-chart-4/90 transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 border border-chart-4 text-chart-4 rounded-full hover:bg-chart-4/10 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}