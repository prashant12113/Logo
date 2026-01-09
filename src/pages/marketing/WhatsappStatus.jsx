import './whatsapp-status.css';

export default function WhatsappStatus() {
  return (
    <div className="MarketingWhatsapp">
      <h1 className="MarketingWhatsapp__pageTitle">WhatsApp Status &amp; Social Media Images</h1>
      <p className="MarketingWhatsapp__pageSubtitle">
        Optimized for WhatsApp Status (9:16) and Social Posts (1:1)
      </p>

      <h2 className="MarketingWhatsapp__sectionTitle">WhatsApp Status (1080x1920 - Stories)</h2>
      <div className="MarketingWhatsapp__imagesRow">
        <div className="MarketingWhatsapp__imageContainer">
          <div className="MarketingWhatsapp__imageLabel">Status 1: General</div>
          <div className="MarketingWhatsapp__waStatus MarketingWhatsapp__statusGeneral">
            <div className="MarketingWhatsapp__logoCircle">
              <div className="MarketingWhatsapp__logoPlaceholder"><img src={`${import.meta.env.BASE_URL}chowk-icon.svg`} alt="Bhandara Chowk Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            </div>
            <div className="MarketingWhatsapp__mainTitle">
              माघ मेले में
              <br />
              कुछ भी खोजें!
            </div>
            <div className="MarketingWhatsapp__features">
              <span className="MarketingWhatsapp__feature">🏥 Medical</span>
              <span className="MarketingWhatsapp__feature">🍽️ भंडारे</span>
              <span className="MarketingWhatsapp__feature">🕉️ अखाड़े</span>
              <span className="MarketingWhatsapp__feature">📍 संगम</span>
            </div>
            <div className="MarketingWhatsapp__qrBox">
              <div className="MarketingWhatsapp__qrPlaceholder"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            </div>
            <div className="MarketingWhatsapp__urlWhite">bhandarachowk.in</div>
            <div className="MarketingWhatsapp__swipeHint">↑ Link open करें</div>
          </div>
        </div>

        <div className="MarketingWhatsapp__imageContainer">
          <div className="MarketingWhatsapp__imageLabel">Status 2: Medical Emergency</div>
          <div className="MarketingWhatsapp__waStatus MarketingWhatsapp__statusMedical">
            <div className="MarketingWhatsapp__iconBig">🏥</div>
            <div className="MarketingWhatsapp__mainTitleMedical">
              EMERGENCY में
              <br />
              काम आएगा!
            </div>
            <div className="MarketingWhatsapp__subtitleMedical">
              माघ मेले में FREE
              <br />
              Medical Camp खोजें
            </div>
            <div className="MarketingWhatsapp__qrBox">
              <div className="MarketingWhatsapp__qrPlaceholder"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            </div>
            <div className="MarketingWhatsapp__urlWhite">bhandarachowk.in</div>
            <div className="MarketingWhatsapp__saveHint">⚠️ Screenshot लेकर SAVE करें</div>
          </div>
        </div>

        <div className="MarketingWhatsapp__imageContainer">
          <div className="MarketingWhatsapp__imageLabel">Status 3: Food / Bhandara</div>
          <div className="MarketingWhatsapp__waStatus MarketingWhatsapp__statusFood">
            <div className="MarketingWhatsapp__iconBig">🍽️</div>
            <div className="MarketingWhatsapp__mainTitleFood">भूख लगी है?</div>
            <div className="MarketingWhatsapp__subtitleFood">माघ मेले में 100+ भंडारे!</div>
            <div className="MarketingWhatsapp__qrBox">
              <div className="MarketingWhatsapp__qrPlaceholder"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            </div>
            <div className="MarketingWhatsapp__urlWhite" style={{ marginBottom: 15 }}>
              bhandarachowk.in
            </div>
            <div className="MarketingWhatsapp__badge">✅ Free • No App • Instant</div>
          </div>
        </div>

        <div className="MarketingWhatsapp__imageContainer">
          <div className="MarketingWhatsapp__imageLabel">Status 4: Minimal Dark</div>
          <div className="MarketingWhatsapp__waStatus MarketingWhatsapp__statusDark">
            <div className="MarketingWhatsapp__logoCircleDark">
              <div className="MarketingWhatsapp__logoPlaceholder" style={{ color: 'white' }}>
                <img src={`${import.meta.env.BASE_URL}chowk-icon.svg`} alt="Bhandara Chowk Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
            </div>
            <div className="MarketingWhatsapp__brand">BHANDARA CHOWK</div>
            <div className="MarketingWhatsapp__mainTitleDark">
              माघ मेला 2025
              <br />
              Guide
            </div>
            <div className="MarketingWhatsapp__qrBoxDark">
              <div className="MarketingWhatsapp__qrPlaceholder"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            </div>
            <div className="MarketingWhatsapp__urlSaffron">bhandarachowk.in</div>
          </div>
        </div>
      </div>

      <h2 className="MarketingWhatsapp__sectionTitle">Square Images (1080x1080 - Posts)</h2>
      <div className="MarketingWhatsapp__imagesRow">
        <div className="MarketingWhatsapp__imageContainer">
          <div className="MarketingWhatsapp__imageLabel">Square 1: General Saffron</div>
          <div className="MarketingWhatsapp__squareImage MarketingWhatsapp__squareGeneral">
            <div className="MarketingWhatsapp__logoCircleSquare">
              <div className="MarketingWhatsapp__logoPlaceholder"><img src={`${import.meta.env.BASE_URL}chowk-icon.svg`} alt="Bhandara Chowk Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            </div>
            <div className="MarketingWhatsapp__squareTitle">
              माघ मेले में
              <br />
              कुछ भी खोजें!
            </div>
            <div className="MarketingWhatsapp__squareQrBox">
              <div className="MarketingWhatsapp__qrPlaceholder"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            </div>
            <div className="MarketingWhatsapp__urlWhite">bhandarachowk.in</div>
          </div>
        </div>

        <div className="MarketingWhatsapp__imageContainer">
          <div className="MarketingWhatsapp__imageLabel">Square 2: Features Light</div>
          <div className="MarketingWhatsapp__squareImage MarketingWhatsapp__squareFeatures">
            <div className="MarketingWhatsapp__featuresHeader">
              <div className="MarketingWhatsapp__logoCircleSmall">
                <div
                  className="MarketingWhatsapp__logoPlaceholder"
                  style={{ color: 'white', fontSize: 7 }}
                >
                  <img src={`${import.meta.env.BASE_URL}chowk-icon.svg`} alt="Bhandara Chowk Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
              </div>
              <div className="MarketingWhatsapp__brandName">BHANDARA CHOWK</div>
            </div>
            <div className="MarketingWhatsapp__featuresTitle">माघ मेले में खोजें:</div>
            <div className="MarketingWhatsapp__featuresGrid">
              <div className="MarketingWhatsapp__featureCard">
                <div className="MarketingWhatsapp__featureIcon">🏥</div>
                <div className="MarketingWhatsapp__featureText">Medical Camps</div>
              </div>
              <div className="MarketingWhatsapp__featureCard">
                <div className="MarketingWhatsapp__featureIcon">🍽️</div>
                <div className="MarketingWhatsapp__featureText">भंडारे</div>
              </div>
              <div className="MarketingWhatsapp__featureCard">
                <div className="MarketingWhatsapp__featureIcon">🕉️</div>
                <div className="MarketingWhatsapp__featureText">अखाड़े</div>
              </div>
              <div className="MarketingWhatsapp__featureCard">
                <div className="MarketingWhatsapp__featureIcon">📍</div>
                <div className="MarketingWhatsapp__featureText">संगम</div>
              </div>
            </div>
            <div className="MarketingWhatsapp__featuresFooter">
              <div className="MarketingWhatsapp__urlSaffronSmall">bhandarachowk.in</div>
              <div className="MarketingWhatsapp__qrSmall">
                <div className="MarketingWhatsapp__qrPlaceholder" style={{ fontSize: 8 }}>
                  <img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="MarketingWhatsapp__imageContainer">
          <div className="MarketingWhatsapp__imageLabel">Square 3: Medical Alert</div>
          <div className="MarketingWhatsapp__squareImage MarketingWhatsapp__squareMedical">
            <div className="MarketingWhatsapp__iconBig">🏥</div>
            <div className="MarketingWhatsapp__squareMedicalTitle">Medical Help खोजें!</div>
            <div className="MarketingWhatsapp__squareMedicalSubtitle">
              Free Consultation • Free Medicines
            </div>
            <div className="MarketingWhatsapp__squareMedicalQr">
              <div className="MarketingWhatsapp__qrPlaceholder"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            </div>
            <div className="MarketingWhatsapp__urlWhite">bhandarachowk.in</div>
          </div>
        </div>
      </div>

      <h2 className="MarketingWhatsapp__sectionTitle">WhatsApp Forward Cards (Landscape)</h2>
      <div className="MarketingWhatsapp__imagesRow">
        <div className="MarketingWhatsapp__imageContainer">
          <div className="MarketingWhatsapp__imageLabel">Forward Card 1</div>
          <div className="MarketingWhatsapp__forwardCard MarketingWhatsapp__forwardCardSaffron">
            <div style={{ flex: 1 }}>
              <div className="MarketingWhatsapp__forwardTitle">माघ मेले में कुछ भी खोजें!</div>
              <div className="MarketingWhatsapp__forwardSubtitle">
                Medical • भंडारे • संगम • Parking
              </div>
              <div className="MarketingWhatsapp__forwardUrl">bhandarachowk.in</div>
            </div>
            <div className="MarketingWhatsapp__forwardQr">
              <div className="MarketingWhatsapp__qrPlaceholder"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            </div>
          </div>
        </div>

        <div className="MarketingWhatsapp__imageContainer">
          <div className="MarketingWhatsapp__imageLabel">Forward Card 2 - Medical</div>
          <div className="MarketingWhatsapp__forwardCard MarketingWhatsapp__forwardCardRed">
            <div style={{ fontSize: 50 }}>🏥</div>
            <div style={{ flex: 1 }}>
              <div className="MarketingWhatsapp__forwardTitleSm">EMERGENCY में याद रखें!</div>
              <div className="MarketingWhatsapp__forwardSubtitleSm">Free Medical Camp खोजें</div>
              <div className="MarketingWhatsapp__forwardUrl">bhandarachowk.in</div>
            </div>
            <div className="MarketingWhatsapp__forwardQrSm">
              <div className="MarketingWhatsapp__qrPlaceholder"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


