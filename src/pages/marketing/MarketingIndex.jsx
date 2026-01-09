import './marketing-index.css';

export default function MarketingIndex({ onNavigate }) {
  return (
    <div className="MarketingIndex">
      <div className="MarketingIndex__header">
        <h1 className="MarketingIndex__title">BHANDARA CHOWK</h1>
        <p className="MarketingIndex__subtitle">माघ मेला 2026 - Marketing Materials</p>
        <div className="MarketingIndex__urlHighlight">bhandarachowk.in</div>
      </div>

      <div className="MarketingIndex__grid">
        <button
          type="button"
          className="MarketingIndex__card"
          onClick={() => onNavigate?.('flyers')}
        >
          <div className="MarketingIndex__cardIcon">📄</div>
          <h3 className="MarketingIndex__cardTitle">Flyers / Handbills (A5)</h3>
          <p className="MarketingIndex__cardDescription">
            4 designs for mass distribution - General, Medical, Food, Spiritual
          </p>
          <div className="MarketingIndex__cardLink">View Designs →</div>
        </button>

        <button
          type="button"
          className="MarketingIndex__card"
          onClick={() => onNavigate?.('stickers')}
        >
          <div className="MarketingIndex__cardIcon">🏷️</div>
          <h3 className="MarketingIndex__cardTitle">QR Stickers</h3>
          <p className="MarketingIndex__cardDescription">
            5x5cm, 7x7cm, 10x10cm sizes + Auto & Tea stall designs
          </p>
          <div className="MarketingIndex__cardLink">View Designs →</div>
        </button>

        <button
          type="button"
          className="MarketingIndex__card"
          onClick={() => onNavigate?.('banners')}
        >
          <div className="MarketingIndex__cardIcon">🎪</div>
          <h3 className="MarketingIndex__cardTitle">Banners</h3>
          <p className="MarketingIndex__cardDescription">
            Entry Gate, Standee, Road, Ghat & Medical banners
          </p>
          <div className="MarketingIndex__cardLink">View Designs →</div>
        </button>

        <button
          type="button"
          className="MarketingIndex__card"
          onClick={() => onNavigate?.('whatsapp')}
        >
          <div className="MarketingIndex__cardIcon">📱</div>
          <h3 className="MarketingIndex__cardTitle">WhatsApp & Social</h3>
          <p className="MarketingIndex__cardDescription">
            Status images (9:16), Square posts (1:1), Forward cards
          </p>
          <div className="MarketingIndex__cardLink">View Designs →</div>
        </button>

        <button
          type="button"
          className="MarketingIndex__card"
          onClick={() => onNavigate?.('tshirt')}
        >
          <div className="MarketingIndex__cardIcon">👕</div>
          <h3 className="MarketingIndex__cardTitle">Volunteer T-Shirts</h3>
          <p className="MarketingIndex__cardDescription">
            Saffron & White options with print specifications
          </p>
          <div className="MarketingIndex__cardLink">View Designs →</div>
        </button>
      </div>

      <div className="MarketingIndex__footer">
        <p>Replace [LOGO] and [QR CODE] placeholders before printing</p>
        <p style={{ marginTop: 15 }}>
          Website:{' '}
          <a
            href="https://bhandarachowk.in"
            target="_blank"
            rel="noreferrer"
            className="MarketingIndex__footerLink"
          >
            bhandarachowk.in
          </a>
        </p>
      </div>
    </div>
  );
}


