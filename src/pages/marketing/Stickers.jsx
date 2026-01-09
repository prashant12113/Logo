import './stickers.css';

export default function Stickers() {
  return (
    <div className="MarketingStickers">
      <h1 className="MarketingStickers__pageTitle">Bhandara Chowk - QR Sticker Designs</h1>
      <p className="MarketingStickers__pageSubtitle">
        All stickers include space for QR code leading to bhandarachowk.in
      </p>

      <h2 className="MarketingStickers__sectionTitle">7x7 cm Stickers (Standard Size)</h2>
      <div className="MarketingStickers__row">
        <div className="MarketingStickers__container">
          <div className="MarketingStickers__label">General - Saffron</div>
          <div className="MarketingStickers__sticker7 MarketingStickers__stickerGeneral">
            <div className="MarketingStickers__logoCircle"><img src={`${import.meta.env.BASE_URL}chowk-icon.svg`} alt="Bhandara Chowk Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            <div className="MarketingStickers__qrBox"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            <div className="MarketingStickers__textHindi">कहाँ है? Scan करो!</div>
            <div className="MarketingStickers__urlWhite">bhandarachowk.in</div>
          </div>
        </div>

        <div className="MarketingStickers__container">
          <div className="MarketingStickers__label">Medical Emergency - Red</div>
          <div className="MarketingStickers__sticker7 MarketingStickers__stickerMedical">
            <div className="MarketingStickers__icon">🏥</div>
            <div className="MarketingStickers__textHindi">MEDICAL HELP?</div>
            <div className="MarketingStickers__qrBoxSmall"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            <div className="MarketingStickers__textHindi" style={{ fontSize: 13 }}>
              Nearest camp खोजें
            </div>
            <div className="MarketingStickers__urlWhite">bhandarachowk.in</div>
          </div>
        </div>

        <div className="MarketingStickers__container">
          <div className="MarketingStickers__label">Food / Bhandara - Orange</div>
          <div className="MarketingStickers__sticker7 MarketingStickers__stickerFood">
            <div className="MarketingStickers__icon">🍽️</div>
            <div className="MarketingStickers__textHindi">भूख लगी है?</div>
            <div className="MarketingStickers__qrBoxSmall"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            <div className="MarketingStickers__textHindi" style={{ fontSize: 13 }}>
              FREE भंडारा खोजें
            </div>
            <div className="MarketingStickers__urlWhite">bhandarachowk.in</div>
          </div>
        </div>

        <div className="MarketingStickers__container">
          <div className="MarketingStickers__label">Navigation - Dark</div>
          <div className="MarketingStickers__sticker7 MarketingStickers__stickerNav">
            <div className="MarketingStickers__icon">📍</div>
            <div className="MarketingStickers__textHindi">भटक गए?</div>
            <div className="MarketingStickers__qrBoxSmall"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            <div className="MarketingStickers__textHindi" style={{ fontSize: 13 }}>
              रास्ता खोजें
            </div>
            <div className="MarketingStickers__urlNav">bhandarachowk.in</div>
          </div>
        </div>

        <div className="MarketingStickers__container">
          <div className="MarketingStickers__label">Minimal - White</div>
          <div className="MarketingStickers__sticker7 MarketingStickers__stickerMinimal">
            <div className="MarketingStickers__logoCircleMinimal"><img src={`${import.meta.env.BASE_URL}chowk-icon.svg`} alt="Bhandara Chowk Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            <div className="MarketingStickers__qrBoxMinimal"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            <div className="MarketingStickers__textHindiMinimal">माघ मेला Guide</div>
            <div className="MarketingStickers__urlSaffron">bhandarachowk.in</div>
          </div>
        </div>
      </div>

      <h2 className="MarketingStickers__sectionTitle">5x5 cm Stickers (Small - for Poles)</h2>
      <div className="MarketingStickers__row">
        <div className="MarketingStickers__container">
          <div className="MarketingStickers__label">Small Saffron</div>
          <div className="MarketingStickers__sticker5 MarketingStickers__smallSaffron">
            <div className="MarketingStickers__qrBox5"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            <div className="MarketingStickers__text5">Scan करो!</div>
            <div className="MarketingStickers__urlWhiteSmall">bhandarachowk.in</div>
          </div>
        </div>

        <div className="MarketingStickers__container">
          <div className="MarketingStickers__label">Small White</div>
          <div className="MarketingStickers__sticker5 MarketingStickers__smallWhite">
            <div className="MarketingStickers__qrBox5White"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            <div className="MarketingStickers__text5White">कहाँ है?</div>
            <div className="MarketingStickers__urlSaffronSmall">bhandarachowk.in</div>
          </div>
        </div>

        <div className="MarketingStickers__container">
          <div className="MarketingStickers__label">Small Medical</div>
          <div className="MarketingStickers__sticker5 MarketingStickers__smallMedical">
            <div style={{ fontSize: 24, marginBottom: 5 }}>🏥</div>
            <div className="MarketingStickers__qrBox5Medical"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            <div className="MarketingStickers__urlWhiteTiny">bhandarachowk.in</div>
          </div>
        </div>

        <div className="MarketingStickers__container">
          <div className="MarketingStickers__label">Small Food</div>
          <div className="MarketingStickers__sticker5 MarketingStickers__smallFood">
            <div style={{ fontSize: 24, marginBottom: 5 }}>🍽️</div>
            <div className="MarketingStickers__qrBox5Medical"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            <div className="MarketingStickers__urlWhiteTiny">bhandarachowk.in</div>
          </div>
        </div>
      </div>

      <h2 className="MarketingStickers__sectionTitle">10x10 cm Stickers (Large - for Vehicles/Walls)</h2>
      <div className="MarketingStickers__row">
        <div className="MarketingStickers__container">
          <div className="MarketingStickers__label">Large Saffron</div>
          <div className="MarketingStickers__sticker10">
            <div className="MarketingStickers__large">
              <div className="MarketingStickers__logoCircleLarge"><img src={`${import.meta.env.BASE_URL}chowk-icon.svg`} alt="Bhandara Chowk Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
              <div className="MarketingStickers__titleLarge">माघ मेले में कुछ भी खोजें!</div>
              <div className="MarketingStickers__qrBoxLarge"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
              <div className="MarketingStickers__subtitleLarge">📱 Scan करें या खोलें:</div>
              <div className="MarketingStickers__urlWhiteLarge">bhandarachowk.in</div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="MarketingStickers__sectionTitle">Auto-Rickshaw Branding</h2>
      <div className="MarketingStickers__row">
        <div className="MarketingStickers__container">
          <div className="MarketingStickers__label">Back Panel (18&quot; x 12&quot;)</div>
          <div className="MarketingStickers__autoBack">
            <div className="MarketingStickers__autoBackDesign">
              <div className="MarketingStickers__autoLeft">
                <div className="MarketingStickers__autoTitle">माघ मेले में भटक गए?</div>
                <div className="MarketingStickers__autoSubtitle">
                  कुछ भी खोजें - Medical, भंडारा, संगम
                </div>
                <div className="MarketingStickers__autoUrl">bhandarachowk.in</div>
              </div>
              <div className="MarketingStickers__autoQrBox"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="MarketingStickers__row">
        <div className="MarketingStickers__container">
          <div className="MarketingStickers__label">Side Panel (24&quot; x 4&quot;)</div>
          <div className="MarketingStickers__autoSide">
            <div className="MarketingStickers__autoSideDesign">
              <div className="MarketingStickers__autoIcons">🏥 🍽️ 📍</div>
              <div className="MarketingStickers__autoSideText">Medical • भंडारा • संगम</div>
              <div className="MarketingStickers__autoSideUrl">bhandarachowk.in</div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="MarketingStickers__sectionTitle">Tea Stall / Counter Cards</h2>
      <div className="MarketingStickers__row">
        <div className="MarketingStickers__container">
          <div className="MarketingStickers__label">Counter Card</div>
          <div className="MarketingStickers__teaCard">
            <div className="MarketingStickers__teaCardDesign">
              <div className="MarketingStickers__teaLeft">
                <div className="MarketingStickers__logoSmall"><img src={`${import.meta.env.BASE_URL}chowk-icon.svg`} alt="Bhandara Chowk Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
                <div className="MarketingStickers__teaTitle">
                  माघ मेले में
                  <br />
                  कहीं भी जाना है?
                </div>
                <div className="MarketingStickers__teaFeatures">
                  🏥 Medical &nbsp; 🍽️ भंडारा
                  <br />
                  📍 संगम &nbsp; 🅿️ Parking
                </div>
                <div className="MarketingStickers__teaUrl">bhandarachowk.in</div>
              </div>
              <div className="MarketingStickers__teaQr"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            </div>
          </div>
        </div>

        <div className="MarketingStickers__container">
          <div className="MarketingStickers__label">Tent Card Style</div>
          <div className="MarketingStickers__tentCard">
            <div className="MarketingStickers__tentText">
              चाय पीते-पीते...
              <br />
              मेले का map देखो!
            </div>
            <div className="MarketingStickers__tentQr"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            <div className="MarketingStickers__tentUrl">bhandarachowk.in</div>
          </div>
        </div>
      </div>
    </div>
  );
}


