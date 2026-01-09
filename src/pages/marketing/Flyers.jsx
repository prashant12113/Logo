import './flyers.css';

export default function Flyers() {
  return (
    <div className="MarketingFlyers">
      <h1 className="MarketingFlyers__pageTitle">Bhandara Chowk - Flyer Designs (A5 Size)</h1>

      <div className="MarketingFlyers__designsGrid">
        {/* FLYER 1: GENERAL PURPOSE */}
        <div className="MarketingFlyers__designContainer">
          <div className="MarketingFlyers__designLabel">Flyer 1: General Purpose</div>
          <div className="MarketingFlyers__flyer MarketingFlyers__flyerGeneral">
            <div className="MarketingFlyers__header">
              <div className="MarketingFlyers__logoArea">
                <div className="MarketingFlyers__logoPlaceholder"><img src={`${import.meta.env.BASE_URL}chowk-icon.svg`} alt="Bhandara Chowk Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
              </div>
              <div className="MarketingFlyers__mainTitle">भंडारा चौक</div>
              <div className="MarketingFlyers__subtitle">BHANDARA CHOWK</div>
            </div>

            <div className="MarketingFlyers__content">
              <div className="MarketingFlyers__tagline">माघ मेले में कुछ भी खोजें!</div>

              <div className="MarketingFlyers__featuresGrid">
                <div className="MarketingFlyers__featureItem">
                  <div className="MarketingFlyers__featureIcon">🏥</div>
                  <div className="MarketingFlyers__featureText">Medical Camps</div>
                  <div className="MarketingFlyers__featureTextEn">Free Healthcare</div>
                </div>
                <div className="MarketingFlyers__featureItem">
                  <div className="MarketingFlyers__featureIcon">🍽️</div>
                  <div className="MarketingFlyers__featureText">भंडारे</div>
                  <div className="MarketingFlyers__featureTextEn">Free Food</div>
                </div>
                <div className="MarketingFlyers__featureItem">
                  <div className="MarketingFlyers__featureIcon">🕉️</div>
                  <div className="MarketingFlyers__featureText">अखाड़े</div>
                  <div className="MarketingFlyers__featureTextEn">Akharas</div>
                </div>
                <div className="MarketingFlyers__featureItem">
                  <div className="MarketingFlyers__featureIcon">📍</div>
                  <div className="MarketingFlyers__featureText">संगम</div>
                  <div className="MarketingFlyers__featureTextEn">Sangam</div>
                </div>
                <div className="MarketingFlyers__featureItem">
                  <div className="MarketingFlyers__featureIcon">🅿️</div>
                  <div className="MarketingFlyers__featureText">Parking</div>
                  <div className="MarketingFlyers__featureTextEn">Vehicle Parking</div>
                </div>
                <div className="MarketingFlyers__featureItem">
                  <div className="MarketingFlyers__featureIcon">🚻</div>
                  <div className="MarketingFlyers__featureText">सुविधाएं</div>
                  <div className="MarketingFlyers__featureTextEn">Facilities</div>
                </div>
              </div>

              <div className="MarketingFlyers__qrSection">
                <div className="MarketingFlyers__qrBox"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
                <div className="MarketingFlyers__scanText">📱 Scan करें या खोलें:</div>
                <div className="MarketingFlyers__url">bhandarachowk.in</div>
              </div>

              <div className="MarketingFlyers__footer">
                <span className="MarketingFlyers__badge">✅ Free</span>
                <span className="MarketingFlyers__badge">✅ No Download</span>
                <span className="MarketingFlyers__badge">✅ Works Offline</span>
              </div>
            </div>

            <div className="MarketingFlyers__bottomNote">🙏 अपने साथियों को भी बताएं!</div>
            <h4 className="MarketingFlyers__bottomNoteGJ">GJ ENTERPRISES</h4>
          </div>
        </div>

        {/* FLYER 2: MEDICAL EMERGENCY */}
        <div className="MarketingFlyers__designContainer">
          <div className="MarketingFlyers__designLabel">Flyer 2: Medical Emergency</div>
          <div className="MarketingFlyers__flyer MarketingFlyers__flyerMedical">
            <div className="MarketingFlyers__emergencyHeader">
              <div className="MarketingFlyers__pulseRing" />
              <div className="MarketingFlyers__emergencyIcon">🏥</div>
              <div className="MarketingFlyers__emergencyTitle">EMERGENCY में याद रखें!</div>
              <div className="MarketingFlyers__emergencySubtitle">Save this for Medical Help</div>
            </div>

            <div className="MarketingFlyers__content">
              <div className="MarketingFlyers__servicesTitle">माघ मेले में FREE Medical Help:</div>

              <div className="MarketingFlyers__serviceList">
                <div className="MarketingFlyers__serviceItem">
                  <div className="MarketingFlyers__serviceIcon">👨‍⚕️</div>
                  <div>
                    <div className="MarketingFlyers__serviceText">निशुल्क परामर्श</div>
                    <div className="MarketingFlyers__serviceTextEn">Free Consultation</div>
                  </div>
                </div>
                <div className="MarketingFlyers__serviceItem">
                  <div className="MarketingFlyers__serviceIcon">💊</div>
                  <div>
                    <div className="MarketingFlyers__serviceText">मुफ्त दवाइयाँ</div>
                    <div className="MarketingFlyers__serviceTextEn">Free Medicines</div>
                  </div>
                </div>
                <div className="MarketingFlyers__serviceItem">
                  <div className="MarketingFlyers__serviceIcon">🩹</div>
                  <div>
                    <div className="MarketingFlyers__serviceText">प्राथमिक चिकित्सा</div>
                    <div className="MarketingFlyers__serviceTextEn">First Aid Centers</div>
                  </div>
                </div>
                <div className="MarketingFlyers__serviceItem">
                  <div className="MarketingFlyers__serviceIcon">🚑</div>
                  <div>
                    <div className="MarketingFlyers__serviceText">Ambulance Points</div>
                    <div className="MarketingFlyers__serviceTextEn">Emergency Transport</div>
                  </div>
                </div>
              </div>

              <div className="MarketingFlyers__qrSection MarketingFlyers__qrSectionMedical">
                <div className="MarketingFlyers__qrTitle">तुरंत नज़दीकी Medical Camp खोजें:</div>
                <div className="MarketingFlyers__qrBox MarketingFlyers__qrBoxMedical"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
                <div className="MarketingFlyers__url MarketingFlyers__urlMedical">bhandarachowk.in</div>
              </div>
            </div>

            <div className="MarketingFlyers__bottomWarning">
              <div className="MarketingFlyers__warningText">
                ⚠️ इस पर्चे को फेंके नहीं - किसी ज़रूरतमंद को दे दें
              </div>
            </div>
          </div>
        </div>

        {/* FLYER 3: BHANDARA/FOOD */}
        <div className="MarketingFlyers__designContainer">
          <div className="MarketingFlyers__designLabel">Flyer 3: Bhandara / Food</div>
          <div className="MarketingFlyers__flyer MarketingFlyers__flyerFood">
            <div className="MarketingFlyers__foodHeader">
              <div className="MarketingFlyers__foodIcon">🍽️</div>
              <div className="MarketingFlyers__foodTitle">भूख लगी है?</div>
            </div>

            <div className="MarketingFlyers__content">
              <div className="MarketingFlyers__infoCard">
                <div className="MarketingFlyers__infoNumber">100+</div>
                <div className="MarketingFlyers__infoText">भंडारे माघ मेले में!</div>
                <div className="MarketingFlyers__infoSubtext">निशुल्क भोजन - प्रसाद सेवा</div>
              </div>

              <div className="MarketingFlyers__benefits">
                <div className="MarketingFlyers__benefit">
                  <div className="MarketingFlyers__benefitIcon">📍</div>
                  <div className="MarketingFlyers__benefitText">
                    नज़दीकी
                    <br />
                    भंडारा
                  </div>
                </div>
                <div className="MarketingFlyers__benefit">
                  <div className="MarketingFlyers__benefitIcon">🕐</div>
                  <div className="MarketingFlyers__benefitText">
                    Timing
                    <br />
                    जानें
                  </div>
                </div>
                <div className="MarketingFlyers__benefit">
                  <div className="MarketingFlyers__benefitIcon">🗺️</div>
                  <div className="MarketingFlyers__benefitText">
                    रास्ता
                    <br />
                    पाएं
                  </div>
                </div>
              </div>

              <div className="MarketingFlyers__qrSection">
                <div className="MarketingFlyers__qrPrompt">अभी खोजें:</div>
                <div className="MarketingFlyers__qrBox MarketingFlyers__qrBoxFood"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
                <div className="MarketingFlyers__url MarketingFlyers__urlFood">bhandarachowk.in</div>

                <div className="MarketingFlyers__footerBadges">
                  <span className="MarketingFlyers__badge MarketingFlyers__badgeFood">✅ Free</span>
                  <span className="MarketingFlyers__badge MarketingFlyers__badgeFood">✅ No App</span>
                  <span className="MarketingFlyers__badge MarketingFlyers__badgeFood">✅ Instant</span>
                </div>
              </div>
            </div>

            <div className="MarketingFlyers__bottomBar">🙏 अन्न दान - महादान</div>
          </div>
        </div>

        {/* FLYER 4: KALPVASI/SPIRITUAL */}
        <div className="MarketingFlyers__designContainer">
          <div className="MarketingFlyers__designLabel">Flyer 4: Kalpvasi / Spiritual</div>
          <div className="MarketingFlyers__flyer MarketingFlyers__flyerSpiritual">
            <div className="MarketingFlyers__spiritualHeader">
              <div className="MarketingFlyers__omSymbol">🙏</div>
              <div className="MarketingFlyers__spiritualTitle">कल्पवासियों के लिए</div>
              <div className="MarketingFlyers__spiritualSubtitle">माघ मेला 2026</div>
            </div>

            <div className="MarketingFlyers__content MarketingFlyers__contentSpiritual">
              <div className="MarketingFlyers__offeringTitle">माघ मेले में खोजें:</div>

              <div className="MarketingFlyers__offerings">
                <div className="MarketingFlyers__offeringItem">
                  <div className="MarketingFlyers__offeringIcon">🕉️</div>
                  <div className="MarketingFlyers__offeringText">महात्माओं के शिविर</div>
                </div>
                <div className="MarketingFlyers__offeringItem">
                  <div className="MarketingFlyers__offeringIcon">📿</div>
                  <div className="MarketingFlyers__offeringText">भजन-कीर्तन स्थल</div>
                </div>
                <div className="MarketingFlyers__offeringItem">
                  <div className="MarketingFlyers__offeringIcon">🏕️</div>
                  <div className="MarketingFlyers__offeringText">आश्रम एवं अखाड़े</div>
                </div>
                <div className="MarketingFlyers__offeringItem">
                  <div className="MarketingFlyers__offeringIcon">💊</div>
                  <div className="MarketingFlyers__offeringText">निशुल्क चिकित्सा शिविर</div>
                </div>
                <div className="MarketingFlyers__offeringItem">
                  <div className="MarketingFlyers__offeringIcon">🍽️</div>
                  <div className="MarketingFlyers__offeringText">निशुल्क भोजन (भंडारे)</div>
                </div>
              </div>

              <div className="MarketingFlyers__qrSection MarketingFlyers__qrSectionSpiritual">
                <div className="MarketingFlyers__qrTitle">सम्पूर्ण जानकारी एक स्थान पर:</div>
                <div className="MarketingFlyers__qrBox MarketingFlyers__qrBoxSpiritual"><img src={`${import.meta.env.BASE_URL}qr/frame.jpg`} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
                <div className="MarketingFlyers__url">bhandarachowk.in</div>
              </div>
            </div>

            <div className="MarketingFlyers__bottomBlessing">
              <div className="MarketingFlyers__blessingText">🙏 हर श्रद्धालु तक पहुँचाएं</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


