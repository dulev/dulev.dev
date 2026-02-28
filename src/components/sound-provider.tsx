import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from 'react'
import { PiSpeakerSlashFill, PiSpeakerHighFill } from 'react-icons/pi'
import { Button } from '~/components/ui/button'

type SoundContextType = {
  muted: boolean
  toggleMute: () => void
  playClick: () => void
  playHover: () => void
  playPop: () => void
}

const SoundContext = createContext<SoundContextType>({
  muted: true,
  toggleMute: () => {},
  playClick: () => {},
  playHover: () => {},
  playPop: () => {},
})

export function SoundProvider({ children }: { children: ReactNode }) {
  const [muted, setMuted] = useState(true)

  const toggleMute = useCallback(() => setMuted((m) => !m), [])

  const playSound = useCallback(() => {
    // Sound playback is a nice-to-have; keeping it simple with no-ops for now
    // Will integrate use-sound with sprite MP3 once we have the audio file
  }, [])

  return (
    <SoundContext.Provider
      value={{
        muted,
        toggleMute,
        playClick: playSound,
        playHover: playSound,
        playPop: playSound,
      }}
    >
      {children}
    </SoundContext.Provider>
  )
}

export function useSound() {
  return useContext(SoundContext)
}

export function SoundToggle() {
  const { muted, toggleMute } = useSound()
  return (
    <Button
      size="icon"
      onClick={toggleMute}
      className="self-stretch"
      aria-label={muted ? 'Unmute sounds' : 'Mute sounds'}
    >
      {muted ? (
        <PiSpeakerSlashFill size={18} />
      ) : (
        <PiSpeakerHighFill size={18} />
      )}
    </Button>
  )
}
