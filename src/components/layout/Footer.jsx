import { PROFILE, NAV } from '../../data/content'

export default function Footer() {
  return (
    <footer><div className="wrap">
      <div><strong>{PROFILE.name}</strong><br />© 2026 All rights reserved.</div>
      <ul>{NAV.map(([id, l]) => <li key={id}><a href={"#" + id}>{l}</a></li>)}</ul>
      <div><a href={"mailto:" + PROFILE.email}>{PROFILE.email}</a><br /><a href={PROFILE.github}>GitHub</a></div>
    </div></footer>
  );
}
