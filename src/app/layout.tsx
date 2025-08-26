import './globals.css'

export const metadata = {
  title: 'DongHyun',
  description: 'DongHyun profile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <title>DongHyun</title>
        <link rel="icon" type="image/png" href="/images/My-icon.png" />
        <meta name="description" content="DongHyun portfolio website" />
      </head>
      <body>
        {/* 스크롤을 항상 맨 위로 올리기 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== "undefined") {
                window.onbeforeunload = function () {
                  window.scrollTo(0, 0);
                };
              }
            `,
          }}
        />
        
        {children}
      </body>
    </html>
  )
}