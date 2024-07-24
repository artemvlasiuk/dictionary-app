import { useContext } from 'react';
import { SelectMenu } from '../SelectMenu';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { WordContext } from '../../context/WordContext';
import './Header.scss';

export const Header: React.FC = () => {
  const { setWord, setWordNotFound } = useContext(WordContext);

  const onLogoClick = () => {
    setWord(null);
    setWordNotFound(false);
  };

  return (
    <header className="header">
      <a className="header__logo" href="#" onClick={onLogoClick}>
        <img
          src="assets/images/logo.svg"
          alt="Logo"
          className="header__logo-icon"
        />
      </a>
      <div className="header__actions">
        <SelectMenu />
        <div className="header__divider"></div>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
