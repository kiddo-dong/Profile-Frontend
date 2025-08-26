import { ThemeProvider } from '@/components/ThemeProvider'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { WorkSection } from '@/components/WorkSection'
import { ContactFooter } from '@/components/ContactFooter'

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <WorkSection />
          <ContactFooter />
        </main>
      </div>
    </ThemeProvider>
  )
}