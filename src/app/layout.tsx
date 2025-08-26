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