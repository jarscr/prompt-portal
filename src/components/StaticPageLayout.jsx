export default function StaticPageLayout({ title, children }) {
  return (
    <main className="static-page">
      <section className="static-page-card">
        <h1>{title}</h1>
        {children}
      </section>
    </main>
  );
}
