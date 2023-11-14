import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './context/AuthContext';
import { AnalyticsContextProvider } from './context/AnalyticsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const initTheme = () => {
  let theme = {
    bg_color: "#ffffff",
    text_color: "#0a0a0a",
    hint_color: "#929292",
    link_color: "#207ae4",
    button_color: "#5bc8fb",
    button_text_color: "#fffeec",
    secondary_bg_color: "#f3f2f9;",
  };
  if (window?.Telegram?.WebApp.initData !== "") {
    theme = window.Telegram.WebApp.themeParams
  }
  document.styleSheets[2].insertRule(`
    :root{
      --tg-theme-bg-color: ${theme.bg_color};
      --tg-theme-text-color: ${theme.text_color};
      --tg-theme-hint-color: ${theme.hint_color};
      --tg-theme-link-color: ${theme.link_color};
      --tg-theme-button-color: ${theme.button_color};
      --tg-theme-button-text-color: ${theme.button_text_color};
      --tg-theme-secondary-bg-color: ${theme.secondary_bg_color};
    }
  `)
};

initTheme();
root.render(
  <React.StrictMode>
    <AnalyticsContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </AnalyticsContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
