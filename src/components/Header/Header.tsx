import { SelectMenu } from '../SelectMenu';
import { ThemeSwitcher } from '../ThemeSwitcher';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <a className="header__logo">
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
