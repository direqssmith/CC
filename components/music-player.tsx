"use client"

import { useState, useRef, useEffect } from "react"

interface MusicPlayerProps {
  className?: string
}

export default function MusicPlayer({ className = "" }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState<"relax" | "metal">("relax")
  const [volume, setVolume] = useState(0.5)
  const audioRef = useRef<HTMLAudioElement>(null)

  const tracks = {
    relax: {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prologue%20of%20the%20Galactic%20Heroes-S3mFpRJMcKFkvEl3fjJUrznuM0wSvX.mp3",
      name: "Space Relax",
      title: "Prologue of the Galactic Heroes",
    },
    metal: {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rocket%20Launch%20-%20Melodic%20Metal%20Instrumental-2bEt5bTHAuxu2HbeqnmZdWubxulabm.mp3",
      name: "Space Metal",
      title: "Rocket Launch - Melodic Metal Instrumental",
    },
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
      if (isPlaying) {
        audioRef.current.play().catch(console.error)
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying, currentTrack, volume])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const switchTrack = (track: "relax" | "metal") => {
    if (currentTrack !== track) {
      setCurrentTrack(track)
      setIsPlaying(false)
      // Small delay to allow track to load
      setTimeout(() => setIsPlaying(true), 100)
    }
  }

  return (
    <div
      className={`font-mono p-3 border rounded backdrop-blur-sm text-cyan-300 border-cyan-300 mx-0 w-auto bg-transparent ${className}`}
    >
      <div className="text-xs mb-2 text-center">
        <div className="text-cyan-300">♪ SPACE AUDIO SYSTEM ♪</div>
        <div className="text-xs mt-1 text-cyan-300">Made with Producer.ai</div>
      </div>

      <audio ref={audioRef} src={tracks[currentTrack].src} loop preload="metadata" />

      <div className="space-y-2 bg-transparent">
        <div className="text-xs">
          <div className="text-cyan-300">Now Playing:</div>
          <div className="truncate text-cyan-300">{tracks[currentTrack].title}</div>
        </div>

        <div className="flex gap-2 border-transparent bg-transparent">
          <button
            onClick={togglePlay}
            className="px-2 py-1 hover:bg-cyan-300/30 border rounded text-xs transition-colors text-cyan-300 bg-transparent border-transparent"
          >
            {isPlaying ? "⏸" : "▶"}
          </button>

          <button
            onClick={() => switchTrack("relax")}
            className={`px-2 py-1 border rounded text-xs transition-colors text-cyan-300 border-transparent bg-transparent ${
              currentTrack === "relax"
                ? "bg-cyan-400/30 text-cyan-300 border-cyan-400"
                : "bg-cyan-400/10 text-cyan-400 border-cyan-400/50 hover:bg-cyan-400/20"
            }`}
          >
            SpaceRelax
          </button>

          <button
            onClick={() => switchTrack("metal")}
            className={`px-2 py-1 border rounded text-xs transition-colors text-cyan-300 bg-transparent border-transparent ${
              currentTrack === "metal"
                ? "bg-cyan-400/30 text-cyan-300 border-cyan-400"
                : "bg-cyan-400/10 text-cyan-400 border-cyan-400/50 hover:bg-cyan-400/20"
            }`}
          >
            SpaceMetal
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs">Vol:</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(Number.parseFloat(e.target.value))}
            className="flex-1 rounded appearance-none slider flex-row border-transparent bg-transparent h-1.5 text-transparent"
            style={{
              background: `linear-gradient(to right, #4DD0E1 0%, #4DD0E1 ${volume * 100}%, rgba(0, 255, 255, 0.5) ${volume * 100}%, rgba(0, 255, 255, 0.5) 100%)`,
            }}
          />
          <span className="text-xs w-8">{Math.round(volume * 100)}%</span>
        </div>
      </div>
    </div>
  )
}
