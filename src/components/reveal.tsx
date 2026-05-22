import type { ReactNode } from "react"
import { useReveal } from "@/hooks/use-reveal"
import { cn } from "@/lib/utils"

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        className
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  )
}
