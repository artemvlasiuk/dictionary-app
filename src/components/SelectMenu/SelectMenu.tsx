import { useEffect, useState } from 'react';
import './SelectMenu.scss';

const fontList = ['Sans Serif', 'Serif', 'Mono'];

export const SelectMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFont, setSelectedFont] = useState('Sans Serif');

  const handleFontChange = (font: string) => {
    setSelectedFont(font);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    switch (selectedFont) {
      case 'Sans Serif':
        document.body.setAttribute('data-font', 'sans-serif');
        break;
      case 'Serif':
        document.body.setAttribute('data-font', 'serif');
        break;
      case 'Mono':
        document.body.setAttribute('data-font', 'mono');
        break;
    }
  }, [selectedFont]);

  return (
    <div className="select">
      <button
        className="select__button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {selectedFont}
        <div className="select__icon"></div>
      </button>
      {isMenuOpen && (
        <div className="select__list">
          {fontList.map(font => (
            <div
              className="select__item"
              key={font}
              onClick={() => handleFontChange(font)}
            >
              {font}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
