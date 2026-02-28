import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "~/lib/utils"
import { useSound } from "~/lib/sounds"

const SHADOW_SM =
  "shadow-[3px_3px_0_var(--btn-shadow)] hover:shadow-[5px_5px_0_var(--btn-shadow)] active:shadow-[2px_2px_0_var(--btn-shadow)]"
const SHADOW_MD =
  "shadow-[4px_4px_0_var(--btn-shadow)] hover:shadow-[6px_6px_0_var(--btn-shadow)] active:shadow-[3px_3px_0_var(--btn-shadow)]"

const buttonVariants = cva(
  "inline-flex items-center justify-center font-mono font-medium no-underline cursor-pointer transition-none hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[1px] active:translate-y-[1px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 shrink-0",
  {
    variants: {
      variant: {
        default: "[--btn-shadow:#111] bg-card text-text border-text",
        lime: "[--btn-shadow:#111] bg-lime text-text border-text",
        orange: "[--btn-shadow:#111] bg-orange text-text border-text",
        dark: "[--btn-shadow:#fff] bg-text text-card border-card font-bold",
        "dark-lime": "[--btn-shadow:#C8FF00] bg-transparent text-lime border-lime",
        "dark-orange": "[--btn-shadow:#FF6B00] bg-transparent text-orange border-orange",
      },
      size: {
        sm: `text-[0.78rem] py-1.5 px-3.5 border-2 ${SHADOW_SM}`,
        default: `text-[0.8rem] py-1 px-3.5 border-[3px] ${SHADOW_MD}`,
        lg: `text-[0.82rem] py-2 px-5 border-[3px] ${SHADOW_MD}`,
        icon: `py-1 px-2.5 border-[3px] ${SHADOW_MD}`,
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
  soundEnabled = true,
  onClick,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    soundEnabled?: boolean
  }) {
  const [playClick] = useSound("tick", { volume: 0.3 })
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      onMouseDown={soundEnabled ? () => playClick({ playbackRate: 0.7 }) : undefined}
      onMouseUp={soundEnabled ? () => playClick({ playbackRate: 0.9 }) : undefined}
      onClick={onClick}
      {...props}
    />
  )
}

/** Shared className for inline icons placed before button text labels. */
const buttonIconClass = "inline mr-1.5 text-[1rem] align-[-2px]"

function ButtonExternalLinkIndicator() {
  return (
    <span
      className="absolute top-1 right-1 w-[6px] h-[6px] bg-text"
      style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
    />
  )
}

export { Button, buttonVariants, buttonIconClass, ButtonExternalLinkIndicator }
