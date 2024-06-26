import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

/**
 * Browser router is brought for routing purposes. Rest oh the routers routes are in App.js file.
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
);


