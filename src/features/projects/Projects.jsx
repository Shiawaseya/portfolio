import { PROJECTS } from '../../data/content'
import Shot from './Shot'

export default function Projects() {
  return (
    <section id="projects"><div className="wrap">
      <h2>Projects</h2>
      <p className="lead">Three parts of the SAND inventory and point-of-sale system I built.</p>
      {PROJECTS.map(p => (
        <article className="proj" key={p.title}>
          <Shot p={p} />
          <div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <dl>
              <dt>Purpose</dt><dd>{p.goal}</dd>
              <dt>Tools</dt><dd>{p.tech}</dd>
              <dt>My role</dt><dd>{p.role}</dd>
              <dt>Outcome</dt><dd>{p.result}</dd>
            </dl>
            <p><a href={p.link} target="_blank" rel="noopener noreferrer">{p.linkText} (opens in a new tab)</a></p>
          </div>
        </article>
      ))}
    </div></section>
  );
}
