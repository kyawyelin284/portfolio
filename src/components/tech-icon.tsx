import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type TechIconProps = {
  name: string
  className?: string
}

function IconShell({
  className,
  children,
  viewBox = "0 0 24 24",
}: {
  className?: string
  children: ReactNode
  viewBox?: string
}) {
  return (
    <svg
      viewBox={viewBox}
      aria-hidden
      className={cn("size-5 shrink-0", className)}
      fill="currentColor"
    >
      {children}
    </svg>
  )
}

const icons: Record<string, (props: { className?: string }) => ReactNode> = {
  Solidity: ({ className }) => (
    <IconShell className={cn("text-[#AA6746]", className)}>
      <path d="M4.5 17.5 12 4.5l7.5 13H4.5zm4.2-1.8h3.6L12 9.8l-0.3 0.5-3 5.4z" />
    </IconShell>
  ),
  Go: ({ className }) => (
    <IconShell className={cn("text-[#00ADD8]", className)}>
      <path d="M1.5 12c0-2.2 1.8-4 4-4h13v2H5.5a2 2 0 0 0-2 2v2h15v2H5.5a2 2 0 0 0-2 2v2H18v2H5.5c-2.2 0-4-1.8-4-4z" />
    </IconShell>
  ),
  JavaScript: ({ className }) => (
    <IconShell className={cn("text-[#F7DF1E]", className)}>
      <path d="M3 3h18v18H3V3zm10.8 14.2c.6 1.1 1.6 1.9 3.1 1.9 1.3 0 2.1-.6 2.1-1.5 0-1-.8-1.4-2.2-2l-.8-.3c-2.2-.9-3.6-2-3.6-4.3 0-2.1 1.6-3.7 4.1-3.7 1.8 0 3.1.6 4 1.8l-2.2 1.4c-.5-.9-1-1.2-1.8-1.2-.8 0-1.3.5-1.3 1.2 0 .8.5 1.2 1.7 1.7l.8.3c2.6 1.1 4 2.2 4 4.7 0 2.5-2 4.1-4.8 4.1-2.7 0-4.5-1.1-5.3-2.8l2.2-1.5zM8.4 9.6V18H6V6h2.4v3.6z" />
    </IconShell>
  ),
  TypeScript: ({ className }) => (
    <IconShell className={cn("text-[#3178C6]", className)}>
      <path d="M3 3h18v18H3V3zm10.1 13.5h2.1V9.6h-2.1v7.5zm-4.8-5.1c0-1.4 1.1-2.3 2.9-2.3 1.1 0 2 .2 2.7.6l-.9 1.7c-.5-.3-1.1-.5-1.8-.5-1 0-1.5.4-1.5 1 0 .6.5.9 1.8 1.4 2 .7 2.8 1.5 2.8 3.2 0 1.7-1.3 2.7-3.4 2.7-1.2 0-2.3-.3-3.1-.8l.9-1.8c.7.4 1.5.7 2.4.7 1.1 0 1.7-.4 1.7-1.1z" />
    </IconShell>
  ),
  Haskell: ({ className }) => (
    <IconShell className={cn("text-[#5D4F85]", className)}>
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4zm0 2.2 5.8 2.9L12 11l-5.8-2.9L12 5.2zM6 9.1l5 2.5v7.3l-5-2.5V9.1zm12 0v7.3l-5 2.5v-7.3l5-2.5z" />
    </IconShell>
  ),
  Rust: ({ className }) => (
    <IconShell className={cn("text-[#CE422B]", className)}>
      <path d="M12 2 3 6.5v11L12 22l9-4.5v-11L12 2zm0 2.3 6.5 3.25V16.5L12 19.7 5.5 16.5V7.55L12 4.3zM8 9h8v2H8V9zm0 4h8v2H8v-2z" />
    </IconShell>
  ),
  C: ({ className }) => (
    <IconShell className={cn("text-[#A8B9CC]", className)}>
      <path d="M16.5 8.2A6.8 6.8 0 0 0 12 6.5 6.5 6.5 0 1 0 12 19a6.8 6.8 0 0 0 4.5-1.7l-1.6-1.6A4.3 4.3 0 0 1 12 16.5 4.5 4.5 0 1 1 12 7.5c1.2 0 2.3.5 3.1 1.1l1.4-1.4z" />
    </IconShell>
  ),
  "C++": ({ className }) => (
    <IconShell className={cn("text-[#00599C]", className)}>
      <path d="M15.5 8.2A6.8 6.8 0 0 0 12 6.5 6.5 6.5 0 1 0 12 19a6.8 6.8 0 0 0 3.5-1l-1.2-1.6A4.3 4.3 0 0 1 12 16.5 4.5 4.5 0 1 1 12 7.5c.9 0 1.7.3 2.4.7l1.1-1.5zM18.5 10h1.5v1h-1.5v1h1.5v1h-1.5v1h1.5v1h-2v-5h2v1zm-4 0h2v5h-1v-1h-1v-4z" />
    </IconShell>
  ),
  Python: ({ className }) => (
    <IconShell className={cn("text-[#3776AB]", className)}>
      <path d="M12 3c-2.8 0-5.2 1.5-5.2 4.2 0 .9.3 1.6.8 2.2H12c1.1 0 2 .9 2 2v1.1H7.8C5.1 12.5 3 14.8 3 17.5S5.1 22.5 7.8 22.5h2.4v-2.2c0-1.1.9-2 2-2h2.4c2.7 0 4.8-2.1 4.8-4.8V9.2C19.4 5.5 16.2 3 12 3zm-2.2 2.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM14 18.8a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z" />
    </IconShell>
  ),
  PHP: ({ className }) => (
    <IconShell className={cn("text-[#777BB4]", className)}>
      <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm2.5 3.5v7h1.8l.4-2h1.9c1.5 0 2.4-.9 2.4-2.5S12.1 11 10.6 11H8.5v-2.5zm2.2 2h1.4c.6 0 .9.3.9.8s-.3.7-.9.7h-1.4v-1.5zm5.8-2 1.4 5.2.9-5.2H20l-1.8 7h-1.5l-1.5-5.3-1.4 5.3h-1.5L12 8.5h1.5z" />
    </IconShell>
  ),
  "Amazon Web Service (AWS)": ({ className }) => (
    <IconShell className={cn("text-[#FF9900]", className)}>
      <path d="M6.5 16.5 12 19l5.5-2.5V12L12 14.5 6.5 12v4.5zM4 10.5 12 14l8-3.5L12 7 4 10.5zm0-3L12 11l8-3.5L12 4 4 7.5z" />
    </IconShell>
  ),
  Oracle: ({ className }) => (
    <IconShell className={cn("text-[#F80000]", className)}>
      <path d="M4 8h16v8H4V8zm2 2v4h12v-4H6zm2 1.5h8v1H8v-1z" />
    </IconShell>
  ),
  "Digital Ocean": ({ className }) => (
    <IconShell className={cn("text-[#0080FF]", className)}>
      <path d="M12 3 8 7h3v10h2V7h3l-4-4zm-7 9h3v2H5v-2zm11 0h3v2h-3v-2z" />
    </IconShell>
  ),
  Railway: ({ className }) => (
    <IconShell className={cn("text-[#FFFFFF]", className)}>
      <path d="M4 16V8l4-2v2l4-2 4 2v8l-4 2-4-2-4 2-4-2zm4-1.5 4 2V10l-4-2v6.5z" />
    </IconShell>
  ),
  "Next.js": ({ className }) => (
    <IconShell className={cn("text-foreground", className)}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.04 0 3.94-.61 5.52-1.66L8.7 8.2v7.3H7V6.5h2.1l8.4 11.1A9.96 9.96 0 0 0 22 12c0-5.52-4.48-10-10-10zm4.3 4.5H18v6.6l-1.7-2.3V6.5z" />
    </IconShell>
  ),
  "Node.js": ({ className }) => (
    <IconShell className={cn("text-[#5FA04E]", className)}>
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5zm0 2.3 6.8 3.8L12 11.9 5.2 8.1 12 4.3zM5 9.6l6 3.3v6.8l-6-3.3V9.6zm14 0v6.8l-6 3.3v-6.8l6-3.3z" />
    </IconShell>
  ),
  Solana: ({ className }) => (
    <IconShell className={cn("text-[#14F195]", className)}>
      <path d="M6 7h12l-2 2H4l2-2zm0 4h12l-2 2H4l2-2zm0 4h12l-2 2H4l2-2z" />
    </IconShell>
  ),
  Kubernetes: ({ className }) => (
    <IconShell className={cn("text-[#326CE5]", className)}>
      <path d="M12 2 4 6v8l8 4 8-4V6l-8-4zm0 3 5 2.5L12 10 7 7.5 12 5zm-5 4.5 4 2v4.5l-4-2V9.5zm10 0v4.5l-4 2V11.5l4-2z" />
    </IconShell>
  ),
  Kafka: ({ className }) => (
    <IconShell className={cn("text-foreground", className)}>
      <path d="M9 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 12a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm7-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-1.6-2.7-3-1.6.9-1.8 3 1.6-.9 1.8zm-3 9.4 3-1.6-.9-1.8-3 1.6.9 1.8z" />
    </IconShell>
  ),
  Terraform: ({ className }) => (
    <IconShell className={cn("text-[#7B42BC]", className)}>
      <path d="M10 4l4 2.3v4.6L10 8.6V4zm5 2.9 4 2.3v4.6l-4-2.3V6.9zM10 9.7l4 2.3V16.6l-4-2.3V9.7zm-5-3 4 2.3v4.6L5 11.3V6.7z" />
    </IconShell>
  ),
  Jenkins: ({ className }) => (
    <IconShell className={cn("text-[#D33833]", className)}>
      <path d="M12 2C7 2 4 5.5 4 10c0 3 1.5 5.5 4 7v3h8v-3c2.5-1.5 4-4 4-7 0-4.5-3-8-8-8zm-2 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </IconShell>
  ),
  gRPC: ({ className }) => (
    <IconShell className={cn("text-[#2DA6B0]", className)}>
      <path d="M12 2 4 6.5v11L12 22l8-4.5v-11L12 2zm0 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    </IconShell>
  ),
  React: ({ className }) => (
    <IconShell className={cn("text-[#61DAFB]", className)}>
      <path d="M12 10.2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zm7.3-1.1c.4-1.5.4-2.8 0-4.1-1-2.5-3.8-3.5-7.3-3.5S4.7 2.5 3.7 5c-.4 1.3-.4 2.6 0 4.1-1.2 1.6-1.8 3.1-1.8 4.4 0 2.5 3.4 4.6 8.1 4.6s8.1-2.1 8.1-4.6c0-1.3-.6-2.8-1.8-4.4zM12 5.8c3.1 0 5.6.7 5.6 1.6S15.1 9 12 9 6.4 8.3 6.4 7.4 8.9 5.8 12 5.8zM6.2 16.2c-.8-.9-1.2-1.8-1.2-2.6 0-.5.2-1 .5-1.6 1 1.2 3 2.1 5.5 2.1h.1c-.6 1.2-1.5 2-2.4 2.1-.9.1-1.8-.2-2.5-.9zm11.6 0c-.7.7-1.6 1-2.5.9-.9-.1-1.8-.9-2.4-2.1 2.5 0 4.5-.9 5.5-2.1.3.6.5 1.1.5 1.6 0 .8-.4 1.7-1.1 2.6z" />
    </IconShell>
  ),
  Gin: ({ className }) => (
    <IconShell className={cn("text-[#00ADD8]", className)}>
      <path d="M5 6h14v3H5V6zm0 5h14v2H5v-2zm0 4h10v2H5v-2z" />
    </IconShell>
  ),
  Express: ({ className }) => (
    <IconShell className={cn("text-[#FFFFFF]", className)}>
      <path d="M4 7h16v2H4V7zm0 4h12v2H4v-2zm0 4h16v2H4v-2z" />
    </IconShell>
  ),
  Nest: ({ className }) => (
    <IconShell className={cn("text-[#E0234E]", className)}>
      <path d="M12 4 5 8v8l7 4 7-4V8l-7-4zm0 2.5L16.5 9 12 11.5 7.5 9 12 6.5zM7 10.2l4 2.3v5.5L7 15.8v-5.6zm10 0v5.6l-4 2.2v-5.5l4-2.3z" />
    </IconShell>
  ),
  Laravel: ({ className }) => (
    <IconShell className={cn("text-[#FF2D20]", className)}>
      <path d="M6 5h5l2 3h5v11H6V5zm2 2v7h3V9H8zm5 0v7h3V7h-3z" />
    </IconShell>
  ),
  "Git and GitHub": ({ className }) => (
    <IconShell className={cn("text-[#FFFFFF]", className)}>
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.79.62-3.38-1.37-3.38-1.37-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.74 0 0 .84-.28 2.75 1.02A9.3 9.3 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.3 2.75-1.02 2.75-1.02.55 1.42.2 2.48.1 2.74.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </IconShell>
  ),
  Docker: ({ className }) => (
    <IconShell className={cn("text-[#2496ED]", className)}>
      <path d="M4 10h1v2H4v-2zm2-2h1v2H6V8zm2 0h1v2H8V8zm2 0h1v2h-1V8zm2 2h1v2h-1v-2zm2 0h1v2h-1v-2zm2-2h1v2h-1V8zm2 0h1v2h-1V8zM2 12.5c1.5 1.2 3.4 1.9 5.3 1.9 3.9 0 7.2-1.6 9.1-4.1.3-.4.6-.8.8-1.2H2v3.4z" />
    </IconShell>
  ),
}

icons["React.js"] = icons.React
icons.NodeJS = icons["Node.js"]

function FallbackIcon({ className }: { className?: string }) {
  return (
    <IconShell className={cn("text-primary", className)}>
      <path d="M8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
    </IconShell>
  )
}

export function TechIcon({ name, className }: TechIconProps) {
  const Icon = icons[name]
  if (!Icon) return <FallbackIcon className={className} />
  return <Icon className={className} />
}
