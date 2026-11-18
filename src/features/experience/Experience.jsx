export default function Experience() {
  return (
    <section id="experience"><div className="wrap">
      <h2>Experience</h2>
      <p className="lead">I haven’t held a formal job yet. My experience comes from academic and personal projects.</p>
      <div className="two" style={{gridTemplateColumns:"1fr 1fr"}}>
        <div className="sk"><h3>Software developer, SAND inventory and POS system</h3>
          <p className="note" style={{margin:"4px 0 10px"}}>Personal and academic project</p>
          <ul>
            <li>Built a REST API, an admin dashboard, a POS screen, a socket server and a print agent.</li>
            <li>Added QR code and barcode generation, dashboard charts and email notifications.</li>
            <li>Documented how to connect a React Native client to the API.</li>
          </ul></div>
        <div className="sk"><h3>Self-directed learner</h3>
          <p className="note" style={{margin:"4px 0 10px"}}>2025 to present</p>
          <ul>
            <li>Completed about 300 hours of freeCodeCamp JavaScript training.</li>
            <li>Attended webinars on networking and IoT cybersecurity.</li>
            <li>Studying React Native, Ionic and application architecture.</li>
          </ul></div>
      </div>
    </div></section>
  );
}
