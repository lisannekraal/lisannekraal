import { useTranslation } from 'react-i18next';

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
      <div className="change-lang" onClick={() => props.changeLanguage()}>{t('navbar.lang', 'default')}</div>
    </div>
  )

}

export default DesktopNavbar;