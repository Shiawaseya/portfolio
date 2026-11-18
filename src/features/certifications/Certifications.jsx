import { CERTS } from '../../data/content'

export default function Certs() {
  return (
    <section id="certifications"><div className="wrap">
      <h2>Achievements and certifications</h2>
      <p className="lead">Certificates and training I’ve completed.</p>
      <div className="certs">
        {CERTS.map(c => (
          <div className="cert" key={c.name}>
            <h3>{c.name}</h3>
            <p>{c.by}</p><p>{c.date}</p><p>{c.note}</p>
          </div>
        ))}
      </div>
    </div></section>
  );
}
