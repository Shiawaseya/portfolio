import { useState } from 'react'

const PARTS = [
  { layer: 'What people use', items: [
    { id: 'admin', name: 'Admin dashboard', tech: 'React + TypeScript', hot: true, what: 'Where an owner manages items, stock and reports.' },
    { id: 'pos', name: 'POS screen', tech: 'React', hot: true, what: 'Where a cashier records a sale.' } ] },
  { layer: 'What runs behind', items: [
    { id: 'api', name: 'REST API', tech: 'PHP + MySQL', what: 'The one source of truth that every screen talks to.' },
    { id: 'sock', name: 'Socket server', tech: 'Node.js', what: 'Pushes live updates so screens stay in sync.' } ] },
  { layer: 'On the cashier PC', items: [
    { id: 'print', name: 'Print agent', tech: 'PHP, dot-matrix', what: 'Turns a finished sale into a printed receipt.' } ] },
]

export default function Arch() {
  const [sel, setSel] = useState(null)
  return (
    <aside className="arch" aria-label="Parts of the SAND inventory system">
      <h2>SAND, my main project, is five parts that work together</h2>
      {PARTS.map(l => (
        <div className="layer" key={l.layer}>
          <small>{l.layer}</small>
          <div className="blocks">
            {l.items.map(i => (
              <button type="button" key={i.id} aria-pressed={sel === i.id} onClick={() => setSel(sel === i.id ? null : i.id)}
                className={'blk' + (i.hot ? ' hot' : '')}>
                {i.name}<i>{i.tech}</i>
              </button>
            ))}
          </div>
        </div>
      ))}
      <p className="what" role="status" aria-live="polite">{sel ? PARTS.flatMap(l => l.items).find(i => i.id === sel).what : 'Select a part to see what it does.'}</p>
    </aside>
  )
}
