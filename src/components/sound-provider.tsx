import useRawSound from 'use-sound'
import { useAtomValue, useSetAtom } from 'jotai'
import { PiSpeakerSlashFill, PiSpeakerHighFill } from 'react-icons/pi'
import { Button } from '~/components/ui/button'
import { soundEnabledAtom, SOUNDS } from '~/lib/sounds'

export function SoundToggle() {
  const enabled = useAtomValue(soundEnabledAtom)
  const setSoundEnabled = useSetAtom(soundEnabledAtom)

  const [playOn] = useRawSound(SOUNDS.beep, { volume: 0.6 })
  const [playOff] = useRawSound(SOUNDS.error, { volume: 0.5, playbackRate: 0.8 })

  const toggle = () => {
    if (enabled) {
      playOff()
    } else {
      playOn({ forceSoundEnabled: true })
    }
    setSoundEnabled((v) => !v)
  }

  return (
    <Button
      size="icon"
      soundEnabled={false}
      onClick={toggle}
      className="self-stretch"
      aria-label={enabled ? 'Mute sounds' : 'Unmute sounds'}
    >
      {enabled ? <PiSpeakerHighFill size={18} /> : <PiSpeakerSlashFill size={18} />}
    </Button>
  )
}
