import type { Metadata } from 'next'
import './globals.css'

const description = 'Spring Boot와 Spring AI로 서비스를 만드는 백엔드 개발자 최동현의 포트폴리오'

export const metadata: Metadata = {
  metadataBase: new URL('https://kiddo-dong.vercel.app'),
  title: 'DongHyun | Backend Developer',
  description,
  icons: { icon: '/images/My-icon.png' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'DongHyun',
    title: 'DongHyun | Backend Developer',
    description,
    locale: 'ko_KR',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'DongHyun - Backend Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DongHyun | Backend Developer',
    description,
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* 새로고침 시 이전 스크롤 위치를 복원하지 않고 맨 위에서 시작 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = 'manual'`,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
