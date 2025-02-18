import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>,
)
