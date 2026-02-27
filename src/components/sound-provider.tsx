import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from 'react'
import { PiSpeakerSlashFill, PiSpeakerHighFill } from 'react-icons/pi'

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
    <button
      onClick={toggleMute}
      className="font-mono text-[0.8rem] font-medium text-text py-1 px-2.5 border-[3px] border-text bg-card shadow-brutal transition-none hover:shadow-brutal-hover hover:-translate-x-0.5 hover:-translate-y-0.5 cursor-pointer"
      aria-label={muted ? 'Unmute sounds' : 'Mute sounds'}
    >
      {muted ? (
        <PiSpeakerSlashFill size={18} />
      ) : (
        <PiSpeakerHighFill size={18} />
      )}
    </button>
  )
}
