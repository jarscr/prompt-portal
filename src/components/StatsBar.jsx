export default function StatsBar({ totalPrompts, totalCategories }) {
  return (
    <div className="top-bar">
      <h2>Biblioteca de Prompts</h2>
      <p>
        Tus prompts organizados por categoría. Haz clic en <strong>Copiar</strong> para usar cualquier prompt.
      </p>
      <div className="stats">
        <div className="stat-pill">
          <strong>{totalPrompts}</strong> prompts
        </div>
        <div className="stat-pill">
          <strong>{totalCategories}</strong> categorías
        </div>
      </div>
    </div>
  );
}
