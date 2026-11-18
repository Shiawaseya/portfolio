import { PROFILE } from '../../data/content'
import Arch from './Arch'

export default function Home() {
  return (
    <section id="home" className="hero">
      <div className="wrap">
        <div>
          <div className="who">
            <div className="avatar">{PROFILE.photo ? <img src={PROFILE.photo} alt={"Photo of " + PROFILE.name} /> : <span aria-hidden="true">{PROFILE.initials}</span>}</div>
            <div className="name"><h1 style={{fontSize:"inherit",letterSpacing:0,margin:0}}>{PROFILE.name}</h1><small>{PROFILE.title}</small></div>
          </div>
          <p className="statement">I want to understand how systems work and why they’re built that way.</p>
          <p className="intro">I’m a BSIT student at NEUST looking for an OJT placement where I can follow the full software development life cycle, question my assumptions, and build things that are logical, maintainable and useful.</p>
          <div className="row">
            <a className="btn primary" href="#projects">View my projects</a>
            <a className="btn ghost" href={PROFILE.resume} download>Download my resume</a>
            <a className="btn ghost" href="#contact">Contact me</a>
          </div>
        </div>
        <Arch />
      </div>
    </section>
  );
}
