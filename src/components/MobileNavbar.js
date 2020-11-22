import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

import CV from '../resumeLisanneKraalDec2020.pdf';
import './Header.css';


function MobileNavbar(props) {
  const { t } = useTranslation(['header']);
  const [ foldOutNav, setFoldOutNav ] = useState(false);

  useEffect(() => {
  }, [foldOutNav])

  function clickNavHamburger() {
    if (!foldOutNav) {
      setFoldOutNav(true);
    } else {
      setFoldOutNav(false);
    }
    console.log(foldOutNav);
  }

  return(
    <>
      <div className="navbar-mobile">
        <i class="fas fa-bars" onClick={clickNavHamburger}></i>
      </div>
      {
        foldOutNav && 
          <div className="navbar-mobile-content">
            <a href="#section-skills" onClick={clickNavHamburger}>{t('navbar.skills', 'default')}</a>
            <a href="#section-projects" onClick={clickNavHamburger}>{t('navbar.projects', 'default')}</a>
            <a href="#section-timeline" onClick={clickNavHamburger}>{t('navbar.experience', 'default')}</a>
            <a href="#section-timeline" onClick={clickNavHamburger}>{t('navbar.education', 'default')}</a>
            <a href="#section-references" onClick={clickNavHamburger}>{t('navbar.references', 'default')}</a>
            <a href="#section-contact" onClick={clickNavHamburger}>{t('navbar.contact', 'default')}</a>
            <a href={CV} download onClick={clickNavHamburger}><i class="fas fa-file-download"></i> Download CV</a>
            <div className="change-lang" onClick={() => props.changeLanguage()}>{t('navbar.lang', 'default')}</div>
          </div>
      }

    </>
  )

}



export default MobileNavbar;