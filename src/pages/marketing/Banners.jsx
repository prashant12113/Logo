import './banners.css';

const LogoSvg = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="white">
    <circle cx="50" cy="50" r="12" fill="none" stroke="white" strokeWidth="6" />
    <ellipse cx="50" cy="20" rx="6" ry="15" />
    <ellipse cx="50" cy="80" rx="6" ry="15" />
    <ellipse cx="20" cy="50" rx="15" ry="6" />
    <ellipse cx="80" cy="50" rx="15" ry="6" />
  </svg>
);

export default function Banners() {
  return (
    <div className="MarketingBanners">
      <div className="MarketingBanners__section">
        <div className="MarketingBanners__title">Entry Gate Banner (10ft × 4ft)</div>
        <div className="MarketingBanners__banner MarketingBanners__bannerEntry">
          <div className="MarketingBanners__entryLeft">
            <LogoSvg className="MarketingBanners__entryLogo" />
            <div className="MarketingBanners__entryMain">
              <div className="MarketingBanners__entryHeadline">माघ मेले में कुछ भी खोजें!</div>
              <div className="MarketingBanners__entrySub">Find Anything in Magh Mela 2026</div>
            </div>
          </div>

          <div className="MarketingBanners__entryServices">
            <span className="MarketingBanners__entryService">🏥 Medical</span>
            <span className="MarketingBanners__entryService">🍽️ भंडारे</span>
            <span className="MarketingBanners__entryService">🕉️ अखाड़े</span>
            <span className="MarketingBanners__entryService">📍 संगम</span>
          </div>

          <div className="MarketingBanners__entryRight">
            <div>
              <div style={{ color: 'white', fontSize: 11, marginBottom: 5 }}>Scan करें →</div>
              <div className="MarketingBanners__entryUrl">bhandarachowk.in</div>
            </div>
            <div className="MarketingBanners__entryQr"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
          </div>
        </div>
      </div>

      <div className="MarketingBanners__section">
        <div className="MarketingBanners__title">Vertical Standee (6ft × 2.5ft)</div>
        <div className="MarketingBanners__banner MarketingBanners__bannerStandee">
          <LogoSvg className="MarketingBanners__standeeLogo" />
          <div className="MarketingBanners__standeeHeadline">भटकना बंद!</div>
          <div className="MarketingBanners__standeeSub">माघ मेले में कुछ भी खोजें</div>
          <div className="MarketingBanners__standeeServices">
            <div className="MarketingBanners__standeeService">
              <span className="MarketingBanners__standeeIcon">🏥</span> Medical Camps
            </div>
            <div className="MarketingBanners__standeeService">
              <span className="MarketingBanners__standeeIcon">🍽️</span> भंडारे (Free भोजन)
            </div>
            <div className="MarketingBanners__standeeService">
              <span className="MarketingBanners__standeeIcon">🕉️</span> अखाड़े
            </div>
            <div className="MarketingBanners__standeeService">
              <span className="MarketingBanners__standeeIcon">📍</span> संगम
            </div>
            <div className="MarketingBanners__standeeService">
              <span className="MarketingBanners__standeeIcon">🅿️</span> Parking
            </div>
          </div>
          <div className="MarketingBanners__standeeQrBox">
            <div className="MarketingBanners__standeeQr"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            <div className="MarketingBanners__standeeUrl">bhandarachowk.in</div>
          </div>
          <div className="MarketingBanners__standeeFeatures">
            <span className="MarketingBanners__standeeFeature">✅ Free</span>
            <span className="MarketingBanners__standeeFeature">✅ No Download</span>
          </div>
        </div>
      </div>

      <div className="MarketingBanners__section">
        <div className="MarketingBanners__title">Road-Facing Banner (20ft × 3ft)</div>
        <div className="MarketingBanners__banner MarketingBanners__bannerRoad">
          <LogoSvg className="MarketingBanners__roadLogo" />
          <span className="MarketingBanners__roadText">
            माघ मेला 2026 — कहाँ है? क्या है? सब कुछ खोजें!
          </span>
          <span style={{ color: 'white', fontSize: 24 }}>→</span>
          <span className="MarketingBanners__roadUrl">bhandarachowk.in</span>
          <div className="MarketingBanners__roadQr"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
        </div>
      </div>

      <div className="MarketingBanners__section">
        <div className="MarketingBanners__title">Ghat Area Banner (8ft × 3ft) - Food</div>
        <div className="MarketingBanners__banner MarketingBanners__bannerGhat">
          <div className="MarketingBanners__ghatLeft">
            <span className="MarketingBanners__ghatEmoji">🍽️</span>
            <span className="MarketingBanners__ghatText">
              स्नान के बाद
              <br />
              भोजन कहाँ?
            </span>
          </div>
          <div className="MarketingBanners__ghatRight">
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: 'white', fontSize: 11 }}>नज़दीकी भंडारा खोजें:</div>
              <div className="MarketingBanners__ghatUrl">bhandarachowk.in</div>
            </div>
            <div className="MarketingBanners__ghatQr"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
          </div>
        </div>
      </div>

      <div className="MarketingBanners__section">
        <div className="MarketingBanners__title">Medical Area Banner (8ft × 3ft)</div>
        <div className="MarketingBanners__banner MarketingBanners__bannerGhat MarketingBanners__bannerMedical">
          <div className="MarketingBanners__ghatLeft">
            <span className="MarketingBanners__ghatEmoji">🏥</span>
            <span className="MarketingBanners__ghatText">
              Medical Help?
              <br />
              Nearest camp खोजें
            </span>
          </div>
          <div className="MarketingBanners__ghatRight">
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: 'white', fontSize: 11 }}>FREE Consultation + Medicines</div>
              <div className="MarketingBanners__ghatUrl">bhandarachowk.in</div>
            </div>
            <div className="MarketingBanners__ghatQr"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
          </div>
        </div>
      </div>

      <div className="MarketingBanners__info">
        <h2>🎨 Banner Specifications</h2>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Size</th>
              <th>Placement</th>
              <th>Material</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Entry Gate</td>
              <td>10ft × 4ft</td>
              <td>Main gates, parking entry</td>
              <td>Star Flex 280 GSM</td>
              <td>₹600-800</td>
            </tr>
            <tr>
              <td>Vertical Standee</td>
              <td>6ft × 2.5ft</td>
              <td>Info booths, police posts</td>
              <td>Sunboard + Stand</td>
              <td>₹400-600</td>
            </tr>
            <tr>
              <td>Road Banner</td>
              <td>20ft × 3ft</td>
              <td>Main roads, bridges</td>
              <td>Star Flex 280 GSM</td>
              <td>₹800-1200</td>
            </tr>
            <tr>
              <td>Ghat/Area Banner</td>
              <td>8ft × 3ft</td>
              <td>Ghats, specific zones</td>
              <td>Star Flex 280 GSM</td>
              <td>₹400-600</td>
            </tr>
          </tbody>
        </table>
        <p style={{ marginTop: 15 }}>
          <strong>Print:</strong> Digital, UV resistant | <strong>Finishing:</strong> Eyelets on
          corners
        </p>
      </div>
    </div>
  );
}


