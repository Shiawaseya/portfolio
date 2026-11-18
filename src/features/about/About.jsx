export default function About() {
  return (
    <section id="about"><div className="wrap">
      <div className="think">
        <p className="pull">I value understanding over blindly following conventions.</p>
        <div>
          <h2>How I think</h2>
          <p>I’m an aspiring software engineer with a strong interest in understanding how systems work, how their components interact, and how technology can address practical problems.</p>
          <p>I approach development with an analytical and systems-oriented mindset. I enjoy examining workflows, questioning assumptions, exploring different approaches, and understanding the reasoning behind technical decisions.</p>
          <p>For me, software development goes beyond writing code. It involves understanding the problem, designing meaningful solutions, and building systems that are logical, maintainable, and useful.</p>
          <p>I’m continuously exploring technologies, strengthening my engineering fundamentals, and challenging myself through practical projects. I believe good engineering comes from thoughtful decisions and continuous improvement.</p>
          <div className="chips" aria-label="Strengths">
            {['Analytical','Systems-oriented','Learns independently','Takes feedback well'].map(c => <span className="chip" key={c}>{c}</span>)}
          </div>
        </div>
      </div>
      <ul className="facts">
        <li><b>Career interest</b>Full-stack web and mobile development</li>
        <li><b>Looking for</b>OJT in software development or IT</li>
        <li><b>Currently learning</b>React Native, Ionic, application architecture</li>
        <li><b>Based in</b>Central Luzon, Philippines</li>
      </ul>
    </div></section>
  )
}
