import { SCHOOLS } from '../../data/content'

export default function Education() {
  return (
    <section id="education"><div className="wrap">
      <h2>Educational background</h2>
      <p className="lead">From elementary school to college, listed from the most recent.</p>
      <ol className="tl">
        {SCHOOLS.map(s => (
          <li key={s.school} className={s.now ? "now" : ""}>
            <h3>{s.school}</h3><span>{s.detail}</span>{s.when && <span>{s.when}</span>}
          </li>
        ))}
      </ol>
      <p className="note">Training and certificates are listed under Certifications.</p>
    </div></section>
  );
}
