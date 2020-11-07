import { useTranslation } from 'react-i18next';
import Reference from './ReferenceElem';
import Uva from '../uva.jpg';
import Wecanteen from '../wecanteen.jpeg';
import Unigis from '../gis.png';


function References() {
  const { t } = useTranslation(['references']);

  return (
    <div className="container" id="section-references">
      <h1>{t('title', 'default')}</h1>

      <div className="references-container">
        <Reference name={t('references.coyan.name', 'default')} title={t('references.coyan.title', 'default')} content={t('references.coyan.content', 'default')} icon={Uva} />
        <Reference name={t('references.niels.name', 'default')} title={t('references.niels.title', 'default')} content={t('references.niels.content', 'default')} icon={Unigis} />
        <Reference name={t('references.serge.name', 'default')} title={t('references.serge.title', 'default')} content={t('references.serge.content', 'default')} icon={Wecanteen} />

      </div>
    </div>
  );
}

export default References;