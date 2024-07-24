import './index.scss';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { WordProvider } from './context/WordContext';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <WordProvider>
    <App />
  </WordProvider>,
);
