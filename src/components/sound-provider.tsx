import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from 'react'

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
      )}
    </button>
  )
}
