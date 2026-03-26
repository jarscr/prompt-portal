export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-wrap">
      <div className="search-wrap-inner">
        <span className="search-icon">🔍</span>
        <input
          className="search-input"
          type="text"
          placeholder="Buscar prompt..."
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
