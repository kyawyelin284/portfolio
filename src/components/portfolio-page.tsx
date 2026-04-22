import type { ReactNode } from "react"
import {
  ArrowUpRight,
  GraduationCap,
  Link2,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
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
  skillGroups,
  summary,
} from "@/data/resume"
import { cn } from "@/lib/utils"

function Section({
  id,
  title,
  eyebrow,
  children,
  className,
}: {
  id: string
  title: string
  eyebrow: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("scroll-mt-28 py-14 sm:py-20", className)}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-primary mb-2 text-xs font-semibold uppercase tracking-[0.2em]">
          {eyebrow}
        </p>
        <h2
          id={`${id}-heading`}
          className="font-heading text-foreground mb-8 text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}

export function PortfolioPage() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 gradient-mesh" aria-hidden />
      <div className="noise" aria-hidden />

      <div className="relative z-10">
        <section
          id="top"
          className="relative flex min-h-[min(88svh,880px)] flex-col justify-center px-4 pb-16 pt-28 sm:px-6"
        >
          <div className="mx-auto w-full max-w-5xl">
            <p className="text-primary mb-4 inline-flex items-center gap-2 text-sm font-medium">
              <Sparkles className="size-4" aria-hidden />
              Software & blockchain engineering
            </p>
            <h1 className="font-heading text-foreground max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              <span className="gradient-text">Kyaw Ye Lin</span>
              <span className="text-foreground mt-2 block text-2xl font-normal text-balance sm:text-3xl md:mt-3">
                Building reliable systems—APIs, chains, and products people can trust.
              </span>
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl text-pretty text-base leading-relaxed sm:text-lg">
              {summary}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "ring-focus min-h-11 px-5"
                )}
              >
                View projects
              </a>
              <a
                href="mailto:kyawyelin@proton.me"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "ring-focus min-h-11 border-border/60 bg-card/40 px-5"
                )}
              >
                <Mail className="size-4" />
                Email
              </a>
              <a
                href={person.linkedIn}
                target="_blank"
                rel="noreferrer noopener"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "ring-focus text-muted-foreground hover:text-foreground"
                )}
              >
                LinkedIn
                <ArrowUpRight className="size-4" />
              </a>
            </div>
            <dl className="text-muted-foreground mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="text-primary size-4 shrink-0" aria-hidden />
                <dt className="sr-only">Location</dt>
                <dd>{person.location}</dd>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-primary size-4 shrink-0" aria-hidden />
                <dt className="sr-only">Phone</dt>
                <dd>
                  <a
                    href={`tel:${person.phone.replace(/\s/g, "")}`}
                    className="ring-focus rounded-sm underline-offset-4 hover:underline"
                  >
                    {person.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <Section id="about" title="About" eyebrow="Profile">
          <div className="glass-panel max-w-3xl rounded-2xl p-6 sm:p-8">
            <p className="text-foreground/90 text-base leading-relaxed sm:text-lg">
              I design and ship software end to end: clear data models, pragmatic APIs, and interfaces
              that stay out of the way. My background spans backend services, blockchain integration, and
              embedded work—so I can reason about the full stack when performance or reliability matters.
            </p>
            <Separator className="my-6 bg-border/60" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              When I am not shipping, I explore language design and distributed systems—always with an eye
              on security, observability, and long-term maintainability.
            </p>
          </div>
        </Section>

        <Section id="experience" title="Experience" eyebrow="Career">
          <ol className="relative space-y-6 border-l border-border/60 pl-6">
            {experience.map((job) => (
              <li key={job.id} className="relative">
                <span
                  className="bg-primary ring-background absolute -left-[25px] top-1.5 size-3 rounded-full ring-4"
                  aria-hidden
                />
                <Card className="glass-panel border-border/50 transition-[box-shadow,transform] duration-200 hover:shadow-lg hover:shadow-primary/5">
                  <CardHeader className="gap-2">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <CardTitle className="text-lg sm:text-xl">{job.role}</CardTitle>
                      <Badge variant="secondary" className="font-normal">
                        {job.period}
                      </Badge>
                    </div>
                    <CardDescription className="text-foreground/90 text-base font-medium">
                      {job.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 pt-0">
                    <ul className="text-muted-foreground list-inside list-disc space-y-1.5 text-sm leading-relaxed sm:text-[0.95rem]">
                      {job.highlights.map((line) => (
                        <li key={line} className="pl-0.5">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="skills" title="Skills" eyebrow="Stack">
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <Card
                key={group.name}
                className="glass-panel h-full border-border/50"
              >
                <CardHeader>
                  <CardTitle className="text-base">{group.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 pt-0">
                  {group.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-primary/30 bg-primary/5 font-normal"
                    >
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects" eyebrow="Selected work">
          <ul className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <li key={project.name}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="ring-focus group block h-full"
                >
                  <Card className="glass-panel h-full border-border/50 transition duration-200 group-hover:border-primary/30 group-hover:shadow-md group-hover:shadow-primary/5">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-lg group-hover:text-primary">
                          {project.name}
                        </CardTitle>
                        <ArrowUpRight
                          className="text-muted-foreground group-hover:text-primary size-5 shrink-0 transition-colors"
                          aria-hidden
                        />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="education" title="Education & certifications" eyebrow="Background">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-foreground mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
                <GraduationCap className="text-primary size-4" aria-hidden />
                Education
              </h3>
              <ul className="space-y-4">
                {education.map((row) => (
                  <li key={row.school}>
                    <Card className="glass-panel border-border/50" size="sm">
                      <CardHeader className="pb-2">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <CardTitle className="text-sm sm:text-base">{row.school}</CardTitle>
                          <span className="text-muted-foreground text-xs tabular-nums">
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
            <div>
              <h3 className="text-foreground mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
                <Link2 className="text-primary size-4" aria-hidden />
                Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li key={c.url}>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="ring-focus group flex items-start gap-3 rounded-xl border border-border/50 bg-card/30 p-4 transition duration-200 hover:border-primary/25 hover:bg-card/50"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-foreground group-hover:text-primary text-sm font-medium leading-snug">
                          {c.title}
                        </p>
                        <p className="text-muted-foreground mt-1 text-xs">{c.org}</p>
                      </div>
                      <ArrowUpRight
                        className="text-muted-foreground group-hover:text-primary mt-0.5 size-4 shrink-0"
                        aria-hidden
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-28 pb-20 pt-4 sm:pb-24"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <Card className="glass-panel overflow-hidden border-primary/20 bg-gradient-to-br from-primary/10 via-card/80 to-card">
              <CardHeader>
                <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
                  Contact
                </p>
                <CardTitle
                  id="contact-heading"
                  className="text-2xl sm:text-3xl"
                >
                  Let&apos;s build something solid together.
                </CardTitle>
                <CardDescription className="text-foreground/80 max-w-xl text-base">
                  Available for engineering collaborations, backend and blockchain work, and products that
                  need clear architecture. Prefer email—I respond within a day when schedules allow.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="mailto:kyawyelin@proton.me"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "ring-focus inline-flex w-fit items-center justify-center gap-2"
                  )}
                >
                  <Mail className="size-4" />
                  {person.email}
                </a>
                <a
                  href={person.linkedIn}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "lg" }),
                    "ring-focus inline-flex w-fit items-center gap-2"
                  )}
                >
                  LinkedIn profile
                  <ArrowUpRight className="size-4" />
                </a>
              </CardContent>
            </Card>
            <p className="text-muted-foreground mt-8 text-center text-xs">
              © {new Date().getFullYear()} {person.name}. Crafted for clarity, accessibility, and
              performance.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
