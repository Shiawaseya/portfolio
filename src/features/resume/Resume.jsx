import { PROFILE } from '../../data/content'

export default function Resume() {
  return (
    <section style={{paddingTop:0}}><div className="wrap">
      <div className="cta">
        <div><h2 style={{marginBottom:0}}>My resume</h2><p>One page, PDF format.</p></div>
        <a className="btn" href={PROFILE.resume} download>Download resume (PDF)</a>
      </div>
    </div></section>
  );
}
