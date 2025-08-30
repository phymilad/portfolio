export const metadata = { title: 'Contact — Your Name' };

export default function Contact() {
  return (
    <section className="prose">
      <h1>Contact</h1>
      <p>We’ll wire this form to email in Step 4.</p>
      <form className="not-prose grid max-w-md gap-3">
        <input name="name" placeholder="Your name" className="rounded border p-2" />
        <input name="email" type="email" placeholder="you@example.com" className="rounded border p-2" />
        <textarea name="message" placeholder="Say hi…" className="rounded border p-2" rows={5} />
        <button className="rounded bg-slate-900 px-3 py-2 text-white">Send</button>
      </form>
    </section>
  );
}
