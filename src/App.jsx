import './App.css';
import { useMemo, useState } from 'react';

import Banners from './pages/marketing/Banners.jsx';
import Flyers from './pages/marketing/Flyers.jsx';
import MarketingIndex from './pages/marketing/MarketingIndex.jsx';
import Stickers from './pages/marketing/Stickers.jsx';
import Tshirt from './pages/marketing/Tshirt.jsx';
import WhatsappStatus from './pages/marketing/WhatsappStatus.jsx';

function App() {
  const [page, setPage] = useState('marketing');

  const content = useMemo(() => {
    switch (page) {
      case 'banners':
        return <Banners />;
      case 'flyers':
        return <Flyers />;
      case 'stickers':
        return <Stickers />;
      case 'tshirt':
        return <Tshirt />;
      case 'whatsapp':
        return <WhatsappStatus />;
      case 'marketing':
      default:
        return <MarketingIndex onNavigate={setPage} />;
    }
  }, [page]);

  return (
    <div className="App">
      <div className="AppNav">
        <button
          type="button"
          className={`AppNav__btn ${page === 'marketing' ? 'AppNav__btn--active' : ''}`}
          onClick={() => setPage('marketing')}
        >
          Marketing Index
        </button>
        <button
          type="button"
          className={`AppNav__btn ${page === 'flyers' ? 'AppNav__btn--active' : ''}`}
          onClick={() => setPage('flyers')}
        >
          Flyers
        </button>
        <button
          type="button"
          className={`AppNav__btn ${page === 'stickers' ? 'AppNav__btn--active' : ''}`}
          onClick={() => setPage('stickers')}
        >
          Stickers
        </button>
        <button
          type="button"
          className={`AppNav__btn ${page === 'banners' ? 'AppNav__btn--active' : ''}`}
          onClick={() => setPage('banners')}
        >
          Banners
        </button>
        <button
          type="button"
          className={`AppNav__btn ${page === 'whatsapp' ? 'AppNav__btn--active' : ''}`}
          onClick={() => setPage('whatsapp')}
        >
          WhatsApp & Social
        </button>
        <button
          type="button"
          className={`AppNav__btn ${page === 'tshirt' ? 'AppNav__btn--active' : ''}`}
          onClick={() => setPage('tshirt')}
        >
          T-Shirts
        </button>
      </div>
      <div className="AppContent">{content}</div>
    </div>
  );
}

export default App;


