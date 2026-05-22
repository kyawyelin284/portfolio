import { cn } from "@/lib/utils"

export function HeroScene({ className }: { className?: string }) {
  return (
    <div
      className={cn("hero-scene w-full", className)}
      aria-hidden
    >
      <div className="hero-scene__panel">
        <span className="hero-scene__shape hero-scene__shape--square-lg animate-float" />
        <span
          className="hero-scene__shape hero-scene__shape--square-sm animate-float-delayed"
        />
        <span className="hero-scene__shape hero-scene__shape--circle animate-float-slow" />
      </div>
    </div>
  )
}
