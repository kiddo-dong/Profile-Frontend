'use client'

import { motion } from 'motion/react'
import { ExternalLink, Github } from 'lucide-react'

export function WorkSection() {
  const projects = [
    {
      title: "ToTheWork",
      description: "자영업자를 위한 매장 및 인력 관리 서비스. 주휴·연장·야간·휴일 가산수당, 연소자 보호, 5인 미만 사업장 특례, 4대보험·소득세 공제까지 스케줄을 짜는 시점에 서버가 자동으로 계산합니다.",
      tech: ["Spring Boot", "Spring AI", "MySQL", "pgvector"],
      github: "https://github.com/kiddo-dong/tothework",
      demo: "https://tothework.com",
      image: "/images/project_icons/tothework.png"
    },
    {
      title: "실:온 (Sil:On)",
      description: "치매 진단 전후 가족 보호자를 위한 재가 돌봄 정보·기록 플랫폼. 메모리북, 가족 돌봄 캘린더, 커뮤니티, AI 돌봄도감(시온이), 케어 기록을 하나의 구조 안에서 제공합니다.",
      tech: ["Flutter", "Spring Boot", "Spring AI", "MySQL", "pgvector", "FCM", "AWS S3"],
      github: "https://github.com/kiddo-dong/Sil-On-BackEnd",
      demo: null,
      image: "/images/project_icons/sil-on.png"
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
                    {project.demo && (
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
                    )}
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