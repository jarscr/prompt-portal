const AD_CONFIG = {
  header: {
    label: 'Top Slide Ad',
    width: 500,
    height: 150,
  },
  sidebar: {
    label: 'Sidebar Banner Ad',
    width: 250,
    height: 300,
  },
};

export default function AdPlacement({ id, className = '', variant = 'header' }) {
  const config = AD_CONFIG[variant] || AD_CONFIG.header;

  return (
    <div id={id} className={`promo-slot ${className}`}>
      <div
        className="promo-slot-frame"
        style={{ width: `${config.width}px`, height: `${config.height}px` }}
      >
        <span className="promo-slot-label">{config.label}</span>
        <span className="promo-slot-size">
          {config.width} x {config.height}
        </span>
      </div>
    </div>
  );
}
