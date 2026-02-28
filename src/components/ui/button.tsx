import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "~/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center font-mono font-medium no-underline cursor-pointer transition-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-card text-text border-text shadow-brutal hover:shadow-brutal-hover hover:-translate-x-0.5 hover:-translate-y-0.5",
        lime: "bg-lime text-text border-text shadow-brutal hover:shadow-brutal-hover hover:-translate-x-0.5 hover:-translate-y-0.5",
        orange:
          "bg-orange text-text border-text shadow-brutal hover:shadow-brutal-hover hover:-translate-x-0.5 hover:-translate-y-0.5",
        dark: "bg-text text-card border-0 shadow-none font-bold hover:opacity-70",
        "outline-lime":
          "bg-transparent text-lime border-lime shadow-brutal-lime hover:shadow-[5px_5px_0_#C8FF00] hover:-translate-x-0.5 hover:-translate-y-0.5",
      },
      size: {
        sm: "text-[0.78rem] py-1.5 px-3.5 border-2",
        default: "text-[0.8rem] py-1 px-3.5 border-[3px]",
        lg: "text-[0.82rem] py-2 px-5 border-[3px]",
        icon: "py-1 px-2.5 border-[3px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
