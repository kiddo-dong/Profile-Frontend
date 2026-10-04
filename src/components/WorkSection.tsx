'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ExternalLink, Github, Network } from 'lucide-react'

type Project = {
  title: string
  period: string
  role: string
  badge: string | null
  description: string
  highlights: string[]
  tech: string[]
  github: string
  demo: string | null
  architecture: string | null
  image: string
}

export function WorkSection() {
  const projects: Project[] = [
    {
      title: "ToTheWork",
      period: "2026.07 – 진행 중",
      role: "개인 프로젝트 · 기획 / 백엔드 / 프론트엔드 / 배포",
      badge: null,
      description: "자영업자를 위한 매장 및 인력 관리 서비스. 주휴·연장·야간·휴일 가산수당, 연소자 보호, 5인 미만 사업장 특례를 스케줄을 짜는 시점에 서버가 계산합니다.",
      highlights: [
        "출근 중복은 MySQL 가상 생성 컬럼 + 유니크 제약으로, 스케줄 중복은 비관적 락 + READ COMMITTED로 막는 등 상황별로 동시성 제어 방식을 분리",
        "최저시급·주휴·연소자 상한 등 매년 바뀌는 법정 수치를 한 파일에 모아 고시 개정 시 누락 방지",
        "리프레시 토큰을 SHA-256 해시로 DB에 저장하고 Rotation 적용, 재사용이 감지되면 해당 사용자 세션 전체 차단",
        "Spring AI + pgvector RAG 근로 상담 — 금액·요율 같은 숫자는 근거 자료에 있는 것만 답하도록 제한",
      ],
      tech: ["Java 25", "Spring Boot 4", "Spring AI", "MySQL", "pgvector", "Flyway", "AWS", "nginx"],
      github: "https://github.com/kiddo-dong/tothework",
      demo: "https://tothework.com",
      architecture: "/images/architecture/tothework.png",
      image: "/images/project_icons/tothework.png"
    },
    {
      title: "실:온 (Sil:On)",
      period: "2026.04 – 2026.09",
      role: "4인 팀 · 팀장 / 전체 아키텍처 · 풀스택",
      badge: "2026 글로벌 피우다프로젝트",
      description: "치매 진단 전후 가족 보호자를 위한 재가 돌봄 정보·기록 플랫폼. 메모리북, 가족 돌봄 캘린더, 커뮤니티, AI 돌봄도감(시온이), 케어 기록을 하나의 구조 안에서 제공합니다.",
      highlights: [
        "운영 데이터는 MySQL, 벡터는 PostgreSQL·pgvector로 분리하고 JPA 자동 구성과 충돌하지 않도록 DataSource를 수동 구성",
        "돌봄 매뉴얼 PDF 임베딩 검색에 환자 메모리북·최근 대화를 결합한 RAG 챗봇 'AI 시온이' 구현",
        "STOMP WebSocket 연결 시점에 JWT 인가, FCM 푸시는 @Async로 분리해 API 응답 지연 차단",
      ],
      tech: ["Flutter", "Spring Boot 3", "Spring AI", "MySQL", "pgvector", "WebSocket", "FCM", "AWS S3"],
      github: "https://github.com/kiddo-dong/Sil-On-BackEnd",
      demo: null,
      architecture: null,
      image: "/images/project_icons/sil-on.png"
    }
  ]

  return (
    <section id="work" className="relative z-20 bg-background">
      <div className="py-24 md:py-32 px-6 min-h-screen flex flex-col justify-center">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl mb-6">Work.</h2>
          </motion.div>

          <div className="space-y-24 md:space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-start gap-8 lg:gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    className="relative group overflow-hidden rounded-2xl border border-border h-56 md:h-80"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>

                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="space-y-2">
                    {project.badge && (
                      <span className="inline-block px-3 py-1 text-sm rounded-full bg-foreground text-background">
                        {project.badge}
                      </span>
                    )}
                    <h3 className="text-3xl md:text-4xl">{project.title}</h3>
                    <p className="text-muted-foreground">
                      {project.period} · {project.role}
                    </p>
                  </div>

                  <p className="text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-3">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-muted-foreground leading-relaxed">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full hover:bg-foreground/85 transition-colors duration-200"
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
                        className="flex items-center gap-2 px-5 py-2.5 border border-foreground rounded-full hover:bg-foreground/5 transition-colors duration-200"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </motion.a>
                    )}
                    {project.architecture && (
                      <motion.a
                        href={project.architecture}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-5 py-2.5 border border-foreground rounded-full hover:bg-foreground/5 transition-colors duration-200"
                      >
                        <Network className="w-5 h-5" />
                        Architecture
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
