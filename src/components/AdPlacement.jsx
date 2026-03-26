export default function AdPlacement({ id, className = '' }) {
  return (
    <div id={id} className={`promo-slot ${className}`}>
      <p>Espacio publicitario</p>
    </div>
  );
}
