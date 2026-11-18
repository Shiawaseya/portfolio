import { useState } from 'react'
import { PROFILE } from '../../data/content'

export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ t: "", k: "" });
  const set = k => e => setF({ ...f, [k]: e.target.value });
  const submit = e => {
    e.preventDefault();
    if (!f.name.trim() || !f.message.trim()) return setStatus({ t: "Enter your name and a message, then send again.", k: "err" });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) return setStatus({ t: "Enter a valid email address, such as name@example.com.", k: "err" });
    const body = encodeURIComponent(f.message + "\n\nFrom: " + f.name + " (" + f.email + ")");
    window.location.href = "mailto:" + PROFILE.email + "?subject=" + encodeURIComponent("Portfolio message from " + f.name) + "&body=" + body;
    setStatus({ t: "Your email app should open with the message ready to send.", k: "ok" });
  };
  return (
    <section id="contact"><div className="wrap two" style={{gridTemplateColumns:"1fr 1.2fr"}}>
      <div>
        <h2>Contact me</h2>
        <p className="lead">I’m open to OJT offers and happy to answer questions about my projects.</p>
        <ul className="contacts">
          <li>Email: <a href={"mailto:" + PROFILE.email}>{PROFILE.email}</a></li>
          <li>Phone: <a href={"tel:" + PROFILE.phone.replace(/\s/g, "")}>{PROFILE.phone}</a></li>
          <li>GitHub: <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">github.com/Shiawaseya</a></li>
          {PROFILE.linkedin && <li>LinkedIn: <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">View profile</a></li>}
        </ul>
      </div>
      <form onSubmit={submit} noValidate>
        <label>Your name<input value={f.name} onChange={set("name")} autoComplete="name" /></label>
        <label>Your email<input type="email" value={f.email} onChange={set("email")} autoComplete="email" /></label>
        <label>Message<textarea value={f.message} onChange={set("message")} /></label>
        <button className="btn primary" type="submit">Send message</button>
        <p className={"msg " + status.k} role="status" aria-live="polite">{status.t}</p>
      </form>
    </div></section>
  );
}
