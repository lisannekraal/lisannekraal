import icon from '../IMG-20200415-WA0011.jpg';

import { useTranslation } from 'react-i18next';
import Codewars from '../codewars.png';

function Header() {
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

  return (
    <>
      <div className="intro-container">
        <div className="navbar">
          <a href="#section-skills"><div>{t('navbar.skills', 'default')}</div></a>
          <a href="#section-projects"><div>{t('navbar.projects', 'default')}</div></a>
          <a href="#section-timeline"><div>{t('navbar.experience', 'default')}</div></a>
          <a href="#section-timeline"><div>{t('navbar.education', 'default')}</div></a>
          <a href="#section-references"><div>{t('navbar.references', 'default')}</div></a>
          <a href="#section-contact"><div>{t('navbar.contact', 'default')}</div></a>
          <div className="change-lang" onClick={() => changeLanguage()}>{t('navbar.lang', 'default')}</div>
        </div>

        <div className="intro">
          <div className="socials">
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
            <div className="content">{t('welcome.intro-content', 'default')}</div>
          </div>
        </div> 

      </div>
    </>
  );
}

export default Header;