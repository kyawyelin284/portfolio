import { useState } from "react"
import { Menu } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { nav, person } from "@/data/resume"
import { cn } from "@/lib/utils"

const navItemClass = cn(
  buttonVariants({ variant: "ghost", size: "sm" }),
  "text-muted-foreground ring-focus hover:text-foreground"
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
          <a
            href={`#${item.id}`}
            className={navItemClass}
            onClick={onNavigate}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-md supports-backdrop-filter:bg-background/50"
    >
      <a
        href="#main"
        className="ring-focus absolute left-4 top-3 z-50 -translate-y-24 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
        <a
          href="#top"
          className="text-foreground ring-focus group flex min-w-0 items-baseline gap-2 rounded-md font-heading text-sm font-medium tracking-tight"
          aria-label={`${person.name}, home`}
        >
          <span className="text-balance truncate">
            {person.name}
          </span>
          <span
            className="hidden h-1 w-1 shrink-0 rounded-full bg-primary/80 group-hover:bg-primary sm:inline"
            aria-hidden
          />
        </a>

        <nav
          className="hidden items-center gap-0.5 md:flex"
          aria-label="Primary"
        >
          <NavLinks />
        </nav>

        <div className="flex items-center gap-1.5">
          <a
            href="mailto:kyawyelin@proton.me"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "ring-focus max-sm:sr-only"
            )}
          >
            Get in touch
          </a>

          <Sheet
            open={open}
            onOpenChange={(next) => {
              setOpen(next)
            }}
          >
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "outline", size: "icon-sm" }),
                "text-foreground ring-focus border-border/60 bg-card/30 md:hidden"
              )}
            >
              <Menu className="size-4" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-l border-border/60 bg-card/95 p-0"
            >
              <SheetHeader className="border-b border-border/50 p-4 text-left">
                <SheetTitle className="text-base">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col p-2" aria-label="Primary mobile">
                <NavLinks
                  onNavigate={() => setOpen(false)}
                  className="w-full"
                />
                <a
                  href="mailto:kyawyelin@proton.me"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "ring-focus mt-4 w-full"
                  )}
                  onClick={() => setOpen(false)}
                >
                  Email me
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
