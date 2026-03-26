import SearchBar from './SearchBar';
import AdPlacement from './AdPlacement';

export default function Sidebar({ categories, promptCounts, totalPrompts, searchQuery, onSearch }) {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>📋 Prompts para IA</h1>
        <p>{totalPrompts} prompts · {categories.length} categorías</p>
      </div>

      <SearchBar value={searchQuery} onChange={onSearch} />

      <nav className="nav">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className="nav-cat"
            onClick={(e) => scrollToSection(e, cat.id)}
          >
            <span className="nav-dot" style={{ background: cat.color }} />
            <span className="nav-label">{cat.label}</span>
            <span className="nav-count">{promptCounts[cat.id] || 0}</span>
          </button>
        ))}
      </nav>

      <AdPlacement id="sidebar-promo" className="promo-slot-sidebar" />
    </aside>
  );
}
