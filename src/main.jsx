import React from 'react'
import ReactDOM from 'react-dom/client'

import { UseDarkAndLangContext } from "./store/UseDarkAndLangContext";
import { UaeBookingContext } from './store/UaeBookingContext';
import { ConfirmBookingContext } from './store/ConfirmBokingContext';
import { CartBookingContext } from './store/CartBookingContext.jsx';
import './i18n';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseDarkAndLangContext>
      <UaeBookingContext>
        <ConfirmBookingContext>
          <CartBookingContext>
            <App />
          </CartBookingContext>
        </ConfirmBookingContext>
      </UaeBookingContext>

    </UseDarkAndLangContext>
  </React.StrictMode>,
)
