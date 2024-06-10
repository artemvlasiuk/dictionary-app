/* eslint-disable */
import { MoonIconLight } from './MoonIconLight';
import './ThemeSwitcher.scss';

export const ThemeSwitcher = () => {
  return (
    <div className="theme-switcher">
      <form className="switch">
        <input id="check" type="checkbox" />
        <label htmlFor="check" className="switch__button"></label>
      </form>
      <MoonIconLight />
    </div>
  );
};
