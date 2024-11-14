import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Amplify } from 'aws-amplify';
// eslint-disable-next-line no-undef
import outputs from '../amplify_outputs.json';

Amplify.configure(outputs)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
