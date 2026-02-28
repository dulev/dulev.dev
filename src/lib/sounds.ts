import useSoundHook from 'use-sound'
import { useAtomValue } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

// Persistent mute toggle — defaults to muted (false = disabled)
export const soundEnabledAtom = atomWithStorage('ui-sounds-enabled', false)

const CDN = 'https://cdn.jsdelivr.net/gh/rse/soundfx@master/soundfx.d'

export const SOUNDS = {
  click:  `${CDN}/click6.mp3`,
  whoosh: `${CDN}/whoosh3.mp3`,
  bling:  `${CDN}/bling1.mp3`,
  tick:   `${CDN}/click4.mp3`,
  error:  `${CDN}/error2.mp3`,
  beep:   `${CDN}/beep6.mp3`,
} as const

export type SoundName = keyof typeof SOUNDS

export function useSound(sound: SoundName, options?: { volume?: number }) {
  const enabled = useAtomValue(soundEnabledAtom)
  const [play, data] = useSoundHook(SOUNDS[sound], {
    soundEnabled: enabled,
    volume: options?.volume ?? 0.5,
  })
  return [play, data] as const
}
