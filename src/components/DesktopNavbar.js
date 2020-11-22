import { useTranslation } from 'react-i18next';

import CV from '../resumeLisanneKraalDec2020.pdf';
import './Header.css';

function DesktopNavbar(props) {
  const { t } = useTranslation(['header']);

  return(
    <div className="navbar-desktop">
      <a href="#section-skills">{t('navbar.skills', 'default')}</a>
      <a href="#section-projects">{t('navbar.projects', 'default')}</a>
      <a href="#section-timeline">{t('navbar.experience', 'default')}</a>
      <a href="#section-timeline">{t('navbar.education', 'default')}</a>
      <a href="#section-references">{t('navbar.references', 'default')}</a>
      <a href="#section-contact">{t('navbar.contact', 'default')}</a>
      <a href={CV} download><i class="fas fa-file-download"></i> Download CV</a>
      <div className="change-lang" onClick={() => props.changeLanguage()}>{t('navbar.lang', 'default')}</div>
    </div>
  )

}

export default DesktopNavbar;