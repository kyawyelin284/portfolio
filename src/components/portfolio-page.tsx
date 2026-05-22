import type { ReactNode } from "react"
import {
  ArrowUpRight,
  Blocks,
  Brain,
  Code2,
  GraduationCap,
  Link2,
  Mail,
  MapPin,
  Phone,
  Rocket,
} from "lucide-react"
import { HeroScene } from "@/components/hero-scene"
import { Reveal } from "@/components/reveal"
import { SkillsBento } from "@/components/skills-bento"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  certifications,
  education,
  experience,
  person,
  projects,
  summary,
} from "@/data/resume"
import { pageShellClass } from "@/lib/layout"
import { cn } from "@/lib/utils"

const projectIcons = {
  "T-Station": Brain,
  "Hankook Tire": Rocket,
  "Blockchain Lure": Blocks,
  Nura: Code2,
} as const

function Section({
  id,
  title,
  children,
  className,
}: {
  id: string
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("scroll-mt-32 py-8 sm:py-10", className)}
    >
      <div className={pageShellClass}>
        <Reveal>
          <h2
            id={`${id}-heading`}
            className="font-heading text-foreground mb-6 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            <span className="section-title-accent">{title.slice(0, 2)}</span>
            {title.slice(2)}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  )
}

export function PortfolioPage() {
  return (
    <>
      <div className="scene-backdrop" aria-hidden>
        <div className="scene-backdrop__grid" />
        <div className="scene-backdrop__glow scene-backdrop__glow--hero" />
        <div className="scene-backdrop__glow scene-backdrop__glow--center" />
        <div className="scene-backdrop__glow scene-backdrop__glow--footer" />
      </div>
      <div className="noise" aria-hidden />

      <div className="relative z-10">
        <section
          id="top"
          className={cn("relative pb-8 pt-32 sm:pb-10", pageShellClass)}
        >
          <div className="grid w-full items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
            <div>
              <p
                className="neon-badge animate-hero-enter mb-5"
                style={{ animationDelay: "80ms" }}
              >
                {person.title} · Software, Blockchain & AI
              </p>
              <h1 className="font-heading text-5xl font-semibold leading-[1.06] tracking-tight sm:text-6xl md:text-7xl">
                <span
                  className="text-foreground animate-hero-enter block"
                  style={{ animationDelay: "160ms" }}
                >
                  Building the
                </span>
                <span
                  className="gradient-text animate-hero-enter block"
                  style={{ animationDelay: "220ms" }}
                >
                  Future of Web3 & AI
                </span>
              </h1>
              <p
                className="text-muted-foreground animate-hero-enter mt-6 max-w-3xl text-pretty text-lg leading-relaxed lg:max-w-none sm:text-xl"
                style={{ animationDelay: "300ms" }}
              >
                {summary}
              </p>
              <div
                className="animate-hero-enter mt-8 flex flex-wrap items-center gap-3"
                style={{ animationDelay: "380ms" }}
              >
                <a
                  href="#projects"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "ring-focus neon-button min-h-12 px-6 text-base"
                  )}
                >
                  View projects
                  <ArrowUpRight className="size-5" />
                </a>
                <a
                  href="mailto:kyawyelin@proton.me"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "ring-focus neon-outline-button min-h-12 px-6 text-base"
                  )}
                >
                  Contact me
                </a>
              </div>
              <dl
                className="text-muted-foreground animate-hero-enter mt-8 flex flex-wrap gap-x-8 gap-y-3 text-base"
                style={{ animationDelay: "460ms" }}
              >
                <div className="flex items-center gap-2.5">
                  <MapPin className="text-primary size-5 shrink-0" aria-hidden />
                  <dt className="sr-only">Location</dt>
                  <dd>{person.location}</dd>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="text-primary size-5 shrink-0" aria-hidden />
                  <dt className="sr-only">Phone</dt>
                  <dd>
                    <a
                      href={`tel:${person.phone.replace(/\s/g, "")}`}
                      className="ring-focus rounded-sm underline-offset-4 hover:text-primary hover:underline"
                    >
                      {person.phone}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <HeroScene className="hidden lg:block" />
          </div>
        </section>

        <Section id="about" title="About">
          <Reveal delay={80}>
            <div className="glass-panel glow-card w-full rounded-2xl p-6 sm:p-8">
              <p className="text-foreground/90 text-lg leading-relaxed sm:text-xl">
                I design and ship software end to end—custom applications, optimized backend
                architecture, and intelligent AI automation. My background spans mobile development,
                decentralized systems, firmware, and cloud infrastructure, so I can reason across the
                full stack when performance or reliability matters.
              </p>
              <Separator className="my-6 bg-border/60" />
              <p className="text-muted-foreground text-base leading-relaxed">
                I lead cross-functional teams to deliver high-quality, scalable solutions—whether that
                means smart contracts, real-time AI inference, or language design projects like Nura.
              </p>
            </div>
          </Reveal>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="experience-list list-none">
            {experience.map((job, index) => (
              <li key={job.id} className="experience-item">
                <span
                  className="experience-node"
                  aria-hidden
                  style={{ animationDelay: `${index * 0.4}s` }}
                />
                <Reveal delay={index * 70}>
                  <article className="experience-card">
                    <div className="experience-card__header">
                      <div>
                        <h3 className="experience-card__company">{job.company}</h3>
                        <p className="experience-card__role">{job.role}</p>
                      </div>
                      <time className="experience-card__period" dateTime={job.period}>
                        {job.period}
                      </time>
                    </div>
                    <p className="experience-card__description">{job.description}</p>
                    <div className="experience-card__tags">
                      {job.tags.map((tag) => (
                        <span key={tag} className="neon-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" title="Featured projects">
          <ul className="project-grid grid gap-4 md:grid-cols-2 md:items-stretch">
            {projects.map((project, index) => {
              const Icon = projectIcons[project.name as keyof typeof projectIcons] ?? Code2

              return (
                <li key={project.name} className="h-full">
                  <Reveal delay={index * 70} className="h-full">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="ring-focus group flex h-full"
                    >
                      <Card className="project-card glass-panel glow-card h-full w-full border-border/50">
                        <CardHeader className="gap-4">
                          <div className="flex items-start justify-between gap-3">
                            <span className="project-icon">
                              <Icon className="size-6" aria-hidden />
                            </span>
                            <ArrowUpRight
                              className="text-muted-foreground size-6 shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                              aria-hidden
                            />
                          </div>
                          <CardTitle className="text-xl transition-colors group-hover:text-primary">
                            {project.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-1 flex-col pt-0">
                          <p className="text-muted-foreground flex-1 text-base leading-relaxed">
                            {project.description}
                          </p>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span key={tag} className="neon-tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  </Reveal>
                </li>
              )
            })}
          </ul>
        </Section>

        <Section id="skills" title="Skills">
          <SkillsBento />
        </Section>

        <Section id="education" title="Education & certifications">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal delay={60}>
              <div>
                <h3 className="text-foreground mb-4 flex items-center gap-2.5 text-base font-semibold uppercase tracking-wider">
                  <GraduationCap className="text-primary size-5" aria-hidden />
                  Education
                </h3>
                <ul className="space-y-4">
                  {education.map((row) => (
                    <li key={row.school}>
                      <Card className="glass-panel glow-card border-border/50" size="sm">
                        <CardHeader className="pb-2">
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <CardTitle className="text-base sm:text-lg">{row.school}</CardTitle>
                            <span className="text-muted-foreground text-sm tabular-nums">
                              {row.period}
                            </span>
                          </div>
                          <CardDescription>{row.credential}</CardDescription>
                        </CardHeader>
                      </Card>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <h3 className="text-foreground mb-4 flex items-center gap-2.5 text-base font-semibold uppercase tracking-wider">
                  <Link2 className="text-primary size-5" aria-hidden />
                  Certifications
                </h3>
                <ul className="space-y-3">
                  {certifications.map((c) => (
                    <li key={c.url}>
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="ring-focus glow-card group flex items-start gap-3 rounded-xl border border-border/50 bg-card/30 p-4 backdrop-blur-sm"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="text-foreground text-base font-medium leading-snug transition-colors group-hover:text-primary">
                            {c.title}
                          </p>
                          <p className="text-muted-foreground mt-1 text-sm">{c.org}</p>
                        </div>
                        <ArrowUpRight
                          className="text-muted-foreground mt-0.5 size-5 shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                          aria-hidden
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-32 pb-12 pt-8 sm:pb-14"
        >
          <div className={pageShellClass}>
            <Reveal>
              <Card className="glass-panel glow-card overflow-hidden border-primary/25 bg-gradient-to-br from-primary/10 via-card/70 to-card">
                <CardHeader>
                  <p className="text-primary text-sm font-semibold uppercase tracking-[0.24em]">
                    Contact
                  </p>
                  <CardTitle id="contact-heading" className="text-3xl sm:text-4xl">
                    Let&apos;s build something solid together.
                  </CardTitle>
                  <CardDescription className="text-foreground/80 max-w-xl text-lg">
                    Available for engineering collaborations across AI, backend, and blockchain
                    work—products that need clear architecture and scalable infrastructure. Prefer
                    email—I respond within a day when schedules allow.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="mailto:kyawyelin@proton.me"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "ring-focus neon-button inline-flex w-fit items-center justify-center gap-2"
                    )}
                  >
                    <Mail className="size-5" />
                    {person.email}
                  </a>
                  <a
                    href={person.linkedIn}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "ring-focus neon-outline-button inline-flex w-fit items-center gap-2"
                    )}
                  >
                    LinkedIn profile
                    <ArrowUpRight className="size-5" />
                  </a>
                </CardContent>
              </Card>
            </Reveal>
            <p className="text-muted-foreground mt-8 text-center text-sm">
              © {new Date().getFullYear()} {person.name}. Crafted for clarity, accessibility, and
              performance.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
