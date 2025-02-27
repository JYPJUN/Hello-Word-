import { register } from './registerServiceWorker.js';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store.jsx';
import { MusicProvider } from './features/Games/musicProvider.jsx'; // 위에서 만든 MusicProvider

import App from './App.jsx';
import './index.css';
import { ToastProvider } from './context/ToastProvider.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ToastProvider>
          <MusicProvider>
            <App />
          </MusicProvider>
        </ToastProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
);

// Service Worker 등록
register();
