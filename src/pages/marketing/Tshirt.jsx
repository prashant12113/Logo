import './tshirt.css';

export default function Tshirt() {
  return (
    <div className="MarketingTshirt">
      <h1 className="MarketingTshirt__pageTitle">Volunteer T-Shirt Designs</h1>

      <h2 className="MarketingTshirt__sectionTitle">Option 1: Saffron T-Shirt</h2>
      <div className="MarketingTshirt__row">
        <div className="MarketingTshirt__container">
          <div className="MarketingTshirt__label">FRONT</div>
          <div className="MarketingTshirt__tshirt">
            <div className="MarketingTshirt__tshirtBody">
              <div className="MarketingTshirt__collar" />
              <div className="MarketingTshirt__printArea">
                <div className="MarketingTshirt__logoCircle">
                  <div className="MarketingTshirt__logoPlaceholder"><img src="/src/chowk-icon.svg" alt="Bhandara Chowk Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
                </div>
                <div className="MarketingTshirt__brand">BHANDARA CHOWK</div>
                <div className="MarketingTshirt__mainText">
                  &quot;मेले में मदद चाहिए?
                  <br />
                  मुझसे पूछो!&quot;
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="MarketingTshirt__container">
          <div className="MarketingTshirt__label">BACK</div>
          <div className="MarketingTshirt__tshirt">
            <div className="MarketingTshirt__tshirtBody">
              <div className="MarketingTshirt__collar" />
              <div className="MarketingTshirt__backPrint">
                <div className="MarketingTshirt__backTitle">माघ मेले में खोजें:</div>
                <div className="MarketingTshirt__features">
                  <span className="MarketingTshirt__feature">🏥 Medical</span>
                  <span className="MarketingTshirt__feature">🍽️ भंडारे</span>
                  <span className="MarketingTshirt__feature">🕉️ अखाड़े</span>
                  <span className="MarketingTshirt__feature">📍 संगम</span>
                </div>
                <div className="MarketingTshirt__qrBox">
                  <div className="MarketingTshirt__qrPlaceholder"><img src="/qr/frame.jpg" alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
                </div>
                <div className="MarketingTshirt__url">bhandarachowk.in</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="MarketingTshirt__sectionTitle">Option 2: White T-Shirt</h2>
      <div className="MarketingTshirt__row">
        <div className="MarketingTshirt__container">
          <div className="MarketingTshirt__label">FRONT</div>
          <div className="MarketingTshirt__tshirt MarketingTshirt__tshirtWhite">
            <div className="MarketingTshirt__tshirtBody">
              <div className="MarketingTshirt__collar" />
              <div className="MarketingTshirt__printArea">
                <div className="MarketingTshirt__logoCircle">
                  <div className="MarketingTshirt__logoPlaceholder"><img src="/src/chowk-icon.svg" alt="Bhandara Chowk Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
                </div>
                <div className="MarketingTshirt__brand">BHANDARA CHOWK</div>
                <div className="MarketingTshirt__mainText">
                  &quot;मेले में मदद चाहिए?
                  <br />
                  मुझसे पूछो!&quot;
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="MarketingTshirt__container">
          <div className="MarketingTshirt__label">BACK</div>
          <div className="MarketingTshirt__tshirt MarketingTshirt__tshirtWhite">
            <div className="MarketingTshirt__tshirtBody">
              <div className="MarketingTshirt__collar" />
              <div className="MarketingTshirt__backPrint">
                <div className="MarketingTshirt__backTitle">माघ मेले में खोजें:</div>
                <div className="MarketingTshirt__features">
                  <span className="MarketingTshirt__feature">🏥 Medical</span>
                  <span className="MarketingTshirt__feature">🍽️ भंडारे</span>
                  <span className="MarketingTshirt__feature">🕉️ अखाड़े</span>
                  <span className="MarketingTshirt__feature">📍 संगम</span>
                </div>
                <div className="MarketingTshirt__qrBox">
                  <div className="MarketingTshirt__qrPlaceholder"><img src="/qr/frame.jpg" alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
                </div>
                <div className="MarketingTshirt__url">bhandarachowk.in</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="MarketingTshirt__sectionTitle">Printing Specifications</h2>
      <div className="MarketingTshirt__specsWrap">
        <div className="MarketingTshirt__specs">
          <h3>T-Shirt Details</h3>
          <ul>
            <li>
              <strong>Material:</strong> 100% Cotton or Cotton Blend
            </li>
            <li>
              <strong>GSM:</strong> 180-200 GSM (good quality)
            </li>
            <li>
              <strong>Colors:</strong> Saffron/Orange (#C96B4B) or White
            </li>
            <li>
              <strong>Sizes:</strong> S, M, L, XL, XXL
            </li>
            <li>
              <strong>Neck:</strong> Round neck
            </li>
          </ul>
        </div>

        <div className="MarketingTshirt__specs">
          <h3>Print Details</h3>
          <ul>
            <li>
              <strong>Front Print Size:</strong> 8&quot; x 10&quot; (chest area)
            </li>
            <li>
              <strong>Back Print Size:</strong> 10&quot; x 12&quot; (upper back)
            </li>
            <li>
              <strong>Print Type:</strong> Screen printing or DTF
            </li>
            <li>
              <strong>QR Code Size:</strong> Minimum 3&quot; x 3&quot; (scannable)
            </li>
            <li>
              <strong>Colors:</strong> White print on saffron / Saffron print on white
            </li>
          </ul>
        </div>

        <div className="MarketingTshirt__specs">
          <h3>Estimated Cost</h3>
          <ul>
            <li>
              <strong>Blank T-shirt:</strong> ₹120-150 per piece
            </li>
            <li>
              <strong>Front Print:</strong> ₹40-50 per piece
            </li>
            <li>
              <strong>Back Print:</strong> ₹50-60 per piece
            </li>
            <li>
              <strong>Total per T-shirt:</strong> ₹210-260
            </li>
            <li>
              <strong>30 T-shirts:</strong> ₹6,300 - ₹7,800
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


