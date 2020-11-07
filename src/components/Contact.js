import { useTranslation } from 'react-i18next';
import Form from './Form';

function Contact() {
  const { t } = useTranslation(['contact']);

  return (
    <div className="container">
      <div className="contact-container">

        <Form />

        <div className="contact-details">
          <h2>{t('contact.title', 'default')}</h2>
          <div>
            <p>Lisanne Kraal</p>
            <p>{t('contact.job-title', 'default')} <i class="far fa-check-circle"></i></p>
            <p>{t('contact.language', 'default')} <i class="far fa-check-circle"></i></p>
            <p>{t('contact.location', 'default')} <i class="far fa-check-circle"></i></p>

            <div className="cat-contact">
              <div className="cat-button">
                <a href="tel:0031633697782" target="_blank" rel="noreferrer nofollow">
                  {t('contact.phone', 'default')}
                </a>
              </div>
              <div className="cat-button">
                <a href="mailto:lisannekraal@gmail.com" target="_blank" rel="noreferrer nofollow">
                  {t('contact.email', 'default')}
                </a>     
              </div>
            </div>     

          </div>
          <h2>{t('contact.social', 'default')}</h2>
          <div className="social-contact">
            <a href="https://github.com/lisannekraal" target="_blank" rel="noreferrer nofollow">
              <i className="fab fa-github"></i>
            </a> 
            <a href="https://www.linkedin.com/in/lisanne-kraal-75885169/" target="_blank" rel="noreferrer nofollow">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;