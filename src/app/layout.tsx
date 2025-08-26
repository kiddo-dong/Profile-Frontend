import './globals.css'

export const metadata = {
  title: 'Profile',
  description: 'Developer profile site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  )
}