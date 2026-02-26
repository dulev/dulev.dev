export const soundSprite = {
  click: [0, 200],
  hover: [300, 200],
  pop: [600, 250],
  swoosh: [950, 400],
} as const

export type SoundName = keyof typeof soundSprite
