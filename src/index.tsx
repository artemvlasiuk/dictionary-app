import './index.scss';
import { createRoot } from 'react-dom/client';
import { WordProvider } from './context/WordContext';

import { App } from './App';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <WordProvider>
    <App />
  </WordProvider>,
);
