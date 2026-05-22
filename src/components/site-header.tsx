import { useState } from "react"
import { Mail, Menu } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { pageShellClass } from "@/lib/layout"
import { nav, person } from "@/data/resume"
import { cn } from "@/lib/utils"

const navItemClass = cn(
  buttonVariants({ variant: "ghost", size: "sm" }),
  "text-muted-foreground ring-focus relative text-base hover:text-foreground after:absolute after:inset-x-2 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-primary/70 after:transition-transform hover:after:scale-x-100"
)

const socialLinkClass = cn(
  buttonVariants({ variant: "ghost", size: "icon-sm" }),
  "text-muted-foreground ring-focus size-9 hover:bg-primary/8 hover:text-primary"
)

function NavLinks({
  onNavigate,
  className,
}: {
  onNavigate?: () => void
  className?: string
}) {
  return (
    <ul className={cn("flex flex-col gap-1 md:flex-row md:items-center md:gap-0.5", className)}>
      {nav.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`} className={navItemClass} onClick={onNavigate}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M12 2C6.477 2 2 6.594 2 12.253c0 4.52 2.865 8.35 6.839 9.704.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.003 10.003 0 0 0 22 12.253C22 6.594 17.523 2 12 2Z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      <a
        href="https://github.com/kyawyelin284"
        target="_blank"
        rel="noreferrer noopener"
        className={socialLinkClass}
        aria-label="GitHub profile"
      >
        <GitHubIcon className="size-5" />
      </a>
      <a
        href={person.linkedIn}
        target="_blank"
        rel="noreferrer noopener"
        className={socialLinkClass}
        aria-label="LinkedIn profile"
      >
        <LinkedInIcon className="size-5" />
      </a>
      <a href={`mailto:${person.email}`} className={socialLinkClass} aria-label="Send email">
        <Mail className="size-5" />
      </a>
    </div>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-background/60 backdrop-blur-xl supports-backdrop-filter:bg-background/45">
      <a
        href="#main"
        className="ring-focus absolute left-4 top-3 z-50 -translate-y-24 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>
      <div className={cn("flex h-16 items-center justify-between gap-3", pageShellClass)}>
        <a
          href="#top"
          className="text-foreground ring-focus group flex min-w-0 items-center gap-3 rounded-md font-heading text-base font-semibold tracking-[0.18em] uppercase"
          aria-label={`${person.name}, home`}
        >
          <span
            className="size-3.5 shrink-0 rounded-[4px] bg-primary shadow-[0_0_14px_rgb(0_255_136_/_0.45)]"
            aria-hidden
          />
          <span className="truncate">{person.name}</span>
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-1">
          <SocialLinks className="hidden sm:flex" />

          <Sheet
            open={open}
            onOpenChange={(next) => {
              setOpen(next)
            }}
          >
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "outline", size: "icon-sm" }),
                "text-foreground ring-focus border-border/60 bg-card/30 lg:hidden"
              )}
            >
              <Menu className="size-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="border-l border-border/60 bg-card/95 p-0">
              <SheetHeader className="border-b border-border/50 p-4 text-left">
                <SheetTitle className="text-lg">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col p-2" aria-label="Primary mobile">
                <NavLinks onNavigate={() => setOpen(false)} className="w-full" />
                <SocialLinks className="mt-4 justify-center border-t border-border/50 pt-4" />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
