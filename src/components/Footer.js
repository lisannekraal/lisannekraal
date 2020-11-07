import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation(['footer']);

  return (
    <div className="footer">
      <div><a href="/"><i className="fas fa-chevron-up"></i></a></div>
        <div>{t('credits', 'default')}</div>
    </div>
  );
}

export default Footer;