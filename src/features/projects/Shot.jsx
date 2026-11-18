export default function Shot({ p }) {
  return (
    <div className="shot">
      <div className="bar" aria-hidden="true"><s></s><s></s><s></s></div>
      {p.img ? <img src={p.img} alt={"Screenshot of " + p.title} /> : <div className="ph">Screenshot of {p.title} goes here.<br />Set the <code>img</code> field to your image file.</div>}
    </div>
  );
}
