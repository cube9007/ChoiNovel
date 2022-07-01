import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// MUI theme
import { ThemeProvider } from "@mui/material/styles";
import { DefaultTheme } from "./ThemeConfig";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
