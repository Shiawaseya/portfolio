// Canvas scenes for the weather effect. Each scene has update(dt) and draw(ctx).
const rnd = (a, b) => a + Math.random() * (b - a)

export function createRain(w, h) {
  const wind = 0.24
  const n = Math.round(Math.min(280, Math.max(90, (w * h) / 8000)))
  const make = (first) => {
    const z = rnd(0.35, 1) // depth: closer drops are longer, faster and brighter
    return { x: rnd(-120, w + 40), y: first ? rnd(-h, h) : rnd(-200, -10), z, len: 10 + z * 24, v: 620 + z * 820 }
  }
  const drops = Array.from({ length: n }, () => make(true))
  const splashes = []
  return {
    update(dt) {
      for (const d of drops) {
        d.y += d.v * dt
        d.x += d.v * wind * dt
        if (d.y > h - rnd(0, 30) || d.x > w + 60) {
          if (d.z > 0.7 && d.x > 0 && d.x < w && splashes.length < 60 && Math.random() < 0.5) splashes.push({ x: d.x, t: 0 })
          Object.assign(d, make(false))
        }
      }
      for (let i = splashes.length - 1; i >= 0; i--) {
        splashes[i].t += dt
        if (splashes[i].t > 0.45) splashes.splice(i, 1)
      }
    },
    draw(ctx) {
      ctx.clearRect(0, 0, w, h)
      ctx.lineCap = 'round'
      for (const d of drops) {
        ctx.strokeStyle = `rgba(105,130,145,${0.16 + d.z * 0.34})`
        ctx.lineWidth = 0.5 + d.z * 0.9
        ctx.beginPath()
        ctx.moveTo(d.x, d.y)
        ctx.lineTo(d.x - d.len * wind, d.y - d.len)
        ctx.stroke()
      }
      for (const s of splashes) {
        const p = s.t / 0.45
        ctx.strokeStyle = `rgba(105,130,145,${0.5 * (1 - p)})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.ellipse(s.x, h - 3, 2 + p * 9, 1 + p * 3, 0, 0, Math.PI * 2)
        ctx.stroke()
      }
    },
  }
}

const COLORS = ['#9a3220', '#c4541f', '#d9a21b', '#8a5a2b', '#5f7f3b', '#b23a26']

export function createLeaves(w, h) {
  const n = Math.round(Math.min(46, Math.max(16, (w * h) / 42000)))
  const make = (first) => ({
    x0: rnd(-50, w), y: first ? rnd(-h * 0.1, h) : rnd(-60, -20), px: 0, t: rnd(0, 20),
    s: rnd(9, 20), vy: rnd(38, 85), amp: rnd(18, 46), f: rnd(0.5, 1.2), ph: rnd(0, 6.28),
    rot: rnd(0, 6.28), vr: rnd(-1.2, 1.2), flip: rnd(0, 6.28), vf: rnd(0.8, 2),
    c: COLORS[Math.floor(Math.random() * COLORS.length)],
  })
  const leaves = Array.from({ length: n }, () => make(true))
  return {
    update(dt) {
      for (const l of leaves) {
        l.t += dt
        l.y += l.vy * dt
        l.rot += l.vr * dt
        l.flip += l.vf * dt
        l.px = l.x0 + Math.sin(l.t * l.f + l.ph) * l.amp + l.t * 10
        if (l.y > h + 30 || l.px > w + 60) Object.assign(l, make(false))
      }
    },
    draw(ctx) {
      ctx.clearRect(0, 0, w, h)
      for (const l of leaves) {
        const s = l.s
        ctx.save()
        ctx.translate(l.px, l.y)
        ctx.rotate(l.rot)
        ctx.scale(Math.max(0.28, Math.abs(Math.cos(l.flip))), 1)
        ctx.globalAlpha = 0.92
        ctx.fillStyle = l.c
        ctx.beginPath()
        ctx.moveTo(0, -s)
        ctx.bezierCurveTo(s * 0.9, -s * 0.5, s * 0.8, s * 0.6, 0, s)
        ctx.bezierCurveTo(-s * 0.8, s * 0.6, -s * 0.9, -s * 0.5, 0, -s)
        ctx.fill()
        ctx.strokeStyle = 'rgba(40,20,10,.35)'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(0, -s * 0.85)
        ctx.lineTo(0, s * 1.25)
        ctx.stroke()
        ctx.restore()
      }
    },
  }
}

export function createSnow(w, h) {
  const n = Math.round(Math.min(170, Math.max(60, (w * h) / 9000)))
  const make = (first) => {
    const z = rnd(0.3, 1)
    return { x0: rnd(-40, w + 40), y: first ? rnd(-h * 0.1, h) : rnd(-30, -5), r: 1.2 + z * 3.2, vy: 28 + z * 70, amp: rnd(8, 30), f: rnd(0.4, 1.1), ph: rnd(0, 6.28), t: rnd(0, 20), px: 0, a: 0.55 + z * 0.4 }
  }
  const flakes = Array.from({ length: n }, () => make(true))
  return {
    update(dt) {
      for (const f of flakes) {
        f.t += dt
        f.y += f.vy * dt
        f.px = f.x0 + Math.sin(f.t * f.f + f.ph) * f.amp + f.t * 6
        if (f.y > h + 10 || f.px > w + 30) Object.assign(f, make(false))
      }
    },
    draw(ctx) {
      ctx.clearRect(0, 0, w, h)
      for (const f of flakes) {
        ctx.globalAlpha = f.a
        ctx.fillStyle = '#ffffff'
        ctx.strokeStyle = 'rgba(110,145,180,.55)' // keeps flakes visible on light backgrounds
        ctx.lineWidth = 0.8
        ctx.beginPath()
        ctx.arc(f.px, f.y, f.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()
      }
      ctx.globalAlpha = 1
    },
  }
}

export function createSummer(w, h) {
  const n = Math.round(Math.min(70, Math.max(26, (w * h) / 26000)))
  const make = (first) => ({ x: rnd(0, w), y: first ? rnd(0, h) : h + 10, r: rnd(1, 3), vy: rnd(8, 26), amp: rnd(6, 22), f: rnd(0.4, 1), ph: rnd(0, 6.28), t: rnd(0, 20), px: 0, tw: rnd(0.8, 2) })
  const motes = Array.from({ length: n }, () => make(true))
  let time = 0
  const sx = w * 0.92, sy = -h * 0.06
  return {
    update(dt) {
      time += dt
      for (const m of motes) {
        m.t += dt
        m.y -= m.vy * dt
        m.px = m.x + Math.sin(m.t * m.f + m.ph) * m.amp
        if (m.y < -10) Object.assign(m, make(false))
      }
    },
    draw(ctx) {
      ctx.clearRect(0, 0, w, h)
      const R = Math.max(w, h) * 0.75
      const g = ctx.createRadialGradient(sx, sy, 0, sx, sy, R)
      g.addColorStop(0, 'rgba(255,214,100,.42)')
      g.addColorStop(0.35, 'rgba(255,224,130,.16)')
      g.addColorStop(1, 'rgba(255,224,130,0)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)
      for (let i = 0; i < 5; i++) { // slow sunbeams
        const a = 1.9 + i * 0.2 + Math.sin(time * 0.15 + i) * 0.04
        const a2 = a + 0.07
        ctx.fillStyle = `rgba(255,225,140,${0.05 + 0.025 * Math.sin(time * 0.4 + i * 1.7)})`
        ctx.beginPath()
        ctx.moveTo(sx, sy)
        ctx.lineTo(sx + Math.cos(a) * R * 1.6, sy + Math.sin(a) * R * 1.6)
        ctx.lineTo(sx + Math.cos(a2) * R * 1.6, sy + Math.sin(a2) * R * 1.6)
        ctx.closePath()
        ctx.fill()
      }
      for (const m of motes) { // drifting pollen
        ctx.fillStyle = `rgba(255,205,80,${0.35 + 0.35 * Math.abs(Math.sin(m.t * m.tw))})`
        ctx.beginPath()
        ctx.arc(m.px, m.y, m.r, 0, Math.PI * 2)
        ctx.fill()
      }
    },
  }
}
