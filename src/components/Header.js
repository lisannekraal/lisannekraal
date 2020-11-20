import { useTranslation } from 'react-i18next';

import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

import './Header.css';
import Codewars from '../codewars.png';
import icon from '../IMG-20200415-WA0011.jpg';


function Header(props) {
  const { t, i18n } = useTranslation(['header']);

  const changeLanguage = code => {
    const getCurrentLng = () => i18n.language || window.localStorage.i18nextLng || '';

    if (getCurrentLng() === 'nl') {
      console.log('change to english')
      i18n.changeLanguage('en')
    } else {
      console.log('change to dutch')
      i18n.changeLanguage('nl');
    }
  };

  const socialsDesktop = {
    display: "flex",
    flexDirection: "column",
    position: "fixed"
  };

  const socialsMobile = {
    display: "flex",
    flexDirection: "column",
  }

  return (
    <>
      <div className="intro-container">
        { props.dimensions.width > 1000 ? <DesktopNavbar changeLanguage={changeLanguage} /> : <MobileNavbar changeLanguage={changeLanguage} /> }


        <div className="intro">
          <div className="socials" style={props.dimensions.width > 1200 ? socialsDesktop : socialsMobile}>
            <div><a href="https://github.com/lisannekraal" target="_blank" rel="noreferrer nofollow">
              <i className="fab fa-github"></i>
            </a></div>
            <div><a href="https://www.linkedin.com/in/lisanne-kraal-75885169/" target="_blank" rel="noreferrer nofollow">
              <i className="fab fa-linkedin"></i>
            </a></div>
            <div><a href="mailto:lisannekraal@gmail.com" target="_blank" rel="noreferrer nofollow">
              <i className="fas fa-at smallFa"></i>
            </a></div>
            <div><a href="tel:0031633697782" target="_blank" rel="noreferrer nofollow">
              <i className="fas fa-mug-hot smallFa"></i>
            </a></div>
            <div><a href="https://www.codewars.com/users/lisannekraal" target="_blank" rel="noreferrer nofollow">
              <img className="codewars-img" src={Codewars} alt=""></img>
            </a></div>
            <div><a href="https://www.instagram.com/lisannekraal/" target="_blank" rel="noreferrer nofollow">
              <i className="fab fa-instagram"></i>
            </a></div>
          </div>

          <div className="intro-text">
            <div className="portrait"><img src={icon} alt="" /></div>
            <div className="header">{t('welcome.intro', 'default')} <span class="intro-name">LISAN</span></div>
            <div className="intro-content">{t('welcome.intro-content', 'default')}</div>
          </div>
        </div> 

      </div>
    </>
  );
}

export default Header;