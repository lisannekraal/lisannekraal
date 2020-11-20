import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation(['footer']);

  return (
    <div className="footer">
      <div>{t('credits', 'default')}</div>
    </div>
  );
}

export default Footer;