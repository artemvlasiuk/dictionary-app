/* eslint-disable */
import { useEffect, useState } from 'react';
import { MoonIconLight } from './MoonIconLight';
import './ThemeSwitcher.scss';

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="theme-switcher">
      <form className="switch">
        <input id="check" type="checkbox" onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}/>
        <label htmlFor="check" className="switch__button"></label>
      </form>
      <MoonIconLight />
    </div>
  );
};
