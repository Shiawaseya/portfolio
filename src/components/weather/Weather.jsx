import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { createRain, createLeaves, createSnow, createSummer } from './scenes'

const MODES = [['rain', 'Rain'], ['autumn', 'Autumn'], ['winter', 'Winter'], ['summer', 'Summer'], ['off', 'Off']]
const SEASONS = ['autumn', 'winter', 'summer']
const SCENES = { rain: createRain, autumn: createLeaves, winter: createSnow, summer: createSummer }

const read = (key, valid, fallback) => {
  try {
    const v = window.localStorage.getItem(key)
    if (valid.includes(v)) return v
  } catch {}
  return fallback
}

const WeatherContext = createContext(null)

export function WeatherProvider({ children }) {
  // season = colour palette (autumn by default); mode = the animation on screen
  const [season, setSeason] = useState(() => (typeof window === 'undefined' ? 'autumn' : read('season', SEASONS, 'autumn')))
  const [mode, setMode] = useState(() => {
    if (typeof window === 'undefined') return 'rain'
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return read('weather', MODES.map(([m]) => m), reduce ? 'off' : 'rain')
  })
  const canvas = useRef(null)

  const choose = (m) => {
    setMode(m)
    if (SEASONS.includes(m)) setSeason(m) // Rain and Off keep the current palette
  }

  useEffect(() => {
    document.documentElement.dataset.season = season
    try { window.localStorage.setItem('season', season); window.localStorage.setItem('weather', mode) } catch {}
  }, [season, mode])

  useEffect(() => {
    const c = canvas.current
    const ctx = c.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let raf, last = 0, lastW = 0, lastH = 0

    const start = () => {
      cancelAnimationFrame(raf)
      const w = window.innerWidth, h = window.innerHeight
      lastW = w; lastH = h
      c.width = w * dpr; c.height = h * dpr
      c.style.width = w + 'px'; c.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, w, h)
      if (mode === 'off') return
      const scene = SCENES[mode](w, h)
      last = 0
      const frame = (t) => {
        const dt = last ? Math.min((t - last) / 1000, 0.05) : 0.016
        last = t
        scene.update(dt)
        scene.draw(ctx)
        raf = requestAnimationFrame(frame)
      }
      raf = requestAnimationFrame(frame)
    }

    start()
    // ignore the small height changes caused by mobile browser bars while scrolling
    const onResize = () => {
      if (window.innerWidth === lastW && Math.abs(window.innerHeight - lastH) < 160) return
      start()
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [mode])

  return (
    <WeatherContext.Provider value={{ mode, choose }}>
      <canvas ref={canvas} className="weather-canvas" aria-hidden="true" />
      {children}
    </WeatherContext.Provider>
  )
}

export function WeatherControl() {
  const { mode, choose } = useContext(WeatherContext)
  return (
    <select className="weather-sel" value={mode} onChange={(e) => choose(e.target.value)} aria-label="Background weather and season">
      {MODES.map(([m, label]) => <option key={m} value={m}>Weather: {label}</option>)}
    </select>
  )
}
