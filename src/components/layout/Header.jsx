import { useState } from 'react'
import { NAV } from '../../data/content'

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="wrap nav">
        <a className="brand" href="#home">Gerald Peralta</a>
        <button className="menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
        <ul id="menu" className={"links" + (open ? " open" : "")}>
          {NAV.map(([id, label]) => <li key={id}><a href={"#" + id} onClick={() => setOpen(false)}>{label}</a></li>)}
        </ul>
      </div>
    </header>
  );
}
