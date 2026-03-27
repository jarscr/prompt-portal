const AD_CONFIG = {
  header: {
    label: 'Top Slide Ad',
    width: 730,
    height: 190,
  },
  sidebar: {
    label: 'Sidebar Banner Ad',
    width: 220,
    height: 330,
  },
};

export default function AdPlacement({ id, className = '', variant = 'header' }) {
  const config = AD_CONFIG[variant] || AD_CONFIG.header;

  if (variant === 'sidebar') {
    return (
      <div id={id} className={`promo-slot ${className}`}>
        <a
          href="https://www.jdoqocy.com/click-100501996-17248456"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/banner-sliderbar.png"
            alt="Sponsored banner"
            width="220"
            height="330"
            className="promo-slot-image"
          />
        </a>
      </div>
    );
  }

  return (
    <div id={id} className={`promo-slot ${className}`}>
      <div
        className="promo-slot-frame"
        style={{ width: `${config.width}px`, height: `${config.height}px` }}
      >
       <a
          href="https://www.jdoqocy.com/click-100501996-17248456"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/banner-superior.png"
            alt="Sponsored banner"
            width="728"
            height="187"
            className="promo-slot-image"
          />
        </a>
      </div>
    </div>
  );
}
