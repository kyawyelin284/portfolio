import { Reveal } from "@/components/reveal"
import { TechIcon } from "@/components/tech-icon"
import { skillGroups } from "@/data/resume"
import { cn } from "@/lib/utils"

const bentoLayout: Record<string, string> = {
  "Programming Languages":
    "md:col-span-2 lg:col-span-2 lg:row-span-2",
  "Back-end Technologies":
    "md:col-span-2 lg:col-span-2",
  "Cloud Technologies":
    "md:col-span-2 lg:col-span-2",
  "Front-end Technologies":
    "md:col-span-1 lg:col-span-1",
  "Other Technologies":
    "md:col-span-1 lg:col-span-1",
}

const itemGridLayout: Record<string, string> = {
  "Programming Languages": "grid-cols-1 sm:grid-cols-2",
  "Back-end Technologies": "grid-cols-1 sm:grid-cols-2",
  "Cloud Technologies": "grid-cols-1 sm:grid-cols-2",
  "Front-end Technologies": "grid-cols-1",
  "Other Technologies": "grid-cols-1",
}

export function SkillsBento() {
  return (
    <div className="skills-bento-grid grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-fr">
      {skillGroups.map((group, index) => (
        <Reveal
          key={group.name}
          delay={index * 70}
          className={cn("h-full", bentoLayout[group.name])}
        >
          <article className="bento-card group/card flex h-full flex-col p-5 transition-all duration-300 ease-out sm:p-6">
            <div className="bento-card__shine" aria-hidden />
            <header className="relative z-10 mb-4">
              <p className="text-primary text-sm font-semibold tracking-wide sm:text-base">
                {group.name}
              </p>
              <p className="text-muted-foreground mt-1 text-xs sm:text-sm">
                {group.items.length} technologies
              </p>
            </header>
            <ul
              className={cn(
                "relative z-10 grid flex-1 auto-rows-min content-start gap-2.5",
                itemGridLayout[group.name]
              )}
            >
              {group.items.map((skill) => (
                <li key={skill}>
                  <div className="bento-skill-item group/item flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-300 ease-out">
                    <span className="bento-skill-item__icon flex size-9 shrink-0 items-center justify-center rounded-lg">
                      <TechIcon name={skill} className="size-5" />
                    </span>
                    <span className="text-foreground/92 min-w-0 text-sm leading-snug font-medium sm:text-[0.9375rem]">
                      {skill}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </div>
  )
}
