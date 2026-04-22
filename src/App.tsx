import { PortfolioPage } from "@/components/portfolio-page"
import { SiteHeader } from "@/components/site-header"

function App() {
  return (
    <div className="relative min-h-svh text-left">
      <SiteHeader />
      <main id="main" tabIndex={-1} className="outline-none">
        <PortfolioPage />
      </main>
    </div>
  )
}

export default App
