import { SKILLS, LEVELS } from '../../data/content'

export default function Skills() {
  return (
    <section id="skills"><div className="wrap">
      <h2>Skills and expertise</h2>
      <p className="lead">Each skill shows my honest level, so you know where I can contribute now and where I’m still learning.</p>
      <div className="skillgrid">
        {SKILLS.map(([group, items]) => (
          <div className="sk" key={group}>
            <h3>{group}</h3>
            <ul>{items.map(([n, l]) => (
              <li key={n}><span>{n}</span>
                <span className="lv"><span className="dots" aria-hidden="true">{[1,2,3].map(i => <s key={i} className={i <= l ? "on" : ""}></s>)}</span>{LEVELS[l]}</span></li>
            ))}</ul>
          </div>
        ))}
      </div>
    </div></section>
  );
}
